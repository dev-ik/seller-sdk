// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentActResponse } from "./contract.js";
import type {
  DownloadShipmentActInput,
  DownloadShipmentActResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_ACT_OPERATION_ID = "downloadShipmentAct";

const definition: YmOperationDefinition<DownloadShipmentActResponse> = {
  operationId: DOWNLOAD_SHIPMENT_ACT_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/act",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "application/pdf",
  parseResponse: parseDownloadShipmentActResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDownloadShipmentAct(
  execute: YmOperationExecutor,
  input: DownloadShipmentActInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentActResponse> {
  return execute(definition, input, options);
}
