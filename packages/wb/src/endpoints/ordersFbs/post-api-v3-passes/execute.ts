// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3PassesResponse } from "./contract.js";
import type { PostApiV3PassesInput, PostApiV3PassesResponse } from "./types.js";

export const POST_API_V3_PASSES_OPERATION_ID = "POST /api/v3/passes";

const definition: WbOperationDefinition<PostApiV3PassesResponse> = {
  operationId: POST_API_V3_PASSES_OPERATION_ID,
  method: "POST",
  path: "/api/v3/passes",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3PassesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3Passes(
  execute: WbOperationExecutor,
  input: PostApiV3PassesInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3PassesResponse> {
  return execute(definition, input, options);
}
