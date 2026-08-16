import type { Transport } from "#internal-core";
import { validateFbpDirectDraftProductsV1ResponseSchema } from "../../../../direct/product/validate/v1/contract.js";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  ValidateFbpDropOffDraftProductsV1Request,
  ValidateFbpDropOffDraftProductsV1Response,
} from "./types.js";

export const VALIDATE_FBP_DROP_OFF_DRAFT_PRODUCTS_V1_OPERATION_ID =
  "FbpDraftDropOffProductValidate";

export async function executeValidateFbpDropOffDraftProductsV1(
  transport: Transport,
  input: ValidateFbpDropOffDraftProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ValidateFbpDropOffDraftProductsV1Response> {
  const response = await transport.request({
    operationId: VALIDATE_FBP_DROP_OFF_DRAFT_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/product/validate",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    validateFbpDirectDraftProductsV1ResponseSchema,
    response.body,
    VALIDATE_FBP_DROP_OFF_DRAFT_PRODUCTS_V1_OPERATION_ID,
  );
}
