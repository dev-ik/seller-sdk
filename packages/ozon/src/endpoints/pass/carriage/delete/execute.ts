import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { emptyPassResponseSchema } from "../../shared/contract.js";
import type { DeleteCarriagePassesRequest } from "./types.js";

export const DELETE_CARRIAGE_PASSES_OPERATION_ID = "carriagePassDelete";

export async function executeDeleteCarriagePasses(
  transport: Transport,
  input: DeleteCarriagePassesRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: DELETE_CARRIAGE_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/pass/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    emptyPassResponseSchema,
    response.body,
    DELETE_CARRIAGE_PASSES_OPERATION_ID,
  );
}
