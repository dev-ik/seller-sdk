// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3SuppliesSupplyIdTrbxResponse } from "./contract.js";
import type {
  GetApiV3SuppliesSupplyIdTrbxInput,
  GetApiV3SuppliesSupplyIdTrbxResponse,
} from "./types.js";

export const GET_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID =
  "GET /api/v3/supplies/{supplyId}/trbx";

const definition: WbOperationDefinition<GetApiV3SuppliesSupplyIdTrbxResponse> =
  {
    operationId: GET_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID,
    method: "GET",
    path: "/api/v3/supplies/{supplyId}/trbx",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiV3SuppliesSupplyIdTrbxResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiV3SuppliesSupplyIdTrbx(
  execute: WbOperationExecutor,
  input: GetApiV3SuppliesSupplyIdTrbxInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3SuppliesSupplyIdTrbxResponse> {
  return execute(definition, input, options);
}
