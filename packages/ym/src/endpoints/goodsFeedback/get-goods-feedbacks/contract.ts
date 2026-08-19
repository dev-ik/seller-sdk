// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsFeedbacksResponse } from "./types.js";

const getGoodsFeedbacksResponse200Schema =
  createYmSchema<GetGoodsFeedbacksResponse>(
    { kind: "ref", name: "GetGoodsFeedbackResponse" },
    goodsFeedbackComponents,
  );

export function parseGetGoodsFeedbacksResponse(
  status: number,
  input: unknown,
): GetGoodsFeedbacksResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsFeedbacksResponse200Schema,
        input,
        "getGoodsFeedbacks",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsFeedbacks", status);
  }
}
