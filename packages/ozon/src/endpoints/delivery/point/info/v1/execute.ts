import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getDeliveryPointInfoV1ResponseSchema } from "./contract.js";
import type {
  GetDeliveryPointInfoV1Request,
  GetDeliveryPointInfoV1Response,
} from "./types.js";

export const GET_DELIVERY_POINT_INFO_V1_OPERATION_ID = "DeliveryPointInfo";

export async function executeGetDeliveryPointInfoV1(
  transport: Transport,
  input: GetDeliveryPointInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetDeliveryPointInfoV1Response> {
  const response = await transport.request({
    operationId: GET_DELIVERY_POINT_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery/point/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getDeliveryPointInfoV1ResponseSchema,
    response.body,
    GET_DELIVERY_POINT_INFO_V1_OPERATION_ID,
  );
}
