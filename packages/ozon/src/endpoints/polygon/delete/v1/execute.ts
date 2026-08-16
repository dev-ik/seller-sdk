import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import type {
  DeleteDeliveryPolygonV1Request,
  DeleteDeliveryPolygonV1Response,
} from "./types.js";

export const DELETE_DELIVERY_POLYGON_V1_OPERATION_ID = "PolygonDelete";

export async function executeDeleteDeliveryPolygonV1(
  transport: Transport,
  input: DeleteDeliveryPolygonV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteDeliveryPolygonV1Response> {
  await transport.request({
    operationId: DELETE_DELIVERY_POLYGON_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
