import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { fbpOrderDetailsSchema } from "../../shared/v1/contract.js";
import type { GetFbpOrderV1Request, GetFbpOrderV1Response } from "./types.js";

export const GET_FBP_ORDER_V1_OPERATION_ID = "FbpAPI_FbpOrderGet";

export async function executeGetFbpOrderV1(
  transport: Transport,
  input: GetFbpOrderV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpOrderV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_ORDER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderDetailsSchema,
    response.body,
    GET_FBP_ORDER_V1_OPERATION_ID,
  );
}
