import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeNotificationMutation } from "../../shared/v1/execute.js";
import type {
  EnableNotificationV1Request,
  EnableNotificationV1Response,
} from "./types.js";

export const ENABLE_NOTIFICATION_V1_OPERATION_ID = "EnableNotification";
export function executeEnableNotificationV1(
  transport: Transport,
  input: EnableNotificationV1Request,
  options: OzonRequestOptions = {},
): Promise<EnableNotificationV1Response> {
  return executeNotificationMutation(
    transport,
    ENABLE_NOTIFICATION_V1_OPERATION_ID,
    "/v1/notification/enable",
    input,
    options,
  );
}
