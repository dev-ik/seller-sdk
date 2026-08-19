// Generated runtime response contract for this Yandex Market endpoint.
import { regionsComponents } from "../../../contracts/regions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SearchRegionsByNameResponse } from "./types.js";

const searchRegionsByNameResponse200Schema =
  createYmSchema<SearchRegionsByNameResponse>(
    { kind: "ref", name: "GetRegionsResponse" },
    regionsComponents,
  );

export function parseSearchRegionsByNameResponse(
  status: number,
  input: unknown,
): SearchRegionsByNameResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        searchRegionsByNameResponse200Schema,
        input,
        "searchRegionsByName",
      );
    default:
      return unexpectedYmSuccessStatus("searchRegionsByName", status);
  }
}
