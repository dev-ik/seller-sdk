import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listNotificationPushTypesV1ResponseSchema } from "./contract.js";
import type { ListNotificationPushTypesV1Response } from "./types.js";

export const LIST_NOTIFICATION_PUSH_TYPES_V1_OPERATION_ID =
  "GetNotificationPushTypeList";
export async function executeListNotificationPushTypesV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListNotificationPushTypesV1Response> {
  const response = await transport.request({
    operationId: LIST_NOTIFICATION_PUSH_TYPES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/notification/push-type/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listNotificationPushTypesV1ResponseSchema,
    response.body,
    LIST_NOTIFICATION_PUSH_TYPES_V1_OPERATION_ID,
  );
}
