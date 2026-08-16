import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createProductCertificateV2ResponseSchema } from "./contract.js";
import type {
  CreateProductCertificateV2Request,
  CreateProductCertificateV2Response,
} from "./types.js";

export const CREATE_PRODUCT_CERTIFICATE_V2_OPERATION_ID =
  "ProductCertificateCreate";

export async function executeCreateProductCertificateV2(
  transport: Transport,
  input: CreateProductCertificateV2Request,
  options: OzonRequestOptions = {},
): Promise<CreateProductCertificateV2Response> {
  const response = await transport.request({
    operationId: CREATE_PRODUCT_CERTIFICATE_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/certificate/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createProductCertificateV2ResponseSchema,
    response.body,
    CREATE_PRODUCT_CERTIFICATE_V2_OPERATION_ID,
  );
}
