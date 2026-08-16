import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  UpdateDeliveryPolygonCoordinatesV1Request,
  UpdateDeliveryPolygonCoordinatesV1Response,
} from "./types.js";

export const UPDATE_DELIVERY_POLYGON_COORDINATES_V1_OPERATION_ID =
  "PolygonTimeCoordinatesUpdate";

export async function executeUpdateDeliveryPolygonCoordinatesV1(
  transport: Transport,
  input: UpdateDeliveryPolygonCoordinatesV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateDeliveryPolygonCoordinatesV1Response> {
  await transport.request({
    operationId: UPDATE_DELIVERY_POLYGON_COORDINATES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/time/coordinates/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
