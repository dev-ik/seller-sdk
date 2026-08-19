// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SearchShipmentsResponse } from "./types.js";

const searchShipmentsResponse200Schema =
  createYmSchema<SearchShipmentsResponse>(
    { kind: "ref", name: "SearchShipmentsResponse" },
    shipmentsComponents,
  );

export function parseSearchShipmentsResponse(
  status: number,
  input: unknown,
): SearchShipmentsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        searchShipmentsResponse200Schema,
        input,
        "searchShipments",
      );
    default:
      return unexpectedYmSuccessStatus("searchShipments", status);
  }
}
