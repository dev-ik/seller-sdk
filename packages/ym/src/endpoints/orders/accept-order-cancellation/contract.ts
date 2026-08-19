// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { AcceptOrderCancellationResponse } from "./types.js";

const acceptOrderCancellationResponse200Schema =
  createYmSchema<AcceptOrderCancellationResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    ordersComponents,
  );

export function parseAcceptOrderCancellationResponse(
  status: number,
  input: unknown,
): AcceptOrderCancellationResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        acceptOrderCancellationResponse200Schema,
        input,
        "acceptOrderCancellation",
      );
    default:
      return unexpectedYmSuccessStatus("acceptOrderCancellation", status);
  }
}
