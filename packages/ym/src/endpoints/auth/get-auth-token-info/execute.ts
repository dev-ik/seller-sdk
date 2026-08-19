// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetAuthTokenInfoResponse } from "./contract.js";
import type { GetAuthTokenInfoResponse } from "./types.js";

export const GET_AUTH_TOKEN_INFO_OPERATION_ID = "getAuthTokenInfo";

const definition: YmOperationDefinition<GetAuthTokenInfoResponse> = {
  operationId: GET_AUTH_TOKEN_INFO_OPERATION_ID,
  method: "POST",
  path: "/v2/auth/token",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetAuthTokenInfoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetAuthTokenInfo(
  execute: YmOperationExecutor,
  options: YmRequestOptions = {},
): Promise<GetAuthTokenInfoResponse> {
  return execute(definition, undefined, options);
}
