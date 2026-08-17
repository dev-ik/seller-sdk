// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3PassesResponse } from "./types.js";

const getApiV3PassesResponse200Schema = createWbSchema<GetApiV3PassesResponse>(
  { kind: "array", items: { kind: "ref", name: "Pass" } },
  ordersFbsComponents,
);

export function parseGetApiV3PassesResponse(
  status: number,
  input: unknown,
): GetApiV3PassesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3PassesResponse200Schema,
        input,
        "GET /api/v3/passes",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/passes", status);
  }
}
