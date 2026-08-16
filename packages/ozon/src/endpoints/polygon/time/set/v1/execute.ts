import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  SetDeliveryPolygonTimeV1Request,
  SetDeliveryPolygonTimeV1Response,
} from "./types.js";

export const SET_DELIVERY_POLYGON_TIME_V1_OPERATION_ID = "PolygonTimeSet";

export async function executeSetDeliveryPolygonTimeV1(
  transport: Transport,
  input: SetDeliveryPolygonTimeV1Request,
  options: OzonRequestOptions = {},
): Promise<SetDeliveryPolygonTimeV1Response> {
  await transport.request({
    operationId: SET_DELIVERY_POLYGON_TIME_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/time/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
