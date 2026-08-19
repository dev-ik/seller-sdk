// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetShipmentOrdersInfoResponse } from "./contract.js";
import type {
  GetShipmentOrdersInfoInput,
  GetShipmentOrdersInfoResponse,
} from "./types.js";

export const GET_SHIPMENT_ORDERS_INFO_OPERATION_ID = "getShipmentOrdersInfo";

const definition: YmOperationDefinition<GetShipmentOrdersInfoResponse> = {
  operationId: GET_SHIPMENT_ORDERS_INFO_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/info",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetShipmentOrdersInfoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetShipmentOrdersInfo(
  execute: YmOperationExecutor,
  input: GetShipmentOrdersInfoInput,
  options: YmRequestOptions = {},
): Promise<GetShipmentOrdersInfoResponse> {
  return execute(definition, input, options);
}
