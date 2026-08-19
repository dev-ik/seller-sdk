// Generated runtime response contract for this Yandex Market endpoint.
import { goodsQuestionsComponents } from "../../../contracts/goodsQuestions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsQuestionsResponse } from "./types.js";

const getGoodsQuestionsResponse200Schema =
  createYmSchema<GetGoodsQuestionsResponse>(
    { kind: "ref", name: "GetQuestionsResponse" },
    goodsQuestionsComponents,
  );

export function parseGetGoodsQuestionsResponse(
  status: number,
  input: unknown,
): GetGoodsQuestionsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsQuestionsResponse200Schema,
        input,
        "getGoodsQuestions",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsQuestions", status);
  }
}
