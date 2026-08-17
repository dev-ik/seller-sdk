import type { WbCredentials } from "./credentials.js";

/** @internal */
export function createWbAuthHeaders(
  credentials: WbCredentials,
): Readonly<Record<string, string>> {
  return Object.freeze({ Authorization: credentials.token });
}
