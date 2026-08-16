import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { validateFbpDirectDraftProductsV1ResponseSchema } from "./contract.js";
import type {
  ValidateFbpDirectDraftProductsV1Request,
  ValidateFbpDirectDraftProductsV1Response,
} from "./types.js";
export const VALIDATE_FBP_DIRECT_DRAFT_PRODUCTS_V1_OPERATION_ID =
  "FbpDraftDirectProductValidate";
export async function executeValidateFbpDirectDraftProductsV1(
  transport: Transport,
  input: ValidateFbpDirectDraftProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ValidateFbpDirectDraftProductsV1Response> {
  const response = await transport.request({
    operationId: VALIDATE_FBP_DIRECT_DRAFT_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/product/validate",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    validateFbpDirectDraftProductsV1ResponseSchema,
    response.body,
    VALIDATE_FBP_DIRECT_DRAFT_PRODUCTS_V1_OPERATION_ID,
  );
}
