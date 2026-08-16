import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getSupplyOrderBundleResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderBundleRequest,
  GetSupplyOrderBundleResponse,
} from "./types.js";

export const GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID = "SupplyOrderBundle";
export async function executeGetSupplyOrderBundle(
  transport: Transport,
  input: GetSupplyOrderBundleRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderBundleResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/bundle",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderBundleResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID,
  );
}
