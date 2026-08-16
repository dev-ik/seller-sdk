import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { certificateDictionaryResponseSchema } from "../../shared/contract.js";
import type { ListCertificateTypesResponse } from "./types.js";
export const LIST_CERTIFICATE_TYPES_OPERATION_ID =
  "ProductAPI_ProductCertificateTypes";
export async function executeListCertificateTypes(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateTypesResponse> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_TYPES_OPERATION_ID,
    method: "GET",
    path: "/v1/product/certificate/types",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    certificateDictionaryResponseSchema,
    response.body,
    LIST_CERTIFICATE_TYPES_OPERATION_ID,
  );
}
