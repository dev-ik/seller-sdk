import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { checkNotificationV1ResponseSchema } from "./contract.js";
import type {
  CheckNotificationV1Request,
  CheckNotificationV1Response,
} from "./types.js";

export const CHECK_NOTIFICATION_V1_OPERATION_ID = "CheckNotification";
export async function executeCheckNotificationV1(
  transport: Transport,
  input: CheckNotificationV1Request,
  options: OzonRequestOptions = {},
): Promise<CheckNotificationV1Response> {
  const response = await transport.request({
    operationId: CHECK_NOTIFICATION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/notification/check",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    checkNotificationV1ResponseSchema,
    response.body,
    CHECK_NOTIFICATION_V1_OPERATION_ID,
  );
}
