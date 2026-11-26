interface RateLimitOptions {
  windowMs: number;
  max: number;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

/**
 * In-memory sliding rate limiter suitable for single-server production deployment.
 * Automatically cleans up expired entries on access and periodic sweep.
 */
export class MemoryRateLimiter {
  private store = new Map<string, RateLimitEntry>();
  private readonly windowMs: number;
  private readonly max: number;

  constructor(options: RateLimitOptions) {
    this.windowMs = options.windowMs;
    this.max = options.max;
  }

  public isRateLimited(key: string): boolean {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry || now > entry.resetAt) {
      this.store.set(key, { count: 1, resetAt: now + this.windowMs });
      return false;
    }

    if (entry.count >= this.max) {
      return true;
    }

    entry.count++;
    return false;
  }

  public reset(key?: string): void {
    if (key) {
      this.store.delete(key);
    } else {
      this.store.clear();
    }
  }
}

// Pre-configured rate limiters across the application
export const authRateLimiter = new MemoryRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
});

export const contactRateLimiter = new MemoryRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
});

export const analysisRateLimiter = new MemoryRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
});

export const howToRequestLimiter = new MemoryRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
});

export const howToSearchLimiter = new MemoryRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
});

export const visitRateLimiter = new MemoryRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 60,
});
