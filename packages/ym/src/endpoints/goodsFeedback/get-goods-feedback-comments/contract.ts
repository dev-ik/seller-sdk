// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsFeedbackCommentsResponse } from "./types.js";

const getGoodsFeedbackCommentsResponse200Schema =
  createYmSchema<GetGoodsFeedbackCommentsResponse>(
    { kind: "ref", name: "GetGoodsFeedbackCommentsResponse" },
    goodsFeedbackComponents,
  );

export function parseGetGoodsFeedbackCommentsResponse(
  status: number,
  input: unknown,
): GetGoodsFeedbackCommentsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsFeedbackCommentsResponse200Schema,
        input,
        "getGoodsFeedbackComments",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsFeedbackComments", status);
  }
}
