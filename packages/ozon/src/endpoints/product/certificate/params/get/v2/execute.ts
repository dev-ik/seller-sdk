import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getProductCertificateParamsV2ResponseSchema } from "./contract.js";
import type {
  GetProductCertificateParamsV2Request,
  GetProductCertificateParamsV2Response,
} from "./types.js";

export const GET_PRODUCT_CERTIFICATE_PARAMS_V2_OPERATION_ID =
  "ProductCertificateParams";

export async function executeGetProductCertificateParamsV2(
  transport: Transport,
  input: GetProductCertificateParamsV2Request,
  options: OzonRequestOptions = {},
): Promise<GetProductCertificateParamsV2Response> {
  const response = await transport.request({
    operationId: GET_PRODUCT_CERTIFICATE_PARAMS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/certification/params",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getProductCertificateParamsV2ResponseSchema,
    response.body,
    GET_PRODUCT_CERTIFICATE_PARAMS_V2_OPERATION_ID,
  );
}
