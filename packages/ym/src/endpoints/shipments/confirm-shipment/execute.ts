// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseConfirmShipmentResponse } from "./contract.js";
import type { ConfirmShipmentInput, ConfirmShipmentResponse } from "./types.js";

export const CONFIRM_SHIPMENT_OPERATION_ID = "confirmShipment";

const definition: YmOperationDefinition<ConfirmShipmentResponse> = {
  operationId: CONFIRM_SHIPMENT_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/confirm",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseConfirmShipmentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeConfirmShipment(
  execute: YmOperationExecutor,
  input: ConfirmShipmentInput,
  options: YmRequestOptions = {},
): Promise<ConfirmShipmentResponse> {
  return execute(definition, input, options);
}
