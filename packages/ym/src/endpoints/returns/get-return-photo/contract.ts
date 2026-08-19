// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { GetReturnPhotoResponse } from "./types.js";

export function parseGetReturnPhotoResponse(
  status: number,
  input: unknown,
): GetReturnPhotoResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "getReturnPhoto");
    default:
      return unexpectedYmSuccessStatus("getReturnPhoto", status);
  }
}
