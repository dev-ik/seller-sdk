// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3SuppliesSupplyIdResponse } from "./contract.js";
import type {
  GetApiV3SuppliesSupplyIdInput,
  GetApiV3SuppliesSupplyIdResponse,
} from "./types.js";

export const GET_API_V3_SUPPLIES_SUPPLY_ID_OPERATION_ID =
  "GET /api/v3/supplies/{supplyId}";

const definition: WbOperationDefinition<GetApiV3SuppliesSupplyIdResponse> = {
  operationId: GET_API_V3_SUPPLIES_SUPPLY_ID_OPERATION_ID,
  method: "GET",
  path: "/api/v3/supplies/{supplyId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "supplyId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3SuppliesSupplyIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3SuppliesSupplyId(
  execute: WbOperationExecutor,
  input: GetApiV3SuppliesSupplyIdInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3SuppliesSupplyIdResponse> {
  return execute(definition, input, options);
}
