import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { addProductBarcodesResponseSchema } from "./contract.js";
import type {
  AddProductBarcodesRequest,
  AddProductBarcodesResponse,
} from "./types.js";

export const ADD_PRODUCT_BARCODES_OPERATION_ID = "add-barcode";

/** @internal */
export async function executeAddProductBarcodes(
  transport: Transport,
  input: AddProductBarcodesRequest,
  options: OzonRequestOptions = {},
): Promise<AddProductBarcodesResponse> {
  const response = await transport.request({
    operationId: ADD_PRODUCT_BARCODES_OPERATION_ID,
    method: "POST",
    path: "/v1/barcode/add",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    addProductBarcodesResponseSchema,
    response.body,
    ADD_PRODUCT_BARCODES_OPERATION_ID,
  );
}
