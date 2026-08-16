import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getDeliveryMapV1ResponseSchema } from "./contract.js";
import type {
  GetDeliveryMapV1Request,
  GetDeliveryMapV1Response,
} from "./types.js";

export const GET_DELIVERY_MAP_V1_OPERATION_ID = "DeliveryMap";

export async function executeGetDeliveryMapV1(
  transport: Transport,
  input: GetDeliveryMapV1Request,
  options: OzonRequestOptions = {},
): Promise<GetDeliveryMapV1Response> {
  const response = await transport.request({
    operationId: GET_DELIVERY_MAP_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery/map",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getDeliveryMapV1ResponseSchema,
    response.body,
    GET_DELIVERY_MAP_V1_OPERATION_ID,
  );
}
