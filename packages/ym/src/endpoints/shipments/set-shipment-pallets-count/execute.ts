// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetShipmentPalletsCountResponse } from "./contract.js";
import type {
  SetShipmentPalletsCountInput,
  SetShipmentPalletsCountResponse,
} from "./types.js";

export const SET_SHIPMENT_PALLETS_COUNT_OPERATION_ID =
  "setShipmentPalletsCount";

const definition: YmOperationDefinition<SetShipmentPalletsCountResponse> = {
  operationId: SET_SHIPMENT_PALLETS_COUNT_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetShipmentPalletsCountResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetShipmentPalletsCount(
  execute: YmOperationExecutor,
  input: SetShipmentPalletsCountInput,
  options: YmRequestOptions = {},
): Promise<SetShipmentPalletsCountResponse> {
  return execute(definition, input, options);
}
