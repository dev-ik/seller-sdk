import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeListDigitalPostings,
  LIST_DIGITAL_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/digital/posting/list/execute.js";
import {
  executeListDigitalPostingsV2,
  LIST_DIGITAL_POSTINGS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/digital/posting/list-v2/execute.js";
import {
  executeUploadDigitalPostingCodes,
  UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/digital/posting/upload-codes/execute.js";
import {
  executeImportDigitalProductStocks,
  IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/digital/product/import-stocks/execute.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

async function fixture(name: string): Promise<unknown> {
  const fileUrl = new URL(`../../fixtures/ozon/${name}`, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf8")) as unknown;
}

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon Digital endpoints", () => {
  it("maps the digital posting list as a safe offset request", async () => {
    const body = await fixture("list-digital-postings.success.json");
    const transport = transportWith(body);
    const input = {
      dir: "ASC" as const,
      filter: {
        posting_number: ["TEST-POSTING-001"],
        since: "2026-08-01T00:00:00Z",
        to: "2026-08-14T23:59:59Z",
      },
      limit: 100,
      offset: 0,
      with: {
        analytics_data: true,
        financial_data: true,
        legal_info: true,
      },
    };

    await expect(executeListDigitalPostings(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: LIST_DIGITAL_POSTINGS_OPERATION_ID,
        method: "POST",
        path: "/v1/posting/digital/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps the v2 digital posting list as a safe cursor request", async () => {
    const body = await fixture("list-digital-postings-v2.success.json");
    const transport = transportWith(body);
    const input = {
      cursor: "TEST-CURSOR-001",
      filter: {
        order_numbers: ["TEST-ORDER-002"],
        posting_numbers: ["TEST-POSTING-002"],
        since: "2026-08-01T00:00:00Z",
        to: "2026-08-14T23:59:59Z",
      },
      limit: 100,
      sort_dir: "ASC" as const,
      with: {
        analytics_data: true,
        financial_data: true,
        legal_info: true,
      },
    };

    await expect(
      executeListDigitalPostingsV2(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_DIGITAL_POSTINGS_V2_OPERATION_ID,
        method: "POST",
        path: "/v2/posting/digital/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps digital code upload as an unsafe mutation", async () => {
    const body = await fixture("upload-digital-posting-codes.success.json");
    const transport = transportWith(body);
    const input = {
      exemplars_by_sku: [
        {
          exemplar_keys: ["TEST-CODE-001", "TEST-CODE-002"],
          exemplar_qty: 2,
          not_available_exemplar_qty: 0,
          sku: 6605735423,
        },
      ],
      posting_number: "TEST-POSTING-001",
    };

    await expect(
      executeUploadDigitalPostingCodes(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID,
        method: "POST",
        path: "/v1/posting/digital/codes/upload",
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it("maps digital stock import as an unsafe mutation", async () => {
    const body = await fixture("import-digital-product-stocks.success.json");
    const transport = transportWith(body);
    const input = {
      stocks: [{ offer_id: "TEST-OFFER-001", stock: 2 }],
    };

    await expect(
      executeImportDigitalProductStocks(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID,
        method: "POST",
        path: "/v1/product/digital/stocks/import",
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it.each([
    [
      LIST_DIGITAL_POSTINGS_OPERATION_ID,
      "list-digital-postings.malformed.json",
      (transport: MockTransport) => executeListDigitalPostings(transport, {}),
    ],
    [
      LIST_DIGITAL_POSTINGS_V2_OPERATION_ID,
      "list-digital-postings-v2.malformed.json",
      (transport: MockTransport) => executeListDigitalPostingsV2(transport, {}),
    ],
    [
      UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID,
      "upload-digital-posting-codes.malformed.json",
      (transport: MockTransport) =>
        executeUploadDigitalPostingCodes(transport, {}),
    ],
    [
      IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID,
      "import-digital-product-stocks.malformed.json",
      (transport: MockTransport) =>
        executeImportDigitalProductStocks(transport, {}),
    ],
  ])(
    "rejects malformed digital response for %s",
    async (operationId, fixtureName, execute) => {
      const transport = transportWith(await fixture(fixtureName));

      await expect(execute(transport)).rejects.toMatchObject({
        name: ResponseValidationError.name,
        operationId,
      });
    },
  );

  it("exposes all three methods through SellerClient with auth headers", async () => {
    const responses = await Promise.all([
      fixture("list-digital-postings.success.json"),
      fixture("list-digital-postings-v2.success.json"),
      fixture("upload-digital-posting-codes.success.json"),
      fixture("import-digital-product-stocks.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.digital.listDigitalPostings({ limit: 100 });
    await seller.ozon.digital.listDigitalPostingsV2({ limit: 100 });
    await seller.ozon.digital.uploadDigitalPostingCodes({
      exemplars_by_sku: [
        {
          exemplar_keys: ["TEST-CODE-001"],
          exemplar_qty: 1,
          not_available_exemplar_qty: 0,
          sku: 6605735423,
        },
      ],
      posting_number: "TEST-POSTING-001",
    });
    await seller.ozon.digital.importDigitalProductStocks({
      stocks: [{ offer_id: "TEST-OFFER-001", stock: 2 }],
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/posting/digital/list",
      "https://api-seller.ozon.ru/v2/posting/digital/list",
      "https://api-seller.ozon.ru/v1/posting/digital/codes/upload",
      "https://api-seller.ozon.ru/v1/product/digital/stocks/import",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });

  it("does not retry an indeterminate digital mutation failure", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () =>
        jsonResponse({ code: "UNAVAILABLE", message: "Try later" }, 503),
      );
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.digital.importDigitalProductStocks({
        stocks: [{ offer_id: "TEST-OFFER-001", stock: 2 }],
      }),
    ).rejects.toBeInstanceOf(ApiError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
