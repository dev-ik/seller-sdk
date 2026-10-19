import { afterEach, describe, expect, it, vi } from "vitest";
import {
  OzonClient,
  ResponseValidationError,
} from "../../packages/ozon/src/index.js";

const autoPage = {
  action_id: 1,
  auto_add_date: "2026-10-19T00:00:00Z",
  limit: 10,
};
const cases = [
  {
    path: "/v3/posting/fbs/package-label/create",
    body: { posting_numbers: ["TEST-1"] },
    response: { tasks: [{ task_id: 42, task_type: "big_label" }] },
    malformed: { tasks: [{ task_id: "bad" }] },
    safe: false,
    call: (c: OzonClient) =>
      c.postings.createFbsPackageLabelBatch({ posting_numbers: ["TEST-1"] }),
  },
  {
    path: "/v2/posting/fbs/package-label/get",
    body: { task_id: 42 },
    response: {
      file_url: "https://example.com/label.pdf",
      error: { code: "", message: "" },
      status: {
        code: "completed",
        postings_count: 1,
        printed_postings_count: 1,
        unprinted_postings: [],
      },
    },
    malformed: { status: "completed" },
    safe: true,
    call: (c: OzonClient) =>
      c.postings.getFbsPackageLabelBatch({ task_id: 42 }),
  },
  {
    path: "/v2/actions/candidates",
    body: { action_id: 1, limit: 10 },
    response: {
      last_id: "next",
      total: 1,
      products: [
        {
          id: 2,
          price: { amount: "100.50", currency: "RUB" },
          website_prices: {
            prices_by_schema: {
              FBS: { green_price: { amount: "90", currency: "RUB" } },
            },
          },
        },
      ],
    },
    malformed: { products: [{ price: { amount: 100 } }] },
    safe: true,
    call: (c: OzonClient) =>
      c.promotions.listPromotionCandidatesV2({ action_id: 1, limit: 10 }),
  },
  {
    path: "/v2/actions/products",
    body: { action_id: 1, limit: 10 },
    response: {
      total: 1,
      products: [
        {
          id: 2,
          add_mode: "AUTO",
          action_price: { amount: "99", currency: "RUB" },
        },
      ],
    },
    malformed: { products: [{ add_mode: "unknown" }] },
    safe: true,
    call: (c: OzonClient) =>
      c.promotions.listPromotionProductsV2({ action_id: 1, limit: 10 }),
  },
  {
    path: "/v1/actions/products/update",
    body: {
      action_id: 1,
      products: [
        { product_id: 2, action_price: { amount: "99", currency: "RUB" } },
      ],
    },
    response: {
      active_product_ids: ["9007199254740993"],
      deactivated_product_ids: [],
      rejected: [],
      warnings: [{ product_id: 2, reason: "test" }],
    },
    malformed: { active_product_ids: [2] },
    safe: false,
    call: (c: OzonClient) =>
      c.promotions.updatePromotionProductsV1({
        action_id: 1,
        products: [
          { product_id: 2, action_price: { amount: "99", currency: "RUB" } },
        ],
      }),
  },
  {
    path: "/v2/actions/products/deactivate",
    body: { action_id: 1, product_ids: ["2"] },
    response: { product_ids: ["2"] },
    malformed: { product_ids: [2] },
    safe: false,
    call: (c: OzonClient) =>
      c.promotions.deactivatePromotionProductsV2({
        action_id: 1,
        product_ids: ["2"],
      }),
  },
  {
    path: "/v2/actions/auto-add/products/list",
    body: autoPage,
    response: {
      total: 1,
      products: [
        {
          product_id: 2,
          add_mode: true,
          price: { amount: "100", currency: "RUB" },
        },
      ],
    },
    malformed: { products: [{ add_mode: "AUTO" }] },
    safe: true,
    call: (c: OzonClient) => c.actions.listAutoAddProducts(autoPage),
  },
  {
    path: "/v2/actions/auto-add/products/candidates",
    body: autoPage,
    response: {
      total: 1,
      products: [
        { id: 2, is_manually_added: false, will_be_quarantined: true },
      ],
    },
    malformed: { products: [{ is_manually_added: "false" }] },
    safe: true,
    call: (c: OzonClient) => c.actions.listAutoAddProductCandidates(autoPage),
  },
  {
    path: "/v2/actions/auto-add/products/delete",
    body: {
      action_id: 1,
      auto_add_date: autoPage.auto_add_date,
      product_ids: ["2"],
    },
    response: { product_ids: ["2"] },
    malformed: { product_ids: [2] },
    safe: false,
    call: (c: OzonClient) =>
      c.actions.deleteAutoAddProducts({
        action_id: 1,
        auto_add_date: autoPage.auto_add_date,
        product_ids: ["2"],
      }),
  },
  {
    path: "/v2/actions/auto-add/products/update",
    body: {
      action_id: 1,
      auto_add_date: autoPage.auto_add_date,
      products: [{ id: 2, action_price: { amount: "100", currency: "RUB" } }],
    },
    response: {
      product_ids: ["2"],
      below_min_price: [{ key: 3, value: 99 }],
      failed_price: [],
      extremely_low_price: [],
      warnings: [],
    },
    malformed: { below_min_price: [{ value: "99" }] },
    safe: false,
    call: (c: OzonClient) =>
      c.actions.updateAutoAddProducts({
        action_id: 1,
        auto_add_date: autoPage.auto_add_date,
        products: [{ id: 2, action_price: { amount: "100", currency: "RUB" } }],
      }),
  },
  {
    path: "/v2/product/pictures/import",
    body: {
      items: [
        { offer_id: "TEST-1", images: ["https://example.com/product.png"] },
      ],
    },
    response: { task_id: 42 },
    malformed: { task_id: "42" },
    safe: false,
    call: (c: OzonClient) =>
      c.products.pictures.import({
        items: [
          { offer_id: "TEST-1", images: ["https://example.com/product.png"] },
        ],
      }),
  },
];

