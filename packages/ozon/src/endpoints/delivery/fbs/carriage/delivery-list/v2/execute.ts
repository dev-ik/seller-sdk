import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFbsCarriageDeliveriesV2ResponseSchema } from "./contract.js";
import type {
  ListFbsCarriageDeliveriesV2Request,
  ListFbsCarriageDeliveriesV2Response,
} from "./types.js";
export const LIST_FBS_CARRIAGE_DELIVERIES_V2_OPERATION_ID =
  "CarriageAPI_CarriageDeliveryListV2";
export async function executeListFbsCarriageDeliveriesV2(
  transport: Transport,
  input: ListFbsCarriageDeliveriesV2Request,
  options: OzonRequestOptions = {},
): Promise<ListFbsCarriageDeliveriesV2Response> {
  const response = await transport.request({
    operationId: LIST_FBS_CARRIAGE_DELIVERIES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/carriage/delivery/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsCarriageDeliveriesV2ResponseSchema,
    response.body,
    LIST_FBS_CARRIAGE_DELIVERIES_V2_OPERATION_ID,
  );
}
