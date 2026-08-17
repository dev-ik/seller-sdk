// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3SuppliesOrdersReshipmentResponse } from "./contract.js";
import type { GetApiV3SuppliesOrdersReshipmentResponse } from "./types.js";

export const GET_API_V3_SUPPLIES_ORDERS_RESHIPMENT_OPERATION_ID =
  "GET /api/v3/supplies/orders/reshipment";

const definition: WbOperationDefinition<GetApiV3SuppliesOrdersReshipmentResponse> =
  {
    operationId: GET_API_V3_SUPPLIES_ORDERS_RESHIPMENT_OPERATION_ID,
    method: "GET",
    path: "/api/v3/supplies/orders/reshipment",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiV3SuppliesOrdersReshipmentResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiV3SuppliesOrdersReshipment(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3SuppliesOrdersReshipmentResponse> {
  return execute(definition, undefined, options);
}
