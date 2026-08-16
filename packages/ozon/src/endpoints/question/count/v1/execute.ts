import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getQuestionCountV1ResponseSchema } from "./contract.js";
import type { GetQuestionCountV1Response } from "./types.js";

export const GET_QUESTION_COUNT_V1_OPERATION_ID = "Question_Count";

export async function executeGetQuestionCountV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetQuestionCountV1Response> {
  const response = await transport.request({
    operationId: GET_QUESTION_COUNT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/count",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getQuestionCountV1ResponseSchema,
    response.body,
    GET_QUESTION_COUNT_V1_OPERATION_ID,
  );
}
