// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1BudgetDepositResponse } from "./types.js";

const postV1BudgetDepositResponse200Schema =
  createWbSchema<PostV1BudgetDepositResponse>(
    { kind: "union", choices: [{ kind: "ref", name: "ResponseWithReturn" }] },
    promotionComponents,
  );

export function parsePostV1BudgetDepositResponse(
  status: number,
  input: unknown,
): PostV1BudgetDepositResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1BudgetDepositResponse200Schema,
        input,
        "postV1BudgetDeposit",
      );
    default:
      return unexpectedWbSuccessStatus("postV1BudgetDeposit", status);
  }
}
