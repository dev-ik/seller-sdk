import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createCarriageContainersV1ResponseSchema } from "./contract.js";
import type {
  CreateCarriageContainersV1Request,
  CreateCarriageContainersV1Response,
} from "./types.js";

export const CREATE_CARRIAGE_CONTAINERS_V1_OPERATION_ID =
  "CarriageContainerCreate";

export async function executeCreateCarriageContainersV1(
  transport: Transport,
  input: CreateCarriageContainersV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateCarriageContainersV1Response> {
  const response = await transport.request({
    operationId: CREATE_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createCarriageContainersV1ResponseSchema,
    response.body,
    CREATE_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
  );
}
