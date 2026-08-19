// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDownloadShipmentReceptionTransferActResponse } from "./contract.js";
import type {
  DownloadShipmentReceptionTransferActInput,
  DownloadShipmentReceptionTransferActResponse,
} from "./types.js";

export const DOWNLOAD_SHIPMENT_RECEPTION_TRANSFER_ACT_OPERATION_ID =
  "downloadShipmentReceptionTransferAct";

const definition: YmOperationDefinition<DownloadShipmentReceptionTransferActResponse> =
  {
    operationId: DOWNLOAD_SHIPMENT_RECEPTION_TRANSFER_ACT_OPERATION_ID,
    method: "GET",
    path: "/v2/campaigns/{campaignId}/shipments/reception-transfer-act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "campaignId", location: "path", required: true, array: false },
      {
        name: "warehouse_id",
        location: "query",
        required: false,
        array: false,
      },
      { name: "signatory", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "array-buffer",
    accept: "application/pdf",
    parseResponse: parseDownloadShipmentReceptionTransferActResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeDownloadShipmentReceptionTransferAct(
  execute: YmOperationExecutor,
  input: DownloadShipmentReceptionTransferActInput,
  options: YmRequestOptions = {},
): Promise<DownloadShipmentReceptionTransferActResponse> {
  return execute(definition, input, options);
}
