// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateWarehouseModelStatusResponse } from "./contract.js";
import type {
  UpdateWarehouseModelStatusInput,
  UpdateWarehouseModelStatusResponse,
} from "./types.js";

export const UPDATE_WAREHOUSE_MODEL_STATUS_OPERATION_ID =
  "updateWarehouseModelStatus";

const definition: YmOperationDefinition<UpdateWarehouseModelStatusResponse> = {
  operationId: UPDATE_WAREHOUSE_MODEL_STATUS_OPERATION_ID,
  method: "POST",
  path: "/v3/businesses/{businessId}/warehouse/models/status",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateWarehouseModelStatusResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateWarehouseModelStatus(
  execute: YmOperationExecutor,
  input: UpdateWarehouseModelStatusInput,
  options: YmRequestOptions = {},
): Promise<UpdateWarehouseModelStatusResponse> {
  return execute(definition, input, options);
}
