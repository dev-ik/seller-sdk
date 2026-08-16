import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { emptyPassResponseSchema } from "../../shared/contract.js";
import type { UpdateCarriagePassesRequest } from "./types.js";

export const UPDATE_CARRIAGE_PASSES_OPERATION_ID = "carriagePassUpdate";

export async function executeUpdateCarriagePasses(
  transport: Transport,
  input: UpdateCarriagePassesRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: UPDATE_CARRIAGE_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/pass/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    emptyPassResponseSchema,
    response.body,
    UPDATE_CARRIAGE_PASSES_OPERATION_ID,
  );
}
