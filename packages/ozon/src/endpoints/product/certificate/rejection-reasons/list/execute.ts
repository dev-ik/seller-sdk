import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { certificateStatusListResponseSchema } from "../../shared/status-contract.js";
import type { ListCertificateRejectionReasonsResponse } from "./types.js";

export const LIST_CERTIFICATE_REJECTION_REASONS_OPERATION_ID =
  "RejectionReasonsList";

export async function executeListCertificateRejectionReasons(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateRejectionReasonsResponse> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_REJECTION_REASONS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/rejection_reasons/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    certificateStatusListResponseSchema,
    response.body,
    LIST_CERTIFICATE_REJECTION_REASONS_OPERATION_ID,
  );
}
