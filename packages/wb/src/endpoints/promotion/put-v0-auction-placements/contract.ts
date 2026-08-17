// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutV0AuctionPlacementsResponse } from "./types.js";

export function parsePutV0AuctionPlacementsResponse(
  status: number,
  input: unknown,
): PutV0AuctionPlacementsResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("putV0AuctionPlacements", status);
  }
}
