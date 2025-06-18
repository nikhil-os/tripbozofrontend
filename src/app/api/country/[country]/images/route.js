// app/api/country/[country]/route.js
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

let redis;
try {
  redis = Redis.fromEnv();
} catch (e) {
  console.error("🔥 Redis init failed:", e);
}

const CACHE_TTL    = 12 * 60 * 60; // 12 hrs
const DAILY_CAP    = 100;
const DAILY_PREFIX = "country_api_daily";

export async function GET(req, { params }) {
  const country = (params.country || "").toLowerCase();
  const cacheKey = `country_images_${country}`;

  try {
    // 1. Serve from Redis cache if exists
    const cached = redis && (await redis.get(cacheKey));
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    // 2. Check daily cap
    const today = new Date().toISOString().slice(0, 10);
    const rateKey = `${DAILY_PREFIX}_${today}`;
    const todayCount = parseInt((await redis.get(rateKey)) || "0", 10);

    if (todayCount >= DAILY_CAP) {
      return NextResponse.json(
        { detail: "Daily image cap reached" },
        { status: 429 }
      );
    }

    // 3. Fetch images from Wikimedia Commons
    const wikiRes = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&generator=search&gsrsearch=${encodeURIComponent(
        country + " landscape"
      )}&gsrlimit=5&iiprop=url`
    );

    const wikiData = await wikiRes.json();
    const pages = wikiData?.query?.pages;

    const wikiUrls = pages
      ? Object.values(pages)
          .map((p) => p.imageinfo?.[0]?.url)
          .filter(Boolean)
      : [];

    const imageUrls = wikiUrls.length > 0
      ? wikiUrls
      : Array.from({ length: 5 }, (_, i) =>
          `https://source.unsplash.com/1600x900/?${encodeURIComponent(
            country
          )},landscape&sig=${i}`
        );

    // 4. Save to Redis + increment rate
    if (redis) {
      await Promise.all([
        redis.set(cacheKey, JSON.stringify(imageUrls), { ex: CACHE_TTL }),
        redis.incr(rateKey),
        redis.expire(rateKey, 24 * 60 * 60),
      ]);
    }

    return NextResponse.json(imageUrls);
  } catch (err) {
    console.error("🔥 API Error:", err);

    // fallback: generate Unsplash image URLs
    const fallback = Array.from({ length: 5 }, (_, i) =>
      `https://source.unsplash.com/1600x900/?${encodeURIComponent(
        country
      )},landscape&sig=${i}`
    );

    return NextResponse.json(fallback);
  }
}
