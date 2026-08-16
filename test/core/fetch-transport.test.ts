import { describe, expect, it, vi } from "vitest";
import { FetchTransport } from "../../packages/core/src/core/fetch-transport.js";
import {
  ApiError,
  AuthenticationError,
  ConfigurationError,
  RateLimitError,
  ResponseValidationError,
  TimeoutError,
} from "../../packages/core/src/index.js";
import type { TransportRequest } from "../../packages/core/src/core/transport.js";

const baseRequest: TransportRequest = {
  operationId: "ozon.test",
  method: "POST",
  path: "/v1/test",
  retrySafety: "safe",
  retry: {
    maxAttempts: 1,
    baseDelayMs: 0,
    maxDelayMs: 0,
  },
};

function jsonResponse(
  body: unknown,
  status = 200,
  headers?: HeadersInit,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    ...(headers === undefined ? {} : { headers }),
  });
}

describe("FetchTransport", () => {
  it("maps method, fixed URL, headers and body", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ result: true }));
    const transport = new FetchTransport({
      fetchImplementation: fetchMock,
      defaultHeaders: {
        "Client-Id": "test-client-id",
        "Api-Key": "test-api-key",
      },
    });

    const response = await transport.request({
      ...baseRequest,
      body: { value: 1 },
    });

    expect(response.body).toEqual({ result: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe("https://api-seller.ozon.ru/v1/test");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe('{"value":1}');
    const headers = new Headers(init?.headers);
    expect(headers.get("Client-Id")).toBe("test-client-id");
    expect(headers.get("Api-Key")).toBe("test-api-key");
    expect(headers.get("Content-Type")).toBe("application/json");
  });

  it("returns successful binary responses without JSON decoding", async () => {
    const bytes = new Uint8Array([37, 80, 68, 70]);
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(bytes, {
        status: 200,
        headers: { "Content-Type": "application/pdf" },
      }),
    );
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    const response = await transport.request({
      ...baseRequest,
      method: "GET",
      responseType: "array-buffer",
    });

    expect(new Uint8Array(response.body as ArrayBuffer)).toEqual(bytes);
    const [, init] = fetchMock.mock.calls[0]!;
    expect(new Headers(init?.headers).get("Accept")).toBe("application/pdf");
  });

  it("keeps JSON error mapping for binary endpoints", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ code: "NOT_FOUND" }, 404));
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(
      transport.request({
        ...baseRequest,
        method: "GET",
        responseType: "array-buffer",
      }),
    ).rejects.toMatchObject({ status: 404, apiCode: "NOT_FOUND" });
  });

  it("uses an endpoint-specific media type for binary responses", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        new Response(new Uint8Array([137, 80, 78, 71]), { status: 200 }),
      );
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await transport.request({
      ...baseRequest,
      accept: "image/png",
      responseType: "array-buffer",
    });

    const [, init] = fetchMock.mock.calls[0]!;
    expect(new Headers(init?.headers).get("Accept")).toBe("image/png");
  });

  it("passes FormData through without a manual content-type boundary", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ id: 1 }));
    const transport = new FetchTransport({ fetchImplementation: fetchMock });
    const body = new FormData();
    body.append("name", "Synthetic certificate");

    await transport.request({
      ...baseRequest,
      body,
      bodyEncoding: "form-data",
      retrySafety: "unsafe",
    });

    const [, init] = fetchMock.mock.calls[0]!;
    expect(init?.body).toBe(body);
    expect(new Headers(init?.headers).has("Content-Type")).toBe(false);
  });

  it("rejects endpoint paths outside the fixed origin", async () => {
    const transport = new FetchTransport({
      fetchImplementation: vi.fn<typeof fetch>(),
    });

    await expect(
      transport.request({
        ...baseRequest,
        path: "https://example.com/v1/test",
      }),
    ).rejects.toBeInstanceOf(ConfigurationError);
    await expect(
      transport.request({ ...baseRequest, path: "//example.com/v1/test" }),
    ).rejects.toBeInstanceOf(ConfigurationError);
  });

  it.each([
    [401, AuthenticationError],
    [403, AuthenticationError],
    [429, RateLimitError],
    [400, ApiError],
  ])("maps HTTP %i to the expected error", async (status, ErrorType) => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse(
          { code: "TEST_CODE", message: "Sanitized API message" },
          status,
          status === 429
            ? { "Retry-After": "1", "X-Request-Id": "request-1" }
            : undefined,
        ),
      );
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(transport.request(baseRequest)).rejects.toMatchObject({
      name: ErrorType.name,
      status,
      operationId: "ozon.test",
      apiCode: "TEST_CODE",
      apiMessage: "Sanitized API message",
      message: expect.stringContaining("Sanitized API message"),
    });
  });

  it("reports response metadata for retries and the final response", async () => {
    const onResponse = vi.fn();
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        jsonResponse({ message: "unavailable" }, 503, {
          "Retry-After": "0",
          "X-Request-Id": "request-1",
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({ result: true }, 200, {
          "X-Request-Id": "request-2",
        }),
      );
    const transport = new FetchTransport({
      fetchImplementation: fetchMock,
      onResponse,
    });

    const response = await transport.request({
      ...baseRequest,
      retry: { maxAttempts: 2, baseDelayMs: 0, maxDelayMs: 0 },
    });

    expect(onResponse).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        status: 503,
        requestId: "request-1",
        attempt: 1,
        willRetry: true,
      }),
    );
    expect(onResponse).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        status: 200,
        requestId: "request-2",
        attempt: 2,
        willRetry: false,
      }),
    );
    expect(response.metadata).toMatchObject({
      status: 200,
      requestId: "request-2",
      attempt: 2,
    });
  });

  it("does not let an observability callback change request behavior", async () => {
    const transport = new FetchTransport({
      fetchImplementation: vi
        .fn<typeof fetch>()
        .mockResolvedValue(jsonResponse({ result: true })),
      onResponse: () => {
        throw new Error("observer failed");
      },
    });

    await expect(transport.request(baseRequest)).resolves.toMatchObject({
      status: 200,
    });
  });

  it("does not include credentials or raw bodies in API errors", async () => {
    const secret = "must-not-appear";
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ code: "BAD", privateData: secret }, 400),
      );
    const transport = new FetchTransport({
      fetchImplementation: fetchMock,
      defaultHeaders: { "Api-Key": secret },
    });

    try {
      await transport.request(baseRequest);
      throw new Error("Expected request to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ApiError);
      expect(String(error)).not.toContain(secret);
      expect(JSON.stringify(error)).not.toContain(secret);
    }
  });

  it("rejects invalid JSON on successful responses", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("not-json", { status: 200 }));
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(transport.request(baseRequest)).rejects.toBeInstanceOf(
      ResponseValidationError,
    );
  });

  it("retries safe network failures", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockRejectedValueOnce(new TypeError("network unavailable"))
      .mockResolvedValueOnce(jsonResponse({ result: true }));
    const transport = new FetchTransport({
      fetchImplementation: fetchMock,
      random: () => 0.5,
    });

    await expect(
      transport.request({
        ...baseRequest,
        retry: { maxAttempts: 2, baseDelayMs: 0, maxDelayMs: 0 },
      }),
    ).resolves.toMatchObject({ status: 200 });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("retries retryable HTTP responses for safe operations", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(jsonResponse({ message: "unavailable" }, 503))
      .mockResolvedValueOnce(jsonResponse({ result: true }));
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(
      transport.request({
        ...baseRequest,
        retry: { maxAttempts: 2, baseDelayMs: 0, maxDelayMs: 0 },
      }),
    ).resolves.toMatchObject({ status: 200 });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("never retries unsafe operations even when retries are configured", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockRejectedValue(new TypeError("network unavailable"));
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(
      transport.request({
        operationId: baseRequest.operationId,
        method: baseRequest.method,
        path: baseRequest.path,
        retrySafety: "unsafe",
        retry: { maxAttempts: 10 },
      }),
    ).rejects.toThrow("network failure");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("rejects unserializable request bodies without a network attempt", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    const transport = new FetchTransport({ fetchImplementation: fetchMock });
    const body: Record<string, unknown> = {};
    body["self"] = body;

    await expect(
      transport.request({ ...baseRequest, body }),
    ).rejects.toBeInstanceOf(ConfigurationError);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("turns per-attempt timeouts into TimeoutError", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(
      (_input, init) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener(
            "abort",
            () => reject(init.signal?.reason),
            { once: true },
          );
        }),
    );
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(
      transport.request({
        ...baseRequest,
        timeoutMs: 5,
      }),
    ).rejects.toBeInstanceOf(TimeoutError);
  });

  it("preserves caller cancellation and does not retry", async () => {
    const reason = new DOMException("Cancelled by caller.", "AbortError");
    const controller = new AbortController();
    controller.abort(reason);
    const fetchMock = vi.fn<typeof fetch>();
    const transport = new FetchTransport({ fetchImplementation: fetchMock });

    await expect(
      transport.request({
        ...baseRequest,
        retry: { maxAttempts: 3 },
        signal: controller.signal,
      }),
    ).rejects.toBe(reason);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
