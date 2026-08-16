import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { carriagePostingTaskResponseSchema } from "../../shared/v1/contract.js";
import type {
  FillCarriageContainerV1Request,
  FillCarriageContainerV1Response,
} from "./types.js";

export const FILL_CARRIAGE_CONTAINER_V1_OPERATION_ID = "CarriageContainerFill";

export async function executeFillCarriageContainerV1(
  transport: Transport,
  input: FillCarriageContainerV1Request,
  options: OzonRequestOptions = {},
): Promise<FillCarriageContainerV1Response> {
  const response = await transport.request({
    operationId: FILL_CARRIAGE_CONTAINER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/fill",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    carriagePostingTaskResponseSchema,
    response.body,
    FILL_CARRIAGE_CONTAINER_V1_OPERATION_ID,
  );
}
