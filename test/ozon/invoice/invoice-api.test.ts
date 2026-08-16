import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeCreateOrUpdateInvoice,
  CREATE_OR_UPDATE_INVOICE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/invoice/create-or-update/execute.js";
import {
  executeDeleteInvoice,
  DELETE_INVOICE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/invoice/delete/execute.js";
import {
  executeGetInvoice,
  GET_INVOICE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/invoice/get/execute.js";
import {
  executeUploadInvoiceFile,
  UPLOAD_INVOICE_FILE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/invoice/upload-file/execute.js";
async function f(n: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${n}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("Ozon SupplierAPI", () => {
  it("maps all invoice operations with correct retry safety", async () => {
    const cases = [
      [
        CREATE_OR_UPDATE_INVOICE_OPERATION_ID,
        "/v2/invoice/create-or-update",
        "unsafe",
        executeCreateOrUpdateInvoice,
        {
          date: "2026-08-14T10:00:00Z",
          posting_number: "TEST-POSTING",
          url: "https://example.invalid/test",
        },
        "invoice-create.success.json",
      ],
      [
        UPLOAD_INVOICE_FILE_OPERATION_ID,
        "/v1/invoice/file/upload",
        "unsafe",
        executeUploadInvoiceFile,
        { base64_content: "VEVTVA==", posting_number: "TEST-POSTING" },
        "invoice-upload.success.json",
      ],
      [
        GET_INVOICE_OPERATION_ID,
        "/v2/invoice/get",
        "safe",
        executeGetInvoice,
        { posting_number: "TEST-POSTING" },
        "invoice-get.success.json",
      ],
      [
        DELETE_INVOICE_OPERATION_ID,
        "/v1/invoice/delete",
        "unsafe",
        executeDeleteInvoice,
        { posting_number: "TEST-POSTING" },
        "invoice-delete.success.json",
      ],
    ] as const;
    for (const [
      operationId,
      path,
      retrySafety,
      execute,
      input,
      file,
    ] of cases) {
      const body = await f(file);
      const transport = t(body);
      await (execute as (a: MockTransport, b: never) => Promise<unknown>)(
        transport,
        input as never,
      );
      expect(transport.requests[0]).toMatchObject({
        operationId,
        path,
        retrySafety,
      });
    }
  });
  it("validates invoice response", async () => {
    await expect(
      executeGetInvoice(t({ result: { date: "bad" } }), {
        posting_number: "TEST",
      }),
    ).rejects.toMatchObject({ operationId: GET_INVOICE_OPERATION_ID });
  });
});
