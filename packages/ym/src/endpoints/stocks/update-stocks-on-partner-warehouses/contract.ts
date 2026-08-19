// Generated runtime response contract for this Yandex Market endpoint.
import { stocksComponents } from "../../../contracts/stocks.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateStocksOnPartnerWarehousesResponse } from "./types.js";

const updateStocksOnPartnerWarehousesResponse200Schema =
  createYmSchema<UpdateStocksOnPartnerWarehousesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    stocksComponents,
  );

export function parseUpdateStocksOnPartnerWarehousesResponse(
  status: number,
  input: unknown,
): UpdateStocksOnPartnerWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateStocksOnPartnerWarehousesResponse200Schema,
        input,
        "updateStocksOnPartnerWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus(
        "updateStocksOnPartnerWarehouses",
        status,
      );
  }
}
