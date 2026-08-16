import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listCertificateAccordanceTypesV2ResponseSchema } from "./contract.js";
import type { ListCertificateAccordanceTypesV2Response } from "./types.js";
export const LIST_CERTIFICATE_ACCORDANCE_TYPES_V2_OPERATION_ID =
  "CertificateAccordanceTypes";
export async function executeListCertificateAccordanceTypesV2(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateAccordanceTypesV2Response> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_ACCORDANCE_TYPES_V2_OPERATION_ID,
    method: "GET",
    path: "/v2/product/certificate/accordance-types/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listCertificateAccordanceTypesV2ResponseSchema,
    response.body,
    LIST_CERTIFICATE_ACCORDANCE_TYPES_V2_OPERATION_ID,
  );
}
