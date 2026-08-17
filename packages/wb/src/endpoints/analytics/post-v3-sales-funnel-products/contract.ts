// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3SalesFunnelProductsResponse } from "./types.js";

const postV3SalesFunnelProductsResponse200Schema =
  createWbSchema<PostV3SalesFunnelProductsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            products: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  product: {
                    kind: "object",
                    properties: {
                      nmId: { kind: "number", integer: true },
                      title: { kind: "string" },
                      vendorCode: { kind: "string" },
                      brandName: { kind: "string" },
                      subjectId: { kind: "number", integer: true },
                      subjectName: { kind: "string" },
                      tags: {
                        kind: "array",
                        items: { kind: "ref", name: "Tag" },
                      },
                      productRating: { kind: "number" },
                      feedbackRating: { kind: "number" },
                      stocks: {
                        kind: "object",
                        properties: {
                          wb: { kind: "number", integer: true },
                          mp: { kind: "number", integer: true },
                          balanceSum: { kind: "number", integer: true },
                        },
                        required: ["wb", "mp", "balanceSum"],
                      },
                    },
                    required: [
                      "nmId",
                      "title",
                      "vendorCode",
                      "brandName",
                      "subjectId",
                      "subjectName",
                      "tags",
                      "productRating",
                      "feedbackRating",
                      "stocks",
                    ],
                  },
                  statistic: {
                    kind: "object",
                    properties: {
                      selected: {
                        kind: "object",
                        properties: {
                          period: {
                            kind: "object",
                            properties: {
                              start: { kind: "string" },
                              end: { kind: "string" },
                            },
                            required: ["start", "end"],
                          },
                          openCount: { kind: "number", integer: true },
                          cartCount: { kind: "number", integer: true },
                          orderCount: { kind: "number", integer: true },
                          orderSum: { kind: "number", integer: true },
                          buyoutCount: { kind: "number", integer: true },
                          buyoutSum: { kind: "number", integer: true },
                          cancelCount: { kind: "number", integer: true },
                          cancelSum: { kind: "number", integer: true },
                          avgPrice: { kind: "number", integer: true },
                          avgOrdersCountPerDay: { kind: "number" },
                          shareOrderPercent: { kind: "number" },
                          addToWishlist: { kind: "number", integer: true },
                          timeToReady: {
                            kind: "object",
                            properties: {
                              days: { kind: "number", integer: true },
                              hours: { kind: "number", integer: true },
                              mins: { kind: "number", integer: true },
                            },
                            required: ["days", "hours", "mins"],
                          },
                          localizationPercent: {
                            kind: "number",
                            integer: true,
                          },
                          wbClub: {
                            kind: "object",
                            properties: {
                              orderCount: { kind: "number", integer: true },
                              orderSum: { kind: "number", integer: true },
                              buyoutSum: { kind: "number", integer: true },
                              buyoutCount: { kind: "number", integer: true },
                              cancelSum: { kind: "number", integer: true },
                              cancelCount: { kind: "number", integer: true },
                              avgPrice: { kind: "number", integer: true },
                              buyoutPercent: { kind: "number", integer: true },
                              avgOrderCountPerDay: { kind: "number" },
                            },
                            required: [
                              "orderCount",
                              "orderSum",
                              "buyoutSum",
                              "buyoutCount",
                              "cancelSum",
                              "cancelCount",
                              "avgPrice",
                              "buyoutPercent",
                              "avgOrderCountPerDay",
                            ],
                          },
                          conversions: {
                            kind: "object",
                            properties: {
                              addToCartPercent: {
                                kind: "number",
                                integer: true,
                              },
                              cartToOrderPercent: {
                                kind: "number",
                                integer: true,
                              },
                              buyoutPercent: { kind: "number", integer: true },
                            },
                            required: [
                              "addToCartPercent",
                              "cartToOrderPercent",
                              "buyoutPercent",
                            ],
                          },
                        },
                        required: [
                          "period",
                          "openCount",
                          "cartCount",
                          "orderCount",
                          "orderSum",
                          "buyoutCount",
                          "buyoutSum",
                          "cancelCount",
                          "cancelSum",
                          "avgPrice",
                          "avgOrdersCountPerDay",
                          "shareOrderPercent",
                          "addToWishlist",
                          "timeToReady",
                          "localizationPercent",
                          "wbClub",
                          "conversions",
                        ],
                      },
                      past: {
                        kind: "object",
                        properties: {
                          period: {
                            kind: "object",
                            properties: {
                              start: { kind: "string" },
                              end: { kind: "string" },
                            },
                            required: ["start", "end"],
                          },
                          openCount: { kind: "number", integer: true },
                          cartCount: { kind: "number", integer: true },
                          orderCount: { kind: "number", integer: true },
                          orderSum: { kind: "number", integer: true },
                          buyoutCount: { kind: "number", integer: true },
                          buyoutSum: { kind: "number", integer: true },
                          cancelCount: { kind: "number", integer: true },
                          cancelSum: { kind: "number", integer: true },
                          avgPrice: { kind: "number", integer: true },
                          avgOrdersCountPerDay: { kind: "number" },
                          shareOrderPercent: { kind: "number" },
                          addToWishlist: { kind: "number", integer: true },
                          timeToReady: {
                            kind: "object",
                            properties: {
                              days: { kind: "number", integer: true },
                              hours: { kind: "number", integer: true },
                              mins: { kind: "number", integer: true },
                            },
                            required: ["days", "hours", "mins"],
                          },
                          localizationPercent: {
                            kind: "number",
                            integer: true,
                          },
                          wbClub: {
                            kind: "object",
                            properties: {
                              orderCount: { kind: "number", integer: true },
                              orderSum: { kind: "number", integer: true },
                              buyoutSum: { kind: "number", integer: true },
                              buyoutCount: { kind: "number", integer: true },
                              cancelSum: { kind: "number", integer: true },
                              cancelCount: { kind: "number", integer: true },
                              avgPrice: { kind: "number", integer: true },
                              buyoutPercent: { kind: "number", integer: true },
                              avgOrderCountPerDay: { kind: "number" },
                            },
                            required: [
                              "orderCount",
                              "orderSum",
                              "buyoutSum",
                              "buyoutCount",
                              "cancelSum",
                              "cancelCount",
                              "avgPrice",
                              "buyoutPercent",
                              "avgOrderCountPerDay",
                            ],
                          },
                          conversions: {
                            kind: "object",
                            properties: {
                              addToCartPercent: {
                                kind: "number",
                                integer: true,
                              },
                              cartToOrderPercent: {
                                kind: "number",
                                integer: true,
                              },
                              buyoutPercent: { kind: "number", integer: true },
                            },
                            required: [
                              "addToCartPercent",
                              "cartToOrderPercent",
                              "buyoutPercent",
                            ],
                          },
                        },
                        required: [
                          "period",
                          "openCount",
                          "cartCount",
                          "orderCount",
                          "orderSum",
                          "buyoutCount",
                          "buyoutSum",
                          "cancelCount",
                          "cancelSum",
                          "avgPrice",
                          "avgOrdersCountPerDay",
                          "shareOrderPercent",
                          "addToWishlist",
                          "timeToReady",
                          "localizationPercent",
                          "wbClub",
                          "conversions",
                        ],
                      },
                      comparison: {
                        kind: "object",
                        properties: {
                          openCountDynamic: { kind: "number", integer: true },
                          cartCountDynamic: { kind: "number", integer: true },
                          orderCountDynamic: { kind: "number", integer: true },
                          orderSumDynamic: { kind: "number", integer: true },
                          buyoutCountDynamic: { kind: "number", integer: true },
                          buyoutSumDynamic: { kind: "number", integer: true },
                          cancelCountDynamic: { kind: "number", integer: true },
                          cancelSumDynamic: { kind: "number", integer: true },
                          avgOrdersCountPerDayDynamic: {
                            kind: "number",
                            integer: true,
                          },
                          avgPriceDynamic: { kind: "number", integer: true },
                          shareOrderPercentDynamic: {
                            kind: "number",
                            integer: true,
                          },
                          addToWishlistDynamic: {
                            kind: "number",
                            integer: true,
                          },
                          timeToReadyDynamic: {
                            kind: "object",
                            properties: {
                              days: { kind: "number", integer: true },
                              hours: { kind: "number", integer: true },
                              mins: { kind: "number", integer: true },
                            },
                            required: ["days", "hours", "mins"],
                          },
                          localizationPercentDynamic: {
                            kind: "number",
                            integer: true,
                          },
                          wbClubDynamic: {
                            kind: "object",
                            properties: {
                              orderCount: { kind: "number", integer: true },
                              orderSum: { kind: "number", integer: true },
                              buyoutSum: { kind: "number", integer: true },
                              buyoutCount: { kind: "number", integer: true },
                              cancelSum: { kind: "number", integer: true },
                              cancelCount: { kind: "number", integer: true },
                              avgPrice: { kind: "number", integer: true },
                              buyoutPercent: { kind: "number", integer: true },
                              avgOrderCountPerDay: { kind: "number" },
                            },
                            required: [
                              "orderCount",
                              "orderSum",
                              "buyoutSum",
                              "buyoutCount",
                              "cancelSum",
                              "cancelCount",
                              "avgPrice",
                              "buyoutPercent",
                              "avgOrderCountPerDay",
                            ],
                          },
                          conversions: {
                            kind: "object",
                            properties: {
                              addToCartPercent: {
                                kind: "number",
                                integer: true,
                              },
                              cartToOrderPercent: {
                                kind: "number",
                                integer: true,
                              },
                              buyoutPercent: { kind: "number", integer: true },
                            },
                            required: [
                              "addToCartPercent",
                              "cartToOrderPercent",
                              "buyoutPercent",
                            ],
                          },
                        },
                        required: [
                          "openCountDynamic",
                          "cartCountDynamic",
                          "orderCountDynamic",
                          "orderSumDynamic",
                          "buyoutCountDynamic",
                          "buyoutSumDynamic",
                          "cancelCountDynamic",
                          "cancelSumDynamic",
                          "avgOrdersCountPerDayDynamic",
                          "avgPriceDynamic",
                          "shareOrderPercentDynamic",
                          "addToWishlistDynamic",
                          "timeToReadyDynamic",
                          "localizationPercentDynamic",
                          "wbClubDynamic",
                          "conversions",
                        ],
                      },
                    },
                    required: ["selected"],
                  },
                },
                required: ["product", "statistic"],
              },
            },
            currency: { kind: "ref", name: "Currency" },
          },
          required: ["products", "currency"],
        },
      },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV3SalesFunnelProductsResponse(
  status: number,
  input: unknown,
): PostV3SalesFunnelProductsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3SalesFunnelProductsResponse200Schema,
        input,
        "postV3SalesFunnelProducts",
      );
    default:
      return unexpectedWbSuccessStatus("postV3SalesFunnelProducts", status);
  }
}
