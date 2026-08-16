import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetFbsPostingByBarcodeV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/get-by-barcode/v2/execute.js";
import { executeGetFbsPostingV3 } from "../../../packages/ozon/src/endpoints/posting/fbs/get/v3/execute.js";
import { executeListFbsPostingsV3 } from "../../../packages/ozon/src/endpoints/posting/fbs/list/v3/execute.js";
import { executeListFbsPostingsV4 } from "../../../packages/ozon/src/endpoints/posting/fbs/list/v4/execute.js";
import { executeSetFbsPostingMultiboxQuantityV3 } from "../../../packages/ozon/src/endpoints/posting/fbs/multibox-quantity/set/v3/execute.js";
import { executeListFbsPostingProductCountriesV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/product/country/list/v2/execute.js";
import { executeSetFbsPostingProductCountryV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/product/country/set/v2/execute.js";
import { executeGetFbsPostingRestrictionsV1 } from "../../../packages/ozon/src/endpoints/posting/fbs/restrictions/get/v1/execute.js";
import { executeListUnfulfilledFbsPostingsV3 } from "../../../packages/ozon/src/endpoints/posting/fbs/unfulfilled/list/v3/execute.js";
import { executeListUnfulfilledFbsPostingsV4 } from "../../../packages/ozon/src/endpoints/posting/fbs/unfulfilled/list/v4/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

const range = { since: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" };

describe("Ozon FBS posting list and details API", () => {
  it("maps and validates all ten operations", async () => {
    const unfulfilledV3 = transportWith({
      result: {
        count: 1,
        postings: [
          { posting_number: "P-1", products: [{ sku: 1, quantity: 1 }] },
        ],
      },
    });
    await executeListUnfulfilledFbsPostingsV3(unfulfilledV3, {
      filter: { cutoff_from: range.since, cutoff_to: range.to },
      limit: 10,
      offset: 0,
    });
    expect(unfulfilledV3.requests[0]).toMatchObject({
      path: "/v3/posting/fbs/unfulfilled/list",
      retrySafety: "safe",
    });

    const unfulfilledV4 = transportWith({
      count: 1,
      cursor: "next",
      has_next: true,
      postings: [{ posting_number: "P-1", volume_weight: 1.5 }],
    });
    await executeListUnfulfilledFbsPostingsV4(unfulfilledV4, { limit: 10 });
    expect(unfulfilledV4.requests[0]).toMatchObject({
      path: "/v4/posting/fbs/unfulfilled/list",
      retrySafety: "safe",
    });

    const listV3 = transportWith({
      result: { has_next: false, postings: [{ posting_number: "P-1" }] },
    });
    await executeListFbsPostingsV3(listV3, {
      filter: range,
      limit: 10,
      offset: 0,
    });
    expect(listV3.requests[0]).toMatchObject({
      path: "/v3/posting/fbs/list",
      retrySafety: "safe",
    });

    const listV4 = transportWith({
      cursor: "next",
      has_next: false,
      postings: [
        {
          posting_number: "P-1",
          products: [{ price: { amount: "100", currency: "RUB" } }],
        },
      ],
    });
    await executeListFbsPostingsV4(listV4, { filter: range, limit: 10 });
    expect(listV4.requests[0]).toMatchObject({
      path: "/v4/posting/fbs/list",
      retrySafety: "safe",
    });

    const get = transportWith({
      result: {
        posting_number: "P-1",
        product_exemplars: {
          products: [{ sku: 1, exemplars: [{ exemplar_id: 2 }] }],
        },
      },
    });
    await executeGetFbsPostingV3(get, { posting_number: "P-1" });
    expect(get.requests[0]).toMatchObject({
      path: "/v3/posting/fbs/get",
      retrySafety: "safe",
    });

    const barcode = transportWith({
      result: {
        posting_number: "P-1",
        barcodes: { lower_barcode: "B-1" },
        products: [{ sku: 1, quantity: 1 }],
      },
    });
    await executeGetFbsPostingByBarcodeV2(barcode, { barcode: "B-1" });
    expect(barcode.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/get-by-barcode",
      retrySafety: "safe",
    });

    const multibox = transportWith({ result: { result: true } });
    await executeSetFbsPostingMultiboxQuantityV3(multibox, {
      multi_box_qty: 2,
      posting_number: "P-1",
    });
    expect(multibox.requests[0]).toMatchObject({
      path: "/v3/posting/multiboxqty/set",
      retrySafety: "unsafe",
    });

    const countries = transportWith({
      result: [{ country_iso_code: "RU", name: "Россия" }],
    });
    await executeListFbsPostingProductCountriesV2(countries, {
      name_search: "Рос",
    });
    expect(countries.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/product/country/list",
      retrySafety: "safe",
    });

    const country = transportWith({ is_gtd_needed: false, product_id: 1 });
    await executeSetFbsPostingProductCountryV2(country, {
      country_iso_code: "RU",
      posting_number: "P-1",
      product_id: 1,
    });
    expect(country.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/product/country/set",
      retrySafety: "unsafe",
    });

    const restrictions = transportWith({
      result: { posting_number: "P-1", max_posting_weight: 25000, width: 100 },
    });
    await executeGetFbsPostingRestrictionsV1(restrictions, {
      posting_number: "P-1",
    });
    expect(restrictions.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/restrictions",
      retrySafety: "safe",
    });
  });

  it("rejects invalid nested response data", async () => {
    const transport = transportWith({
      postings: [{ products: [{ price: 100 }] }],
    });
    await expect(
      executeListFbsPostingsV4(transport, { filter: range, limit: 1 }),
    ).rejects.toMatchObject({ operationId: "PostingFbsList" });
  });

  it("accepts nullable optional fields returned by PostingFbsList", async () => {
    const transport = transportWith({
      cursor: null,
      has_next: null,
      postings: [
        {
          addressee: null,
          analytics_data: null,
          available_actions: null,
          barcodes: null,
          cancellation: null,
          container: null,
          container_sort_type: null,
          customer: null,
          delivering_date: null,
          delivery_method: null,
          delivery_schema: null,
          destination_place_id: null,
          destination_place_name: null,
          external_order: null,
          financial_data: null,
          in_process_at: null,
          integration_type_flow: null,
          is_click_and_collect: null,
          is_express: null,
          is_multibox: null,
          is_presortable: null,
          legal_info: null,
          multi_box_qty: null,
          optional: null,
          order_id: null,
          order_number: null,
          parent_posting_number: null,
          pickup_code_verified_at: null,
          posting_number: null,
          products: null,
          prr_option: null,
          quantum_id: null,
          received_at_sorting_center: "2026-08-16T10:00:00Z",
          require_blr_traceable_attrs: null,
          requirements: null,
          shipment_date: null,
          shipment_date_without_delay: null,
          sorting_center: null,
          status: null,
          substatus: null,
          tariffication: null,
          tariffication_steps: null,
          tpl_integration_type: null,
          tracking_number: null,
          volume_weight: null,
        },
      ],
    });

    await expect(
      executeListFbsPostingsV4(transport, { filter: range, limit: 1 }),
    ).resolves.toMatchObject({
      postings: [
        {
          parent_posting_number: null,
          received_at_sorting_center: "2026-08-16T10:00:00Z",
        },
      ],
    });
  });
});
