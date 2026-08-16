import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listQuestionAnswersV1ResponseSchema } from "./contract.js";
import type {
  ListQuestionAnswersV1Request,
  ListQuestionAnswersV1Response,
} from "./types.js";

export const LIST_QUESTION_ANSWERS_V1_OPERATION_ID = "QuestionAnswer_List";

export async function executeListQuestionAnswersV1(
  transport: Transport,
  input: ListQuestionAnswersV1Request,
  options: OzonRequestOptions = {},
): Promise<ListQuestionAnswersV1Response> {
  const response = await transport.request({
    operationId: LIST_QUESTION_ANSWERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/answer/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listQuestionAnswersV1ResponseSchema,
    response.body,
    LIST_QUESTION_ANSWERS_V1_OPERATION_ID,
  );
}
