// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const bidsComponents: YmSchemaComponents = {
  ApiClientDataErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiErrorDTO: {
    kind: "object",
    properties: { code: { kind: "string" }, message: { kind: "string" } },
    required: ["code"],
  },
  ApiErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiForbiddenErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiLimitErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiNotFoundErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  ApiResponseStatusType: { kind: "string", enum: ["OK", "ERROR"] },
  ApiServerErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiUnauthorizedErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  BenefitType: {
    kind: "string",
    enum: [
      "BESTS",
      "SPLIT_0_0_4",
      "SPLIT_0_0_6",
      "SPLIT_0_0_12",
      "MARKET_SUBSIDY_1_4",
      "MARKET_SUBSIDY_5_9",
      "MARKET_SUBSIDY_10",
    ],
  },
  Bid: { kind: "number", integer: true, minimum: 0, maximum: 9999 },
  BidRecommendationItemDTO: {
    kind: "object",
    properties: {
      bid: { kind: "ref", name: "Bid" },
      showPercent: { kind: "number", integer: true, minimum: 0, maximum: 100 },
      benefits: {
        kind: "array",
        items: { kind: "ref", name: "BenefitType" },
        nullable: true,
      },
    },
    required: ["bid", "showPercent"],
  },
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  GetBidsInfoRequest: {
    kind: "object",
    properties: {
      skus: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
    },
    required: [],
  },
  GetBidsInfoResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetBidsInfoResponseDTO" },
    },
    required: ["status"],
  },
  GetBidsInfoResponseDTO: {
    kind: "object",
    properties: {
      bids: { kind: "array", items: { kind: "ref", name: "SkuBidItemDTO" } },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["bids"],
  },
  GetBidsRecommendationsRequest: {
    kind: "object",
    properties: {
      skus: { kind: "array", items: { kind: "ref", name: "ShopSku" } },
    },
    required: ["skus"],
  },
  GetBidsRecommendationsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetBidsRecommendationsResponseDTO" },
    },
    required: ["status"],
  },
  GetBidsRecommendationsResponseDTO: {
    kind: "object",
    properties: {
      recommendations: {
        kind: "array",
        items: { kind: "ref", name: "SkuBidRecommendationItemDTO" },
      },
    },
    required: ["recommendations"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PriceRecommendationItemDTO: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      price: { kind: "number", minimum: 1 },
    },
    required: ["campaignId", "price"],
  },
  PutSkuBidsRequest: {
    kind: "object",
    properties: {
      bids: { kind: "array", items: { kind: "ref", name: "SkuBidItemDTO" } },
    },
    required: ["bids"],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  SkuBidItemDTO: {
    kind: "object",
    properties: {
      sku: { kind: "ref", name: "ShopSku" },
      bid: { kind: "ref", name: "Bid" },
    },
    required: ["sku", "bid"],
  },
  SkuBidRecommendationItemDTO: {
    kind: "object",
    properties: {
      sku: { kind: "ref", name: "ShopSku" },
      bid: { kind: "ref", name: "Bid" },
      bidRecommendations: {
        kind: "array",
        items: { kind: "ref", name: "BidRecommendationItemDTO" },
        nullable: true,
      },
      priceRecommendations: {
        kind: "array",
        items: { kind: "ref", name: "PriceRecommendationItemDTO" },
        nullable: true,
      },
    },
    required: ["sku", "bid"],
  },
};
