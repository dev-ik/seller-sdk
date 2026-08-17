// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1BudgetResponse } from "./contract.js";
import type { GetV1BudgetInput, GetV1BudgetResponse } from "./types.js";

export const GET_V1_BUDGET_OPERATION_ID = "getV1Budget";

const definition: WbOperationDefinition<GetV1BudgetResponse> = {
  operationId: GET_V1_BUDGET_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/budget",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1BudgetResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Budget(
  execute: WbOperationExecutor,
  input: GetV1BudgetInput,
  options: WbRequestOptions = {},
): Promise<GetV1BudgetResponse> {
  return execute(definition, input, options);
}
