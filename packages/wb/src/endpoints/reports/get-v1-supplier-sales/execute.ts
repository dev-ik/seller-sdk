// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SupplierSalesResponse } from "./contract.js";
import type {
  GetV1SupplierSalesInput,
  GetV1SupplierSalesResponse,
} from "./types.js";

export const GET_V1_SUPPLIER_SALES_OPERATION_ID = "getV1SupplierSales";

const definition: WbOperationDefinition<GetV1SupplierSalesResponse> = {
  operationId: GET_V1_SUPPLIER_SALES_OPERATION_ID,
  method: "GET",
  path: "/api/v1/supplier/sales",
  productionOrigin: "https://statistics-api.wildberries.ru",
  sandboxOrigin: "https://statistics-api-sandbox.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "flag", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SupplierSalesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SupplierSales(
  execute: WbOperationExecutor,
  input: GetV1SupplierSalesInput,
  options: WbRequestOptions = {},
): Promise<GetV1SupplierSalesResponse> {
  return execute(definition, input, options);
}
