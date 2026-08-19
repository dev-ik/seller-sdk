// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { GenerateOrderLabelResponse } from "./types.js";

export function parseGenerateOrderLabelResponse(
  status: number,
  input: unknown,
): GenerateOrderLabelResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "generateOrderLabel");
    default:
      return unexpectedYmSuccessStatus("generateOrderLabel", status);
  }
}
