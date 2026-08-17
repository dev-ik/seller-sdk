// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1BudgetDepositResponse } from "./contract.js";
import type {
  PostV1BudgetDepositInput,
  PostV1BudgetDepositResponse,
} from "./types.js";

export const POST_V1_BUDGET_DEPOSIT_OPERATION_ID = "postV1BudgetDeposit";

const definition: WbOperationDefinition<PostV1BudgetDepositResponse> = {
  operationId: POST_V1_BUDGET_DEPOSIT_OPERATION_ID,
  method: "POST",
  path: "/adv/v1/budget/deposit",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1BudgetDepositResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV1BudgetDeposit(
  execute: WbOperationExecutor,
  input: PostV1BudgetDepositInput,
  options: WbRequestOptions = {},
): Promise<PostV1BudgetDepositResponse> {
  return execute(definition, input, options);
}
