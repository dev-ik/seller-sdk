import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createProductCertificateV1ResponseSchema } from "./contract.js";
import type {
  CreateProductCertificateV1Request,
  CreateProductCertificateV1Response,
} from "./types.js";
export const CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID =
  "ProductAPI_ProductCertificateCreate";
export async function executeCreateProductCertificateV1(
  transport: Transport,
  input: CreateProductCertificateV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateProductCertificateV1Response> {
  const body = new FormData();
  for (const file of input.files) {
    if (file.filename === undefined) body.append("files", file.data);
    else body.append("files", file.data, file.filename);
  }
  body.append("name", input.name);
  body.append("number", input.number);
  body.append("type_code", input.type_code);
  body.append("issue_date", input.issue_date);
  if (input.accordance_type_code !== undefined)
    body.append("accordance_type_code", input.accordance_type_code);
  if (input.expire_date !== undefined)
    body.append("expire_date", input.expire_date);
  const response = await transport.request({
    operationId: CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/create",
    body,
    bodyEncoding: "form-data",
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createProductCertificateV1ResponseSchema,
    response.body,
    CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID,
  );
}
