// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV1BidsResponse } from "./contract.js";
import type { PatchV1BidsInput, PatchV1BidsResponse } from "./types.js";

export const PATCH_V1_BIDS_OPERATION_ID = "patchV1Bids";

const definition: WbOperationDefinition<PatchV1BidsResponse> = {
  operationId: PATCH_V1_BIDS_OPERATION_ID,
  method: "PATCH",
  path: "/api/advert/v1/bids",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchV1BidsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePatchV1Bids(
  execute: WbOperationExecutor,
  input: PatchV1BidsInput,
  options: WbRequestOptions = {},
): Promise<PatchV1BidsResponse> {
  return execute(definition, input, options);
}
