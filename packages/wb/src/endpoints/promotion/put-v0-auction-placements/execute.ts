// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutV0AuctionPlacementsResponse } from "./contract.js";
import type {
  PutV0AuctionPlacementsInput,
  PutV0AuctionPlacementsResponse,
} from "./types.js";

export const PUT_V0_AUCTION_PLACEMENTS_OPERATION_ID = "putV0AuctionPlacements";

const definition: WbOperationDefinition<PutV0AuctionPlacementsResponse> = {
  operationId: PUT_V0_AUCTION_PLACEMENTS_OPERATION_ID,
  method: "PUT",
  path: "/adv/v0/auction/placements",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutV0AuctionPlacementsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePutV0AuctionPlacements(
  execute: WbOperationExecutor,
  input: PutV0AuctionPlacementsInput,
  options: WbRequestOptions = {},
): Promise<PutV0AuctionPlacementsResponse> {
  return execute(definition, input, options);
}
