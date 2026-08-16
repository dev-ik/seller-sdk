import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listDeliveryPolygonsV1ResponseSchema } from "./contract.js";
import type {
  ListDeliveryPolygonsV1Request,
  ListDeliveryPolygonsV1Response,
} from "./types.js";

export const LIST_DELIVERY_POLYGONS_V1_OPERATION_ID = "PolygonList";

export async function executeListDeliveryPolygonsV1(
  transport: Transport,
  input: ListDeliveryPolygonsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDeliveryPolygonsV1Response> {
  const response = await transport.request({
    operationId: LIST_DELIVERY_POLYGONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDeliveryPolygonsV1ResponseSchema,
    response.body,
    LIST_DELIVERY_POLYGONS_V1_OPERATION_ID,
  );
}
