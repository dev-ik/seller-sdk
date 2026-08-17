// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1WarehousesResponse } from "./types.js";

const getV1WarehousesResponse200Schema =
  createWbSchema<GetV1WarehousesResponse>(
    {
      kind: "array",
      items: { kind: "ref", name: "models.WarehousesResultItems" },
    },
    ordersFbwComponents,
  );

export function parseGetV1WarehousesResponse(
  status: number,
  input: unknown,
): GetV1WarehousesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1WarehousesResponse200Schema,
        input,
        "getV1Warehouses",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Warehouses", status);
  }
}
