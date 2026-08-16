import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getQuestionInfoV1ResponseSchema } from "./contract.js";
import type {
  GetQuestionInfoV1Request,
  GetQuestionInfoV1Response,
} from "./types.js";

export const GET_QUESTION_INFO_V1_OPERATION_ID = "Question_Info";

export async function executeGetQuestionInfoV1(
  transport: Transport,
  input: GetQuestionInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetQuestionInfoV1Response> {
  const response = await transport.request({
    operationId: GET_QUESTION_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getQuestionInfoV1ResponseSchema,
    response.body,
    GET_QUESTION_INFO_V1_OPERATION_ID,
  );
}
