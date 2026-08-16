import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbpOrdersV1ResponseSchema } from "./contract.js";
import type {
  ListFbpOrdersV1Request,
  ListFbpOrdersV1Response,
} from "./types.js";

export const LIST_FBP_ORDERS_V1_OPERATION_ID = "FbpAPI_FbpOrderList";

export async function executeListFbpOrdersV1(
  transport: Transport,
  input: ListFbpOrdersV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpOrdersV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_ORDERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpOrdersV1ResponseSchema,
    response.body,
    LIST_FBP_ORDERS_V1_OPERATION_ID,
  );
}
