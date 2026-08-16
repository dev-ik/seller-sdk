import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { unbindProductCertificateResponseSchema } from "./contract.js";
import type {
  UnbindProductCertificateRequest,
  UnbindProductCertificateResponse,
} from "./types.js";

export const UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID = "CertificateUnbind";

export async function executeUnbindProductCertificate(
  transport: Transport,
  input: UnbindProductCertificateRequest,
  options: OzonRequestOptions = {},
): Promise<UnbindProductCertificateResponse> {
  const response = await transport.request({
    operationId: UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/unbind",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    unbindProductCertificateResponseSchema,
    response.body,
    UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID,
  );
}
