import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbsCarriageResponseSchema } from "./contract.js";
import type {
  CreateFbsCarriageRequest,
  CreateFbsCarriageResponse,
} from "./types.js";

export const CREATE_FBS_CARRIAGE_OPERATION_ID = "CarriageAPI_CarriageCreate";

export async function executeCreateFbsCarriage(
  transport: Transport,
  input: CreateFbsCarriageRequest,
  options: OzonRequestOptions = {},
): Promise<CreateFbsCarriageResponse> {
  const response = await transport.request({
    operationId: CREATE_FBS_CARRIAGE_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    createFbsCarriageResponseSchema,
    response.body,
    CREATE_FBS_CARRIAGE_OPERATION_ID,
  );
}
