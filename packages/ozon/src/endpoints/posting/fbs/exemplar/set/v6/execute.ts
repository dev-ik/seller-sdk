import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setFbsPostingProductExemplarsV6ResponseSchema } from "./contract.js";
import type { SetFbsPostingProductExemplarsV6Request } from "./types.js";

export const SET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID =
  "PostingAPI_FbsPostingProductExemplarSetV6";

export async function executeSetFbsPostingProductExemplarsV6(
  transport: Transport,
  input: SetFbsPostingProductExemplarsV6Request,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
    method: "POST",
    path: "/v6/fbs/posting/product/exemplar/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    setFbsPostingProductExemplarsV6ResponseSchema,
    response.body,
    SET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
  );
}