const client = () =>
  new OzonClient(
    { clientId: "test-client", apiKey: "test-key" },
    { maxRetries: 0 },
  );
afterEach(() => vi.unstubAllGlobals());

describe.each(cases)(
  "October replacement $path",
  ({ path, body, response, malformed, call, safe }) => {
    it("maps the public method and preserves the native response", async () => {
      const fetch = vi.fn(async () => Response.json(response));
      vi.stubGlobal("fetch", fetch);
      expect(await call(client())).toEqual(response);
      expect(fetch.mock.calls[0]).toEqual([
        new URL(`https://api-seller.ozon.ru${path}`),
        expect.objectContaining({ method: "POST", body: JSON.stringify(body) }),
      ]);
    });
    it("accepts an empty response with optional fields", async () => {
      vi.stubGlobal("fetch", async () => Response.json({}));
      expect(await call(client())).toEqual({});
    });
    it("rejects malformed native fields", async () => {
      vi.stubGlobal("fetch", async () => Response.json(malformed));
      await expect(call(client())).rejects.toBeInstanceOf(
        ResponseValidationError,
      );
    });
    it("preserves API failures", async () => {
      vi.stubGlobal("fetch", async () =>
        Response.json({ code: 7, message: "Denied" }, { status: 403 }),
      );
      await expect(call(client())).rejects.toMatchObject({
        status: 403,
        apiCode: "7",
      });
    });
    if (!safe)
      it("never retries a mutation after HTTP 503", async () => {
        const fetch = vi.fn(async () =>
          Response.json({ code: 13, message: "Unavailable" }, { status: 503 }),
        );
        vi.stubGlobal("fetch", fetch);
        await expect(
          call(
            new OzonClient(
              { clientId: "test-client", apiKey: "test-key" },
              { maxRetries: 2 },
            ),
          ),
        ).rejects.toMatchObject({ status: 503 });
        expect(fetch).toHaveBeenCalledTimes(1);
      });
  },
);

