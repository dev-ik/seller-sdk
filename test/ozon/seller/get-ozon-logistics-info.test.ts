import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import { OzonClient } from "../../../packages/ozon/src/index.js";
import {
  executeGetOzonLogisticsInfo,
  GET_OZON_LOGISTICS_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/seller/get-ozon-logistics-info/execute.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

async function fixture(name: string): Promise<unknown> {
  const fileUrl = new URL(`../../fixtures/ozon/${name}`, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf8")) as unknown;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("OzonClient.seller.getOzonLogisticsInfo", () => {
  it("maps the official method and path without a request body", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-ozon-logistics-info.success.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(executeGetOzonLogisticsInfo(transport)).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_OZON_LOGISTICS_INFO_OPERATION_ID,
        method: "POST",
        path: "/v1/seller/ozon-logistics/info",
        retrySafety: "safe",
      },
    ]);
  });

  it("sends credentials and is reachable from the root client", async () => {
    const body = await fixture("get-ozon-logistics-info.success.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse(body));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(seller.ozon.seller.getOzonLogisticsInfo()).resolves.toEqual(
      body,
    );

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe(
      "https://api-seller.ozon.ru/v1/seller/ozon-logistics/info",
    );
    expect(init?.method).toBe("POST");
    expect(init?.body).toBeUndefined();
    const headers = new Headers(init?.headers);
    expect(headers.get("Client-Id")).toBe(credentials.clientId);
    expect(headers.get("Api-Key")).toBe(credentials.apiKey);
  });

  it("accepts fields omitted by the OpenAPI response", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-ozon-logistics-info.empty.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(executeGetOzonLogisticsInfo(transport)).resolves.toEqual(body);
  });

  it("rejects undocumented schemas and invalid field types", async () => {
    const transport = new MockTransport();
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body: await fixture("get-ozon-logistics-info.malformed.json"),
    });

    await expect(executeGetOzonLogisticsInfo(transport)).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_OZON_LOGISTICS_INFO_OPERATION_ID,
    });
  });

  it("maps documented API errors without exposing credentials", async () => {
    const errorBody = await fixture("get-ozon-logistics-info.error.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse(errorBody, 400));
    vi.stubGlobal("fetch", fetchMock);
    const ozon = new OzonClient(credentials);

    try {
      await ozon.seller.getOzonLogisticsInfo();
      throw new Error("Expected getOzonLogisticsInfo to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ApiError);
      expect(error).toMatchObject({
        status: 400,
        operationId: GET_OZON_LOGISTICS_INFO_OPERATION_ID,
        apiCode: "7",
      });
      expect(JSON.stringify(error)).not.toContain(credentials.apiKey);
    }
  });

  it("forwards caller cancellation before a network request", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal("fetch", fetchMock);
    const controller = new AbortController();
    const reason = new Error("caller cancelled");
    controller.abort(reason);
    const ozon = new OzonClient(credentials);

    await expect(
      ozon.seller.getOzonLogisticsInfo({ signal: controller.signal }),
    ).rejects.toBe(reason);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
