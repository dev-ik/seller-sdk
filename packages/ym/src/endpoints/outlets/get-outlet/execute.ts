// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOutletResponse } from "./contract.js";
import type { GetOutletInput, GetOutletResponse } from "./types.js";

export const GET_OUTLET_OPERATION_ID = "getOutlet";

const definition: YmOperationDefinition<GetOutletResponse> = {
  operationId: GET_OUTLET_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "outletId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOutletResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOutlet(
  execute: YmOperationExecutor,
  input: GetOutletInput,
  options: YmRequestOptions = {},
): Promise<GetOutletResponse> {
  return execute(definition, input, options);
}
