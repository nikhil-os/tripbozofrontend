import { redis } from "./redisClient";

export async function withRedisCache(key, ttlSeconds, fetchFn, fallbackData) {
  try {
    const cached = await redis.get(key);
    if (cached) {
      console.info(`✅ Redis HIT: ${key}`);
      return cached;
    }

    const data = await fetchFn();
    if (data) {
      await redis.set(key, data, { ex: ttlSeconds });
      console.info(`📦 Redis SET: ${key}`);
      return data;
    }
  } catch (err) {
    console.warn(`❌ Redis or Fetch Failed for ${key}:`, err.message);
  }

  return fallbackData;
}
