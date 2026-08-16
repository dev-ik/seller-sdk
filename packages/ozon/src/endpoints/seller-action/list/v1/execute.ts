import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listSellerActionsV1ResponseSchema } from "./contract.js";
import type {
  ListSellerActionsV1Request,
  ListSellerActionsV1Response,
} from "./types.js";
export const LIST_SELLER_ACTIONS_V1_OPERATION_ID = "SellerActionsList";
export async function executeListSellerActionsV1(
  transport: Transport,
  input: ListSellerActionsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSellerActionsV1Response> {
  const response = await transport.request({
    operationId: LIST_SELLER_ACTIONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSellerActionsV1ResponseSchema,
    response.body,
    LIST_SELLER_ACTIONS_V1_OPERATION_ID,
  );
}
