// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentTransportationWaybillResponse } from "./contract.js";
import type {
  DownloadShipmentTransportationWaybillInput,
  DownloadShipmentTransportationWaybillResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_TRANSPORTATION_WAYBILL_OPERATION_ID =
  "downloadShipmentTransportationWaybill";

const definition: YmOperationDefinition<DownloadShipmentTransportationWaybillResponse> =
  {
    operationId: DOWNLOAD_SHIPMENT_TRANSPORTATION_WAYBILL_OPERATION_ID,
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/transportation-waybill",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "campaignId", location: "path", required: true, array: false },
      { name: "shipmentId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "array-buffer",
    accept: "application/vnd.ms-excel",
    parseResponse: parseDownloadShipmentTransportationWaybillResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeDownloadShipmentTransportationWaybill(
  execute: YmOperationExecutor,
  input: DownloadShipmentTransportationWaybillInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentTransportationWaybillResponse> {
  return execute(definition, input, options);
}
