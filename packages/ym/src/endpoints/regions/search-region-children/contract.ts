// Generated runtime response contract for this Yandex Market endpoint.
import { regionsComponents } from "../../../contracts/regions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SearchRegionChildrenResponse } from "./types.js";

const searchRegionChildrenResponse200Schema =
  createYmSchema<SearchRegionChildrenResponse>(
    { kind: "ref", name: "GetRegionWithChildrenResponse" },
    regionsComponents,
  );

export function parseSearchRegionChildrenResponse(
  status: number,
  input: unknown,
): SearchRegionChildrenResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        searchRegionChildrenResponse200Schema,
        input,
        "searchRegionChildren",
      );
    default:
      return unexpectedYmSuccessStatus("searchRegionChildren", status);
  }
}
