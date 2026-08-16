import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  CANCEL_FBO_POSTING_OPERATION_ID,
  executeCancelFboPosting,
} from "../../../packages/ozon/src/endpoints/posting/fbo/cancel/execute.js";
import {
  executeGetFboPostingCancellationStatus,
  GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/get-cancel-status/execute.js";
import {
  executeGetFboPostingMarks,
  GET_FBO_POSTING_MARKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/get-marks/execute.js";

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

describe("Ozon FboPostingAPI endpoints", () => {
  it("maps FBO posting cancellation as an unsafe mutation", async () => {
    const body = await fixture("cancel-fbo-posting.success.json");
    const transport = transportWith(body);
    const input = {
      posting_number: "TEST-POSTING-003",
      reason_id: 101,
      reason_message: "Тестовая причина",
    };

    await expect(executeCancelFboPosting(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: CANCEL_FBO_POSTING_OPERATION_ID,
        method: "POST",
        path: "/v1/posting/cancel",
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it("maps cancellation status as a safe read", async () => {
    const body = await fixture(
      "get-fbo-posting-cancellation-status.success.json",
    );
    const transport = transportWith(body);
    const input = { posting_number: "TEST-POSTING-003" };

    await expect(
      executeGetFboPostingCancellationStatus(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID,
        method: "POST",
        path: "/v1/posting/cancel/status",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps posting marks as a safe read", async () => {
    const body = await fixture("get-fbo-posting-marks.success.json");
    const transport = transportWith(body);
    const input = { posting_numbers: ["TEST-POSTING-003"] };

    await expect(executeGetFboPostingMarks(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: GET_FBO_POSTING_MARKS_OPERATION_ID,
        method: "POST",
        path: "/v1/posting/marks",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it.each([
    [
      CANCEL_FBO_POSTING_OPERATION_ID,
      "cancel-fbo-posting.malformed.json",
      (transport: MockTransport) =>
        executeCancelFboPosting(transport, {
          posting_number: "TEST-POSTING-003",
          reason_id: 101,
        }),
    ],
    [
      GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID,
      "get-fbo-posting-cancellation-status.malformed.json",
      (transport: MockTransport) =>
        executeGetFboPostingCancellationStatus(transport, {}),
    ],
    [
      GET_FBO_POSTING_MARKS_OPERATION_ID,
      "get-fbo-posting-marks.malformed.json",
      (transport: MockTransport) => executeGetFboPostingMarks(transport, {}),
    ],
  ])(
    "rejects malformed FBO posting response for %s",
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
      fixture("cancel-fbo-posting.success.json"),
      fixture("get-fbo-posting-cancellation-status.success.json"),
      fixture("get-fbo-posting-marks.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.postings.cancelFboPosting({
      posting_number: "TEST-POSTING-003",
      reason_id: 101,
    });
    await seller.ozon.postings.getFboPostingCancellationStatus({
      posting_number: "TEST-POSTING-003",
    });
    await seller.ozon.postings.getFboPostingMarks({
      posting_numbers: ["TEST-POSTING-003"],
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/posting/cancel",
      "https://api-seller.ozon.ru/v1/posting/cancel/status",
      "https://api-seller.ozon.ru/v1/posting/marks",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });

  it("does not retry an indeterminate cancellation failure", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () =>
        jsonResponse({ code: "UNAVAILABLE", message: "Try later" }, 503),
      );
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.postings.cancelFboPosting({
        posting_number: "TEST-POSTING-003",
        reason_id: 101,
      }),
    ).rejects.toBeInstanceOf(ApiError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
