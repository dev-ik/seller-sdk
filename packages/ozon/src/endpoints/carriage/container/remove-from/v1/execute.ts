import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriageContainerTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  RemoveCarriageContainersFromV1Request,
  RemoveCarriageContainersFromV1Response,
} from "./types.js";

export const REMOVE_CARRIAGE_CONTAINERS_FROM_V1_OPERATION_ID =
  "CarriageContainerRemoveFrom";

export async function executeRemoveCarriageContainersFromV1(
  transport: Transport,
  input: RemoveCarriageContainersFromV1Request,
  options: OzonRequestOptions = {},
): Promise<RemoveCarriageContainersFromV1Response> {
  const response = await transport.request({
    operationId: REMOVE_CARRIAGE_CONTAINERS_FROM_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/remove-from",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriageContainerTaskResponseSchema,
    response.body,
    REMOVE_CARRIAGE_CONTAINERS_FROM_V1_OPERATION_ID,
  );
}
