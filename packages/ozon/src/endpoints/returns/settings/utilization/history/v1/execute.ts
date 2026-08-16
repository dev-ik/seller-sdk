import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getUtilizationHistoryV1ResponseSchema } from "./contract.js";
import type { GetUtilizationHistoryV1Response } from "./types.js";
export const GET_UTILIZATION_HISTORY_V1_OPERATION_ID = "UtilizationHistory";
export async function executeGetUtilizationHistoryV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetUtilizationHistoryV1Response> {
  const response = await transport.request({
    operationId: GET_UTILIZATION_HISTORY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/settings/utilization/history",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getUtilizationHistoryV1ResponseSchema,
    response.body,
    GET_UTILIZATION_HISTORY_V1_OPERATION_ID,
  );
}
