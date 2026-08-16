import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getCarriageContainerStatusesV1ResponseSchema } from "./contract.js";
import type {
  GetCarriageContainerStatusesV1Request,
  GetCarriageContainerStatusesV1Response,
} from "./types.js";

export const GET_CARRIAGE_CONTAINER_STATUSES_V1_OPERATION_ID =
  "CarriageContainerStatusGet";

export async function executeGetCarriageContainerStatusesV1(
  transport: Transport,
  input: GetCarriageContainerStatusesV1Request,
  options: OzonRequestOptions = {},
): Promise<GetCarriageContainerStatusesV1Response> {
  const response = await transport.request({
    operationId: GET_CARRIAGE_CONTAINER_STATUSES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/status/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCarriageContainerStatusesV1ResponseSchema,
    response.body,
    GET_CARRIAGE_CONTAINER_STATUSES_V1_OPERATION_ID,
  );
}
