// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3SuppliesResponse } from "./contract.js";
import type {
  GetApiV3SuppliesInput,
  GetApiV3SuppliesResponse,
} from "./types.js";

export const GET_API_V3_SUPPLIES_OPERATION_ID = "GET /api/v3/supplies";

const definition: WbOperationDefinition<GetApiV3SuppliesResponse> = {
  operationId: GET_API_V3_SUPPLIES_OPERATION_ID,
  method: "GET",
  path: "/api/v3/supplies",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "next", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3SuppliesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3Supplies(
  execute: WbOperationExecutor,
  input: GetApiV3SuppliesInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3SuppliesResponse> {
  return execute(definition, input, options);
}
