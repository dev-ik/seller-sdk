import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeListBrandCertifications,
  LIST_BRAND_CERTIFICATIONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/brand/list-certifications/execute.js";
import {
  executeListOzonWarehouses,
  LIST_OZON_WAREHOUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/list-ozon/execute.js";

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

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), { status: 200 });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon BrandAPI and FBOWarehouse endpoints", () => {
  it("maps listBrandCertifications and validates pagination", async () => {
    const body = await fixture("list-brand-certifications.success.json");
    const transport = transportWith(body);
    const input = { page: 1, page_size: 100 };

    await expect(
      executeListBrandCertifications(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_BRAND_CERTIFICATIONS_OPERATION_ID,
        method: "POST",
        path: "/v1/brand/company-certification/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects malformed brand certification totals", async () => {
    const transport = transportWith(
      await fixture("list-brand-certifications.malformed.json"),
    );

    await expect(
      executeListBrandCertifications(transport, { page: 1, page_size: 100 }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: LIST_BRAND_CERTIFICATIONS_OPERATION_ID,
    });
  });

  it("maps listOzonWarehouses and validates warehouses", async () => {
    const body = await fixture("list-ozon-warehouses.success.json");
    const transport = transportWith(body);
    const input = {
      warehouse_types: ["FULL_FILLMENT", "CROSS_DOCK"] as const,
    };

    await expect(executeListOzonWarehouses(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: LIST_OZON_WAREHOUSES_OPERATION_ID,
        method: "POST",
        path: "/v1/warehouse/ozon/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects undocumented warehouse types", async () => {
    const transport = transportWith(
      await fixture("list-ozon-warehouses.malformed.json"),
    );

    await expect(
      executeListOzonWarehouses(transport, {}),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: LIST_OZON_WAREHOUSES_OPERATION_ID,
    });
  });

  it("exposes both methods through SellerClient with auth headers", async () => {
    const responses = await Promise.all([
      fixture("list-brand-certifications.success.json"),
      fixture("list-ozon-warehouses.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.brands.listBrandCertifications({
      page: 1,
      page_size: 100,
    });
    await seller.ozon.warehouses.listOzonWarehouses({});

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/brand/company-certification/list",
      "https://api-seller.ozon.ru/v1/warehouse/ozon/list",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
