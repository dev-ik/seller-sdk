// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1NormqueryBidsResponse } from "./contract.js";
import type {
  PostV1NormqueryBidsInput,
  PostV1NormqueryBidsResponse,
} from "./types.js";

export const POST_V1_NORMQUERY_BIDS_OPERATION_ID = "postV1NormqueryBids";

const definition: WbOperationDefinition<PostV1NormqueryBidsResponse> = {
  operationId: POST_V1_NORMQUERY_BIDS_OPERATION_ID,
  method: "POST",
  path: "/api/advert/v1/normquery/bids",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1NormqueryBidsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV1NormqueryBids(
  execute: WbOperationExecutor,
  input: PostV1NormqueryBidsInput,
  options: WbRequestOptions = {},
): Promise<PostV1NormqueryBidsResponse> {
  return execute(definition, input, options);
}
