// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiContentV1BrandsResponse } from "./types.js";

const getApiContentV1BrandsResponse200Schema =
  createWbSchema<GetApiContentV1BrandsResponse>(
    { kind: "ref", name: "BrandsResponse" },
    itemsComponents,
  );

export function parseGetApiContentV1BrandsResponse(
  status: number,
  input: unknown,
): GetApiContentV1BrandsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiContentV1BrandsResponse200Schema,
        input,
        "GET /api/content/v1/brands",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/content/v1/brands", status);
  }
}
