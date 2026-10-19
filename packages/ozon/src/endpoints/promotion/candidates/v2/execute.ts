import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listPromotionCandidatesV2ResponseSchema } from "./contract.js";
import type {
  ListPromotionCandidatesV2Request,
  ListPromotionCandidatesV2Response,
} from "./types.js";
export const LIST_PROMOTION_CANDIDATES_V2_OPERATION_ID = "ActionsCandidates";
export async function executeListPromotionCandidatesV2(
  transport: Transport,
  input: ListPromotionCandidatesV2Request,
  options: OzonRequestOptions = {},
): Promise<ListPromotionCandidatesV2Response> {
  const response = await transport.request({
    operationId: LIST_PROMOTION_CANDIDATES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/candidates",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listPromotionCandidatesV2ResponseSchema,
    response.body,
    LIST_PROMOTION_CANDIDATES_V2_OPERATION_ID,
  );
}
