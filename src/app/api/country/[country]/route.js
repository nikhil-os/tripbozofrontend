// app/api/country/[country]/route.js
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

let redis;
try {
  redis = Redis.fromEnv(); // will throw if your env is wrong
} catch (e) {
  console.error("🔥 Redis init failed:", e);
}

const CACHE_TTL    = 12 * 60 * 60;
const DAILY_CAP    = 100;
const DAILY_PREFIX = "unsplash_daily_count";

export async function GET(req, { params }) {
  const country = (params.country || "").toLowerCase();
  const cacheKey = `unsplash_src_${country}`;

  try {
    // 1) Serve from cache
    const cached = redis && (await redis.get(cacheKey));
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    // 2) Rate tilt
    const today = new Date().toISOString().slice(0,10);
    const rateKey = `${DAILY_PREFIX}_${today}`;
    const todayCount = parseInt((await redis.get(rateKey)) || "0", 10);

    if (todayCount >= DAILY_CAP) {
      return NextResponse.json({ detail: "Daily image cap reached" }, { status: 429 });
    }

    // 3) Build URLs
    const q = encodeURIComponent(country);
    const urls = Array.from({ length: 5 }, (_, i) =>
      `https://source.unsplash.com/1600x900/?${q},landscape&sig=${i}`
    );

    // 4) Cache + bump counter
    if (redis) {
      await Promise.all([
        redis.set(cacheKey, JSON.stringify(urls), { ex: CACHE_TTL }),
        redis.incr(rateKey),
        redis.expire(rateKey, 24 * 60 * 60),
      ]);
    }

    return NextResponse.json(urls);
  } catch (err) {
    console.error("🔥 /api/country/[country] error:", err);
    // Fallback: still return un‑cached URLs so the page doesn’t 502
    const q = encodeURIComponent(country);
    const fallback = Array.from({ length: 5 }, (_, i) =>
      `https://source.unsplash.com/1600x900/?${q},landscape&sig=${i}`
    );
    return NextResponse.json(fallback);
  }
}
