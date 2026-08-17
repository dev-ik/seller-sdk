// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1MeasurementPenaltiesResponse } from "./contract.js";
import type {
  GetV1MeasurementPenaltiesInput,
  GetV1MeasurementPenaltiesResponse,
} from "./types.js";

export const GET_V1_MEASUREMENT_PENALTIES_OPERATION_ID =
  "getV1MeasurementPenalties";

const definition: WbOperationDefinition<GetV1MeasurementPenaltiesResponse> = {
  operationId: GET_V1_MEASUREMENT_PENALTIES_OPERATION_ID,
  method: "GET",
  path: "/api/analytics/v1/measurement-penalties",
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
  parseResponse: parseGetV1MeasurementPenaltiesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1MeasurementPenalties(
  execute: WbOperationExecutor,
  input: GetV1MeasurementPenaltiesInput,
  options: WbRequestOptions = {},
): Promise<GetV1MeasurementPenaltiesResponse> {
  return execute(definition, input, options);
}
