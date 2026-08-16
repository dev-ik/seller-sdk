import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { validateFbsPostingProductExemplarsV5ResponseSchema } from "./contract.js";
import type {
  ValidateFbsPostingProductExemplarsV5Request,
  ValidateFbsPostingProductExemplarsV5Response,
} from "./types.js";

export const VALIDATE_FBS_POSTING_PRODUCT_EXEMPLARS_V5_OPERATION_ID =
  "PostingAPI_FbsPostingProductExemplarValidateV5";

export async function executeValidateFbsPostingProductExemplarsV5(
  transport: Transport,
  input: ValidateFbsPostingProductExemplarsV5Request,
  options: OzonRequestOptions = {},
): Promise<ValidateFbsPostingProductExemplarsV5Response> {
  const response = await transport.request({
    operationId: VALIDATE_FBS_POSTING_PRODUCT_EXEMPLARS_V5_OPERATION_ID,
    method: "POST",
    path: "/v5/fbs/posting/product/exemplar/validate",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    validateFbsPostingProductExemplarsV5ResponseSchema,
    response.body,
    VALIDATE_FBS_POSTING_PRODUCT_EXEMPLARS_V5_OPERATION_ID,
  );
}
