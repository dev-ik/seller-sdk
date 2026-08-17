// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1BudgetResponse } from "./types.js";

const getV1BudgetResponse200Schema = createWbSchema<GetV1BudgetResponse>(
  {
    kind: "object",
    properties: {
      cash: { kind: "number", integer: true },
      netting: { kind: "number", integer: true },
      total: { kind: "number", integer: true },
      currency: { kind: "string" },
    },
    required: [],
  },
  promotionComponents,
);

export function parseGetV1BudgetResponse(
  status: number,
  input: unknown,
): GetV1BudgetResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1BudgetResponse200Schema,
        input,
        "getV1Budget",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Budget", status);
  }
}
