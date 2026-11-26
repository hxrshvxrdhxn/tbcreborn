/**
 * Legacy redis.ts module alias.
 * Migrated to lib/session.ts with JWT signing via SESSION_SECRET, 12h expiration,
 * and server-side revocation on logout.
 */
export { addSession, isValidSession, removeSession } from "./session";
