import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  ADD_PRODUCT_BARCODES_OPERATION_ID,
  executeAddProductBarcodes,
} from "../../../packages/ozon/src/endpoints/barcode/add/execute.js";
import {
  executeGenerateProductBarcodes,
  GENERATE_PRODUCT_BARCODES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/barcode/generate/execute.js";

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

describe("Ozon BarcodeAPI endpoints", () => {
  it("maps addProductBarcodes as an unsafe mutation", async () => {
    const body = await fixture("add-product-barcodes.success.json");
    const transport = transportWith(body);
    const input = {
      barcodes: [{ barcode: "TEST-BARCODE-001", sku: 100000001 }],
    };

    await expect(executeAddProductBarcodes(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: ADD_PRODUCT_BARCODES_OPERATION_ID,
        method: "POST",
        path: "/v1/barcode/add",
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it("maps generateProductBarcodes as an unsafe mutation", async () => {
    const body = await fixture("generate-product-barcodes.success.json");
    const transport = transportWith(body);
    const input = { product_ids: ["100000002"] };

    await expect(
      executeGenerateProductBarcodes(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GENERATE_PRODUCT_BARCODES_OPERATION_ID,
        method: "POST",
        path: "/v1/barcode/generate",
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it.each([
    [
      ADD_PRODUCT_BARCODES_OPERATION_ID,
      "add-product-barcodes.malformed.json",
      (transport: MockTransport) =>
        executeAddProductBarcodes(transport, {
          barcodes: [{ barcode: "TEST-BARCODE-001", sku: 100000001 }],
        }),
    ],
    [
      GENERATE_PRODUCT_BARCODES_OPERATION_ID,
      "generate-product-barcodes.malformed.json",
      (transport: MockTransport) =>
        executeGenerateProductBarcodes(transport, {
          product_ids: ["100000002"],
        }),
    ],
  ])(
    "rejects malformed barcode results for %s",
    async (operationId, fixtureName, execute) => {
      const transport = transportWith(await fixture(fixtureName));

      await expect(execute(transport)).rejects.toMatchObject({
        name: ResponseValidationError.name,
        operationId,
      });
    },
  );

  it("exposes both mutations through SellerClient with auth headers", async () => {
    const responses = await Promise.all([
      fixture("add-product-barcodes.success.json"),
      fixture("generate-product-barcodes.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.barcodes.addProductBarcodes({
      barcodes: [{ barcode: "TEST-BARCODE-001", sku: 100000001 }],
    });
    await seller.ozon.barcodes.generateProductBarcodes({
      product_ids: ["100000002"],
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/barcode/add",
      "https://api-seller.ozon.ru/v1/barcode/generate",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });

  it("does not retry an indeterminate mutation failure", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () =>
        jsonResponse({ code: "UNAVAILABLE", message: "Try later" }, 503),
      );
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.barcodes.addProductBarcodes({
        barcodes: [{ barcode: "TEST-BARCODE-001", sku: 100000001 }],
      }),
    ).rejects.toBeInstanceOf(ApiError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
