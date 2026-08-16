import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { deleteProductCertificateResponseSchema } from "./contract.js";
import type {
  DeleteProductCertificateRequest,
  DeleteProductCertificateResponse,
} from "./types.js";
export const DELETE_PRODUCT_CERTIFICATE_OPERATION_ID = "CertificateDelete";
export async function executeDeleteProductCertificate(
  transport: Transport,
  input: DeleteProductCertificateRequest,
  options: OzonRequestOptions = {},
): Promise<DeleteProductCertificateResponse> {
  const response = await transport.request({
    operationId: DELETE_PRODUCT_CERTIFICATE_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteProductCertificateResponseSchema,
    response.body,
    DELETE_PRODUCT_CERTIFICATE_OPERATION_ID,
  );
}
