import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listDeliveryPointsV1ResponseSchema } from "./contract.js";
import type { ListDeliveryPointsV1Response } from "./types.js";

export const LIST_DELIVERY_POINTS_V1_OPERATION_ID =
  "DeliveryAPI_DeliveryPointList";

export async function executeListDeliveryPointsV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListDeliveryPointsV1Response> {
  const response = await transport.request({
    operationId: LIST_DELIVERY_POINTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery/point/list",
    body: {},
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDeliveryPointsV1ResponseSchema,
    response.body,
    LIST_DELIVERY_POINTS_V1_OPERATION_ID,
  );
}
