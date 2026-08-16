import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductCertificateInfoResponseSchema } from "./contract.js";
import type {
  GetProductCertificateInfoRequest,
  GetProductCertificateInfoResponse,
} from "./types.js";
export const GET_PRODUCT_CERTIFICATE_INFO_OPERATION_ID = "CertificateInfo";
export async function executeGetProductCertificateInfo(
  transport: Transport,
  input: GetProductCertificateInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductCertificateInfoResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_CERTIFICATE_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getProductCertificateInfoResponseSchema,
    response.body,
    GET_PRODUCT_CERTIFICATE_INFO_OPERATION_ID,
  );
}
