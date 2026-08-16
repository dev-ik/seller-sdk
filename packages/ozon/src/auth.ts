import type { OzonCredentials } from "./credentials.js";

/** @internal */
export function createOzonAuthHeaders(
  credentials: OzonCredentials,
): Readonly<Record<string, string>> {
  return Object.freeze({
    "Client-Id": credentials.clientId,
    "Api-Key": credentials.apiKey,
  });
}
