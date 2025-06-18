// /src/app/api/country/[country]/route.js
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const CACHE_TTL    = 12 * 60 * 60;      // 12h in seconds
const DAILY_CAP    = 100;               // max calls per day
const DAILY_PREFIX = "unsplash_daily_count";

export async function GET(req, { params }) {
  const country = params.country?.toLowerCase() || "";
  const cacheKey = `unsplash_src_${country}`;

  // 1) Serve from cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    return NextResponse.json(JSON.parse(cached));
  }

  // 2) Rate‑limit per UTC day
  const today = new Date().toISOString().slice(0,10);
  const rateKey = `${DAILY_PREFIX}_${today}`;
  const todayCount = parseInt((await redis.get(rateKey)) || "0", 10);
  if (todayCount >= DAILY_CAP) {
    return NextResponse.json(
      { detail: "Daily image cap reached" },
      { status: 429 }
    );
  }

  // 3) Build 5 Unsplash Source URLs
  const q    = encodeURIComponent(country);
  const urls = Array.from({ length: 5 }, (_, i) =>
    `https://source.unsplash.com/1600x900/?${q},landscape&sig=${i}`
  );

  // 4) Cache & bump the counter
  await Promise.all([
    redis.set(cacheKey, JSON.stringify(urls), { ex: CACHE_TTL }),
    redis.incr(rateKey),
    redis.expire(rateKey, 24 * 60 * 60),
  ]);

  return NextResponse.json(urls);
}
