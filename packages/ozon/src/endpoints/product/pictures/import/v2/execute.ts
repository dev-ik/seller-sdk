import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { importProductPicturesV2ResponseSchema } from "./contract.js";
import type {
  ImportProductPicturesV2Request,
  ImportProductPicturesV2Response,
} from "./types.js";
export const IMPORT_PRODUCT_PICTURES_V2_OPERATION_ID =
  "ProductImportPicturesV2";
export async function executeImportProductPicturesV2(
  transport: Transport,
  input: ImportProductPicturesV2Request,
  options: OzonRequestOptions = {},
): Promise<ImportProductPicturesV2Response> {
  const response = await transport.request({
    operationId: IMPORT_PRODUCT_PICTURES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/pictures/import",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    importProductPicturesV2ResponseSchema,
    response.body,
    IMPORT_PRODUCT_PICTURES_V2_OPERATION_ID,
  );
}
