// Generated runtime response contract for this Yandex Market endpoint.
import { stocksComponents } from "../../../contracts/stocks.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetStocksOnPartnerWarehousesResponse } from "./types.js";

const getStocksOnPartnerWarehousesResponse200Schema =
  createYmSchema<GetStocksOnPartnerWarehousesResponse>(
    { kind: "ref", name: "GetStocksOnPartnerWarehousesResponse" },
    stocksComponents,
  );

export function parseGetStocksOnPartnerWarehousesResponse(
  status: number,
  input: unknown,
): GetStocksOnPartnerWarehousesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getStocksOnPartnerWarehousesResponse200Schema,
        input,
        "getStocksOnPartnerWarehouses",
      );
    default:
      return unexpectedYmSuccessStatus("getStocksOnPartnerWarehouses", status);
  }
}
