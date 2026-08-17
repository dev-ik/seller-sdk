// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1DeductionsResponse } from "./contract.js";
import type { GetV1DeductionsInput, GetV1DeductionsResponse } from "./types.js";

export const GET_V1_DEDUCTIONS_OPERATION_ID = "getV1Deductions";

const definition: WbOperationDefinition<GetV1DeductionsResponse> = {
  operationId: GET_V1_DEDUCTIONS_OPERATION_ID,
  method: "GET",
  path: "/api/analytics/v1/deductions",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
    { name: "sort", location: "query", required: false, array: false },
    { name: "order", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1DeductionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Deductions(
  execute: WbOperationExecutor,
  input: GetV1DeductionsInput,
  options: WbRequestOptions = {},
): Promise<GetV1DeductionsResponse> {
  return execute(definition, input, options);
}
