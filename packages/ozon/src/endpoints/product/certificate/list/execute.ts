import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listProductCertificatesResponseSchema } from "./contract.js";
import type {
  ListProductCertificatesRequest,
  ListProductCertificatesResponse,
} from "./types.js";

export const LIST_PRODUCT_CERTIFICATES_OPERATION_ID = "CertificateList";

export async function executeListProductCertificates(
  transport: Transport,
  input: ListProductCertificatesRequest,
  options: OzonRequestOptions = {},
): Promise<ListProductCertificatesResponse> {
  const response = await transport.request({
    operationId: LIST_PRODUCT_CERTIFICATES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listProductCertificatesResponseSchema,
    response.body,
    LIST_PRODUCT_CERTIFICATES_OPERATION_ID,
  );
}
