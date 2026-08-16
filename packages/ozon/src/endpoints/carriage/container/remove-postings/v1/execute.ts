import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriagePostingTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  RemoveCarriageContainerPostingsV1Request,
  RemoveCarriageContainerPostingsV1Response,
} from "./types.js";

export const REMOVE_CARRIAGE_CONTAINER_POSTINGS_V1_OPERATION_ID =
  "CarriageContainerRemovePostings";

export async function executeRemoveCarriageContainerPostingsV1(
  transport: Transport,
  input: RemoveCarriageContainerPostingsV1Request,
  options: OzonRequestOptions = {},
): Promise<RemoveCarriageContainerPostingsV1Response> {
  const response = await transport.request({
    operationId: REMOVE_CARRIAGE_CONTAINER_POSTINGS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/remove-postings",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriagePostingTaskResponseSchema,
    response.body,
    REMOVE_CARRIAGE_CONTAINER_POSTINGS_V1_OPERATION_ID,
  );
}
