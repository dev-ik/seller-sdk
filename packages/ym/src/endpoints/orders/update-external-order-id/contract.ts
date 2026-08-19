// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateExternalOrderIdResponse } from "./types.js";

const updateExternalOrderIdResponse200Schema =
  createYmSchema<UpdateExternalOrderIdResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    ordersComponents,
  );

export function parseUpdateExternalOrderIdResponse(
  status: number,
  input: unknown,
): UpdateExternalOrderIdResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateExternalOrderIdResponse200Schema,
        input,
        "updateExternalOrderId",
      );
    default:
      return unexpectedYmSuccessStatus("updateExternalOrderId", status);
  }
}
