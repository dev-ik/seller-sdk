// Generated runtime response contract for this Yandex Market endpoint.
import { regionsComponents } from "../../../contracts/regions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SearchRegionsByIdResponse } from "./types.js";

const searchRegionsByIdResponse200Schema =
  createYmSchema<SearchRegionsByIdResponse>(
    { kind: "ref", name: "GetRegionByIdResponse" },
    regionsComponents,
  );

export function parseSearchRegionsByIdResponse(
  status: number,
  input: unknown,
): SearchRegionsByIdResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        searchRegionsByIdResponse200Schema,
        input,
        "searchRegionsById",
      );
    default:
      return unexpectedYmSuccessStatus("searchRegionsById", status);
  }
}
