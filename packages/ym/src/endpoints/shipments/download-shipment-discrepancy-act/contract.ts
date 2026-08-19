// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentDiscrepancyActResponse } from "./types.js";

export function parseDownloadShipmentDiscrepancyActResponse(
  status: number,
  input: unknown,
): DownloadShipmentDiscrepancyActResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(input, "downloadShipmentDiscrepancyAct");
    default:
      return unexpectedYmSuccessStatus(
        "downloadShipmentDiscrepancyAct",
        status,
      );
  }
}
