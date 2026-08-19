// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteOutletResponse } from "./contract.js";
import type { DeleteOutletInput, DeleteOutletResponse } from "./types.js";

export const DELETE_OUTLET_OPERATION_ID = "deleteOutlet";

const definition: YmOperationDefinition<DeleteOutletResponse> = {
  operationId: DELETE_OUTLET_OPERATION_ID,
  method: "DELETE",
  path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "outletId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteOutletResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteOutlet(
  execute: YmOperationExecutor,
  input: DeleteOutletInput,
  options: YmRequestOptions = {},
): Promise<DeleteOutletResponse> {
  return execute(definition, input, options);
}
