// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseTransferOrdersFromShipmentResponse } from "./contract.js";
import type {
  TransferOrdersFromShipmentInput,
  TransferOrdersFromShipmentResponse,
} from "./types.js";

export const TRANSFER_ORDERS_FROM_SHIPMENT_OPERATION_ID =
  "transferOrdersFromShipment";

const definition: YmOperationDefinition<TransferOrdersFromShipmentResponse> = {
  operationId: TRANSFER_ORDERS_FROM_SHIPMENT_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/transfer",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseTransferOrdersFromShipmentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeTransferOrdersFromShipment(
  execute: YmOperationExecutor,
  input: TransferOrdersFromShipmentInput,
  options: YmRequestOptions = {},
): Promise<TransferOrdersFromShipmentResponse> {
  return execute(definition, input, options);
}
