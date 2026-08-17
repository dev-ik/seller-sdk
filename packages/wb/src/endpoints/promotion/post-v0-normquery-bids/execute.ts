// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormqueryBidsResponse } from "./contract.js";
import type {
  PostV0NormqueryBidsInput,
  PostV0NormqueryBidsResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_BIDS_OPERATION_ID = "postV0NormqueryBids";

const definition: WbOperationDefinition<PostV0NormqueryBidsResponse> = {
  operationId: POST_V0_NORMQUERY_BIDS_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/bids",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormqueryBidsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormqueryBids(
  execute: WbOperationExecutor,
  input: PostV0NormqueryBidsInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormqueryBidsResponse> {
  return execute(definition, input, options);
}
