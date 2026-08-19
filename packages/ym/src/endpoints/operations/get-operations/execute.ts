// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOperationsResponse } from "./contract.js";
import type { GetOperationsInput, GetOperationsResponse } from "./types.js";

export const GET_OPERATIONS_OPERATION_ID = "getOperations";

const definition: YmOperationDefinition<GetOperationsResponse> = {
  operationId: GET_OPERATIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/operations",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOperationsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOperations(
  execute: YmOperationExecutor,
  input: GetOperationsInput,
  options: YmRequestOptions = {},
): Promise<GetOperationsResponse> {
  return execute(definition, input, options);
}
