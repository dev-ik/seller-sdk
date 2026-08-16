import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListFbsAssemblyCarriageProducts,
  LIST_FBS_ASSEMBLY_CARRIAGE_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/assembly/carriage/product/list/v1/execute.js";
import {
  executeListFbsAssemblyPostings,
  LIST_FBS_ASSEMBLY_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/assembly/posting/list/v1/execute.js";
import {
  executeListFbsAssemblyProducts,
  LIST_FBS_ASSEMBLY_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/assembly/product/list/v1/execute.js";
import {
  executeSetFbsPostingTrackingNumbers,
  SET_FBS_POSTING_TRACKING_NUMBERS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/tracking-number/set/v2/execute.js";
import {
  executeSetFbsPostingsDelivering,
  SET_FBS_POSTINGS_DELIVERING_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/status/delivering/v2/execute.js";
import {
  executeSetFbsPostingsLastMile,
  SET_FBS_POSTINGS_LAST_MILE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/status/last-mile/v2/execute.js";
import {
  executeSetFbsPostingsDelivered,
  SET_FBS_POSTINGS_DELIVERED_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/status/delivered/v2/execute.js";
import {
  executeGetFbsPostingTimeslotChangeRestrictions,
  GET_FBS_POSTING_TIMESLOT_CHANGE_RESTRICTIONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/timeslot/change-restrictions/v1/execute.js";
import {
  executeSetFbsPostingTimeslot,
  SET_FBS_POSTING_TIMESLOT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/timeslot/set/v1/execute.js";
import {
  executeSetFbsPostingCutoff,
  SET_FBS_POSTING_CUTOFF_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/cutoff/set/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

const period = {
  cutoff_from: "2026-08-15T00:00:00Z",
  cutoff_to: "2026-08-16T00:00:00Z",
};

describe("Ozon FBS assembly, status and timeslot API", () => {
  it("maps and validates all ten successful operations", async () => {
    const carriageProducts = transportWith({
      cursor: "next",
      products: [{ posting_numbers: ["P-1"], quantity: 1, sku: 100 }],
    });
    await expect(
      executeListFbsAssemblyCarriageProducts(carriageProducts, {
        filter: { carriage_id: 10 },
        limit: 100,
      }),
    ).resolves.toHaveProperty("cursor", "next");
    expect(carriageProducts.requests[0]).toMatchObject({
      path: "/v1/assembly/carriage/product/list",
      retrySafety: "safe",
    });

    const postings = transportWith({
      cursor: "next",
      cutoff: period.cutoff_to,
      postings: [{ products: [{ quantity: 1, sku: 100 }] }],
    });
    await expect(
      executeListFbsAssemblyPostings(postings, {
        filter: period,
        limit: 100,
        sort_dir: "ASC",
      }),
    ).resolves.toHaveProperty("postings");
    expect(postings.requests[0]).toMatchObject({
      path: "/v1/assembly/fbs/posting/list",
      retrySafety: "safe",
    });

    const products = transportWith({
      has_next: true,
      products: [{ postings: [{ posting_number: "P-1", quantity: 1 }] }],
      products_count: 1,
    });
    await expect(
      executeListFbsAssemblyProducts(products, {
        filter: period,
        limit: 100,
      }),
    ).resolves.toHaveProperty("has_next", true);
    expect(products.requests[0]).toMatchObject({
      path: "/v1/assembly/fbs/product/list",
      retrySafety: "safe",
    });

    const moveStatus = {
      result: [{ error: "", posting_number: "P-1", result: true }],
    };
    const tracking = transportWith(moveStatus);
    await expect(
      executeSetFbsPostingTrackingNumbers(tracking, {
        tracking_numbers: [
          { posting_number: "P-1", tracking_number: "TRACK-1" },
        ],
      }),
    ).resolves.toEqual(moveStatus);
    expect(tracking.requests[0]).toMatchObject({
      path: "/v2/fbs/posting/tracking-number/set",
      retrySafety: "unsafe",
    });

    const delivering = transportWith(moveStatus);
    await executeSetFbsPostingsDelivering(delivering, {
      posting_number: ["P-1"],
    });
    expect(delivering.requests[0]).toMatchObject({
      path: "/v2/fbs/posting/delivering",
      retrySafety: "unsafe",
    });

    const lastMile = transportWith(moveStatus);
    await executeSetFbsPostingsLastMile(lastMile, {
      posting_number: ["P-1"],
    });
    expect(lastMile.requests[0]).toMatchObject({
      path: "/v2/fbs/posting/last-mile",
      retrySafety: "unsafe",
    });

    const delivered = transportWith(moveStatus);
    await executeSetFbsPostingsDelivered(delivered, {
      posting_number: ["P-1"],
    });
    expect(delivered.requests[0]).toMatchObject({
      path: "/v2/fbs/posting/delivered",
      retrySafety: "unsafe",
    });

    const restrictions = transportWith({
      delivery_interval: {
        begin: "2026-08-17T00:00:00Z",
        end: "2026-08-18T00:00:00Z",
      },
      remaining_changes_count: 2,
    });
    await expect(
      executeGetFbsPostingTimeslotChangeRestrictions(restrictions, {
        posting_number: "P-1",
      }),
    ).resolves.toHaveProperty("remaining_changes_count", 2);
    expect(restrictions.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/timeslot/change-restrictions",
      retrySafety: "safe",
    });

    const timeslot = transportWith({ result: true });
    await executeSetFbsPostingTimeslot(timeslot, {
      new_timeslot: {
        from: "2026-08-17T00:00:00Z",
        to: "2026-08-18T00:00:00Z",
      },
      posting_number: "P-1",
    });
    expect(timeslot.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/timeslot/set",
      retrySafety: "unsafe",
    });

    const cutoff = transportWith({ result: true });
    await executeSetFbsPostingCutoff(cutoff, {
      new_cutoff_date: "2026-08-17T00:00:00Z",
      posting_number: "P-1",
    });
    expect(cutoff.requests[0]).toMatchObject({
      path: "/v1/posting/cutoff/set",
      retrySafety: "unsafe",
    });
  });

  it.each([
    [
      LIST_FBS_ASSEMBLY_CARRIAGE_PRODUCTS_OPERATION_ID,
      (transport: MockTransport) =>
        executeListFbsAssemblyCarriageProducts(transport, {
          filter: { carriage_id: 1 },
          limit: 1,
        }),
      { products: [{ quantity: "bad" }] },
    ],
    [
      LIST_FBS_ASSEMBLY_POSTINGS_OPERATION_ID,
      (transport: MockTransport) =>
        executeListFbsAssemblyPostings(transport, {
          filter: period,
          limit: 1,
          sort_dir: "ASC",
        }),
      { postings: [{ products: [{ sku: "bad" }] }] },
    ],
    [
      LIST_FBS_ASSEMBLY_PRODUCTS_OPERATION_ID,
      (transport: MockTransport) =>
        executeListFbsAssemblyProducts(transport, {
          filter: period,
          limit: 1,
        }),
      { has_next: "bad" },
    ],
    [
      SET_FBS_POSTING_TRACKING_NUMBERS_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingTrackingNumbers(transport, {
          tracking_numbers: [],
        }),
      { result: [{ result: "bad" }] },
    ],
    [
      SET_FBS_POSTINGS_DELIVERING_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingsDelivering(transport, { posting_number: [] }),
      { result: "bad" },
    ],
    [
      SET_FBS_POSTINGS_LAST_MILE_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingsLastMile(transport, { posting_number: [] }),
      { result: [{ error: 1 }] },
    ],
    [
      SET_FBS_POSTINGS_DELIVERED_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingsDelivered(transport, { posting_number: [] }),
      { result: [{ posting_number: 1 }] },
    ],
    [
      GET_FBS_POSTING_TIMESLOT_CHANGE_RESTRICTIONS_OPERATION_ID,
      (transport: MockTransport) =>
        executeGetFbsPostingTimeslotChangeRestrictions(transport, {
          posting_number: "P-1",
        }),
      { remaining_changes_count: "bad" },
    ],
    [
      SET_FBS_POSTING_TIMESLOT_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingTimeslot(transport, {
          new_timeslot: { from: "from", to: "to" },
          posting_number: "P-1",
        }),
      { result: "bad" },
    ],
    [
      SET_FBS_POSTING_CUTOFF_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingCutoff(transport, {
          new_cutoff_date: "date",
          posting_number: "P-1",
        }),
      { result: "bad" },
    ],
  ] as const)(
    "rejects malformed response for %s",
    async (operationId, run, body) => {
      await expect(run(transportWith(body))).rejects.toMatchObject({
        operationId,
      });
    },
  );
});
