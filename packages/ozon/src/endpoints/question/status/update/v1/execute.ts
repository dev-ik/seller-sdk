import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  UpdateQuestionStatusV1Request,
  UpdateQuestionStatusV1Response,
} from "./types.js";

export const UPDATE_QUESTION_STATUS_V1_OPERATION_ID = "Question_ChangeStatus";

export async function executeUpdateQuestionStatusV1(
  transport: Transport,
  input: UpdateQuestionStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateQuestionStatusV1Response> {
  await transport.request({
    operationId: UPDATE_QUESTION_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/change-status",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
