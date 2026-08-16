import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeGetDescriptionCategoryTree,
  GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/category/get-tree/execute.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

async function fixture(name: string): Promise<unknown> {
  const fileUrl = new URL(`../../fixtures/ozon/${name}`, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf8")) as unknown;
}

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), { status: 200 });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("OzonClient.categories.getDescriptionCategoryTree", () => {
  it("maps the official request body and validates a recursive tree", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-description-category-tree.success.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(
      executeGetDescriptionCategoryTree(transport, { language: "RU" }),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID,
        method: "POST",
        path: "/v1/description-category/tree",
        body: { language: "RU" },
        retrySafety: "safe",
      },
    ]);
  });

  it("sends credentials and is reachable from the root client", async () => {
    const body = await fixture("get-description-category-tree.success.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse(body));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.categories.getDescriptionCategoryTree({
        language: "DEFAULT",
      }),
    ).resolves.toEqual(body);

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe(
      "https://api-seller.ozon.ru/v1/description-category/tree",
    );
    expect(init?.body).toBe('{"language":"DEFAULT"}');
    const headers = new Headers(init?.headers);
    expect(headers.get("Client-Id")).toBe(credentials.clientId);
    expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    expect(headers.get("Content-Type")).toBe("application/json");
  });

  it("rejects malformed values at any recursive depth", async () => {
    const transport = new MockTransport();
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body: await fixture("get-description-category-tree.malformed.json"),
    });

    await expect(
      executeGetDescriptionCategoryTree(transport, {}),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID,
    });
  });

  it("normalizes compatible changes in the recursive response", async () => {
    const transport = new MockTransport();
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body: {
        result: [
          {
            category_name: null,
            description_category_id: 1,
            future_item_field: "ignored",
            children: [
              {
                description_category_id: 2,
                type_name: null,
                future_child_field: true,
              },
            ],
          },
        ],
        future_root_field: true,
      },
    });

    await expect(
      executeGetDescriptionCategoryTree(transport, {}),
    ).resolves.toEqual({
      result: [
        {
          description_category_id: 1,
          children: [{ description_category_id: 2 }],
        },
      ],
    });
  });

  it("forwards caller cancellation before a network request", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal("fetch", fetchMock);
    const controller = new AbortController();
    const reason = new Error("caller cancelled");
    controller.abort(reason);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.categories.getDescriptionCategoryTree(
        { language: "EN" },
        { signal: controller.signal },
      ),
    ).rejects.toBe(reason);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
