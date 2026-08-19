// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentInboundActResponse } from "./contract.js";
import type {
  DownloadShipmentInboundActInput,
  DownloadShipmentInboundActResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_INBOUND_ACT_OPERATION_ID =
  "downloadShipmentInboundAct";

const definition: YmOperationDefinition<DownloadShipmentInboundActResponse> = {
  operationId: DOWNLOAD_SHIPMENT_INBOUND_ACT_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/inbound-act",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "application/pdf",
  parseResponse: parseDownloadShipmentInboundActResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDownloadShipmentInboundAct(
  execute: YmOperationExecutor,
  input: DownloadShipmentInboundActInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentInboundActResponse> {
  return execute(definition, input, options);
}
