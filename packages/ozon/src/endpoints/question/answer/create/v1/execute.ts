import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createQuestionAnswerV1ResponseSchema } from "./contract.js";
import type {
  CreateQuestionAnswerV1Request,
  CreateQuestionAnswerV1Response,
} from "./types.js";

export const CREATE_QUESTION_ANSWER_V1_OPERATION_ID = "QuestionAnswer_Create";

export async function executeCreateQuestionAnswerV1(
  transport: Transport,
  input: CreateQuestionAnswerV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateQuestionAnswerV1Response> {
  const response = await transport.request({
    operationId: CREATE_QUESTION_ANSWER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/answer/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createQuestionAnswerV1ResponseSchema,
    response.body,
    CREATE_QUESTION_ANSWER_V1_OPERATION_ID,
  );
}
