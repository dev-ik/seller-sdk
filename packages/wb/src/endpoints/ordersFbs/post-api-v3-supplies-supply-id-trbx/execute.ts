// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3SuppliesSupplyIdTrbxResponse } from "./contract.js";
import type {
  PostApiV3SuppliesSupplyIdTrbxInput,
  PostApiV3SuppliesSupplyIdTrbxResponse,
} from "./types.js";

export const POST_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID =
  "POST /api/v3/supplies/{supplyId}/trbx";

const definition: WbOperationDefinition<PostApiV3SuppliesSupplyIdTrbxResponse> =
  {
    operationId: POST_API_V3_SUPPLIES_SUPPLY_ID_TRBX_OPERATION_ID,
    method: "POST",
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
    parseResponse: parsePostApiV3SuppliesSupplyIdTrbxResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePostApiV3SuppliesSupplyIdTrbx(
  execute: WbOperationExecutor,
  input: PostApiV3SuppliesSupplyIdTrbxInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3SuppliesSupplyIdTrbxResponse> {
  return execute(definition, input, options);
}
