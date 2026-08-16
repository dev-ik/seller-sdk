import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeNotificationMutation } from "../../shared/v1/execute.js";
import type {
  SetNotificationV1Request,
  SetNotificationV1Response,
} from "./types.js";

export const SET_NOTIFICATION_V1_OPERATION_ID = "SetNotification";
export function executeSetNotificationV1(
  transport: Transport,
  input: SetNotificationV1Request,
  options: OzonRequestOptions = {},
): Promise<SetNotificationV1Response> {
  return executeNotificationMutation(
    transport,
    SET_NOTIFICATION_V1_OPERATION_ID,
    "/v1/notification/set",
    input,
    options,
  );
}
