import type { Transport } from "#internal-core";
import { validateFbpDirectDraftProductsV1ResponseSchema } from "../../../../direct/product/validate/v1/contract.js";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  ValidateFbpPickupDraftProductsV1Request,
  ValidateFbpPickupDraftProductsV1Response,
} from "./types.js";

export const VALIDATE_FBP_PICKUP_DRAFT_PRODUCTS_V1_OPERATION_ID =
  "FbpAPI_FbpDraftPickUpProductValidate";

export async function executeValidateFbpPickupDraftProductsV1(
  transport: Transport,
  input: ValidateFbpPickupDraftProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ValidateFbpPickupDraftProductsV1Response> {
  const response = await transport.request({
    operationId: VALIDATE_FBP_PICKUP_DRAFT_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/pick-up/product/validate",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    validateFbpDirectDraftProductsV1ResponseSchema,
    response.body,
    VALIDATE_FBP_PICKUP_DRAFT_PRODUCTS_V1_OPERATION_ID,
  );
}
