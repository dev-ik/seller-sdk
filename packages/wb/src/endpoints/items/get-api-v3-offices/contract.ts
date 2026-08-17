// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3OfficesResponse } from "./types.js";

const getApiV3OfficesResponse200Schema =
  createWbSchema<GetApiV3OfficesResponse>(
    { kind: "array", items: { kind: "ref", name: "Office" } },
    itemsComponents,
  );

export function parseGetApiV3OfficesResponse(
  status: number,
  input: unknown,
): GetApiV3OfficesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3OfficesResponse200Schema,
        input,
        "GET /api/v3/offices",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/offices", status);
  }
}
