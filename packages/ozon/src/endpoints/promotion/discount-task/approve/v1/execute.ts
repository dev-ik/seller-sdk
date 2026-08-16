import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { discountTasksChangeResponseSchema } from "../../shared/v1/contract.js";
import type {
  ApproveDiscountTasksRequest,
  ApproveDiscountTasksResponse,
} from "./types.js";

export const APPROVE_DISCOUNT_TASKS_OPERATION_ID = "promos_task_approve";

export async function executeApproveDiscountTasks(
  transport: Transport,
  input: ApproveDiscountTasksRequest,
  options: OzonRequestOptions = {},
): Promise<ApproveDiscountTasksResponse> {
  const response = await transport.request({
    operationId: APPROVE_DISCOUNT_TASKS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/discounts-task/approve",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    discountTasksChangeResponseSchema,
    response.body,
    APPROVE_DISCOUNT_TASKS_OPERATION_ID,
  );
}
