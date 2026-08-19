// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentActResponse } from "./types.js";

export function parseDownloadShipmentActResponse(
  status: number,
  input: unknown,
): DownloadShipmentActResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "downloadShipmentAct");
    default:
      return unexpectedYmSuccessStatus("downloadShipmentAct", status);
  }
}
