// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsFeedbacksUrbanadsResponse } from "./types.js";

const getGoodsFeedbacksUrbanadsResponse200Schema =
  createYmSchema<GetGoodsFeedbacksUrbanadsResponse>(
    { kind: "ref", name: "GetGoodsFeedbackUrbanadsResponse" },
    goodsFeedbackComponents,
  );

export function parseGetGoodsFeedbacksUrbanadsResponse(
  status: number,
  input: unknown,
): GetGoodsFeedbacksUrbanadsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsFeedbacksUrbanadsResponse200Schema,
        input,
        "getGoodsFeedbacksUrbanads",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsFeedbacksUrbanads", status);
  }
}
