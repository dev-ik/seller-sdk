import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriageContainerTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  ApproveCarriageContainersV1Request,
  ApproveCarriageContainersV1Response,
} from "./types.js";

export const APPROVE_CARRIAGE_CONTAINERS_V1_OPERATION_ID =
  "CarriageContainerApprove";

export async function executeApproveCarriageContainersV1(
  transport: Transport,
  input: ApproveCarriageContainersV1Request,
  options: OzonRequestOptions = {},
): Promise<ApproveCarriageContainersV1Response> {
  const response = await transport.request({
    operationId: APPROVE_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/approve",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriageContainerTaskResponseSchema,
    response.body,
    APPROVE_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
  );
}
