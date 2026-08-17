// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3PassesOfficesResponse } from "./types.js";

const getApiV3PassesOfficesResponse200Schema =
  createWbSchema<GetApiV3PassesOfficesResponse>(
    { kind: "array", items: { kind: "ref", name: "PassOffice" } },
    ordersFbsComponents,
  );

export function parseGetApiV3PassesOfficesResponse(
  status: number,
  input: unknown,
): GetApiV3PassesOfficesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3PassesOfficesResponse200Schema,
        input,
        "GET /api/v3/passes/offices",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/passes/offices", status);
  }
}
