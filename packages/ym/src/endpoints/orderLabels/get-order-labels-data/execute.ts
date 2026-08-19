// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderLabelsDataResponse } from "./contract.js";
import type {
  GetOrderLabelsDataInput,
  GetOrderLabelsDataResponse,
} from "./types.js";

export const GET_ORDER_LABELS_DATA_OPERATION_ID = "getOrderLabelsData";

const definition: YmOperationDefinition<GetOrderLabelsDataResponse> = {
  operationId: GET_ORDER_LABELS_DATA_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels/data",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderLabelsDataResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrderLabelsData(
  execute: YmOperationExecutor,
  input: GetOrderLabelsDataInput,
  options: YmRequestOptions = {},
): Promise<GetOrderLabelsDataResponse> {
  return execute(definition, input, options);
}
