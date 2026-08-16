import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbsPickupHistoryV1ResponseSchema } from "./contract.js";
import type {
  ListFbsPickupHistoryV1Request,
  ListFbsPickupHistoryV1Response,
} from "./types.js";

export const LIST_FBS_PICKUP_HISTORY_V1_OPERATION_ID =
  "WarehouseFbsPickUpHistoryList";

export async function executeListFbsPickupHistoryV1(
  transport: Transport,
  input: ListFbsPickupHistoryV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbsPickupHistoryV1Response> {
  const response = await transport.request({
    operationId: LIST_FBS_PICKUP_HISTORY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/pickup/history/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPickupHistoryV1ResponseSchema,
    response.body,
    LIST_FBS_PICKUP_HISTORY_V1_OPERATION_ID,
  );
}
