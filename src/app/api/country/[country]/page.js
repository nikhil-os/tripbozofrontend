// pages/api/country/[country]/images.js
import { redis } from "@/lib/redis";

const CACHE_TTL    = 12 * 60 * 60;      // 12h in seconds
const DAILY_CAP    = 100;               // max calls per day
const DAILY_PREFIX = "unsplash_daily_count";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { country } = req.query;
  const lookup = (country || "").toLowerCase();
  const cacheKey = `unsplash_src_${lookup}`;

  // 1) serve from cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    return res.status(200).json(JSON.parse(cached));
  }

  // 2) enforce a per‑UTC‑day cap
  const today = new Date().toISOString().slice(0,10);
  const rateKey = `${DAILY_PREFIX}_${today}`;
  const todayCount = parseInt((await redis.get(rateKey)) || "0", 10);
  if (todayCount >= DAILY_CAP) {
    return res.status(429).json({ detail: "Daily image cap reached" });
  }

  // 3) generate 5 distinct Unsplash Source URLs
  const q = encodeURIComponent(lookup);
  const urls = Array.from({ length: 5 }, (_, i) =>
    `https://source.unsplash.com/1600x900/?${q},landscape&sig=${i}`
  );

  // 4) cache & increment counter atomically
  await Promise.all([
    redis.set(cacheKey, JSON.stringify(urls), { ex: CACHE_TTL }),
    redis.incr(rateKey),
    redis.expire(rateKey, 24 * 60 * 60),
  ]);

  return res.status(200).json(urls);
}
