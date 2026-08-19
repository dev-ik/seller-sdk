// Generated runtime response contract for this Yandex Market endpoint.
import { stocksComponents } from "../../../contracts/stocks.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateStocksResponse } from "./types.js";

const updateStocksResponse200Schema = createYmSchema<UpdateStocksResponse>(
  { kind: "ref", name: "EmptyApiResponse" },
  stocksComponents,
);

export function parseUpdateStocksResponse(
  status: number,
  input: unknown,
): UpdateStocksResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateStocksResponse200Schema,
        input,
        "updateStocks",
      );
    default:
      return unexpectedYmSuccessStatus("updateStocks", status);
  }
}
