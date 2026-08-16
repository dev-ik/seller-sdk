import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createOrGetFbsPostingProductExemplarsV6ResponseSchema } from "./contract.js";
import type {
  CreateOrGetFbsPostingProductExemplarsV6Request,
  CreateOrGetFbsPostingProductExemplarsV6Response,
} from "./types.js";

export const CREATE_OR_GET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID =
  "PostingAPI_FbsPostingProductExemplarCreateOrGetV6";

export async function executeCreateOrGetFbsPostingProductExemplarsV6(
  transport: Transport,
  input: CreateOrGetFbsPostingProductExemplarsV6Request,
  options: OzonRequestOptions = {},
): Promise<CreateOrGetFbsPostingProductExemplarsV6Response> {
  const response = await transport.request({
    operationId: CREATE_OR_GET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
    method: "POST",
    path: "/v6/fbs/posting/product/exemplar/create-or-get",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    createOrGetFbsPostingProductExemplarsV6ResponseSchema,
    response.body,
    CREATE_OR_GET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
  );
}
