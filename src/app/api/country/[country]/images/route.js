// app/api/country/[country]/route.js
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// 1. Redis Init
let redis;
try {
  redis = Redis.fromEnv();
} catch (e) {
  console.error("🔥 Redis init failed:", e);
}

// 2. Constants
const CACHE_TTL = 12 * 60 * 60; // 12 hrs
const DAILY_CAP = 100;
const DAILY_PREFIX = "country_api_daily";

// 3. GET Handler
export async function GET(req, { params }) {
  const country = (params.country || "").toLowerCase();
  const cacheKey = `country_images_${country}`;

  try {
    // Check Redis cache
    const cached = redis && (await redis.get(cacheKey));
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    // Throttle daily API usage
    const today = new Date().toISOString().slice(0, 10);
    const rateKey = `${DAILY_PREFIX}_${today}`;
    const todayCount = parseInt((await redis.get(rateKey)) || "0", 10);

    if (todayCount >= DAILY_CAP) {
      return NextResponse.json(
        { detail: "Daily image cap reached" },
        { status: 429 }
      );
    }

    // Wikimedia Commons API Call
    const query = encodeURIComponent(`${country} landscape`);
    const wikiRes = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&generator=search&gsrsearch=${query}&gsrlimit=5&iiprop=url`
    );

    const wikiData = await wikiRes.json();
    const pages = wikiData?.query?.pages;

    const wikiUrls = pages
      ? Object.values(pages)
          .map((p) => p.imageinfo?.[0]?.url)
          .filter(Boolean)
      : [];

    // If no images found, return a fallback message (no Unsplash)
    if (wikiUrls.length === 0) {
      return NextResponse.json(
        { detail: "No images found for this country" },
        { status: 404 }
      );
    }

    // Cache result + track usage
    if (redis) {
      await Promise.all([
        redis.set(cacheKey, JSON.stringify(wikiUrls), { ex: CACHE_TTL }),
        redis.incr(rateKey),
        redis.expire(rateKey, 24 * 60 * 60),
      ]);
    }

    return NextResponse.json(wikiUrls);
  } catch (err) {
    console.error("🔥 Wikimedia API error:", err);

    // No Unsplash fallback — just fail gracefully
    return NextResponse.json(
      { detail: "Image fetching failed" },
      { status: 500 }
    );
  }
}
