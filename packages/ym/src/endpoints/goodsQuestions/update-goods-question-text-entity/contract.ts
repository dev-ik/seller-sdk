// Generated runtime response contract for this Yandex Market endpoint.
import { goodsQuestionsComponents } from "../../../contracts/goodsQuestions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateGoodsQuestionTextEntityResponse } from "./types.js";

const updateGoodsQuestionTextEntityResponse200Schema =
  createYmSchema<UpdateGoodsQuestionTextEntityResponse>(
    { kind: "ref", name: "UpdateGoodsQuestionTextEntityResponse" },
    goodsQuestionsComponents,
  );

export function parseUpdateGoodsQuestionTextEntityResponse(
  status: number,
  input: unknown,
): UpdateGoodsQuestionTextEntityResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateGoodsQuestionTextEntityResponse200Schema,
        input,
        "updateGoodsQuestionTextEntity",
      );
    default:
      return unexpectedYmSuccessStatus("updateGoodsQuestionTextEntity", status);
  }
}
