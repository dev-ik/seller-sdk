import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriageContainerTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  PlaceCarriageContainersIntoV1Request,
  PlaceCarriageContainersIntoV1Response,
} from "./types.js";

export const PLACE_CARRIAGE_CONTAINERS_INTO_V1_OPERATION_ID =
  "CarriageContainerPlaceInto";

export async function executePlaceCarriageContainersIntoV1(
  transport: Transport,
  input: PlaceCarriageContainersIntoV1Request,
  options: OzonRequestOptions = {},
): Promise<PlaceCarriageContainersIntoV1Response> {
  const response = await transport.request({
    operationId: PLACE_CARRIAGE_CONTAINERS_INTO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/place-into",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriageContainerTaskResponseSchema,
    response.body,
    PLACE_CARRIAGE_CONTAINERS_INTO_V1_OPERATION_ID,
  );
}
