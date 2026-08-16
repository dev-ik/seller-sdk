import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { bindDeliveryPolygonV1ResponseSchema } from "./contract.js";
import type {
  BindDeliveryPolygonV1Request,
  BindDeliveryPolygonV1Response,
} from "./types.js";

export const BIND_DELIVERY_POLYGON_V1_OPERATION_ID = "PolygonAPI_BindPolygon";

/** @deprecated Ozon directs callers to POST /v2/polygon/bind. */
export async function executeBindDeliveryPolygonV1(
  transport: Transport,
  input: BindDeliveryPolygonV1Request,
  options: OzonRequestOptions = {},
): Promise<BindDeliveryPolygonV1Response> {
  const response = await transport.request({
    operationId: BIND_DELIVERY_POLYGON_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/bind",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    bindDeliveryPolygonV1ResponseSchema,
    response.body,
    BIND_DELIVERY_POLYGON_V1_OPERATION_ID,
  );
}
