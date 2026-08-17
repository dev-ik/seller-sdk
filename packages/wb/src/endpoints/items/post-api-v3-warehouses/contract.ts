// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3WarehousesResponse } from "./types.js";

const postApiV3WarehousesResponse201Schema =
  createWbSchema<PostApiV3WarehousesResponse>(
    {
      kind: "object",
      properties: { id: { kind: "number", integer: true } },
      required: [],
    },
    itemsComponents,
  );

export function parsePostApiV3WarehousesResponse(
  status: number,
  input: unknown,
): PostApiV3WarehousesResponse {
  switch (status) {
    case 201:
      return parseWbResponse(
        postApiV3WarehousesResponse201Schema,
        input,
        "POST /api/v3/warehouses",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/warehouses", status);
  }
}
