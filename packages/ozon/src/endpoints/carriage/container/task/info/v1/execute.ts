import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getCarriageContainerTaskV1ResponseSchema } from "./contract.js";
import type {
  GetCarriageContainerTaskV1Request,
  GetCarriageContainerTaskV1Response,
} from "./types.js";

export const GET_CARRIAGE_CONTAINER_TASK_V1_OPERATION_ID =
  "CarriageContainerTaskInfo";

export async function executeGetCarriageContainerTaskV1(
  transport: Transport,
  input: GetCarriageContainerTaskV1Request,
  options: OzonRequestOptions = {},
): Promise<GetCarriageContainerTaskV1Response> {
  const response = await transport.request({
    operationId: GET_CARRIAGE_CONTAINER_TASK_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/task/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCarriageContainerTaskV1ResponseSchema,
    response.body,
    GET_CARRIAGE_CONTAINER_TASK_V1_OPERATION_ID,
  );
}
