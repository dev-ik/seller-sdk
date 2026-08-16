import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listQuestionsV1ResponseSchema } from "./contract.js";
import type {
  ListQuestionsV1Request,
  ListQuestionsV1Response,
} from "./types.js";

export const LIST_QUESTIONS_V1_OPERATION_ID = "Question_List";

export async function executeListQuestionsV1(
  transport: Transport,
  input: ListQuestionsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListQuestionsV1Response> {
  const response = await transport.request({
    operationId: LIST_QUESTIONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listQuestionsV1ResponseSchema,
    response.body,
    LIST_QUESTIONS_V1_OPERATION_ID,
  );
}
