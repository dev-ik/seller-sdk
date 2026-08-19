// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateWarehouseStatusResponse } from "./contract.js";
import type {
  UpdateWarehouseStatusInput,
  UpdateWarehouseStatusResponse,
} from "./types.js";

export const UPDATE_WAREHOUSE_STATUS_OPERATION_ID = "updateWarehouseStatus";

const definition: YmOperationDefinition<UpdateWarehouseStatusResponse> = {
  operationId: UPDATE_WAREHOUSE_STATUS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/warehouse/status",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateWarehouseStatusResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateWarehouseStatus(
  execute: YmOperationExecutor,
  input: UpdateWarehouseStatusInput,
  options: YmRequestOptions = {},
): Promise<UpdateWarehouseStatusResponse> {
  return execute(definition, input, options);
}
