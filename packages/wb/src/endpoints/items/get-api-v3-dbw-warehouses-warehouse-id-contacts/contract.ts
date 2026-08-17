// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3DbwWarehousesWarehouseIdContactsResponse } from "./types.js";

const getApiV3DbwWarehousesWarehouseIdContactsResponse200Schema =
  createWbSchema<GetApiV3DbwWarehousesWarehouseIdContactsResponse>(
    {
      kind: "object",
      properties: {
        contacts: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              comment: { kind: "string", maxLength: 1000 },
              phone: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV3DbwWarehousesWarehouseIdContactsResponse(
  status: number,
  input: unknown,
): GetApiV3DbwWarehousesWarehouseIdContactsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3DbwWarehousesWarehouseIdContactsResponse200Schema,
        input,
        "GET /api/v3/dbw/warehouses/{warehouseId}/contacts",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v3/dbw/warehouses/{warehouseId}/contacts",
        status,
      );
  }
}
