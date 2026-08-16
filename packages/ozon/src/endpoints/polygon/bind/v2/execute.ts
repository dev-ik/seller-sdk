import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import type {
  BindDeliveryPolygonV2Request,
  BindDeliveryPolygonV2Response,
} from "./types.js";

export const BIND_DELIVERY_POLYGON_V2_OPERATION_ID = "PolygonBind";

export async function executeBindDeliveryPolygonV2(
  transport: Transport,
  input: BindDeliveryPolygonV2Request,
  options: OzonRequestOptions = {},
): Promise<BindDeliveryPolygonV2Response> {
  await transport.request({
    operationId: BIND_DELIVERY_POLYGON_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/polygon/bind",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
