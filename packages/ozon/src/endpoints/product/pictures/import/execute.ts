import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { importProductPicturesResponseSchema } from "./contract.js";
import type {
  ImportProductPicturesRequest,
  ImportProductPicturesResponse,
} from "./types.js";

export const IMPORT_PRODUCT_PICTURES_OPERATION_ID =
  "ProductAPI_ProductImportPictures";

export async function executeImportProductPictures(
  transport: Transport,
  input: ImportProductPicturesRequest,
  options: OzonRequestOptions = {},
): Promise<ImportProductPicturesResponse> {
  const response = await transport.request({
    operationId: IMPORT_PRODUCT_PICTURES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/pictures/import",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    importProductPicturesResponseSchema,
    response.body,
    IMPORT_PRODUCT_PICTURES_OPERATION_ID,
  );
}
