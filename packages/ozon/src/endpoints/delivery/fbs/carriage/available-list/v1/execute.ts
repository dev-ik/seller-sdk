import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listAvailableFbsCarriagesResponseSchema } from "./contract.js";
import type {
  ListAvailableFbsCarriagesRequest,
  ListAvailableFbsCarriagesResponse,
} from "./types.js";
export const LIST_AVAILABLE_FBS_CARRIAGES_OPERATION_ID =
  "PostingAPI_GetCarriageAvailableList";
export async function executeListAvailableFbsCarriages(
  transport: Transport,
  input: ListAvailableFbsCarriagesRequest,
  options: OzonRequestOptions = {},
): Promise<ListAvailableFbsCarriagesResponse> {
  const response = await transport.request({
    operationId: LIST_AVAILABLE_FBS_CARRIAGES_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/carriage-available/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listAvailableFbsCarriagesResponseSchema,
    response.body,
    LIST_AVAILABLE_FBS_CARRIAGES_OPERATION_ID,
  );
}
