import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListProductCertificates,
  LIST_PRODUCT_CERTIFICATES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/list/execute.js";
import {
  executeListCertificateProductStatuses,
  LIST_CERTIFICATE_PRODUCT_STATUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/product-status/list/execute.js";
import {
  executeListCertificateProducts,
  LIST_CERTIFICATE_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/products/list/execute.js";
import {
  executeListCertificateRejectionReasons,
  LIST_CERTIFICATE_REJECTION_REASONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/rejection-reasons/list/execute.js";
import {
  executeListCertificateStatuses,
  LIST_CERTIFICATE_STATUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/status/list/execute.js";
import {
  executeUnbindProductCertificate,
  UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/unbind/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Product certificate list API", () => {
  it("lists certificates with page pagination", async () => {
    const input = { page: 1, page_size: 100 };
    const mock = transport({
      result: {
        certificates: [
          {
            certificate_id: 50058,
            certificate_number: "TEST-001",
            issue_date: "2026-08-01T00:00:00Z",
          },
        ],
        page_count: 1,
      },
    });
    const response = await executeListProductCertificates(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRODUCT_CERTIFICATES_OPERATION_ID,
      path: "/v1/product/certificate/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.certificates?.[0]?.certificate_id).toBe(50058);
  });

  it("lists product verification statuses", async () => {
    const mock = transport({ result: [{ code: "verified", name: "Test" }] });
    const response = await executeListCertificateProductStatuses(mock);
    expect(mock.requests[0]).toMatchObject({
      path: "/v1/product/certificate/product_status/list",
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.code).toBe("verified");
  });

  it("lists products bound to a certificate", async () => {
    const input = { certificate_id: 50058, limit: 100 };
    const mock = transport({
      result: {
        items: [{ product_id: 10, product_status_code: "verified", sku: 20 }],
        count: 1,
      },
    });
    const response = await executeListCertificateProducts(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_CERTIFICATE_PRODUCTS_OPERATION_ID,
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.items?.[0]?.sku).toBe(20);
  });

  it("unbinds a certificate without automatic retries", async () => {
    const input = { certificate_id: 50058, skus: ["20"] } as const;
    const mock = transport({
      result: [{ product_id: 10, updated: true, error: "" }],
    });
    const response = await executeUnbindProductCertificate(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID,
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.[0]?.updated).toBe(true);
  });

  it("lists certificate rejection reasons", async () => {
    const response = await executeListCertificateRejectionReasons(
      transport({ result: [{ code: "invalid", name: "Test" }] }),
    );
    expect(response.result?.[0]?.code).toBe("invalid");
  });

  it("lists certificate statuses", async () => {
    const response = await executeListCertificateStatuses(
      transport({ result: [{ code: "active", name: "Test" }] }),
    );
    expect(response.result?.[0]?.code).toBe("active");
  });

  it.each([
    [
      LIST_PRODUCT_CERTIFICATES_OPERATION_ID,
      (mock: MockTransport) =>
        executeListProductCertificates(mock, { page: 1, page_size: 100 }),
      { result: { page_count: "bad" } },
    ],
    [
      LIST_CERTIFICATE_PRODUCT_STATUSES_OPERATION_ID,
      (mock: MockTransport) => executeListCertificateProductStatuses(mock),
      { result: [{ code: false }] },
    ],
    [
      LIST_CERTIFICATE_PRODUCTS_OPERATION_ID,
      (mock: MockTransport) =>
        executeListCertificateProducts(mock, { certificate_id: 1, limit: 100 }),
      { result: { count: "bad" } },
    ],
    [
      UNBIND_PRODUCT_CERTIFICATE_OPERATION_ID,
      (mock: MockTransport) =>
        executeUnbindProductCertificate(mock, {
          certificate_id: 1,
          skus: ["1"],
        }),
      { result: [{ updated: "bad" }] },
    ],
    [
      LIST_CERTIFICATE_REJECTION_REASONS_OPERATION_ID,
      (mock: MockTransport) => executeListCertificateRejectionReasons(mock),
      { result: [{ name: 1 }] },
    ],
    [
      LIST_CERTIFICATE_STATUSES_OPERATION_ID,
      (mock: MockTransport) => executeListCertificateStatuses(mock),
      { result: "bad" },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
