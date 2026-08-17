// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3SuppliesResponse } from "./types.js";

const getApiV3SuppliesResponse200Schema =
  createWbSchema<GetApiV3SuppliesResponse>(
    {
      kind: "object",
      properties: {
        next: { kind: "ref", name: "Next" },
        supplies: { kind: "array", items: { kind: "ref", name: "Supply" } },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parseGetApiV3SuppliesResponse(
  status: number,
  input: unknown,
): GetApiV3SuppliesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3SuppliesResponse200Schema,
        input,
        "GET /api/v3/supplies",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/supplies", status);
  }
}
