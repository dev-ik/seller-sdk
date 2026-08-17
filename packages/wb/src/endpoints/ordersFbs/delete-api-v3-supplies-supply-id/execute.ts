// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3SuppliesSupplyIdResponse } from "./contract.js";
import type {
  DeleteApiV3SuppliesSupplyIdInput,
  DeleteApiV3SuppliesSupplyIdResponse,
} from "./types.js";

export const DELETE_API_V3_SUPPLIES_SUPPLY_ID_OPERATION_ID =
  "DELETE /api/v3/supplies/{supplyId}";

const definition: WbOperationDefinition<DeleteApiV3SuppliesSupplyIdResponse> = {
  operationId: DELETE_API_V3_SUPPLIES_SUPPLY_ID_OPERATION_ID,
  method: "DELETE",
  path: "/api/v3/supplies/{supplyId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "supplyId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteApiV3SuppliesSupplyIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeDeleteApiV3SuppliesSupplyId(
  execute: WbOperationExecutor,
  input: DeleteApiV3SuppliesSupplyIdInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3SuppliesSupplyIdResponse> {
  return execute(definition, input, options);
}
