// Generated runtime response contract for this Yandex Market endpoint.
import { stocksComponents } from "../../../contracts/stocks.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetStocksResponse } from "./types.js";

const getStocksResponse200Schema = createYmSchema<GetStocksResponse>(
  { kind: "ref", name: "GetWarehouseStocksResponse" },
  stocksComponents,
);

export function parseGetStocksResponse(
  status: number,
  input: unknown,
): GetStocksResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getStocksResponse200Schema, input, "getStocks");
    default:
      return unexpectedYmSuccessStatus("getStocks", status);
  }
}
