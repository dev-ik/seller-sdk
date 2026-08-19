// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetOrderShipmentBoxesResponse } from "./contract.js";
import type {
  SetOrderShipmentBoxesInput,
  SetOrderShipmentBoxesResponse,
} from "./types.js";

export const SET_ORDER_SHIPMENT_BOXES_OPERATION_ID = "setOrderShipmentBoxes";

const definition: YmOperationDefinition<SetOrderShipmentBoxesResponse> = {
  operationId: SET_ORDER_SHIPMENT_BOXES_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetOrderShipmentBoxesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetOrderShipmentBoxes(
  execute: YmOperationExecutor,
  input: SetOrderShipmentBoxesInput,
  options: YmRequestOptions = {},
): Promise<SetOrderShipmentBoxesResponse> {
  return execute(definition, input, options);
}
