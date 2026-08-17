// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchV1FeedbacksAnswerResponse } from "./types.js";

export function parsePatchV1FeedbacksAnswerResponse(
  status: number,
  input: unknown,
): PatchV1FeedbacksAnswerResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("patchV1FeedbacksAnswer", status);
  }
}
