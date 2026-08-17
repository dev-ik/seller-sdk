// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3SuppliesSupplyIdBarcodeResponse } from "./types.js";

const getApiV3SuppliesSupplyIdBarcodeResponse200Schema =
  createWbSchema<GetApiV3SuppliesSupplyIdBarcodeResponse>(
    {
      kind: "object",
      properties: { barcode: { kind: "string" }, file: { kind: "string" } },
      required: [],
    },
    ordersFbsComponents,
  );

export function parseGetApiV3SuppliesSupplyIdBarcodeResponse(
  status: number,
  input: unknown,
): GetApiV3SuppliesSupplyIdBarcodeResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3SuppliesSupplyIdBarcodeResponse200Schema,
        input,
        "GET /api/v3/supplies/{supplyId}/barcode",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v3/supplies/{supplyId}/barcode",
        status,
      );
  }
}
