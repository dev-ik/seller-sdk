// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentPalletLabelsResponse } from "./types.js";

export function parseDownloadShipmentPalletLabelsResponse(
  status: number,
  input: unknown,
): DownloadShipmentPalletLabelsResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "downloadShipmentPalletLabels");
    default:
      return unexpectedYmSuccessStatus("downloadShipmentPalletLabels", status);
  }
}
