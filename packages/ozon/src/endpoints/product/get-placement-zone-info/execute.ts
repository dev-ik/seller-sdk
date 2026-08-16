import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getProductPlacementZoneInfoResponseSchema } from "./contract.js";
import type {
  GetProductPlacementZoneInfoRequest,
  GetProductPlacementZoneInfoResponse,
} from "./types.js";

export const GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID =
  "ProductAPI_GetProductPlacementZoneInfo";

/** @internal */
export async function executeGetProductPlacementZoneInfo(
  transport: Transport,
  input: GetProductPlacementZoneInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductPlacementZoneInfoResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/product/placement-zone/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductPlacementZoneInfoResponseSchema,
    response.body,
    GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID,
  );
}
