import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { generateProductBarcodesResponseSchema } from "./contract.js";
import type {
  GenerateProductBarcodesRequest,
  GenerateProductBarcodesResponse,
} from "./types.js";

export const GENERATE_PRODUCT_BARCODES_OPERATION_ID = "generate-barcode";

/** @internal */
export async function executeGenerateProductBarcodes(
  transport: Transport,
  input: GenerateProductBarcodesRequest,
  options: OzonRequestOptions = {},
): Promise<GenerateProductBarcodesResponse> {
  const response = await transport.request({
    operationId: GENERATE_PRODUCT_BARCODES_OPERATION_ID,
    method: "POST",
    path: "/v1/barcode/generate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    generateProductBarcodesResponseSchema,
    response.body,
    GENERATE_PRODUCT_BARCODES_OPERATION_ID,
  );
}
