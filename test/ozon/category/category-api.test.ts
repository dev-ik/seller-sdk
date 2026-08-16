import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeGetDescriptionCategoryAttributes,
  GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/category/get-attributes/execute.js";
import {
  executeGetDescriptionCategoryAttributeValues,
  GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/category/get-attribute-values/execute.js";
import {
  executeGetProductPlacementZoneInfo,
  GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/get-placement-zone-info/execute.js";
import {
  executeSearchDescriptionCategoryAttributeValues,
  SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/category/search-attribute-values/execute.js";

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

describe("Ozon CategoryAPI endpoints", () => {
  it("maps getDescriptionCategoryAttributes and validates its response", async () => {
    const body = await fixture(
      "get-description-category-attributes.success.json",
    );
    const transport = transportWith(body);
    const input = {
      description_category_id: 200000001,
      language: "RU" as const,
      type_id: 100001,
    };

    await expect(
      executeGetDescriptionCategoryAttributes(transport, input, {
        timeoutMs: 5_000,
      }),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID,
        method: "POST",
        path: "/v1/description-category/attribute",
        body: input,
        retrySafety: "safe",
        timeoutMs: 5_000,
      },
    ]);
  });

  it("rejects malformed category attributes", async () => {
    const transport = transportWith(
      await fixture("get-description-category-attributes.malformed.json"),
    );

    await expect(
      executeGetDescriptionCategoryAttributes(transport, {
        description_category_id: 200000001,
        type_id: 100001,
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID,
    });
  });

  it("maps getDescriptionCategoryAttributeValues and validates pagination", async () => {
    const body = await fixture(
      "get-description-category-attribute-values.success.json",
    );
    const transport = transportWith(body);
    const input = {
      attribute_id: 85,
      description_category_id: 200000001,
      language: "DEFAULT" as const,
      last_value_id: 10000,
      limit: 2000,
      type_id: 100001,
    };

    await expect(
      executeGetDescriptionCategoryAttributeValues(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
        method: "POST",
        path: "/v1/description-category/attribute/values",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects malformed attribute-value pagination", async () => {
    const transport = transportWith(
      await fixture("get-description-category-attribute-values.malformed.json"),
    );

    await expect(
      executeGetDescriptionCategoryAttributeValues(transport, {
        attribute_id: 85,
        description_category_id: 200000001,
        limit: 100,
        type_id: 100001,
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
    });
  });

  it("maps searchDescriptionCategoryAttributeValues and validates results", async () => {
    const body = await fixture(
      "search-description-category-attribute-values.success.json",
    );
    const transport = transportWith(body);
    const input = {
      attribute_id: 85,
      description_category_id: 200000001,
      limit: 100,
      type_id: 100001,
      value: "Те",
    };

    await expect(
      executeSearchDescriptionCategoryAttributeValues(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
        method: "POST",
        path: "/v1/description-category/attribute/values/search",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects malformed searched attribute values", async () => {
    const transport = transportWith(
      await fixture(
        "search-description-category-attribute-values.malformed.json",
      ),
    );

    await expect(
      executeSearchDescriptionCategoryAttributeValues(transport, {
        attribute_id: 85,
        description_category_id: 200000001,
        limit: 100,
        type_id: 100001,
        value: "Те",
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
    });
  });

  it("maps getProductPlacementZoneInfo and validates placement zones", async () => {
    const body = await fixture("get-product-placement-zone-info.success.json");
    const transport = transportWith(body);
    const input = { skus: ["100000001", "100000002"] };

    await expect(
      executeGetProductPlacementZoneInfo(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID,
        method: "POST",
        path: "/v1/product/placement-zone/info",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects undocumented placement zones", async () => {
    const transport = transportWith(
      await fixture("get-product-placement-zone-info.malformed.json"),
    );

    await expect(
      executeGetProductPlacementZoneInfo(transport, { skus: ["100000001"] }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_PRODUCT_PLACEMENT_ZONE_INFO_OPERATION_ID,
    });
  });

  it("exposes all four methods through SellerClient with auth headers", async () => {
    const responses = await Promise.all([
      fixture("get-description-category-attributes.success.json"),
      fixture("get-description-category-attribute-values.success.json"),
      fixture("search-description-category-attribute-values.success.json"),
      fixture("get-product-placement-zone-info.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.categories.getDescriptionCategoryAttributes({
      description_category_id: 200000001,
      type_id: 100001,
    });
    await seller.ozon.categories.getDescriptionCategoryAttributeValues({
      attribute_id: 85,
      description_category_id: 200000001,
      limit: 100,
      type_id: 100001,
    });
    await seller.ozon.categories.searchDescriptionCategoryAttributeValues({
      attribute_id: 85,
      description_category_id: 200000001,
      limit: 100,
      type_id: 100001,
      value: "Те",
    });
    await seller.ozon.products.getProductPlacementZoneInfo({
      skus: ["100000001"],
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/description-category/attribute",
      "https://api-seller.ozon.ru/v1/description-category/attribute/values",
      "https://api-seller.ozon.ru/v1/description-category/attribute/values/search",
      "https://api-seller.ozon.ru/v1/product/placement-zone/info",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
