import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { createDeliveryPolygonV1ResponseSchema } from "./contract.js";
import type {
  CreateDeliveryPolygonV1Request,
  CreateDeliveryPolygonV1Response,
} from "./types.js";

export const CREATE_DELIVERY_POLYGON_V1_OPERATION_ID =
  "PolygonAPI_CreatePolygon";

export async function executeCreateDeliveryPolygonV1(
  transport: Transport,
  input: CreateDeliveryPolygonV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateDeliveryPolygonV1Response> {
  const response = await transport.request({
    operationId: CREATE_DELIVERY_POLYGON_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/polygon/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createDeliveryPolygonV1ResponseSchema,
    response.body,
    CREATE_DELIVERY_POLYGON_V1_OPERATION_ID,
  );
}
