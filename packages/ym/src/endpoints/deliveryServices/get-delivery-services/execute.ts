// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetDeliveryServicesResponse } from "./contract.js";
import type { GetDeliveryServicesResponse } from "./types.js";

export const GET_DELIVERY_SERVICES_OPERATION_ID = "getDeliveryServices";

const definition: YmOperationDefinition<GetDeliveryServicesResponse> = {
  operationId: GET_DELIVERY_SERVICES_OPERATION_ID,
  method: "GET",
  path: "/v2/delivery/services",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetDeliveryServicesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetDeliveryServices(
  execute: YmOperationExecutor,
  options: YmRequestOptions = {},
): Promise<GetDeliveryServicesResponse> {
  return execute(definition, undefined, options);
}
