// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { GenerateOrderLabelsResponse } from "./types.js";

export function parseGenerateOrderLabelsResponse(
  status: number,
  input: unknown,
): GenerateOrderLabelsResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "generateOrderLabels");
    default:
      return unexpectedYmSuccessStatus("generateOrderLabels", status);
  }
}
