// Generated runtime response contract for this Yandex Market endpoint.
import {
  parseYmBinaryResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import type { DownloadShipmentTransportationWaybillResponse } from "./types.js";

export function parseDownloadShipmentTransportationWaybillResponse(
  status: number,
  input: unknown,
): DownloadShipmentTransportationWaybillResponse {
  switch (status) {
    case 200:
      return parseYmBinaryResponse(
        input,
        "downloadShipmentTransportationWaybill",
      );
    default:
      return unexpectedYmSuccessStatus(
        "downloadShipmentTransportationWaybill",
        status,
      );
  }
}
