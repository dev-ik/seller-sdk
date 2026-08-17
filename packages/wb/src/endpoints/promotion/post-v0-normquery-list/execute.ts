// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormqueryListResponse } from "./contract.js";
import type {
  PostV0NormqueryListInput,
  PostV0NormqueryListResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_LIST_OPERATION_ID = "postV0NormqueryList";

const definition: WbOperationDefinition<PostV0NormqueryListResponse> = {
  operationId: POST_V0_NORMQUERY_LIST_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/list",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormqueryListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormqueryList(
  execute: WbOperationExecutor,
  input: PostV0NormqueryListInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormqueryListResponse> {
  return execute(definition, input, options);
}
