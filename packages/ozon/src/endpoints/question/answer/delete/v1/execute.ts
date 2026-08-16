import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  DeleteQuestionAnswerV1Request,
  DeleteQuestionAnswerV1Response,
} from "./types.js";

export const DELETE_QUESTION_ANSWER_V1_OPERATION_ID = "QuestionAnswer_Delete";

export async function executeDeleteQuestionAnswerV1(
  transport: Transport,
  input: DeleteQuestionAnswerV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteQuestionAnswerV1Response> {
  await transport.request({
    operationId: DELETE_QUESTION_ANSWER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/answer/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
