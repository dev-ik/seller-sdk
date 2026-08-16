import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeShipFbsPostingPackageV4,
  SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/ship/package/v4/execute.js";
import {
  executeSetFbsPostingProductExemplarsV6,
  SET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/exemplar/set/v6/execute.js";
import {
  CREATE_OR_GET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
  executeCreateOrGetFbsPostingProductExemplarsV6,
} from "../../../packages/ozon/src/endpoints/posting/fbs/exemplar/create-or-get/v6/execute.js";
import {
  executeGetFbsPostingProductExemplarStatusV5,
  GET_FBS_POSTING_PRODUCT_EXEMPLAR_STATUS_V5_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/exemplar/status/v5/execute.js";
import {
  executeValidateFbsPostingProductExemplarsV5,
  VALIDATE_FBS_POSTING_PRODUCT_EXEMPLARS_V5_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/exemplar/validate/v5/execute.js";
import {
  executeUpdateFbsPostingProductExemplars,
  UPDATE_FBS_POSTING_PRODUCT_EXEMPLARS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/exemplar/update/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon FBS exemplar API", () => {
  it("partially ships a posting package without retries", async () => {
    const input = {
      posting_number: "TEST-POSTING",
      products: [{ exemplarsIds: ["101"], product_id: 1001, quantity: 1 }],
    };
    const transport = transportWith({ result: "TEST-POSTING" });

    await expect(
      executeShipFbsPostingPackageV4(transport, input),
    ).resolves.toEqual({ result: "TEST-POSTING" });
    expect(transport.requests[0]).toMatchObject({
      operationId: SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID,
      method: "POST",
      path: "/v4/posting/fbs/ship/package",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("sets exemplar data and accepts the documented empty response", async () => {
    const input = {
      posting_number: "TEST-POSTING",
      products: [{ product_id: 1001, exemplars: [{ exemplar_id: 101 }] }],
    };
    const transport = transportWith(null);

    await expect(
      executeSetFbsPostingProductExemplarsV6(transport, input),
    ).resolves.toBeUndefined();
    expect(transport.requests[0]).toMatchObject({
      path: "/v6/fbs/posting/product/exemplar/set",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("creates or gets posting exemplars without retries", async () => {
    const body = {
      multi_box_qty: 1,
      posting_number: "TEST-POSTING",
      products: [
        {
          exemplars: [{ exemplar_id: 101, marks: [{ mark: "TEST" }] }],
          has_imei: false,
          is_weight_needed: true,
          product_id: 1001,
          quantity: 1,
          weight_min: 0.1,
          weight_max: 1.5,
        },
      ],
    };
    const transport = transportWith(body);

    await expect(
      executeCreateOrGetFbsPostingProductExemplarsV6(transport, {
        posting_number: "TEST-POSTING",
      }),
    ).resolves.toEqual(body);
    expect(transport.requests[0]).toMatchObject({
      path: "/v6/fbs/posting/product/exemplar/create-or-get",
      retrySafety: "unsafe",
    });
  });

  it("gets exemplar validation status with safe retries", async () => {
    const body = {
      posting_number: "TEST-POSTING",
      status: "passed",
      products: [
        {
          product_id: 1001,
          exemplars: [
            {
              exemplar_id: 101,
              gtd_check_status: "passed",
              marks: [
                { check_status: "passed", error_codes: [], mark: "TEST" },
              ],
            },
          ],
        },
      ],
    };
    const transport = transportWith(body);

    await expect(
      executeGetFbsPostingProductExemplarStatusV5(transport, {
        posting_number: "TEST-POSTING",
      }),
    ).resolves.toEqual(body);
    expect(transport.requests[0]).toMatchObject({
      path: "/v5/fbs/posting/product/exemplar/status",
      retrySafety: "safe",
    });
  });

  it("validates exemplar data with safe retries", async () => {
    const input = {
      posting_number: "TEST-POSTING",
      products: [
        { product_id: 1001, exemplars: [{ marks: [{ mark: "TEST" }] }] },
      ],
    };
    const body = {
      products: [
        {
          product_id: 1001,
          valid: true,
          exemplars: [{ valid: true, marks: [{ mark: "TEST", valid: true }] }],
        },
      ],
    };
    const transport = transportWith(body);

    await expect(
      executeValidateFbsPostingProductExemplarsV5(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests[0]).toMatchObject({
      path: "/v5/fbs/posting/product/exemplar/validate",
      body: input,
      retrySafety: "safe",
    });
  });

  it("updates exemplars and accepts the documented empty response", async () => {
    const transport = transportWith(null);

    await expect(
      executeUpdateFbsPostingProductExemplars(transport, {
        posting_number: "TEST-POSTING",
      }),
    ).resolves.toBeUndefined();
    expect(transport.requests[0]).toMatchObject({
      path: "/v1/fbs/posting/product/exemplar/update",
      retrySafety: "unsafe",
    });
  });

  it.each([
    [
      SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID,
      (transport: MockTransport) =>
        executeShipFbsPostingPackageV4(transport, {
          posting_number: "TEST",
        }),
      { result: 1 },
    ],
    [
      SET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsPostingProductExemplarsV6(transport, {
          posting_number: "TEST",
          products: [],
        }),
      {},
    ],
    [
      CREATE_OR_GET_FBS_POSTING_PRODUCT_EXEMPLARS_V6_OPERATION_ID,
      (transport: MockTransport) =>
        executeCreateOrGetFbsPostingProductExemplarsV6(transport, {
          posting_number: "TEST",
        }),
      { products: [{ has_imei: "yes" }] },
    ],
    [
      GET_FBS_POSTING_PRODUCT_EXEMPLAR_STATUS_V5_OPERATION_ID,
      (transport: MockTransport) =>
        executeGetFbsPostingProductExemplarStatusV5(transport, {
          posting_number: "TEST",
        }),
      { products: [{ exemplars: [{ weight: "heavy" }] }] },
    ],
    [
      VALIDATE_FBS_POSTING_PRODUCT_EXEMPLARS_V5_OPERATION_ID,
      (transport: MockTransport) =>
        executeValidateFbsPostingProductExemplarsV5(transport, {
          posting_number: "TEST",
          products: [],
        }),
      { products: [{ valid: "yes" }] },
    ],
    [
      UPDATE_FBS_POSTING_PRODUCT_EXEMPLARS_OPERATION_ID,
      (transport: MockTransport) =>
        executeUpdateFbsPostingProductExemplars(transport, {
          posting_number: "TEST",
        }),
      {},
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
