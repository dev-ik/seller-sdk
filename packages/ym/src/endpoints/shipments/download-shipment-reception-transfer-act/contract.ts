// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentReceptionTransferActResponse } from "./types.js";

export function parseDownloadShipmentReceptionTransferActResponse(
  status: number,
  input: unknown,
): DownloadShipmentReceptionTransferActResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(
        input,
        "downloadShipmentReceptionTransferAct",
      );
    default:
      return unexpectedYmSuccessStatus(
        "downloadShipmentReceptionTransferAct",
        status,
      );
  }
}
