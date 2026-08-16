import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFbsCarriageDeliveriesV1ResponseSchema } from "./contract.js";
import type {
  ListFbsCarriageDeliveriesV1Request,
  ListFbsCarriageDeliveriesV1Response,
} from "./types.js";
export const LIST_FBS_CARRIAGE_DELIVERIES_V1_OPERATION_ID =
  "CarriageAPI_CarriageDeliveryList";
export async function executeListFbsCarriageDeliveriesV1(
  transport: Transport,
  input: ListFbsCarriageDeliveriesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbsCarriageDeliveriesV1Response> {
  const response = await transport.request({
    operationId: LIST_FBS_CARRIAGE_DELIVERIES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/delivery/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsCarriageDeliveriesV1ResponseSchema,
    response.body,
    LIST_FBS_CARRIAGE_DELIVERIES_V1_OPERATION_ID,
  );
}
