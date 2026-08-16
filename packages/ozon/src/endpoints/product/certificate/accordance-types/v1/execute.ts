import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { certificateDictionaryResponseSchema } from "../../shared/contract.js";
import type { ListCertificateAccordanceTypesV1Response } from "./types.js";
export const LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID =
  "ProductAPI_ProductCertificateAccordanceTypes";
export async function executeListCertificateAccordanceTypesV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateAccordanceTypesV1Response> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID,
    method: "GET",
    path: "/v1/product/certificate/accordance-types",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    certificateDictionaryResponseSchema,
    response.body,
    LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID,
  );
}
