import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listCertificateProductsResponseSchema } from "./contract.js";
import type {
  ListCertificateProductsRequest,
  ListCertificateProductsResponse,
} from "./types.js";

export const LIST_CERTIFICATE_PRODUCTS_OPERATION_ID = "CertificateProductsList";

export async function executeListCertificateProducts(
  transport: Transport,
  input: ListCertificateProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListCertificateProductsResponse> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/products/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listCertificateProductsResponseSchema,
    response.body,
    LIST_CERTIFICATE_PRODUCTS_OPERATION_ID,
  );
}
