import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeSendChatFileV1 } from "../../../packages/ozon/src/endpoints/chat/file/send/v1/execute.js";
import { executeGetGiveoutBarcodeV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/barcode/get/v1/execute.js";
import { executeResetGiveoutBarcodeV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/barcode/reset/v1/execute.js";
import { executeGetGiveoutBarcodePdfV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/document/pdf/v1/execute.js";
import { executeGetGiveoutBarcodePngV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/document/png/v1/execute.js";
import { executeGetGiveoutInfoV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/info/v1/execute.js";
import { executeIsGiveoutEnabledV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/is-enabled/v1/execute.js";
import { executeListGiveoutsV1 } from "../../../packages/ozon/src/endpoints/returns/giveout/list/v1/execute.js";
import { executeGetUtilizationSettingsV1 } from "../../../packages/ozon/src/endpoints/returns/settings/utilization/info/v1/execute.js";
import { executeUpdateUtilizationSettingsV1 } from "../../../packages/ozon/src/endpoints/returns/settings/utilization/update/v1/execute.js";
function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon utilization, giveout and chat API", () => {
  it("maps and validates all ten operations", async () => {
    const util = transportWith({
      min_price: { amount: "100", currency: "RUB" },
      utilization_settings: {
        utilization_price: { amount: "500", currency: "RUB" },
      },
    });
    await executeGetUtilizationSettingsV1(util);
    expect(util.requests[0]).toMatchObject({
      path: "/v1/returns/settings/utilization/info",
      retrySafety: "safe",
    });
    const update = transportWith(undefined);
    await executeUpdateUtilizationSettingsV1(update, {
      utilization_price: { enabled: true, value: 500 },
      utilization_price_defects: { enabled: false },
    });
    expect(update.requests[0]).toMatchObject({
      path: "/v1/returns/settings/utilization/update",
      retrySafety: "unsafe",
    });
    const enabled = transportWith({ enabled: true });
    await executeIsGiveoutEnabledV1(enabled);
    expect(enabled.requests[0]).toMatchObject({
      path: "/v1/return/giveout/is-enabled",
      retrySafety: "safe",
    });
    const list = transportWith({
      giveouts: [
        {
          giveout_id: 1,
          approved_articles_count: 2,
          created_at: "2026-08-15T00:00:00Z",
        },
      ],
    });
    await executeListGiveoutsV1(list, { limit: 50 });
    expect(list.requests[0]).toMatchObject({
      path: "/v1/return/giveout/list",
      retrySafety: "safe",
    });
    const info = transportWith({
      giveout_id: 1,
      articles: [{ approved: true, seller_id: 2 }],
    });
    await executeGetGiveoutInfoV1(info, { giveout_id: 1 });
    expect(info.requests[0]).toMatchObject({
      path: "/v1/return/giveout/info",
      retrySafety: "safe",
    });
    const barcode = transportWith({ barcode: "123" });
    await executeGetGiveoutBarcodeV1(barcode);
    expect(barcode.requests[0]).toMatchObject({
      path: "/v1/return/giveout/barcode",
      retrySafety: "safe",
    });
    const pdf = transportWith(new ArrayBuffer(2));
    await executeGetGiveoutBarcodePdfV1(pdf);
    expect(pdf.requests[0]).toMatchObject({
      path: "/v1/return/giveout/get-pdf",
      accept: "application/pdf",
      retrySafety: "safe",
    });
    const png = transportWith(new ArrayBuffer(2));
    await executeGetGiveoutBarcodePngV1(png);
    expect(png.requests[0]).toMatchObject({
      path: "/v1/return/giveout/get-png",
      accept: "image/png",
      retrySafety: "safe",
    });
    const reset = transportWith(new ArrayBuffer(2));
    await executeResetGiveoutBarcodeV1(reset);
    expect(reset.requests[0]).toMatchObject({
      path: "/v1/return/giveout/barcode-reset",
      retrySafety: "unsafe",
    });
    const chat = transportWith({ result: "sent" });
    await executeSendChatFileV1(chat, {
      base64_content: "ZmlsZQ==",
      chat_id: "C-1",
      name: "file.txt",
    });
    expect(chat.requests[0]).toMatchObject({
      path: "/v1/chat/send/file",
      retrySafety: "unsafe",
    });
  });
  it("rejects invalid binary responses", async () => {
    await expect(
      executeGetGiveoutBarcodePdfV1(transportWith({})),
    ).rejects.toMatchObject({ operationId: "ReturnAPI_GiveoutGetPDF" });
  });
});
