import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriageContainerTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  CancelCarriageContainersV1Request,
  CancelCarriageContainersV1Response,
} from "./types.js";

export const CANCEL_CARRIAGE_CONTAINERS_V1_OPERATION_ID =
  "CarriageContainerCancel";

export async function executeCancelCarriageContainersV1(
  transport: Transport,
  input: CancelCarriageContainersV1Request,
  options: OzonRequestOptions = {},
): Promise<CancelCarriageContainersV1Response> {
  const response = await transport.request({
    operationId: CANCEL_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriageContainerTaskResponseSchema,
    response.body,
    CANCEL_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
  );
}
