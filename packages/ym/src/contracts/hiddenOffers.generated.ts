// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const hiddenOffersComponents: YmSchemaComponents = {
  AddHiddenOffersRequest: {
    kind: "object",
    properties: {
      hiddenOffers: {
        kind: "array",
        items: { kind: "ref", name: "HiddenOfferDTO" },
      },
    },
    required: ["hiddenOffers"],
  },
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
  ApiLockedErrorResponse: {
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
  DeleteHiddenOffersRequest: {
    kind: "object",
    properties: {
      hiddenOffers: {
        kind: "array",
        items: { kind: "ref", name: "HiddenOfferDTO" },
      },
    },
    required: ["hiddenOffers"],
  },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  GetHiddenOffersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetHiddenOffersResultDTO" },
    },
    required: ["status"],
  },
  GetHiddenOffersResultDTO: {
    kind: "object",
    properties: {
      paging: { kind: "ref", name: "PackagingScrollingPagerDTO" },
      hiddenOffers: {
        kind: "array",
        items: { kind: "ref", name: "HiddenOfferDTO" },
      },
    },
    required: ["hiddenOffers"],
  },
  HiddenOfferDTO: {
    kind: "object",
    properties: { offerId: { kind: "ref", name: "ShopSku" } },
    required: ["offerId"],
  },
  PackagingScrollingPagerDTO: {
    kind: "object",
    properties: {
      nextPageToken: { kind: "string" },
      prevPageToken: { kind: "string" },
    },
    required: [],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
};
