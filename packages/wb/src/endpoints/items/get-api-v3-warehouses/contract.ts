// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3WarehousesResponse } from "./types.js";

const getApiV3WarehousesResponse200Schema =
  createWbSchema<GetApiV3WarehousesResponse>(
    { kind: "array", items: { kind: "ref", name: "Warehouse" } },
    itemsComponents,
  );

export function parseGetApiV3WarehousesResponse(
  status: number,
  input: unknown,
): GetApiV3WarehousesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3WarehousesResponse200Schema,
        input,
        "GET /api/v3/warehouses",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/warehouses", status);
  }
}
