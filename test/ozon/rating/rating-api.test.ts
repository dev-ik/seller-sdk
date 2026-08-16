import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeGetFbsRatingIndexInfo,
  GET_FBS_RATING_INDEX_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/rating/get-fbs-index-info/execute.js";
import {
  executeGetRatingHistory,
  GET_RATING_HISTORY_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/rating/get-history/execute.js";
import {
  executeGetRatingSummary,
  GET_RATING_SUMMARY_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/rating/get-summary/execute.js";
import {
  executeListFbsRatingIndexPostings,
  LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/rating/list-fbs-index-postings/execute.js";

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

describe("Ozon SellerRating endpoints", () => {
  it("maps getRatingSummary with its required empty body", async () => {
    const body = await fixture("get-rating-summary.success.json");
    const transport = transportWith(body);

    await expect(executeGetRatingSummary(transport)).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_RATING_SUMMARY_OPERATION_ID,
        method: "POST",
        path: "/v1/rating/summary",
        body: {},
        retrySafety: "safe",
      },
    ]);
  });

  it("accepts a localization index object returned by the live API", async () => {
    const body = await fixture("get-rating-summary.object-index.json");

    await expect(executeGetRatingSummary(transportWith(body))).resolves.toEqual(
      body,
    );
  });

  it("rejects malformed rating summary values", async () => {
    const transport = transportWith(
      await fixture("get-rating-summary.malformed.json"),
    );

    await expect(executeGetRatingSummary(transport)).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_RATING_SUMMARY_OPERATION_ID,
    });
  });

  it("maps getRatingHistory and validates history", async () => {
    const body = await fixture("get-rating-history.success.json");
    const transport = transportWith(body);
    const input = {
      date_from: "2026-08-01T00:00:00Z",
      date_to: "2026-08-14T23:59:59Z",
      ratings: ["rating_test"],
      with_premium_scores: true,
    };

    await expect(executeGetRatingHistory(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: GET_RATING_HISTORY_OPERATION_ID,
        method: "POST",
        path: "/v1/rating/history",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects malformed rating history collections", async () => {
    const transport = transportWith(
      await fixture("get-rating-history.malformed.json"),
    );

    await expect(
      executeGetRatingHistory(transport, {
        date_from: "2026-08-01T00:00:00Z",
        date_to: "2026-08-14T23:59:59Z",
        ratings: [],
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: GET_RATING_HISTORY_OPERATION_ID,
    });
  });

  it("maps getFbsRatingIndexInfo without a request body", async () => {
    const body = await fixture("get-fbs-rating-index-info.success.json");
    const transport = transportWith(body);

    await expect(executeGetFbsRatingIndexInfo(transport)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: GET_FBS_RATING_INDEX_INFO_OPERATION_ID,
        method: "POST",
        path: "/v1/rating/index/fbs/info",
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects malformed FBS index dynamics", async () => {
    const transport = transportWith(
      await fixture("get-fbs-rating-index-info.malformed.json"),
    );

    await expect(executeGetFbsRatingIndexInfo(transport)).rejects.toMatchObject(
      {
        name: ResponseValidationError.name,
        operationId: GET_FBS_RATING_INDEX_INFO_OPERATION_ID,
      },
    );
  });

  it("maps listFbsRatingIndexPostings and its cursor pagination", async () => {
    const body = await fixture("list-fbs-rating-index-postings.success.json");
    const transport = transportWith(body);
    const input = {
      cursor: "test-cursor",
      filter: {
        date_from: "2026-08-01T00:00:00Z",
        date_to: "2026-08-14T23:59:59Z",
        posting_numbers: ["TEST-POSTING-001"],
      },
      limit: 1000,
    };

    await expect(
      executeListFbsRatingIndexPostings(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID,
        method: "POST",
        path: "/v1/rating/index/fbs/posting/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects undocumented FBS posting error types", async () => {
    const transport = transportWith(
      await fixture("list-fbs-rating-index-postings.malformed.json"),
    );

    await expect(
      executeListFbsRatingIndexPostings(transport, {
        filter: {
          date_from: "2026-08-01T00:00:00Z",
          date_to: "2026-08-14T23:59:59Z",
        },
        limit: 100,
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID,
    });
  });

  it("exposes all SellerRating methods through the root client", async () => {
    const responses = await Promise.all([
      fixture("get-rating-summary.success.json"),
      fixture("get-rating-history.success.json"),
      fixture("get-fbs-rating-index-info.success.json"),
      fixture("list-fbs-rating-index-postings.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.ratings.getRatingSummary();
    await seller.ozon.ratings.getRatingHistory({
      date_from: "2026-08-01T00:00:00Z",
      date_to: "2026-08-14T23:59:59Z",
      ratings: ["rating_test"],
    });
    await seller.ozon.ratings.getFbsRatingIndexInfo();
    await seller.ozon.ratings.listFbsRatingIndexPostings({
      filter: {
        date_from: "2026-08-01T00:00:00Z",
        date_to: "2026-08-14T23:59:59Z",
      },
      limit: 100,
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/rating/summary",
      "https://api-seller.ozon.ru/v1/rating/history",
      "https://api-seller.ozon.ru/v1/rating/index/fbs/info",
      "https://api-seller.ozon.ru/v1/rating/index/fbs/posting/list",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
