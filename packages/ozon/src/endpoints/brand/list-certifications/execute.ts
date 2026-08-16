import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listBrandCertificationsResponseSchema } from "./contract.js";
import type {
  ListBrandCertificationsRequest,
  ListBrandCertificationsResponse,
} from "./types.js";

export const LIST_BRAND_CERTIFICATIONS_OPERATION_ID =
  "BrandAPI_BrandCompanyCertificationList";

/** @internal */
export async function executeListBrandCertifications(
  transport: Transport,
  input: ListBrandCertificationsRequest,
  options: OzonRequestOptions = {},
): Promise<ListBrandCertificationsResponse> {
  const response = await transport.request({
    operationId: LIST_BRAND_CERTIFICATIONS_OPERATION_ID,
    method: "POST",
    path: "/v1/brand/company-certification/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listBrandCertificationsResponseSchema,
    response.body,
    LIST_BRAND_CERTIFICATIONS_OPERATION_ID,
  );
}
