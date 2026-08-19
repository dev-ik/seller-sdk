// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPartnerWarehousesResponse } from "./types.js";

const getPartnerWarehousesResponse200Schema =
  createYmSchema<GetPartnerWarehousesResponse>(
    { kind: "ref", name: "GetPartnerWarehousesResponse" },
    warehousesComponents,
  );

export function parseGetPartnerWarehousesResponse(
  status: number,
  input: unknown,
): GetPartnerWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getPartnerWarehousesResponse200Schema,
        input,
        "getPartnerWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus("getPartnerWarehouses", status);
  }
}
