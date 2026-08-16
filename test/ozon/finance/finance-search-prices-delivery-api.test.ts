import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCheckDeliveryAvailabilityV1 } from "../../../packages/ozon/src/endpoints/delivery/check/v1/execute.js";
import { executeCheckoutDeliveryV2 } from "../../../packages/ozon/src/endpoints/delivery/checkout/v2/execute.js";
import { executeGetDeliveryMapV1 } from "../../../packages/ozon/src/endpoints/delivery/map/v1/execute.js";
import { executeGetDeliveryPointInfoV1 } from "../../../packages/ozon/src/endpoints/delivery/point/info/v1/execute.js";
import { executeListDeliveryPointsV1 } from "../../../packages/ozon/src/endpoints/delivery/point/list/v1/execute.js";
import { executeGetRealizationReportByDayV1 } from "../../../packages/ozon/src/endpoints/finance/realization/by-day/get/v1/execute.js";
import { executeGetProductPriceDetailsV1 } from "../../../packages/ozon/src/endpoints/product/prices/details/v1/execute.js";
import { executeListSearchQueriesByTextV1 } from "../../../packages/ozon/src/endpoints/search-queries/text/list/v1/execute.js";
import { executeListTopSearchQueriesV1 } from "../../../packages/ozon/src/endpoints/search-queries/top/list/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon finance, search, prices and delivery API", () => {
  it("maps and validates all nine operations", async () => {
    const realization = transportWith({
      rows: [
        {
          commission_ratio: 0.15,
          delivery_commission: { amount: 10, quantity: 1 },
          item: { offer_id: "A-1", sku: 1001 },
          rowNumber: 1,
          seller_price_per_instance: 100,
        },
      ],
    });
    await executeGetRealizationReportByDayV1(realization, {
      day: 16,
      month: 8,
      year: 2026,
    });
    expect(realization.requests[0]).toMatchObject({
      path: "/v1/finance/realization/by-day",
      retrySafety: "safe",
    });

    const byText = transportWith({
      offset: "0",
      search_queries: [{ query: "product", avg_price: 100 }],
      total: "1",
    });
    await executeListSearchQueriesByTextV1(byText, {
      limit: "50",
      offset: "0",
      sort_by: "CLIENT_COUNT",
      sort_dir: "DESC",
      text: "product",
    });
    expect(byText.requests[0]).toMatchObject({
      path: "/v1/search-queries/text",
      retrySafety: "safe",
    });

    const top = transportWith({
      offset: "0",
      search_queries: [{ query: "top", client_count: 1000 }],
      total: "1",
    });
    await executeListTopSearchQueriesV1(top, { limit: "50", offset: "0" });
    expect(top.requests[0]).toMatchObject({
      path: "/v1/search-queries/top",
      retrySafety: "safe",
    });

    const prices = transportWith({
      prices: [
        {
          customer_price: { amount: "90.00", currency: "RUB" },
          offer_id: "A-1",
          price: { amount: "100.00", currency: "RUB" },
          price_indexes: [
            {
              external_index_data: {
                min_price: { amount: "95.00", currency: "RUB" },
                price_index: 1.05,
                url: "https://example.test/product",
              },
            },
          ],
          sku: 1001,
        },
      ],
    });
    await executeGetProductPriceDetailsV1(prices, { skus: ["1001"] });
    expect(prices.requests[0]).toMatchObject({
      path: "/v1/product/prices/details",
      retrySafety: "safe",
    });

    const check = transportWith({ is_possible: true });
    await executeCheckDeliveryAvailabilityV1(check, {
      client_phone: "79990000000",
    });
    expect(check.requests[0]).toMatchObject({
      path: "/v1/delivery/check",
      retrySafety: "safe",
    });

    const checkout = transportWith({
      splits: [
        {
          commissions: { total: { amount: "100.00", currency: "RUB" } },
          delivery_method: {
            delivery_type: "PVZ",
            id: 1,
            timeslots: [
              {
                client_date_range: {
                  from: "2026-08-17T10:00:00Z",
                  to: "2026-08-17T12:00:00Z",
                },
                timeslot_id: 10,
              },
            ],
            unavailable_reason: "UNSPECIFIED",
          },
          delivery_schema: "FBO",
          items: [{ offer_id: "A-1", quantity: 1, sku: 1001 }],
          unavailable_reason: "UNSPECIFIED",
          warehouse_id: 20,
        },
      ],
    });
    await executeCheckoutDeliveryV2(checkout, {
      buyer_phone: "79990000000",
      delivery_schema: "MIX",
      delivery_type: { pick_up: { map_point_id: 1 } },
      items: [{ offer_id: "A-1", quantity: 1, sku: 1001 }],
    });
    expect(checkout.requests[0]).toMatchObject({
      path: "/v2/delivery/checkout",
      retrySafety: "safe",
    });

    const map = transportWith({
      clusters: [
        {
          coordinate: { lat: 55.75, long: 37.61 },
          is_same_building: false,
          map_point_ids: ["1"],
          points_count: 1,
        },
      ],
    });
    await executeGetDeliveryMapV1(map, {
      viewport: {
        left_bottom: { lat: 55, long: 37 },
        right_top: { lat: 56, long: 38 },
      },
      zoom: 12,
    });
    expect(map.requests[0]).toMatchObject({
      path: "/v1/delivery/map",
      retrySafety: "safe",
    });

    const info = transportWith({
      points: [
        {
          delivery_method: {
            address: "Address",
            coordinates: { lat: 55.75, long: 37.61 },
            holidays: [
              {
                begin: "2026-12-31T00:00:00Z",
                end: "2027-01-01T00:00:00Z",
              },
            ],
            map_point_id: 1,
            working_hours: [
              {
                date: "2026-08-17T00:00:00Z",
                periods: [{ min: { hours: 9, minutes: 0 } }],
              },
            ],
          },
          enabled: true,
        },
      ],
    });
    await executeGetDeliveryPointInfoV1(info, { map_point_ids: ["1"] });
    expect(info.requests[0]).toMatchObject({
      path: "/v1/delivery/point/info",
      retrySafety: "safe",
    });

    const points = transportWith({
      points: [{ coordinate: { lat: 55.75, long: 37.61 }, map_point_id: 1 }],
    });
    await executeListDeliveryPointsV1(points);
    expect(points.requests[0]).toMatchObject({
      path: "/v1/delivery/point/list",
      body: {},
      retrySafety: "safe",
    });
  });

  it("rejects an invalid nested delivery timeslot date", async () => {
    await expect(
      executeCheckoutDeliveryV2(
        transportWith({
          splits: [
            {
              delivery_method: {
                timeslots: [{ client_date_range: { from: "not-a-date" } }],
              },
            },
          ],
        }),
        {},
      ),
    ).rejects.toMatchObject({ operationId: "DeliveryCheckout" });
  });
});
