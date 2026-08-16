import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getSupplyOrdersV3ResponseSchema } from "./contract.js";
import type {
  GetSupplyOrdersV3Request,
  GetSupplyOrdersV3Response,
} from "./types.js";

export const GET_SUPPLY_ORDERS_V3_OPERATION_ID = "SupplyOrderGet";
export async function executeGetSupplyOrdersV3(
  transport: Transport,
  input: GetSupplyOrdersV3Request,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrdersV3Response> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDERS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/supply-order/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrdersV3ResponseSchema,
    response.body,
    GET_SUPPLY_ORDERS_V3_OPERATION_ID,
  );
}
