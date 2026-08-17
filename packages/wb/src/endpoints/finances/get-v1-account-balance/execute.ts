// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AccountBalanceResponse } from "./contract.js";
import type { GetV1AccountBalanceResponse } from "./types.js";

export const GET_V1_ACCOUNT_BALANCE_OPERATION_ID = "getV1AccountBalance";

const definition: WbOperationDefinition<GetV1AccountBalanceResponse> = {
  operationId: GET_V1_ACCOUNT_BALANCE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/account/balance",
  productionOrigin: "https://finance-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AccountBalanceResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AccountBalance(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1AccountBalanceResponse> {
  return execute(definition, undefined, options);
}
