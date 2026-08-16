import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeNotificationMutation } from "../../shared/v1/execute.js";
import type {
  DeleteNotificationV1Request,
  DeleteNotificationV1Response,
} from "./types.js";

export const DELETE_NOTIFICATION_V1_OPERATION_ID = "DeleteNotification";
export function executeDeleteNotificationV1(
  transport: Transport,
  input: DeleteNotificationV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteNotificationV1Response> {
  return executeNotificationMutation(
    transport,
    DELETE_NOTIFICATION_V1_OPERATION_ID,
    "/v1/notification/delete",
    input,
    options,
  );
}
