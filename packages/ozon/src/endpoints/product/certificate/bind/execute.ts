import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { bindProductCertificateResponseSchema } from "./contract.js";
import type {
  BindProductCertificateRequest,
  BindProductCertificateResponse,
} from "./types.js";
export const BIND_PRODUCT_CERTIFICATE_OPERATION_ID =
  "ProductAPI_ProductCertificateBind";
export async function executeBindProductCertificate(
  transport: Transport,
  input: BindProductCertificateRequest,
  options: OzonRequestOptions = {},
): Promise<BindProductCertificateResponse> {
  const response = await transport.request({
    operationId: BIND_PRODUCT_CERTIFICATE_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/bind",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    bindProductCertificateResponseSchema,
    response.body,
    BIND_PRODUCT_CERTIFICATE_OPERATION_ID,
  );
}
