import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPostingProductExemplarStatusV5ResponseSchema } from "./contract.js";
import type {
  GetFbsPostingProductExemplarStatusV5Request,
  GetFbsPostingProductExemplarStatusV5Response,
} from "./types.js";

export const GET_FBS_POSTING_PRODUCT_EXEMPLAR_STATUS_V5_OPERATION_ID =
  "PostingAPI_FbsPostingProductExemplarStatusV5";

export async function executeGetFbsPostingProductExemplarStatusV5(
  transport: Transport,
  input: GetFbsPostingProductExemplarStatusV5Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingProductExemplarStatusV5Response> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_PRODUCT_EXEMPLAR_STATUS_V5_OPERATION_ID,
    method: "POST",
    path: "/v5/fbs/posting/product/exemplar/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getFbsPostingProductExemplarStatusV5ResponseSchema,
    response.body,
    GET_FBS_POSTING_PRODUCT_EXEMPLAR_STATUS_V5_OPERATION_ID,
  );
}
