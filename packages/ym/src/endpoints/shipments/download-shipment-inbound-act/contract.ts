// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentInboundActResponse } from "./types.js";

export function parseDownloadShipmentInboundActResponse(
  status: number,
  input: unknown,
): DownloadShipmentInboundActResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "downloadShipmentInboundAct");
    default:
      return unexpectedYmSuccessStatus("downloadShipmentInboundAct", status);
  }
}
