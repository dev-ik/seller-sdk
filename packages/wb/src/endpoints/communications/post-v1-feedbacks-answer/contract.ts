// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PostV1FeedbacksAnswerResponse } from "./types.js";

export function parsePostV1FeedbacksAnswerResponse(
  status: number,
  input: unknown,
): PostV1FeedbacksAnswerResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV1FeedbacksAnswer", status);
  }
}
