import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getQuestionTopSkusV1ResponseSchema } from "./contract.js";
import type {
  GetQuestionTopSkusV1Request,
  GetQuestionTopSkusV1Response,
} from "./types.js";

export const GET_QUESTION_TOP_SKUS_V1_OPERATION_ID = "Question_TopSku";

export async function executeGetQuestionTopSkusV1(
  transport: Transport,
  input: GetQuestionTopSkusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetQuestionTopSkusV1Response> {
  const response = await transport.request({
    operationId: GET_QUESTION_TOP_SKUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/question/top-sku",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getQuestionTopSkusV1ResponseSchema,
    response.body,
    GET_QUESTION_TOP_SKUS_V1_OPERATION_ID,
  );
}
