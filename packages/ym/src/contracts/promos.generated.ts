// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const promosComponents: YmSchemaComponents = {
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
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  ChannelType: {
    kind: "string",
    enum: [
      "PUSH",
      "STRETCH_MAIN",
      "MAIN_PAGE_CAROUSEL",
      "PRODUCT_RETAIL_PAGE",
      "MAIN_PAGE_CAROUSEL_WEB",
      "PRODUCT_SEPARATE_LANDING",
      "SUPER_SHELF_CATEGORY",
      "CAROUSEL_RETAIL_PAGE",
      "POPUP_APPLICATION",
      "POST_TELEGRAM",
      "CPA",
      "WEB_PERFORMANCE_DIRECT",
      "APP_PERFORMANCE",
      "BANNER_PICKUP_POINT",
      "BLOGGER_PERFORMANCE",
      "DIGITAL_CHANNEL_BANNER",
      "YANDEX_ECOSYSTEM_CHANNELS",
      "PARTNERS_MAIN_BANNER",
      "OTHER",
    ],
  },
  DeletePromoOffersRequest: {
    kind: "object",
    properties: {
      promoId: { kind: "string" },
      deleteAllOffers: { kind: "boolean" },
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
    },
    required: ["promoId"],
  },
  DeletePromoOffersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "DeletePromoOffersResultDTO" },
    },
    required: ["status"],
  },
  DeletePromoOffersResultDTO: {
    kind: "object",
    properties: {
      rejectedOffers: {
        kind: "array",
        items: { kind: "ref", name: "RejectedPromoOfferDeleteDTO" },
        nullable: true,
      },
    },
    required: [],
  },
  GetPromoAssortmentInfoDTO: {
    kind: "object",
    properties: {
      activeOffers: { kind: "number", integer: true },
      potentialOffers: { kind: "number", integer: true },
      processing: { kind: "boolean" },
    },
    required: ["activeOffers"],
  },
  GetPromoBestsellerInfoDTO: {
    kind: "object",
    properties: {
      bestseller: { kind: "boolean" },
      entryDeadline: { kind: "string" },
      renewalEnabled: { kind: "boolean" },
    },
    required: ["bestseller"],
  },
  GetPromoConstraintsDTO: {
    kind: "object",
    properties: {
      warehouseIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
    },
    required: [],
  },
  GetPromoDTO: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      name: { kind: "string" },
      period: { kind: "ref", name: "PromoPeriodDTO" },
      participating: { kind: "boolean" },
      assortmentInfo: { kind: "ref", name: "GetPromoAssortmentInfoDTO" },
      mechanicsInfo: { kind: "ref", name: "GetPromoMechanicsInfoDTO" },
      bestsellerInfo: { kind: "ref", name: "GetPromoBestsellerInfoDTO" },
      channels: {
        kind: "array",
        items: { kind: "ref", name: "ChannelType" },
        nullable: true,
      },
      constraints: { kind: "ref", name: "GetPromoConstraintsDTO" },
    },
    required: [
      "id",
      "name",
      "period",
      "participating",
      "assortmentInfo",
      "mechanicsInfo",
      "bestsellerInfo",
    ],
  },
  GetPromoMechanicsInfoDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "MechanicsType" },
      promocodeInfo: { kind: "ref", name: "GetPromoPromocodeInfoDTO" },
    },
    required: ["type"],
  },
  GetPromoOfferDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      status: { kind: "ref", name: "PromoOfferParticipationStatusType" },
      params: { kind: "ref", name: "PromoOfferParamsDTO" },
      autoParticipatingDetails: {
        kind: "ref",
        name: "PromoOfferAutoParticipatingDetailsDTO",
      },
    },
    required: ["offerId", "status", "params"],
  },
  GetPromoOffersRequest: {
    kind: "object",
    properties: {
      promoId: { kind: "string" },
      statusType: {
        kind: "ref",
        name: "PromoOfferParticipationStatusFilterType",
      },
      statuses: {
        kind: "array",
        items: {
          kind: "ref",
          name: "PromoOfferParticipationStatusMultiFilterType",
        },
        nullable: true,
      },
    },
    required: ["promoId"],
  },
  GetPromoOffersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetPromoOffersResultDTO" },
    },
    required: ["status"],
  },
  GetPromoOffersResultDTO: {
    kind: "object",
    properties: {
      offers: {
        kind: "array",
        items: { kind: "ref", name: "GetPromoOfferDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["offers"],
  },
  GetPromoPromocodeInfoDTO: {
    kind: "object",
    properties: {
      promocode: { kind: "string" },
      discount: { kind: "number", integer: true },
    },
    required: ["promocode", "discount"],
  },
  GetPromosRequest: {
    kind: "object",
    properties: {
      participation: { kind: "ref", name: "PromoParticipationType" },
      mechanics: { kind: "ref", name: "MechanicsType" },
    },
    required: [],
  },
  GetPromosResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetPromosResultDTO" },
    },
    required: ["status"],
  },
  GetPromosResultDTO: {
    kind: "object",
    properties: {
      promos: { kind: "array", items: { kind: "ref", name: "GetPromoDTO" } },
    },
    required: ["promos"],
  },
  MechanicsType: {
    kind: "string",
    enum: ["DIRECT_DISCOUNT", "BLUE_FLASH", "MARKET_PROMOCODE"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PromoOfferAutoParticipatingDetailsDTO: {
    kind: "object",
    properties: {
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: [],
  },
  PromoOfferDiscountParamsDTO: {
    kind: "object",
    properties: {
      price: { kind: "number", integer: true },
      promoPrice: { kind: "number", integer: true },
      maxPromoPrice: { kind: "number", integer: true },
    },
    required: [],
  },
  PromoOfferParamsDTO: {
    kind: "object",
    properties: {
      discountParams: { kind: "ref", name: "PromoOfferDiscountParamsDTO" },
    },
    required: [],
  },
  PromoOfferParticipationStatusFilterType: {
    kind: "string",
    enum: ["MANUALLY_ADDED", "NOT_MANUALLY_ADDED"],
  },
  PromoOfferParticipationStatusMultiFilterType: {
    kind: "string",
    enum: [
      "MANUALLY_ADDED",
      "RENEWED",
      "RENEW_FAILED",
      "NOT_MANUALLY_ADDED",
      "MINIMUM_FOR_PROMOS",
    ],
  },
  PromoOfferParticipationStatusType: {
    kind: "string",
    enum: [
      "AUTO",
      "PARTIALLY_AUTO",
      "MANUAL",
      "NOT_PARTICIPATING",
      "RENEWED",
      "RENEW_FAILED",
      "MINIMUM_FOR_PROMOS",
    ],
  },
  PromoOfferUpdateWarningCodeType: {
    kind: "string",
    enum: [
      "DEEP_DISCOUNT_OFFER",
      "CATALOG_PRICE_IS_LOWER_THAN_PROMO",
      "SHOP_PRICES_ARE_LOWER_THAN_PROMO",
      "SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO",
    ],
  },
  PromoOfferUpdateWarningDTO: {
    kind: "object",
    properties: {
      code: { kind: "ref", name: "PromoOfferUpdateWarningCodeType" },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: ["code"],
  },
  PromoParticipationType: {
    kind: "string",
    enum: ["PARTICIPATING_NOW", "PARTICIPATED"],
  },
  PromoPeriodDTO: {
    kind: "object",
    properties: {
      dateTimeFrom: { kind: "string" },
      dateTimeTo: { kind: "string" },
    },
    required: ["dateTimeFrom", "dateTimeTo"],
  },
  RejectedPromoOfferDeleteDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      reason: { kind: "ref", name: "RejectedPromoOfferDeleteReasonType" },
    },
    required: ["offerId", "reason"],
  },
  RejectedPromoOfferDeleteReasonType: {
    kind: "string",
    enum: ["OFFER_DOES_NOT_EXIST"],
  },
  RejectedPromoOfferUpdateDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      reason: { kind: "ref", name: "RejectedPromoOfferUpdateReasonType" },
    },
    required: ["offerId", "reason"],
  },
  RejectedPromoOfferUpdateReasonType: {
    kind: "string",
    enum: [
      "OFFER_DOES_NOT_EXIST",
      "OFFER_DUPLICATION",
      "OFFER_NOT_ELIGIBLE_FOR_PROMO",
      "OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED",
      "DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED",
      "EMPTY_OLD_PRICE",
      "EMPTY_PROMO_PRICE",
      "MAX_PROMO_PRICE_EXCEEDED",
      "PROMO_PRICE_BIGGER_THAN_MAX",
      "PROMO_PRICE_SMALLER_THAN_MIN",
      "PRICE_TOO_BIG",
      "OLD_PRICE_TOO_BIG",
    ],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  UpdatePromoOfferDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      params: { kind: "ref", name: "UpdatePromoOfferParamsDTO" },
    },
    required: ["offerId"],
  },
  UpdatePromoOfferDiscountParamsDTO: {
    kind: "object",
    properties: {
      price: { kind: "number", integer: true, minimum: 1 },
      promoPrice: { kind: "number", integer: true, minimum: 1 },
    },
    required: [],
  },
  UpdatePromoOfferParamsDTO: {
    kind: "object",
    properties: {
      discountParams: {
        kind: "ref",
        name: "UpdatePromoOfferDiscountParamsDTO",
      },
    },
    required: [],
  },
  UpdatePromoOffersRequest: {
    kind: "object",
    properties: {
      promoId: { kind: "string" },
      offers: {
        kind: "array",
        items: { kind: "ref", name: "UpdatePromoOfferDTO" },
      },
    },
    required: ["promoId", "offers"],
  },
  UpdatePromoOffersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "UpdatePromoOffersResultDTO" },
    },
    required: ["status"],
  },
  UpdatePromoOffersResultDTO: {
    kind: "object",
    properties: {
      rejectedOffers: {
        kind: "array",
        items: { kind: "ref", name: "RejectedPromoOfferUpdateDTO" },
        nullable: true,
      },
      warningOffers: {
        kind: "array",
        items: { kind: "ref", name: "WarningPromoOfferUpdateDTO" },
        nullable: true,
      },
    },
    required: [],
  },
  WarningPromoOfferUpdateDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      warnings: {
        kind: "array",
        items: { kind: "ref", name: "PromoOfferUpdateWarningDTO" },
      },
    },
    required: ["offerId", "warnings"],
  },
};
