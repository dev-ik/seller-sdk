import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listSupplyOrdersV3ResponseSchema } from "./contract.js";
import type {
  ListSupplyOrdersV3Request,
  ListSupplyOrdersV3Response,
} from "./types.js";

export const LIST_SUPPLY_ORDERS_V3_OPERATION_ID = "SupplyOrderList";
export async function executeListSupplyOrdersV3(
  transport: Transport,
  input: ListSupplyOrdersV3Request,
  options: OzonRequestOptions = {},
): Promise<ListSupplyOrdersV3Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_ORDERS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/supply-order/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyOrdersV3ResponseSchema,
    response.body,
    LIST_SUPPLY_ORDERS_V3_OPERATION_ID,
  );
}
