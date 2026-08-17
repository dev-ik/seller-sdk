// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchV1ClaimResponse } from "./types.js";

export function parsePatchV1ClaimResponse(
  status: number,
  input: unknown,
): PatchV1ClaimResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("patchV1Claim", status);
  }
}
