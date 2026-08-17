// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchMarketplaceV3FbsSettingsAutoreturnsResponse } from "./types.js";

export function parsePatchMarketplaceV3FbsSettingsAutoreturnsResponse(
  status: number,
  input: unknown,
): PatchMarketplaceV3FbsSettingsAutoreturnsResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "patchMarketplaceV3FbsSettingsAutoreturns",
        status,
      );
  }
}
