// Generated runtime response contract for this Yandex Market endpoint.
import { goodsQuestionsComponents } from "../../../contracts/goodsQuestions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsQuestionAnswersResponse } from "./types.js";

const getGoodsQuestionAnswersResponse200Schema =
  createYmSchema<GetGoodsQuestionAnswersResponse>(
    { kind: "ref", name: "GetAnswersResponse" },
    goodsQuestionsComponents,
  );

export function parseGetGoodsQuestionAnswersResponse(
  status: number,
  input: unknown,
): GetGoodsQuestionAnswersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsQuestionAnswersResponse200Schema,
        input,
        "getGoodsQuestionAnswers",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsQuestionAnswers", status);
  }
}
