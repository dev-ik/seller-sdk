// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormqueryGetMinusResponse } from "./contract.js";
import type {
  PostV0NormqueryGetMinusInput,
  PostV0NormqueryGetMinusResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_GET_MINUS_OPERATION_ID =
  "postV0NormqueryGetMinus";

const definition: WbOperationDefinition<PostV0NormqueryGetMinusResponse> = {
  operationId: POST_V0_NORMQUERY_GET_MINUS_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/get-minus",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormqueryGetMinusResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormqueryGetMinus(
  execute: WbOperationExecutor,
  input: PostV0NormqueryGetMinusInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormqueryGetMinusResponse> {
  return execute(definition, input, options);
}
