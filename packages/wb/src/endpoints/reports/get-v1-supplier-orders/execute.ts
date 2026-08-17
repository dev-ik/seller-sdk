// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SupplierOrdersResponse } from "./contract.js";
import type {
  GetV1SupplierOrdersInput,
  GetV1SupplierOrdersResponse,
} from "./types.js";

export const GET_V1_SUPPLIER_ORDERS_OPERATION_ID = "getV1SupplierOrders";

const definition: WbOperationDefinition<GetV1SupplierOrdersResponse> = {
  operationId: GET_V1_SUPPLIER_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/supplier/orders",
  productionOrigin: "https://statistics-api.wildberries.ru",
  sandboxOrigin: "https://statistics-api-sandbox.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "flag", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SupplierOrdersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SupplierOrders(
  execute: WbOperationExecutor,
  input: GetV1SupplierOrdersInput,
  options: WbRequestOptions = {},
): Promise<GetV1SupplierOrdersResponse> {
  return execute(definition, input, options);
}
