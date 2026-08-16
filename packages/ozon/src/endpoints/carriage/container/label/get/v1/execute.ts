import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getCarriageContainerLabelsV1ResponseSchema } from "./contract.js";
import type {
  GetCarriageContainerLabelsV1Request,
  GetCarriageContainerLabelsV1Response,
} from "./types.js";

export const GET_CARRIAGE_CONTAINER_LABELS_V1_OPERATION_ID =
  "CarriageContainerLabelGet";

export async function executeGetCarriageContainerLabelsV1(
  transport: Transport,
  input: GetCarriageContainerLabelsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetCarriageContainerLabelsV1Response> {
  const response = await transport.request({
    operationId: GET_CARRIAGE_CONTAINER_LABELS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/label/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCarriageContainerLabelsV1ResponseSchema,
    response.body,
    GET_CARRIAGE_CONTAINER_LABELS_V1_OPERATION_ID,
  );
}
