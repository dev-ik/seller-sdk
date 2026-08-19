// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentDiscrepancyActResponse } from "./contract.js";
import type {
  DownloadShipmentDiscrepancyActInput,
  DownloadShipmentDiscrepancyActResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_DISCREPANCY_ACT_OPERATION_ID =
  "downloadShipmentDiscrepancyAct";

const definition: YmOperationDefinition<DownloadShipmentDiscrepancyActResponse> =
  {
    operationId: DOWNLOAD_SHIPMENT_DISCREPANCY_ACT_OPERATION_ID,
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/discrepancy-act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "campaignId", location: "path", required: true, array: false },
      { name: "shipmentId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "array-buffer",
    accept: "application/vnd.ms-excel",
    parseResponse: parseDownloadShipmentDiscrepancyActResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeDownloadShipmentDiscrepancyAct(
  execute: YmOperationExecutor,
  input: DownloadShipmentDiscrepancyActInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentDiscrepancyActResponse> {
  return execute(definition, input, options);
}
