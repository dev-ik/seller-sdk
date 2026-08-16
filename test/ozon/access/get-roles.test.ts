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
  executeGetRoles,
  GET_ROLES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/access/get-roles/execute.js";

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

describe("OzonClient.access.getRoles", () => {
  it("maps the official method and path without a request body", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-roles.success.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(executeGetRoles(transport)).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_ROLES_OPERATION_ID,
        method: "POST",
        path: "/v1/roles",
        retrySafety: "safe",
      },
    ]);
  });

  it("sends Ozon credentials as headers and remains reachable from SellerClient", async () => {
    const body = await fixture("get-roles.success.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse(body));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(seller.ozon.access.getRoles()).resolves.toEqual(body);

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe("https://api-seller.ozon.ru/v1/roles");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBeUndefined();
    const headers = new Headers(init?.headers);
    expect(headers.get("Client-Id")).toBe(credentials.clientId);
    expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    expect(headers.get("Content-Type")).toBeNull();
  });

  it("accepts omitted fields that OpenAPI does not mark as required", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-roles.empty.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(executeGetRoles(transport)).resolves.toEqual(body);
  });

  it("accepts a null expiration returned by the live API", async () => {
    const transport = new MockTransport();
    const body = await fixture("get-roles.null-expiration.json");
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body,
    });

    await expect(executeGetRoles(transport)).resolves.toEqual(body);
  });

  it("rejects malformed success payloads at the SafeShape boundary", async () => {
    const transport = new MockTransport();
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body: await fixture("get-roles.malformed.json"),
    });

    await expect(executeGetRoles(transport)).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_ROLES_OPERATION_ID,
    });
  });

  it("maps the documented default error without exposing credentials", async () => {
    const errorBody = await fixture("get-roles.error.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse(errorBody, 400));
    vi.stubGlobal("fetch", fetchMock);
    const ozon = new OzonClient(credentials);

    try {
      await ozon.access.getRoles();
      throw new Error("Expected getRoles to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ApiError);
      expect(error).toMatchObject({
        status: 400,
        operationId: GET_ROLES_OPERATION_ID,
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
      ozon.access.getRoles({ signal: controller.signal }),
    ).rejects.toBe(reason);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
