import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbpAcceptanceActV1ResponseSchema } from "./contract.js";
import type {
  CreateFbpAcceptanceActV1Request,
  CreateFbpAcceptanceActV1Response,
} from "./types.js";

export const CREATE_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID = "FbpAPI_FbpCreateAct";

export async function executeCreateFbpAcceptanceActV1(
  transport: Transport,
  input: CreateFbpAcceptanceActV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpAcceptanceActV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/act-from/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbpAcceptanceActV1ResponseSchema,
    response.body,
    CREATE_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID,
  );
}
