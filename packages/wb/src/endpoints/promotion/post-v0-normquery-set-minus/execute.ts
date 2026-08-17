// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormquerySetMinusResponse } from "./contract.js";
import type {
  PostV0NormquerySetMinusInput,
  PostV0NormquerySetMinusResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_SET_MINUS_OPERATION_ID =
  "postV0NormquerySetMinus";

const definition: WbOperationDefinition<PostV0NormquerySetMinusResponse> = {
  operationId: POST_V0_NORMQUERY_SET_MINUS_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/set-minus",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormquerySetMinusResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormquerySetMinus(
  execute: WbOperationExecutor,
  input: PostV0NormquerySetMinusInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormquerySetMinusResponse> {
  return execute(definition, input, options);
}
