// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetShipmentResponse } from "./contract.js";
import type { GetShipmentInput, GetShipmentResponse } from "./types.js";

export const GET_SHIPMENT_OPERATION_ID = "getShipment";

const definition: YmOperationDefinition<GetShipmentResponse> = {
  operationId: GET_SHIPMENT_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
    {
      name: "cancelledOrders",
      location: "query",
      required: false,
      array: false,
    },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetShipmentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetShipment(
  execute: YmOperationExecutor,
  input: GetShipmentInput,
  options: YmRequestOptions = {},
): Promise<GetShipmentResponse> {
  return execute(definition, input, options);
}
