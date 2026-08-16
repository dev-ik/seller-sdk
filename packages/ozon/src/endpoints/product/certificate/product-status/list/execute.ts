import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { certificateStatusListResponseSchema } from "../../shared/status-contract.js";
import type { ListCertificateProductStatusesResponse } from "./types.js";

export const LIST_CERTIFICATE_PRODUCT_STATUSES_OPERATION_ID =
  "ProductStatusList";

export async function executeListCertificateProductStatuses(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCertificateProductStatusesResponse> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATE_PRODUCT_STATUSES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certificate/product_status/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    certificateStatusListResponseSchema,
    response.body,
    LIST_CERTIFICATE_PRODUCT_STATUSES_OPERATION_ID,
  );
}
