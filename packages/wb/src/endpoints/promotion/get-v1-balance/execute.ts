// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1BalanceResponse } from "./contract.js";
import type { GetV1BalanceResponse } from "./types.js";

export const GET_V1_BALANCE_OPERATION_ID = "getV1Balance";

const definition: WbOperationDefinition<GetV1BalanceResponse> = {
  operationId: GET_V1_BALANCE_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/balance",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1BalanceResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Balance(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1BalanceResponse> {
  return execute(definition, undefined, options);
}
