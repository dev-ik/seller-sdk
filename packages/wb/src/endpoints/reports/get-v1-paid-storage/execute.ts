// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1PaidStorageResponse } from "./contract.js";
import type {
  GetV1PaidStorageInput,
  GetV1PaidStorageResponse,
} from "./types.js";

export const GET_V1_PAID_STORAGE_OPERATION_ID = "getV1PaidStorage";

const definition: WbOperationDefinition<GetV1PaidStorageResponse> = {
  operationId: GET_V1_PAID_STORAGE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/paid_storage",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1PaidStorageResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1PaidStorage(
  execute: WbOperationExecutor,
  input: GetV1PaidStorageInput,
  options: WbRequestOptions = {},
): Promise<GetV1PaidStorageResponse> {
  return execute(definition, input, options);
}
