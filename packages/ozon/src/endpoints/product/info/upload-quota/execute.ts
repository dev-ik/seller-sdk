import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductUploadQuotaResponseSchema } from "./contract.js";
import type { GetProductUploadQuotaResponse } from "./types.js";

export const GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID =
  "ProductAPI_GetUploadQuota";

export async function executeGetProductUploadQuota(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetProductUploadQuotaResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID,
    method: "POST",
    path: "/v4/product/info/limit",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductUploadQuotaResponseSchema,
    response.body,
    GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID,
  );
}
