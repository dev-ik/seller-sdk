// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { ProvideOrderItemIdentifiersResponse } from "./types.js";

const provideOrderItemIdentifiersResponse200Schema =
  createYmSchema<ProvideOrderItemIdentifiersResponse>(
    { kind: "ref", name: "ProvideOrderItemIdentifiersResponse" },
    ordersComponents,
  );

export function parseProvideOrderItemIdentifiersResponse(
  status: number,
  input: unknown,
): ProvideOrderItemIdentifiersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        provideOrderItemIdentifiersResponse200Schema,
        input,
        "provideOrderItemIdentifiers",
      );
    default:
      return unexpectedYmSuccessStatus("provideOrderItemIdentifiers", status);
  }
}
