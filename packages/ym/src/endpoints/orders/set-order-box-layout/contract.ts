// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetOrderBoxLayoutResponse } from "./types.js";

const setOrderBoxLayoutResponse200Schema =
  createYmSchema<SetOrderBoxLayoutResponse>(
    { kind: "ref", name: "SetOrderBoxLayoutResponse" },
    ordersComponents,
  );

export function parseSetOrderBoxLayoutResponse(
  status: number,
  input: unknown,
): SetOrderBoxLayoutResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setOrderBoxLayoutResponse200Schema,
        input,
        "setOrderBoxLayout",
      );
    default:
      return unexpectedYmSuccessStatus("setOrderBoxLayout", status);
  }
}
