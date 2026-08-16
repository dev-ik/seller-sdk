import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getSupplyOrderActSummaryResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderActSummaryRequest,
  GetSupplyOrderActSummaryResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID =
  "SupplyOrderActSummaryGet";
export async function executeGetSupplyOrderActSummary(
  transport: Transport,
  input: GetSupplyOrderActSummaryRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderActSummaryResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/act/summary/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderActSummaryResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID,
  );
}
