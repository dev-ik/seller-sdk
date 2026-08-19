// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetFulfillmentWarehousesResponse } from "./types.js";

const getFulfillmentWarehousesResponse200Schema =
  createYmSchema<GetFulfillmentWarehousesResponse>(
    { kind: "ref", name: "GetFulfillmentWarehousesResponse" },
    warehousesComponents,
  );

export function parseGetFulfillmentWarehousesResponse(
  status: number,
  input: unknown,
): GetFulfillmentWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getFulfillmentWarehousesResponse200Schema,
        input,
        "getFulfillmentWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus("getFulfillmentWarehouses", status);
  }
}
