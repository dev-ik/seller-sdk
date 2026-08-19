// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetWarehousesResponse } from "./types.js";

const getWarehousesResponse200Schema = createYmSchema<GetWarehousesResponse>(
  { kind: "ref", name: "GetWarehousesResponse" },
  warehousesComponents,
);

export function parseGetWarehousesResponse(
  status: number,
  input: unknown,
): GetWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getWarehousesResponse200Schema,
        input,
        "getWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus("getWarehouses", status);
  }
}