describe("October product totals", () => {
  for (const total of [0, 2147483648])
    it(`preserves total_items=${total} without total`, async () => {
      vi.stubGlobal("fetch", async () =>
        Response.json({ result: { items: [], total_items: total } }),
      );
      expect(await client().products.list({ filter: {}, limit: 1 })).toEqual({
        result: { items: [], total_items: total },
      });
      vi.stubGlobal("fetch", async () =>
        Response.json({ items: [], total_items: total }),
      );
      expect(
        await client().products.prices.get({ filter: {}, limit: 1 }),
      ).toEqual({ items: [], total_items: total });
      expect(
        await client().products.getProductStocks({ filter: {}, limit: 1 }),
      ).toEqual({ items: [], total_items: total });
    });
  it("rejects malformed total_items", async () => {
    vi.stubGlobal("fetch", async () =>
      Response.json({ result: { total_items: "1" } }),
    );
    await expect(
      client().products.list({ filter: {}, limit: 1 }),
    ).rejects.toBeInstanceOf(ResponseValidationError);
  });
});

describe("October response extensions", () => {
  it("preserves declared price money in product details and prices", async () => {
    vi.stubGlobal("fetch", async () =>
      Response.json({
        items: [{ declared_price: { amount: "123.45", currency: "RUB" } }],
      }),
    );
    expect(
      await client().products.getProductInfoList({ product_id: ["1"] }),
    ).toEqual({
      items: [{ declared_price: { amount: "123.45", currency: "RUB" } }],
    });
    vi.stubGlobal("fetch", async () =>
      Response.json({
        items: [
          { price: { declared_price: { amount: "123.45", currency: "RUB" } } },
        ],
      }),
    );
    expect(
      await client().products.prices.get({ filter: {}, limit: 1 }),
    ).toEqual({
      items: [
        { price: { declared_price: { amount: "123.45", currency: "RUB" } } },
      ],
    });
  });
  it("preserves the scanit label identifier on an FBS posting", async () => {
    vi.stubGlobal("fetch", async () =>
      Response.json({ result: { scanit: "test-scanit" } }),
    );
    expect(
      await client().postings.getFbsPostingV3({ posting_number: "TEST-1" }),
    ).toEqual({ result: { scanit: "test-scanit" } });
  });
});

describe("Current supply draft errors", () => {
  it.each([
    "LIMIT_EXCEEDED_ACCORDING_TO_SHIPMENT_DISCIPLINE",
    "BACKUP_SUPPLY_ALREADY_USED",
  ])("preserves %s as an Ozon domain error", async (error_message) => {
    vi.stubGlobal("fetch", async () =>
      Response.json({
        errors: [
          { error_message, items_validation: [{ limit: 10, supply_id: 1 }] },
        ],
      }),
    );
    expect(
      await client().supplyDrafts.createDirectSupplyDraft({
        cluster_info: {
          items: [{ sku: 1, quantity: 1 }],
          macrolocal_cluster_id: 1,
        },
        deletion_sku_mode: "FULL",
      }),
    ).toEqual({
      errors: [
        { error_message, items_validation: [{ limit: 10, supply_id: 1 }] },
      ],
    });
  });
});

describe("Notification list request migration", () => {
  it("sends availability filters and preserves monitoring data", async () => {
    const fetch = vi.fn(async () =>
      Response.json({
        urls: [],
        total_count: 0,
        availability_status_thresholds: [{ status: "GREEN", threshold: 1000 }],
      }),
    );
    vi.stubGlobal("fetch", fetch);
    expect(
      await client().notifications.listNotificationsV1(
        { availability_statuses: ["GREEN"], limit: 10 },
        { timeoutMs: 1000 },
      ),
    ).toEqual({
      urls: [],
      total_count: 0,
      availability_status_thresholds: [{ status: "GREEN", threshold: 1000 }],
    });
    expect(fetch.mock.calls[0]).toEqual([
      new URL("https://api-seller.ozon.ru/v1/notification/list"),
      expect.objectContaining({
        body: JSON.stringify({ availability_statuses: ["GREEN"], limit: 10 }),
      }),
    ]);
  });
  it("keeps the previous options-only call without leaking options into JSON", async () => {
    const fetch = vi.fn(async () =>
      Response.json({
        urls: [],
        total_count: 0,
        availability_status_thresholds: [],
      }),
    );
    vi.stubGlobal("fetch", fetch);
    await client().notifications.listNotificationsV1({ timeoutMs: 1000 });
    expect(fetch.mock.calls[0]).toEqual([
      new URL("https://api-seller.ozon.ru/v1/notification/list"),
      expect.objectContaining({ body: "{}" }),
    ]);
  });
});
