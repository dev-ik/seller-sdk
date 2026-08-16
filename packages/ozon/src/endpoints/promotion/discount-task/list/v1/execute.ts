import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listDiscountTasksResponseSchema } from "./contract.js";
import type {
  ListDiscountTasksRequest,
  ListDiscountTasksResponse,
} from "./types.js";

export const LIST_DISCOUNT_TASKS_OPERATION_ID = "promos_task_list";

export async function executeListDiscountTasks(
  transport: Transport,
  input: ListDiscountTasksRequest,
  options: OzonRequestOptions = {},
): Promise<ListDiscountTasksResponse> {
  const response = await transport.request({
    operationId: LIST_DISCOUNT_TASKS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/discounts-task/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listDiscountTasksResponseSchema,
    response.body,
    LIST_DISCOUNT_TASKS_OPERATION_ID,
  );
}
