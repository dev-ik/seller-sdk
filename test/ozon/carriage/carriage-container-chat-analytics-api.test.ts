import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetAnalyticsDataV1 } from "../../../packages/ozon/src/endpoints/analytics/data/get/v1/execute.js";
import { executeGetAnalyticsProductQueryDetailsV1 } from "../../../packages/ozon/src/endpoints/analytics/product-queries/details/v1/execute.js";
import { executeListAnalyticsProductQueriesV1 } from "../../../packages/ozon/src/endpoints/analytics/product-queries/list/v1/execute.js";
import { executeGetCarriageContainerDocumentsV1 } from "../../../packages/ozon/src/endpoints/carriage/container/document/get/v1/execute.js";
import { executeGetCarriageContainerLabelsV1 } from "../../../packages/ozon/src/endpoints/carriage/container/label/get/v1/execute.js";
import { executeGetCarriageContainerStatusesV1 } from "../../../packages/ozon/src/endpoints/carriage/container/status/get/v1/execute.js";
import { executeGetCarriageContainerTaskV1 } from "../../../packages/ozon/src/endpoints/carriage/container/task/info/v1/execute.js";
import { executeSendChatMessageV1 } from "../../../packages/ozon/src/endpoints/chat/message/send/v1/execute.js";
import { executeReadChatV2 } from "../../../packages/ozon/src/endpoints/chat/read/v2/execute.js";
import { executeStartChatV1 } from "../../../packages/ozon/src/endpoints/chat/start/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon carriage-container, chat and analytics API", () => {
  it("maps and validates all ten operations", async () => {
    const statuses = transportWith({
      containers: [{ container_id: 10, status: "APPROVED" }],
    });
    await executeGetCarriageContainerStatusesV1(statuses, {
      container_ids: ["10"],
    });
    expect(statuses.requests[0]).toMatchObject({
      path: "/v1/carriage/container/status/get",
      retrySafety: "safe",
    });

    const task = transportWith({ status: "SUCCESS" });
    await executeGetCarriageContainerTaskV1(task, { task_id: 20 });
    expect(task.requests[0]).toMatchObject({
      path: "/v1/carriage/container/task/info",
      retrySafety: "safe",
    });

    const documents = transportWith({
      content_type: "application/pdf",
      file_content: "encoded",
      file_name: "documents.pdf",
    });
    await executeGetCarriageContainerDocumentsV1(documents, {
      container_ids: ["10"],
    });
    expect(documents.requests[0]).toMatchObject({
      path: "/v1/carriage/container/document/get",
      retrySafety: "safe",
    });

    const labels = transportWith({
      content: {
        content_type: "application/pdf",
        file_content: "encoded",
        file_name: "labels.pdf",
      },
      error_containers: [],
    });
    await executeGetCarriageContainerLabelsV1(labels, {
      container_ids: ["10"],
    });
    expect(labels.requests[0]).toMatchObject({
      path: "/v1/carriage/container/label/get",
      retrySafety: "safe",
    });

    const send = transportWith({ result: "success" });
    await executeSendChatMessageV1(send, {
      chat_id: "chat-1",
      text: "Hello",
    });
    expect(send.requests[0]).toMatchObject({
      path: "/v1/chat/send/message",
      retrySafety: "unsafe",
    });

    const start = transportWith({ result: { chat_id: "chat-1" } });
    await executeStartChatV1(start, { posting_number: "P-1" });
    expect(start.requests[0]).toMatchObject({
      path: "/v1/chat/start",
      retrySafety: "unsafe",
    });

    const read = transportWith({ unread_count: 0 });
    await executeReadChatV2(read, {
      chat_id: "chat-1",
      from_message_id: 100,
    });
    expect(read.requests[0]).toMatchObject({
      path: "/v2/chat/read",
      retrySafety: "unsafe",
    });

    const data = transportWith({
      result: {
        data: [{ dimensions: [{ id: "1", name: "SKU" }], metrics: [10] }],
        totals: [10],
      },
      timestamp: "2026-08-16 12:00:00",
    });
    await executeGetAnalyticsDataV1(data, {
      date_from: "2026-08-01",
      date_to: "2026-08-16",
      dimension: ["sku"],
      limit: 100,
      metrics: ["revenue"],
    });
    expect(data.requests[0]).toMatchObject({
      path: "/v1/analytics/data",
      retrySafety: "safe",
    });

    const queries = transportWith({
      analytics_period: { date_from: "2026-08-01", date_to: "2026-08-16" },
      items: [{ name: "Product", sku: 1001, gmv: 100 }],
      page_count: 1,
      total: 1,
    });
    await executeListAnalyticsProductQueriesV1(queries, {
      date_from: "2026-08-01T00:00:00Z",
      page_size: 100,
      skus: ["1001"],
      sort_by: "BY_GMV",
      sort_dir: "DESCENDING",
    });
    expect(queries.requests[0]).toMatchObject({
      path: "/v1/analytics/product-queries",
      retrySafety: "safe",
    });

    const details = transportWith({
      analytics_period: { date_from: "2026-08-01", date_to: "2026-08-16" },
      page_count: 1,
      queries: [{ query: "product", sku: 1001, order_count: 1 }],
      total: 1,
    });
    await executeGetAnalyticsProductQueryDetailsV1(details, {
      date_from: "2026-08-01T00:00:00Z",
      limit_by_sku: 15,
      page_size: 100,
      skus: ["1001"],
    });
    expect(details.requests[0]).toMatchObject({
      path: "/v1/analytics/product-queries/details",
      retrySafety: "safe",
    });
  });

  it("rejects an invalid nested analytics metric", async () => {
    await expect(
      executeGetAnalyticsDataV1(
        transportWith({ result: { data: [{ metrics: ["not-a-number"] }] } }),
        {
          date_from: "2026-08-01",
          date_to: "2026-08-16",
          dimension: ["sku"],
          limit: 100,
          metrics: ["revenue"],
        },
      ),
    ).rejects.toMatchObject({ operationId: "AnalyticsAPI_AnalyticsGetData" });
  });
});
