import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createSupplyOrderPassResponseSchema } from "./contract.js";
import type {
  CreateSupplyOrderPassRequest,
  CreateSupplyOrderPassResponse,
} from "./types.js";
export const CREATE_SUPPLY_ORDER_PASS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderPassCreate";
export async function executeCreateSupplyOrderPass(
  transport: Transport,
  input: CreateSupplyOrderPassRequest,
  options: OzonRequestOptions = {},
): Promise<CreateSupplyOrderPassResponse> {
  const response = await transport.request({
    operationId: CREATE_SUPPLY_ORDER_PASS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/pass/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createSupplyOrderPassResponseSchema,
    response.body,
    CREATE_SUPPLY_ORDER_PASS_OPERATION_ID,
  );
}
