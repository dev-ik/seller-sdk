// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPromosResponse } from "./contract.js";
import type { GetPromosInput, GetPromosResponse } from "./types.js";

export const GET_PROMOS_OPERATION_ID = "getPromos";

const definition: YmOperationDefinition<GetPromosResponse> = {
  operationId: GET_PROMOS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/promos",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetPromosResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPromos(
  execute: YmOperationExecutor,
  input: GetPromosInput,
  options: YmRequestOptions = {},
): Promise<GetPromosResponse> {
  return execute(definition, input, options);
}
