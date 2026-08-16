import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listPromotionsResponseSchema } from "./contract.js";
import type { ListPromotionsResponse } from "./types.js";

export const LIST_PROMOTIONS_OPERATION_ID = "Promos";

export async function executeListPromotions(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListPromotionsResponse> {
  const response = await transport.request({
    operationId: LIST_PROMOTIONS_OPERATION_ID,
    method: "GET",
    path: "/v1/actions",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listPromotionsResponseSchema,
    response.body,
    LIST_PROMOTIONS_OPERATION_ID,
  );
}
