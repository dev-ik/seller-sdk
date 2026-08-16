import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListCertificateAccordanceTypesV1,
  LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/accordance-types/v1/execute.js";
import {
  executeListCertificateAccordanceTypesV2,
  LIST_CERTIFICATE_ACCORDANCE_TYPES_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/accordance-types/v2/execute.js";
import {
  BIND_PRODUCT_CERTIFICATE_OPERATION_ID,
  executeBindProductCertificate,
} from "../../../packages/ozon/src/endpoints/product/certificate/bind/execute.js";
import {
  executeListCertificationCategoriesV1,
  LIST_CERTIFICATION_CATEGORIES_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/certification/list/v1/execute.js";
import {
  executeListCertificationCategoriesV2,
  LIST_CERTIFICATION_CATEGORIES_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/certification/list/v2/execute.js";
import {
  CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID,
  executeCreateProductCertificateV1,
} from "../../../packages/ozon/src/endpoints/product/certificate/create/v1/execute.js";
import {
  DELETE_PRODUCT_CERTIFICATE_OPERATION_ID,
  executeDeleteProductCertificate,
} from "../../../packages/ozon/src/endpoints/product/certificate/delete/execute.js";
import {
  executeGetProductCertificateInfo,
  GET_PRODUCT_CERTIFICATE_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/get-info/execute.js";
import {
  executeListCertificateTypes,
  LIST_CERTIFICATE_TYPES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/certificate/types/list/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Product certificate API", () => {
  it("lists v1 accordance types", async () => {
    const mock = transport({ result: [{ name: "Synthetic", value: "test" }] });
    const response = await executeListCertificateAccordanceTypesV1(mock);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID,
      method: "GET",
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.value).toBe("test");
  });
  it("lists v2 accordance types", async () => {
    const mock = transport({
      result: { base: [{ code: "base", title: "Synthetic" }], hazard: [] },
    });
    const response = await executeListCertificateAccordanceTypesV2(mock);
    expect(response.result?.base?.[0]?.code).toBe("base");
  });
  it("lists certificate document types", async () => {
    const response = await executeListCertificateTypes(
      transport({ result: [{ name: "Synthetic", value: "test" }] }),
    );
    expect(response.result?.[0]?.name).toBe("Synthetic");
  });
  it("lists v2 certification categories", async () => {
    const input = { page: 1, page_size: 100 };
    const mock = transport({
      certification: [
        {
          category_id: 1,
          category_name: "Synthetic",
          is_required: true,
          type_id: 2,
          type_name: "Test",
        },
      ],
      total: 1,
    });
    const response = await executeListCertificationCategoriesV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      body: input,
      retrySafety: "safe",
    });
    expect(response.total).toBe(1);
  });
  it("lists legacy v1 certification categories", async () => {
    const response = await executeListCertificationCategoriesV1(
      transport({
        result: {
          certification: [{ category_name: "Synthetic", is_required: false }],
          total: 1,
        },
      }),
      { page: 1, page_size: 100 },
    );
    expect(response.result?.total).toBe(1);
  });
  it("creates a certificate using multipart form data", async () => {
    const mock = transport({ id: 50058 });
    const response = await executeCreateProductCertificateV1(mock, {
      files: [
        {
          data: new Blob(["synthetic"], { type: "application/pdf" }),
          filename: "test.pdf",
        },
      ],
      name: "Synthetic certificate",
      number: "TEST-001",
      type_code: "declaration",
      accordance_type_code: "gost",
      issue_date: "2026-08-01T00:00:00Z",
    });
    expect(response).toEqual({ id: 50058 });
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID,
      bodyEncoding: "form-data",
      retrySafety: "unsafe",
    });
    const body = mock.requests[0]?.body;
    expect(body).toBeInstanceOf(FormData);
    expect((body as FormData).get("number")).toBe("TEST-001");
  });
  it("binds a certificate without automatic retries", async () => {
    const input = { certificate_id: 50058, skus: ["2901231"] } as const;
    const mock = transport({ result: true });
    const response = await executeBindProductCertificate(mock, input);
    expect(mock.requests[0]).toMatchObject({
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result).toBe(true);
  });
  it("deletes a certificate without automatic retries", async () => {
    const response = await executeDeleteProductCertificate(
      transport({ result: { is_delete: true, error_message: "" } }),
      { certificate_id: 50058 },
    );
    expect(response.result?.is_delete).toBe(true);
  });
  it("gets certificate information", async () => {
    const response = await executeGetProductCertificateInfo(
      transport({
        result: {
          certificate_id: 50058,
          certificate_number: "TEST-001",
          issue_date: "2026-08-01T00:00:00Z",
          expire_date: "2027-08-01T00:00:00Z",
          products_count: 1,
        },
      }),
      { certificate_number: "TEST-001" },
    );
    expect(response.result?.certificate_id).toBe(50058);
  });

  it.each([
    [
      LIST_CERTIFICATE_ACCORDANCE_TYPES_V1_OPERATION_ID,
      (m: MockTransport) => executeListCertificateAccordanceTypesV1(m),
      { result: [{ value: false }] },
    ],
    [
      LIST_CERTIFICATE_ACCORDANCE_TYPES_V2_OPERATION_ID,
      (m: MockTransport) => executeListCertificateAccordanceTypesV2(m),
      { result: { base: [{ code: false }] } },
    ],
    [
      LIST_CERTIFICATE_TYPES_OPERATION_ID,
      (m: MockTransport) => executeListCertificateTypes(m),
      { result: [{ name: 1 }] },
    ],
    [
      LIST_CERTIFICATION_CATEGORIES_V2_OPERATION_ID,
      (m: MockTransport) =>
        executeListCertificationCategoriesV2(m, { page: 1, page_size: 1 }),
      { total: "bad" },
    ],
    [
      LIST_CERTIFICATION_CATEGORIES_V1_OPERATION_ID,
      (m: MockTransport) => executeListCertificationCategoriesV1(m, {}),
      { result: { total: "bad" } },
    ],
    [
      CREATE_PRODUCT_CERTIFICATE_V1_OPERATION_ID,
      (m: MockTransport) =>
        executeCreateProductCertificateV1(m, {
          files: [{ data: new Blob(["x"]) }],
          name: "Test",
          number: "1",
          type_code: "declaration",
          issue_date: "2026-08-01T00:00:00Z",
        }),
      false,
    ],
    [
      BIND_PRODUCT_CERTIFICATE_OPERATION_ID,
      (m: MockTransport) =>
        executeBindProductCertificate(m, { certificate_id: 1, skus: ["1"] }),
      { result: "bad" },
    ],
    [
      DELETE_PRODUCT_CERTIFICATE_OPERATION_ID,
      (m: MockTransport) =>
        executeDeleteProductCertificate(m, { certificate_id: 1 }),
      { result: { is_delete: "bad" } },
    ],
    [
      GET_PRODUCT_CERTIFICATE_INFO_OPERATION_ID,
      (m: MockTransport) =>
        executeGetProductCertificateInfo(m, { certificate_number: "1" }),
      { result: { certificate_id: "bad" } },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
