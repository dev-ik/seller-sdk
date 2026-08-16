import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { certificateStatusListResponseSchema } from "../../shared/status-contract.js";
import type { ListCertificateStatusesResponse } from "./types.js";

export const LIST_CERTIFICATE_STATUSES_OPERATION_ID = "CertificateStatusList";

export async function executeListCertificateStatuses(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateStatusesResponse> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_STATUSES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/status/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    certificateStatusListResponseSchema,
    response.body,
    LIST_CERTIFICATE_STATUSES_OPERATION_ID,
  );
}
