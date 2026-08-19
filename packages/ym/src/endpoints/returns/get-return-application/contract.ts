// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { GetReturnApplicationResponse } from "./types.js";

export function parseGetReturnApplicationResponse(
  status: number,
  input: unknown,
): GetReturnApplicationResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "getReturnApplication");
    default:
      return unexpectedYmSuccessStatus("getReturnApplication", status);
  }
}
