import type { YmCredentials } from "./credentials.js";

/** @internal */
export function createYmAuthHeaders(
  credentials: YmCredentials,
): Readonly<Record<string, string>> {
  return Object.freeze({ "Api-Key": credentials.apiKey });
}
