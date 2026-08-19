// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPagedWarehousesResponse } from "./types.js";

const getPagedWarehousesResponse200Schema =
  createYmSchema<GetPagedWarehousesResponse>(
    { kind: "ref", name: "GetPagedWarehousesResponse" },
    warehousesComponents,
  );

export function parseGetPagedWarehousesResponse(
  status: number,
  input: unknown,
): GetPagedWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getPagedWarehousesResponse200Schema,
        input,
        "getPagedWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus("getPagedWarehouses", status);
  }
}
