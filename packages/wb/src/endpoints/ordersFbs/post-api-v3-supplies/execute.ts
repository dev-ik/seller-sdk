// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3SuppliesResponse } from "./contract.js";
import type {
  PostApiV3SuppliesInput,
  PostApiV3SuppliesResponse,
} from "./types.js";

export const POST_API_V3_SUPPLIES_OPERATION_ID = "POST /api/v3/supplies";

const definition: WbOperationDefinition<PostApiV3SuppliesResponse> = {
  operationId: POST_API_V3_SUPPLIES_OPERATION_ID,
  method: "POST",
  path: "/api/v3/supplies",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3SuppliesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3Supplies(
  execute: WbOperationExecutor,
  input: PostApiV3SuppliesInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3SuppliesResponse> {
  return execute(definition, input, options);
}
