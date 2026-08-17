// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3SuppliesSupplyIdTrbxResponse } from "./contract.js";
import type {
  DeleteApiV3SuppliesSupplyIdTrbxInput,
  DeleteApiV3SuppliesSupplyIdTrbxResponse,
} from "./types.js";

export const DELETE_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID =
  "DELETE /api/v3/supplies/{supplyId}/trbx";

const definition: WbOperationDefinition<DeleteApiV3SuppliesSupplyIdTrbxResponse> =
  {
    operationId: DELETE_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID,
    method: "DELETE",
    path: "/api/v3/supplies/{supplyId}/trbx",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseDeleteApiV3SuppliesSupplyIdTrbxResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeDeleteApiV3SuppliesSupplyIdTrbx(
  execute: WbOperationExecutor,
  input: DeleteApiV3SuppliesSupplyIdTrbxInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3SuppliesSupplyIdTrbxResponse> {
  return execute(definition, input, options);
}
