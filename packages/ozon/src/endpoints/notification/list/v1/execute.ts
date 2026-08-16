import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listNotificationsV1ResponseSchema } from "./contract.js";
import type { ListNotificationsV1Response } from "./types.js";

export const LIST_NOTIFICATIONS_V1_OPERATION_ID = "NotificationList";
export async function executeListNotificationsV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListNotificationsV1Response> {
  const response = await transport.request({
    operationId: LIST_NOTIFICATIONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/notification/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listNotificationsV1ResponseSchema,
    response.body,
    LIST_NOTIFICATIONS_V1_OPERATION_ID,
  );
}
