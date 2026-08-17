// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const promotionComponents: WbSchemaComponents = {
  V1SetNormQueryBidsRequestItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      normQuery: { kind: "string" },
      bidMinorUnits: { kind: "number", integer: true },
    },
    required: ["advertId", "nmId", "normQuery", "bidMinorUnits"],
  },
  V1SetNormQueryBidsRequest: {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: { kind: "ref", name: "V1SetNormQueryBidsRequestItem" },
      },
    },
    required: ["bids"],
  },
  V1SetNormQueryBidsSuccessResponseItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      normQuery: { kind: "string" },
      currency: { kind: "string" },
    },
    required: ["advertId", "nmId", "normQuery", "currency"],
  },
  NormQueryBidFailResponseItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      normQuery: { kind: "string" },
      reason: { kind: "string" },
    },
    required: ["advertId", "nmId", "normQuery", "reason"],
  },
  V1SetNormQueryBidsResponse: {
    kind: "object",
    properties: {
      success: {
        kind: "array",
        items: { kind: "ref", name: "V1SetNormQueryBidsSuccessResponseItem" },
      },
      failed: {
        kind: "array",
        items: { kind: "ref", name: "NormQueryBidFailResponseItem" },
      },
    },
    required: ["success", "failed"],
  },
  V2GetConfigResponse: {
    kind: "object",
    properties: {
      currency: { kind: "string" },
      currencyCode: { kind: "number", integer: true },
      cpmStep: { kind: "number", integer: true },
      cpcStep: { kind: "number", integer: true },
      minTopUp: { kind: "number", integer: true },
    },
    required: ["currency", "currencyCode", "cpmStep", "cpcStep", "minTopUp"],
  },
  V0BidsRecommendationsCpmResponse: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      base: { kind: "ref", name: "V0BidRecommendationBase" },
      nmId: { kind: "number", integer: true },
      normQueries: {
        kind: "array",
        items: { kind: "ref", name: "V0BidRecommendationNormQuery" },
      },
      paymentType: { kind: "string", enum: ["cpm"] },
    },
    required: [],
  },
  V0BidsRecommendationsCpcResponse: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      levels: {
        kind: "array",
        items: { kind: "ref", name: "V0BidRecommendationCPCLevels" },
      },
      nmId: { kind: "number", integer: true },
      paymentType: { kind: "string", enum: ["cpc"] },
    },
    required: [],
  },
  V0BidRecommendationCPCLevels: {
    kind: "object",
    properties: {
      range1To2: {
        kind: "object",
        properties: { bidKopecks: { kind: "number", integer: true } },
        required: [],
      },
      range3To10: {
        kind: "object",
        properties: { bidKopecks: { kind: "number", integer: true } },
        required: [],
      },
      range11To34: {
        kind: "object",
        properties: { bidKopecks: { kind: "number", integer: true } },
        required: [],
      },
    },
    required: ["range1To2", "range3To10", "range11To34"],
  },
  V0BidRecommendationBaseBid: {
    kind: "object",
    properties: { bidKopecks: { kind: "number", integer: true } },
    required: [],
  },
  V0BidRecommendationBase: {
    kind: "object",
    properties: {
      competitiveBid: {
        kind: "ref",
        name: "V0BidRecommendationBaseBidCompetitiveBid",
      },
      leadersBid: { kind: "ref", name: "V0BidRecommendationBaseBidLeadersBid" },
      top2: { kind: "ref", name: "V0BidRecommendationBaseBidTop2" },
    },
    required: [],
  },
  V0BidRecommendationBaseBidTop2: {
    kind: "object",
    properties: { bidKopecks: { kind: "number", integer: true } },
    required: [],
  },
  V0BidRecommendationBaseBidCompetitiveBid: {
    kind: "object",
    properties: { bidKopecks: { kind: "number", integer: true } },
    required: [],
  },
  V0BidRecommendationBaseBidLeadersBid: {
    kind: "object",
    properties: { bidKopecks: { kind: "number", integer: true } },
    required: [],
  },
  V0BidRecommendationNormQuery: {
    kind: "object",
    properties: {
      normQuery: { kind: "string" },
      reachMax: { kind: "ref", name: "V0BidRecommendationReachMax" },
      reachMedium: { kind: "ref", name: "V0BidRecommendationReachMedium" },
      reachMin: { kind: "ref", name: "V0BidRecommendationReachMin" },
    },
    required: [],
  },
  V0BidRecommendationReachMax: {
    kind: "object",
    properties: {
      bidKopecks: { kind: "number", integer: true },
      bidKopecksMin: { kind: "number", integer: true },
    },
    required: [],
  },
  V0BidRecommendationReachMedium: {
    kind: "object",
    properties: {
      bidKopecks: { kind: "number", integer: true },
      bidKopecksMin: { kind: "number", integer: true },
    },
    required: [],
  },
  V0BidRecommendationReachMin: {
    kind: "object",
    properties: {
      bidKopecks: { kind: "number", integer: true },
      bidKopecksMin: { kind: "number", integer: true },
    },
    required: [],
  },
  V0GetNormQueryListRequest: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryListRequestItem" },
      },
    },
    required: ["items"],
  },
  V0GetNormQueryListRequestItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
    },
    required: ["advertId", "nmId"],
  },
  V0GetNormQueryListResponse: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryListResponseItem" },
        nullable: true,
      },
    },
    required: ["items"],
  },
  V0GetNormQueryListResponseItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      normQueries: {
        kind: "ref",
        name: "V0GetNormQueryListResponseItemNormQueries",
      },
    },
    required: [],
  },
  V0GetNormQueryListResponseItemNormQueries: {
    kind: "object",
    properties: {
      active: { kind: "array", items: { kind: "string" }, nullable: true },
      excluded: { kind: "array", items: { kind: "string" }, nullable: true },
      archived: { kind: "array", items: { kind: "string" }, nullable: true },
    },
    required: [],
  },
  V1GetNormQueryStatsRequest: {
    kind: "object",
    properties: {
      from: { kind: "string" },
      to: { kind: "string" },
      items: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            advertId: { kind: "number", integer: true },
            nmId: { kind: "number", integer: true },
          },
          required: ["advertId", "nmId"],
        },
      },
    },
    required: ["from", "to", "items"],
  },
  V1GetNormQueryStatsResponse: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V1GetNormQueryStatsResponseItem" },
      },
    },
    required: ["items"],
  },
  V1GetNormQueryStatsResponseItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      dailyStats: {
        kind: "array",
        items: {
          kind: "ref",
          name: "V1GetNormQueryStatsResponseItemDailyStat",
        },
      },
    },
    required: ["advertId", "nmId"],
  },
  V1GetNormQueryStatsResponseItemDailyStat: {
    kind: "object",
    properties: {
      date: { kind: "string" },
      stat: { kind: "ref", name: "V1GetNormQueryStatsResponseItemStat" },
    },
    required: ["date"],
  },
  V1GetNormQueryStatsResponseItemStat: {
    kind: "object",
    properties: {
      normQuery: { kind: "string" },
      views: { kind: "number", integer: true, nullable: true },
      clicks: { kind: "number", integer: true },
      atbs: { kind: "number", integer: true },
      orders: { kind: "number", integer: true },
      ctr: { kind: "number", nullable: true },
      cpc: { kind: "number" },
      cpm: { kind: "number", nullable: true },
      avgPos: { kind: "number" },
      shks: { kind: "number", integer: true },
      spend: { kind: "number" },
    },
    required: [],
  },
  "400Response": {
    kind: "object",
    properties: { error: { kind: "string" } },
    required: [],
  },
  PlacementType: {
    kind: "string",
    enum: ["combined", "search", "recommendation"],
  },
  V0GetNormQueryStatsRequest: {
    kind: "object",
    properties: {
      from: { kind: "string" },
      to: { kind: "string" },
      items: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            advert_id: { kind: "number", integer: true },
            nm_id: { kind: "number", integer: true },
          },
          required: ["advert_id", "nm_id"],
        },
      },
    },
    required: ["from", "to", "items"],
  },
  V0GetNormQueryStatsItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      stats: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryStatsItemStat" },
      },
    },
    required: ["advert_id", "nm_id"],
  },
  V0GetNormQueryStatsItemStat: {
    kind: "object",
    properties: {
      norm_query: { kind: "string" },
      views: { kind: "number", integer: true, nullable: true },
      clicks: { kind: "number", integer: true },
      atbs: { kind: "number", integer: true },
      orders: { kind: "number", integer: true },
      ctr: { kind: "number", nullable: true },
      cpc: { kind: "number" },
      cpm: { kind: "number", nullable: true },
      avg_pos: { kind: "number" },
      shks: { kind: "number", integer: true },
      spend: { kind: "number" },
      currency: { kind: "string" },
    },
    required: [],
  },
  V0GetNormQueryStatsResponse: {
    kind: "object",
    properties: {
      stats: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryStatsItem" },
      },
    },
    required: ["stats"],
  },
  V0SetNormQueryBidsRequestItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      norm_query: { kind: "string" },
      bid: { kind: "number", integer: true },
    },
    required: ["advert_id", "nm_id", "norm_query", "bid"],
  },
  V0DeleteNormQueryBidsRequestItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      norm_query: { kind: "string" },
    },
    required: ["advert_id", "nm_id", "norm_query"],
  },
  V0SetNormQueryBidsRequest: {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: { kind: "ref", name: "V0SetNormQueryBidsRequestItem" },
      },
    },
    required: ["bids"],
  },
  V0DeleteNormQueryBidsRequest: {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: { kind: "ref", name: "V0DeleteNormQueryBidsRequestItem" },
      },
    },
    required: ["bids"],
  },
  V0SetMinusNormQueryRequest: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      norm_queries: { kind: "array", items: { kind: "string" } },
    },
    required: ["advert_id", "nm_id", "norm_queries"],
  },
  V0GetNormQueryBidsRequestItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
    },
    required: ["advert_id", "nm_id"],
  },
  V0GetNormQueryBidsRequest: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryBidsRequestItem" },
      },
    },
    required: ["items"],
  },
  V0GetNormQueryBidsItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      norm_query: { kind: "string" },
      bid: { kind: "number", integer: true },
      bid_kopecks: { kind: "number", integer: true },
      currency: { kind: "string" },
    },
    required: [
      "advert_id",
      "nm_id",
      "bid",
      "norm_query",
      "bid_kopecks",
      "currency",
    ],
  },
  V0GetNormQueryBidsResponse: {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryBidsItem" },
      },
    },
    required: ["bids"],
  },
  V0GetNormQueryMinusRequestItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
    },
    required: ["advert_id", "nm_id"],
  },
  V0GetNormQueryMinusRequest: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryMinusRequestItem" },
      },
    },
    required: ["items"],
  },
  V0GetNormQueryMinusResponseItem: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      nm_id: { kind: "number", integer: true },
      norm_queries: { kind: "array", items: { kind: "string" } },
    },
    required: [],
  },
  V0GetNormQueryMinusResponse: {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "V0GetNormQueryMinusResponseItem" },
      },
    },
    required: [],
  },
  StandardizedBatchError: {
    kind: "object",
    properties: {
      detail: { kind: "string" },
      origin: { kind: "string" },
      request_id: { kind: "string" },
      status: { kind: "number", integer: true },
      title: { kind: "string" },
    },
    required: ["title", "detail", "request_id", "origin", "status"],
  },
  ResponseWithReturn: {
    kind: "object",
    properties: {
      total: { kind: "number", integer: true },
      currency: { kind: "string" },
    },
    required: [],
  },
  ResponseAdvError1: {
    kind: "object",
    properties: { error: { kind: "string" } },
    required: [],
  },
  PromoItemsList: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      inAction: { kind: "boolean" },
      price: { kind: "number" },
      currencyCode: { kind: "string" },
      planPrice: { kind: "number" },
      discount: { kind: "number", integer: true },
      planDiscount: { kind: "number", integer: true },
    },
    required: [],
  },
  GetAdverts: {
    kind: "object",
    properties: {
      adverts: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            bid_type: { kind: "string" },
            currency: { kind: "string" },
            id: { kind: "number", integer: true },
            nm_settings: {
              kind: "array",
              items: { kind: "ref", name: "AdvertNMsSettings" },
              nullable: true,
            },
            settings: { kind: "ref", name: "AdvertSettings" },
            restrictions: {
              kind: "object",
              properties: { can_change_nms: { kind: "boolean" } },
              required: [],
            },
            status: {
              kind: "number",
              integer: true,
              enum: [-1, 4, 7, 8, 9, 11],
            },
            timestamps: { kind: "ref", name: "Timestamps" },
          },
          required: [
            "id",
            "timestamps",
            "settings",
            "nm_settings",
            "status",
            "bid_type",
            "restrictions",
          ],
        },
      },
    },
    required: ["adverts"],
  },
  AdvertNMsSettings: {
    kind: "object",
    properties: {
      bids_kopecks: { kind: "ref", name: "AdvertBidsKopecks" },
      subject: { kind: "ref", name: "AdvertSubcategory" },
      nm_id: { kind: "number", integer: true },
    },
    required: ["subject", "bids_kopecks", "nm_id"],
  },
  AdvertSubcategory: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
    },
    required: ["id", "name"],
  },
  AdvertBidsKopecks: {
    kind: "object",
    properties: {
      search: { kind: "number", integer: true },
      recommendations: { kind: "number", integer: true },
    },
    required: ["recommendations", "search"],
  },
  AdvertSettings: {
    kind: "object",
    properties: {
      payment_type: { kind: "string" },
      name: { kind: "string" },
      placements: {
        kind: "object",
        properties: {
          search: { kind: "boolean" },
          recommendations: { kind: "boolean" },
        },
        required: ["search", "recommendations"],
      },
    },
    required: ["payment_type", "name", "placements"],
  },
  Timestamps: {
    kind: "object",
    properties: {
      created: { kind: "string" },
      updated: { kind: "string" },
      started: { kind: "string", nullable: true },
      deleted: { kind: "string" },
    },
    required: ["created", "updated", "started", "deleted"],
  },
  response400: {
    kind: "object",
    properties: {
      detail: { kind: "string" },
      origin: { kind: "string" },
      request_id: { kind: "string" },
      status: { kind: "number", integer: true },
      title: { kind: "string" },
    },
    required: ["detail", "title", "request_id", "origin", "status"],
  },
  StatInterval: {
    kind: "object",
    properties: {
      interval: {
        kind: "object",
        properties: { begin: { kind: "string" }, end: { kind: "string" } },
        required: [],
      },
      stats: { kind: "array", items: { kind: "ref", name: "StatsBlok1" } },
    },
    required: ["interval"],
    additionalProperties: false,
  },
  StatDate: {
    kind: "object",
    properties: {
      dates: { kind: "array", items: { kind: "string" } },
      stats: { kind: "array", items: { kind: "ref", name: "StatsBlok2" } },
    },
    required: ["dates"],
    additionalProperties: false,
  },
  StatCampaignNotFound: {
    kind: "object",
    properties: {
      advert_id: { kind: "number", integer: true },
      error: { kind: "string" },
    },
    required: [],
    additionalProperties: false,
  },
  Stat: {
    kind: "object",
    properties: {
      stats: { kind: "array", items: { kind: "ref", name: "StatsBlok1" } },
    },
    required: [],
    additionalProperties: false,
  },
  StatsBlok1: {
    kind: "object",
    properties: {
      item_id: { kind: "number", integer: true },
      item_name: { kind: "string" },
      category_name: { kind: "string" },
      advert_type: { kind: "number", integer: true },
      place: { kind: "number", integer: true },
      views: { kind: "number", integer: true },
      clicks: { kind: "number", integer: true },
      cr: { kind: "number" },
      ctr: { kind: "number" },
      date_from: { kind: "string" },
      date_to: { kind: "string" },
      subject_name: { kind: "string" },
      atbs: { kind: "number", integer: true },
      orders: { kind: "number", integer: true },
      price: { kind: "number" },
      cpc: { kind: "number" },
      status: { kind: "number", integer: true },
      daily_stats: { kind: "ref", name: "DailyStats1" },
      expenses: { kind: "number" },
      cr1: { kind: "number" },
      cr2: { kind: "number", integer: true },
    },
    required: [],
  },
  DailyStats1: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        date: { kind: "string" },
        app_type_stats: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              app_type: { kind: "number", integer: true },
              stats: { kind: "ref", name: "Stats1" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
  },
  Stats1: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        views: { kind: "number", integer: true },
        clicks: { kind: "number", integer: true },
        atbs: { kind: "number", integer: true },
        ctr: { kind: "number" },
      },
      required: [],
    },
  },
  StatsBlok2: {
    kind: "object",
    properties: {
      item_id: { kind: "number", integer: true },
      item_name: { kind: "string" },
      category_name: { kind: "string" },
      advert_type: { kind: "number", integer: true },
      place: { kind: "number", integer: true },
      views: { kind: "number", integer: true },
      clicks: { kind: "number", integer: true },
      cr: { kind: "number" },
      ctr: { kind: "number" },
      date_from: { kind: "string" },
      date_to: { kind: "string" },
      subject_name: { kind: "string" },
      atbs: { kind: "number", integer: true },
      orders: { kind: "number", integer: true },
      price: { kind: "number" },
      cpc: { kind: "number" },
      status: { kind: "number", integer: true },
      daily_stats: { kind: "ref", name: "DailyStats2" },
      expenses: { kind: "number" },
      cr1: { kind: "number" },
      cr2: { kind: "number", integer: true },
    },
    required: [],
  },
  DailyStats2: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        date: { kind: "string" },
        app_type_stats: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              app_type: { kind: "number", integer: true },
              stats: { kind: "ref", name: "Stats2" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
  },
  Stats2: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        views: { kind: "number", integer: true },
        clicks: { kind: "number", integer: true },
        atbs: { kind: "number", integer: true },
        orders: { kind: "number", integer: true },
        cr: { kind: "number" },
        ctr: { kind: "number" },
      },
      required: [],
    },
  },
  RequestWithDate: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      dates: { kind: "array", items: { kind: "string" } },
    },
    required: ["id", "dates"],
  },
  RequestWithCampaignID: {
    kind: "object",
    properties: { id: { kind: "number", integer: true } },
    required: ["id"],
    additionalProperties: false,
  },
  RequestWithInterval: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      interval: {
        kind: "object",
        properties: { begin: { kind: "string" }, end: { kind: "string" } },
        required: [],
      },
    },
    required: ["id", "interval"],
  },
  ResponseFullStats: {
    kind: "array",
    items: { kind: "ref", name: "FullStatsItem" },
  },
  FullStatsItem: {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      atbs: { kind: "number", integer: true },
      boosterStats: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            avg_position: { kind: "number", integer: true },
            date: { kind: "string" },
            nm: { kind: "number", integer: true },
          },
          required: ["avg_position", "date", "nm"],
        },
      },
      canceled: { kind: "number", integer: true },
      clicks: { kind: "number", integer: true },
      cpc: { kind: "number" },
      cr: { kind: "number" },
      ctr: { kind: "number" },
      days: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            apps: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  appType: { kind: "number", integer: true, enum: [1, 32, 64] },
                  atbs: { kind: "number", integer: true },
                  canceled: { kind: "number", integer: true },
                  clicks: { kind: "number", integer: true },
                  cpc: { kind: "number" },
                  cr: { kind: "number" },
                  ctr: { kind: "number" },
                  nms: {
                    kind: "array",
                    items: {
                      kind: "object",
                      properties: {
                        atbs: { kind: "number", integer: true },
                        canceled: { kind: "number", integer: true },
                        clicks: { kind: "number", integer: true },
                        cpc: { kind: "number" },
                        cr: { kind: "number" },
                        ctr: { kind: "number" },
                        name: { kind: "string" },
                        nmId: { kind: "number", integer: true },
                        orders: { kind: "number", integer: true },
                        shks: { kind: "number", integer: true },
                        sum: { kind: "number" },
                        sum_price: { kind: "number" },
                        views: { kind: "number", integer: true },
                      },
                      required: [
                        "atbs",
                        "canceled",
                        "clicks",
                        "cpc",
                        "cr",
                        "ctr",
                        "name",
                        "nmId",
                        "orders",
                        "shks",
                        "sum",
                        "sum_price",
                        "views",
                      ],
                    },
                  },
                  orders: { kind: "number", integer: true },
                  shks: { kind: "number", integer: true },
                  sum: { kind: "number" },
                  sum_price: { kind: "number" },
                  views: { kind: "number", integer: true },
                },
                required: [
                  "appType",
                  "atbs",
                  "canceled",
                  "clicks",
                  "cpc",
                  "cr",
                  "ctr",
                  "nms",
                  "orders",
                  "shks",
                  "sum",
                  "sum_price",
                  "views",
                ],
              },
            },
            atbs: { kind: "number", integer: true },
            canceled: { kind: "number", integer: true },
            date: { kind: "string" },
            clicks: { kind: "number", integer: true },
            cpc: { kind: "number" },
            cr: { kind: "number" },
            ctr: { kind: "number" },
            orders: { kind: "number", integer: true },
            shks: { kind: "number", integer: true },
            sum: { kind: "number" },
            sum_price: { kind: "number" },
            views: { kind: "number", integer: true },
          },
          required: [
            "apps",
            "atbs",
            "canceled",
            "clicks",
            "cpc",
            "cr",
            "ctr",
            "date",
            "orders",
            "shks",
            "sum",
            "sum_price",
            "views",
          ],
        },
      },
      orders: { kind: "number", integer: true },
      shks: { kind: "number", integer: true },
      sum: { kind: "number" },
      sum_price: { kind: "number" },
      views: { kind: "number", integer: true },
      currency: { kind: "string" },
    },
    required: [
      "advertId",
      "atbs",
      "canceled",
      "clicks",
      "cpc",
      "cr",
      "ctr",
      "days",
      "orders",
      "shks",
      "sum",
      "sum_price",
      "views",
      "currency",
    ],
  },
  DaysV3: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        apps: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              appType: { kind: "number", integer: true, enum: [1, 32, 64] },
              atbs: { kind: "number", integer: true },
              canceled: { kind: "number", integer: true },
              clicks: { kind: "number", integer: true },
              cpc: { kind: "number" },
              cr: { kind: "number" },
              ctr: { kind: "number" },
              nms: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    atbs: { kind: "number", integer: true },
                    canceled: { kind: "number", integer: true },
                    clicks: { kind: "number", integer: true },
                    cpc: { kind: "number" },
                    cr: { kind: "number" },
                    ctr: { kind: "number" },
                    name: { kind: "string" },
                    nmId: { kind: "number", integer: true },
                    orders: { kind: "number", integer: true },
                    shks: { kind: "number", integer: true },
                    sum: { kind: "number" },
                    sum_price: { kind: "number" },
                    views: { kind: "number", integer: true },
                  },
                  required: [
                    "atbs",
                    "canceled",
                    "clicks",
                    "cpc",
                    "cr",
                    "ctr",
                    "name",
                    "nmId",
                    "orders",
                    "shks",
                    "sum",
                    "sum_price",
                    "views",
                  ],
                },
              },
              orders: { kind: "number", integer: true },
              shks: { kind: "number", integer: true },
              sum: { kind: "number" },
              sum_price: { kind: "number" },
              views: { kind: "number", integer: true },
            },
            required: [
              "appType",
              "atbs",
              "canceled",
              "clicks",
              "cpc",
              "cr",
              "ctr",
              "nms",
              "orders",
              "shks",
              "sum",
              "sum_price",
              "views",
            ],
          },
        },
        atbs: { kind: "number", integer: true },
        canceled: { kind: "number", integer: true },
        date: { kind: "string" },
        clicks: { kind: "number", integer: true },
        cpc: { kind: "number" },
        cr: { kind: "number" },
        ctr: { kind: "number" },
        orders: { kind: "number", integer: true },
        shks: { kind: "number", integer: true },
        sum: { kind: "number" },
        sum_price: { kind: "number" },
        views: { kind: "number", integer: true },
      },
      required: [
        "apps",
        "atbs",
        "canceled",
        "clicks",
        "cpc",
        "cr",
        "ctr",
        "date",
        "orders",
        "shks",
        "sum",
        "sum_price",
        "views",
      ],
    },
  },
  BoosterStatsV3: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        avg_position: { kind: "number", integer: true },
        date: { kind: "string" },
        nm: { kind: "number", integer: true },
      },
      required: ["avg_position", "date", "nm"],
    },
  },
  FullStatsError: {
    kind: "object",
    properties: {
      errors: {
        kind: "array",
        items: {
          kind: "object",
          properties: { detail: { kind: "string" }, field: { kind: "string" } },
          required: [],
        },
      },
      detail: { kind: "string" },
      origin: { kind: "string" },
      request_id: { kind: "string" },
      status: { kind: "number", integer: true },
      title: { kind: "string" },
      type: { kind: "string" },
    },
    required: ["title", "request_id", "status", "origin"],
  },
};
