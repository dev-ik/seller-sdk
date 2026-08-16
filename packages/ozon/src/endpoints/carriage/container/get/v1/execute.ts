import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriageContainerDetailsSchema } from "../../shared/v1/contract.js";
import type {
  GetCarriageContainerV1Request,
  GetCarriageContainerV1Response,
} from "./types.js";

export const GET_CARRIAGE_CONTAINER_V1_OPERATION_ID = "CarriageContainerGet";

export async function executeGetCarriageContainerV1(
  transport: Transport,
  input: GetCarriageContainerV1Request,
  options: OzonRequestOptions = {},
): Promise<GetCarriageContainerV1Response> {
  const response = await transport.request({
    operationId: GET_CARRIAGE_CONTAINER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriageContainerDetailsSchema,
    response.body,
    GET_CARRIAGE_CONTAINER_V1_OPERATION_ID,
  );
}
