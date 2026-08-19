// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOutletResponse } from "./contract.js";
import type { UpdateOutletInput, UpdateOutletResponse } from "./types.js";

export const UPDATE_OUTLET_OPERATION_ID = "updateOutlet";

const definition: YmOperationDefinition<UpdateOutletResponse> = {
  operationId: UPDATE_OUTLET_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "outletId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOutletResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOutlet(
  execute: YmOperationExecutor,
  input: UpdateOutletInput,
  options: YmRequestOptions = {},
): Promise<UpdateOutletResponse> {
  return execute(definition, input, options);
}
