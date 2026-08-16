import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { promotionProductsPageResponseSchema } from "../shared/contract.js";
import type {
  ListPromotionCandidatesRequest,
  ListPromotionCandidatesResponse,
} from "./types.js";

export const LIST_PROMOTION_CANDIDATES_OPERATION_ID = "PromosCandidates";

export async function executeListPromotionCandidates(
  transport: Transport,
  input: ListPromotionCandidatesRequest,
  options: OzonRequestOptions = {},
): Promise<ListPromotionCandidatesResponse> {
  const response = await transport.request({
    operationId: LIST_PROMOTION_CANDIDATES_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/candidates",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    promotionProductsPageResponseSchema,
    response.body,
    LIST_PROMOTION_CANDIDATES_OPERATION_ID,
  );
}
