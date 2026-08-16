import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeNotificationMutation } from "../../shared/v1/execute.js";
import type {
  UpdateNotificationV1Request,
  UpdateNotificationV1Response,
} from "./types.js";

export const UPDATE_NOTIFICATION_V1_OPERATION_ID = "UpdateNotification";
export function executeUpdateNotificationV1(
  transport: Transport,
  input: UpdateNotificationV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateNotificationV1Response> {
  return executeNotificationMutation(
    transport,
    UPDATE_NOTIFICATION_V1_OPERATION_ID,
    "/v1/notification/update",
    input,
    options,
  );
}
