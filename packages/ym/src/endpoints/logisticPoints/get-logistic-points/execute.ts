// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetLogisticPointsResponse } from "./contract.js";
import type {
  GetLogisticPointsInput,
  GetLogisticPointsResponse,
} from "./types.js";

export const GET_LOGISTIC_POINTS_OPERATION_ID = "getLogisticPoints";

const definition: YmOperationDefinition<GetLogisticPointsResponse> = {
  operationId: GET_LOGISTIC_POINTS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/logistics-points",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetLogisticPointsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetLogisticPoints(
  execute: YmOperationExecutor,
  input: GetLogisticPointsInput,
  options: YmRequestOptions = {},
): Promise<GetLogisticPointsResponse> {
  return execute(definition, input, options);
}
