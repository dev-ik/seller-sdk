import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updateSupplyOrderContentResponseSchema } from "./contract.js";
import type {
  UpdateSupplyOrderContentRequest,
  UpdateSupplyOrderContentResponse,
} from "./types.js";
export const UPDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderContentUpdate";
export async function executeUpdateSupplyOrderContent(
  transport: Transport,
  input: UpdateSupplyOrderContentRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateSupplyOrderContentResponse> {
  const response = await transport.request({
    operationId: UPDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/content/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateSupplyOrderContentResponseSchema,
    response.body,
    UPDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
  );
}
