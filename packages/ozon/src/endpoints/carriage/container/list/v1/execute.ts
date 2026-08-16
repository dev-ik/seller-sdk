import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listCarriageContainersV1ResponseSchema } from "./contract.js";
import type {
  ListCarriageContainersV1Request,
  ListCarriageContainersV1Response,
} from "./types.js";

export const LIST_CARRIAGE_CONTAINERS_V1_OPERATION_ID = "CarriageContainerList";

export async function executeListCarriageContainersV1(
  transport: Transport,
  input: ListCarriageContainersV1Request,
  options: OzonRequestOptions = {},
): Promise<ListCarriageContainersV1Response> {
  const response = await transport.request({
    operationId: LIST_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listCarriageContainersV1ResponseSchema,
    response.body,
    LIST_CARRIAGE_CONTAINERS_V1_OPERATION_ID,
  );
}
