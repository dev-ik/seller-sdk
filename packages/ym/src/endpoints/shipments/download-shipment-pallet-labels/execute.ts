// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentPalletLabelsResponse } from "./contract.js";
import type {
  DownloadShipmentPalletLabelsInput,
  DownloadShipmentPalletLabelsResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_PALLET_LABELS_OPERATION_ID =
  "downloadShipmentPalletLabels";

const definition: YmOperationDefinition<DownloadShipmentPalletLabelsResponse> =
  {
    operationId: DOWNLOAD_SHIPMENT_PALLET_LABELS_OPERATION_ID,
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "campaignId", location: "path", required: true, array: false },
      { name: "shipmentId", location: "path", required: true, array: false },
      { name: "format", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "array-buffer",
    accept: "application/pdf",
    parseResponse: parseDownloadShipmentPalletLabelsResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeDownloadShipmentPalletLabels(
  execute: YmOperationExecutor,
  input: DownloadShipmentPalletLabelsInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentPalletLabelsResponse> {
  return execute(definition, input, options);
}
