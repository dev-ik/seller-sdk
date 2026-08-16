import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateQuestionAnswerV1 } from "../../../packages/ozon/src/endpoints/question/answer/create/v1/execute.js";
import { executeDeleteQuestionAnswerV1 } from "../../../packages/ozon/src/endpoints/question/answer/delete/v1/execute.js";
import { executeGetReviewCountV1 } from "../../../packages/ozon/src/endpoints/review/count/v1/execute.js";
import { executeGetReviewCountV2 } from "../../../packages/ozon/src/endpoints/review/count/v2/execute.js";
import { executeGetReviewInfoV1 } from "../../../packages/ozon/src/endpoints/review/info/v1/execute.js";
import { executeGetReviewInfoV2 } from "../../../packages/ozon/src/endpoints/review/info/v2/execute.js";
import { executeListReviewsV1 } from "../../../packages/ozon/src/endpoints/review/list/v1/execute.js";
import { executeListReviewsV2 } from "../../../packages/ozon/src/endpoints/review/list/v2/execute.js";
import { executeUpdateReviewStatusV1 } from "../../../packages/ozon/src/endpoints/review/status/update/v1/execute.js";
import { executeUpdateReviewStatusV2 } from "../../../packages/ozon/src/endpoints/review/status/update/v2/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon review and question API", () => {
  it("maps and validates all ten operations", async () => {
    const statusV1 = transportWith({});
    await executeUpdateReviewStatusV1(statusV1, {
      review_ids: ["R-1"],
      status: "PROCESSED",
    });
    expect(statusV1.requests[0]).toMatchObject({
      path: "/v1/review/change-status",
      retrySafety: "unsafe",
    });

    const statusV2 = transportWith(undefined);
    await executeUpdateReviewStatusV2(statusV2, {
      review_ids: ["R-1"],
      status: "VIEWED",
    });
    expect(statusV2.requests[0]).toMatchObject({
      path: "/v2/review/change-status",
      retrySafety: "unsafe",
    });

    const countV1 = transportWith({ processed: 1, total: 2, unprocessed: 1 });
    await executeGetReviewCountV1(countV1);
    expect(countV1.requests[0]).toMatchObject({
      path: "/v1/review/count",
      retrySafety: "safe",
    });

    const countV2 = transportWith({
      new: 1,
      processed: 1,
      total: 3,
      viewed: 1,
    });
    await executeGetReviewCountV2(countV2);
    expect(countV2.requests[0]).toMatchObject({
      path: "/v2/review/count",
      retrySafety: "safe",
    });

    const infoV1 = transportWith({ id: "R-1", status: "PROCESSED" });
    await executeGetReviewInfoV1(infoV1, { review_id: "R-1" });
    expect(infoV1.requests[0]).toMatchObject({
      path: "/v1/review/info",
      retrySafety: "safe",
    });

    const infoV2 = transportWith({
      id: "R-1",
      order_status: "DELIVERED",
      status: "VIEWED",
    });
    await executeGetReviewInfoV2(infoV2, { review_id: "R-1" });
    expect(infoV2.requests[0]).toMatchObject({
      path: "/v2/review/info",
      retrySafety: "safe",
    });

    const listV1 = transportWith({ reviews: [{ id: "R-1" }], has_next: false });
    await executeListReviewsV1(listV1, { limit: 20, status: "ALL" });
    expect(listV1.requests[0]).toMatchObject({
      path: "/v1/review/list",
      retrySafety: "safe",
    });

    const listV2 = transportWith({
      reviews: [{ id: "R-1", status: "NEW" }],
      has_next: false,
    });
    await executeListReviewsV2(listV2, { limit: 20 });
    expect(listV2.requests[0]).toMatchObject({
      path: "/v2/review/list",
      retrySafety: "safe",
    });

    const answer = transportWith({ answer_id: "A-1" });
    await executeCreateQuestionAnswerV1(answer, {
      question_id: "Q-1",
      sku: 1,
      text: "Ответ",
    });
    expect(answer.requests[0]).toMatchObject({
      path: "/v1/question/answer/create",
      retrySafety: "unsafe",
    });

    const deleteAnswer = transportWith(undefined);
    await executeDeleteQuestionAnswerV1(deleteAnswer, {
      answer_id: "A-1",
      sku: 1,
    });
    expect(deleteAnswer.requests[0]).toMatchObject({
      path: "/v1/question/answer/delete",
      retrySafety: "unsafe",
    });
  });

  it("rejects invalid v2 review status", async () => {
    await expect(
      executeGetReviewInfoV2(transportWith({ status: "UNKNOWN" }), {
        review_id: "R-1",
      }),
    ).rejects.toMatchObject({ operationId: "ReviewInfoV2" });
  });
});
