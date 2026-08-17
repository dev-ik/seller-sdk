// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormqueryGetBidsResponse } from "./contract.js";
import type {
  PostV0NormqueryGetBidsInput,
  PostV0NormqueryGetBidsResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_GET_BIDS_OPERATION_ID = "postV0NormqueryGetBids";

const definition: WbOperationDefinition<PostV0NormqueryGetBidsResponse> = {
  operationId: POST_V0_NORMQUERY_GET_BIDS_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/get-bids",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormqueryGetBidsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormqueryGetBids(
  execute: WbOperationExecutor,
  input: PostV0NormqueryGetBidsInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormqueryGetBidsResponse> {
  return execute(definition, input, options);
}
