import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { discountTasksChangeResponseSchema } from "../../shared/v1/contract.js";
import type {
  DeclineDiscountTasksRequest,
  DeclineDiscountTasksResponse,
} from "./types.js";

export const DECLINE_DISCOUNT_TASKS_OPERATION_ID = "promos_task_decline";

export async function executeDeclineDiscountTasks(
  transport: Transport,
  input: DeclineDiscountTasksRequest,
  options: OzonRequestOptions = {},
): Promise<DeclineDiscountTasksResponse> {
  const response = await transport.request({
    operationId: DECLINE_DISCOUNT_TASKS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/discounts-task/decline",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    discountTasksChangeResponseSchema,
    response.body,
    DECLINE_DISCOUNT_TASKS_OPERATION_ID,
  );
}
