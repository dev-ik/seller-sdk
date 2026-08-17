// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1SuppliesResponse } from "./contract.js";
import type { PostV1SuppliesInput, PostV1SuppliesResponse } from "./types.js";

export const POST_V1_SUPPLIES_OPERATION_ID = "postV1Supplies";

const definition: WbOperationDefinition<PostV1SuppliesResponse> = {
  operationId: POST_V1_SUPPLIES_OPERATION_ID,
  method: "POST",
  path: "/api/v1/supplies",
  productionOrigin: "https://supplies-api.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1SuppliesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executePostV1Supplies(
  execute: WbOperationExecutor,
  input: PostV1SuppliesInput,
  options: WbRequestOptions = {},
): Promise<PostV1SuppliesResponse> {
  return execute(definition, input, options);
}
