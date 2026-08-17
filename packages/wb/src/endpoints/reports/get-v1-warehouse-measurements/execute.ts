// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1WarehouseMeasurementsResponse } from "./contract.js";
import type {
  GetV1WarehouseMeasurementsInput,
  GetV1WarehouseMeasurementsResponse,
} from "./types.js";

export const GET_V1_WAREHOUSE_MEASUREMENTS_OPERATION_ID =
  "getV1WarehouseMeasurements";

const definition: WbOperationDefinition<GetV1WarehouseMeasurementsResponse> = {
  operationId: GET_V1_WAREHOUSE_MEASUREMENTS_OPERATION_ID,
  method: "GET",
  path: "/api/analytics/v1/warehouse-measurements",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1WarehouseMeasurementsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1WarehouseMeasurements(
  execute: WbOperationExecutor,
  input: GetV1WarehouseMeasurementsInput,
  options: WbRequestOptions = {},
): Promise<GetV1WarehouseMeasurementsResponse> {
  return execute(definition, input, options);
}
