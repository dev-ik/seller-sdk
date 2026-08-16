import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { archiveProductsResponseSchema } from "./contract.js";
import type {
  ArchiveProductsRequest,
  ArchiveProductsResponse,
} from "./types.js";

export const ARCHIVE_PRODUCTS_OPERATION_ID = "ProductAPI_ProductArchive";

export async function executeArchiveProducts(
  transport: Transport,
  input: ArchiveProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ArchiveProductsResponse> {
  const response = await transport.request({
    operationId: ARCHIVE_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/archive",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    archiveProductsResponseSchema,
    response.body,
    ARCHIVE_PRODUCTS_OPERATION_ID,
  );
}
