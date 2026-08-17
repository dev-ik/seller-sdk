// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV0AuctionNmsResponse } from "./contract.js";
import type {
  PatchV0AuctionNmsInput,
  PatchV0AuctionNmsResponse,
} from "./types.js";

export const PATCH_V0_AUCTION_NMS_OPERATION_ID = "patchV0AuctionNms";

const definition: WbOperationDefinition<PatchV0AuctionNmsResponse> = {
  operationId: PATCH_V0_AUCTION_NMS_OPERATION_ID,
  method: "PATCH",
  path: "/adv/v0/auction/nms",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchV0AuctionNmsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePatchV0AuctionNms(
  execute: WbOperationExecutor,
  input: PatchV0AuctionNmsInput,
  options: WbRequestOptions = {},
): Promise<PatchV0AuctionNmsResponse> {
  return execute(definition, input, options);
}
