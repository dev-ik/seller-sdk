import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listUnpaidLegalProductsV1ResponseSchema } from "./contract.js";
import type {
  ListUnpaidLegalProductsV1Request,
  ListUnpaidLegalProductsV1Response,
} from "./types.js";
export const LIST_UNPAID_LEGAL_PRODUCTS_V1_OPERATION_ID =
  "PostingAPI_UnpaidLegalProductList";
export async function executeListUnpaidLegalProductsV1(
  transport: Transport,
  input: ListUnpaidLegalProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListUnpaidLegalProductsV1Response> {
  const response = await transport.request({
    operationId: LIST_UNPAID_LEGAL_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/unpaid-legal/product/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listUnpaidLegalProductsV1ResponseSchema,
    response.body,
    LIST_UNPAID_LEGAL_PRODUCTS_V1_OPERATION_ID,
  );
}
