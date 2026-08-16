import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetAnalyticsManageStocksV1 } from "../../../packages/ozon/src/endpoints/analytics/manage/stocks/v1/execute.js";
import { executeSetProductStairwayDiscountByQuantityV1 } from "../../../packages/ozon/src/endpoints/product/stairway-discount/by-quantity/set/v1/execute.js";
import { executeListQuestionAnswersV1 } from "../../../packages/ozon/src/endpoints/question/answer/list/v1/execute.js";
import { executeGetQuestionCountV1 } from "../../../packages/ozon/src/endpoints/question/count/v1/execute.js";
import { executeGetQuestionInfoV1 } from "../../../packages/ozon/src/endpoints/question/info/v1/execute.js";
import { executeListQuestionsV1 } from "../../../packages/ozon/src/endpoints/question/list/v1/execute.js";
import { executeUpdateQuestionStatusV1 } from "../../../packages/ozon/src/endpoints/question/status/update/v1/execute.js";
import { executeGetQuestionTopSkusV1 } from "../../../packages/ozon/src/endpoints/question/top-sku/v1/execute.js";
import { executeListStockReturnsV1 } from "../../../packages/ozon/src/endpoints/removal/from-stock/list/v1/execute.js";
import { executeListSupplyReturnsV1 } from "../../../packages/ozon/src/endpoints/removal/from-supply/list/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon questions, removal and stairway discounts", () => {
  it("maps and validates all ten operations", async () => {
    const answers = transportWith({
      answers: [
        {
          id: "A-1",
          published_at: "2026-08-15T10:00:00Z",
          status_publication: "PUBLISHED",
        },
      ],
      last_id: "A-1",
    });
    await executeListQuestionAnswersV1(answers, {
      question_id: "Q-1",
      sku: 1,
    });
    expect(answers.requests[0]).toMatchObject({
      path: "/v1/question/answer/list",
      retrySafety: "safe",
    });

    const status = transportWith(undefined);
    await executeUpdateQuestionStatusV1(status, {
      question_ids: ["Q-1"],
      status: "PROCESSED",
    });
    expect(status.requests[0]).toMatchObject({
      path: "/v1/question/change-status",
      retrySafety: "unsafe",
    });

    const count = transportWith({ all: 3, new: 1, processed: 2 });
    await executeGetQuestionCountV1(count);
    expect(count.requests[0]).toMatchObject({
      path: "/v1/question/count",
      retrySafety: "safe",
    });

    const info = transportWith({
      id: "Q-1",
      published_at: "2026-08-15T10:00:00Z",
      status: "VIEWED",
    });
    await executeGetQuestionInfoV1(info, { question_id: "Q-1" });
    expect(info.requests[0]).toMatchObject({
      path: "/v1/question/info",
      retrySafety: "safe",
    });

    const questions = transportWith({
      has_next: false,
      questions: [{ id: "Q-1", status: "NEW" }],
    });
    await executeListQuestionsV1(questions, { limit: 100 });
    expect(questions.requests[0]).toMatchObject({
      path: "/v1/question/list",
      retrySafety: "safe",
    });

    const topSkus = transportWith({ sku: ["1001"] });
    await executeGetQuestionTopSkusV1(topSkus, { limit: 10 });
    expect(topSkus.requests[0]).toMatchObject({
      path: "/v1/question/top-sku",
      retrySafety: "safe",
    });

    const managedStocks = transportWith({
      items: [{ sku: 1001, valid_stock_count: 2 }],
    });
    await executeGetAnalyticsManageStocksV1(managedStocks, {
      limit: 100,
      offset: 0,
    });
    expect(managedStocks.requests[0]).toMatchObject({
      path: "/v1/analytics/manage/stocks",
      retrySafety: "safe",
    });

    const removalInput = {
      date_from: "2026-08-01",
      date_to: "2026-08-15",
      limit: 500,
    } as const;
    const supplyReturns = transportWith({
      last_id: "next",
      returns_summary_report_rows: [{ sku: 1001, is_auto_return: false }],
    });
    await executeListSupplyReturnsV1(supplyReturns, removalInput);
    expect(supplyReturns.requests[0]).toMatchObject({
      path: "/v1/removal/from-supply/list",
      retrySafety: "safe",
    });

    const stockReturns = transportWith({
      returns_summary_report_rows: [{ sku: 1001, box_volume: 1.5 }],
    });
    await executeListStockReturnsV1(stockReturns, removalInput);
    expect(stockReturns.requests[0]).toMatchObject({
      path: "/v1/removal/from-stock/list",
      retrySafety: "safe",
    });

    const stairway = transportWith({
      accepted: true,
      warnings: [{ sku: 1001, data: [{ code: "WARNING", step: 1 }] }],
    });
    await executeSetProductStairwayDiscountByQuantityV1(stairway, {
      stairways: [
        {
          enabled: true,
          sku: 1001,
          stairway: { steps: [{ discount: 5, quantity: 2, step: 1 }] },
        },
      ],
    });
    expect(stairway.requests[0]).toMatchObject({
      path: "/v1/product/stairway-discount/by-quantity/set",
      retrySafety: "unsafe",
    });
  });

  it("rejects an invalid nested question answer", async () => {
    await expect(
      executeListQuestionAnswersV1(
        transportWith({ answers: [{ published_at: "not-a-date" }] }),
        { question_id: "Q-1", sku: 1 },
      ),
    ).rejects.toMatchObject({ operationId: "QuestionAnswer_List" });
  });
});
