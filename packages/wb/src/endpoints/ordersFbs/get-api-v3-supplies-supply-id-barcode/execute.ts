// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3SuppliesSupplyIdBarcodeResponse } from "./contract.js";
import type {
  GetApiV3SuppliesSupplyIdBarcodeInput,
  GetApiV3SuppliesSupplyIdBarcodeResponse,
} from "./types.js";

export const GET_API_V3_SUPPLIES_SUPPLY_ID_BARCODE_OPERATION_ID =
  "GET /api/v3/supplies/{supplyId}/barcode";

const definition: WbOperationDefinition<GetApiV3SuppliesSupplyIdBarcodeResponse> =
  {
    operationId: GET_API_V3_SUPPLIES_SUPPLY_ID_BARCODE_OPERATION_ID,
    method: "GET",
    path: "/api/v3/supplies/{supplyId}/barcode",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
      { name: "type", location: "query", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiV3SuppliesSupplyIdBarcodeResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiV3SuppliesSupplyIdBarcode(
  execute: WbOperationExecutor,
  input: GetApiV3SuppliesSupplyIdBarcodeInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3SuppliesSupplyIdBarcodeResponse> {
  return execute(definition, input, options);
}
