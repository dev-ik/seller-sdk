// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AccountBalanceResponse } from "./types.js";

const getV1AccountBalanceResponse200Schema =
  createWbSchema<GetV1AccountBalanceResponse>(
    {
      kind: "object",
      properties: {
        currency: { kind: "string" },
        current: { kind: "number" },
        for_withdraw: { kind: "number" },
      },
      required: [],
    },
    financesComponents,
  );

export function parseGetV1AccountBalanceResponse(
  status: number,
  input: unknown,
): GetV1AccountBalanceResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AccountBalanceResponse200Schema,
        input,
        "getV1AccountBalance",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AccountBalance", status);
  }
}
