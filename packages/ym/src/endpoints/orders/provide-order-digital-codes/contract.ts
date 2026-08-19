// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { ProvideOrderDigitalCodesResponse } from "./types.js";

const provideOrderDigitalCodesResponse200Schema =
  createYmSchema<ProvideOrderDigitalCodesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    ordersComponents,
  );

export function parseProvideOrderDigitalCodesResponse(
  status: number,
  input: unknown,
): ProvideOrderDigitalCodesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        provideOrderDigitalCodesResponse200Schema,
        input,
        "provideOrderDigitalCodes",
      );
    default:
      return unexpectedYmSuccessStatus("provideOrderDigitalCodes", status);
  }
}
