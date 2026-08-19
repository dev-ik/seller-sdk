// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const ratingsComponents: YmSchemaComponents = {
  AffectedOrderQualityRatingComponentType: {
    kind: "string",
    enum: [
      "DBS_CANCELLATION_RATE",
      "DBS_LATE_DELIVERY_RATE",
      "FBS_CANCELLATION_RATE",
      "FBS_LATE_SHIP_RATE",
    ],
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
  CampaignQualityRatingDTO: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      ratings: {
        kind: "array",
        items: { kind: "ref", name: "QualityRatingDTO" },
      },
    },
    required: ["campaignId", "ratings"],
  },
  CampaignsQualityRatingDTO: {
    kind: "object",
    properties: {
      campaignRatings: {
        kind: "array",
        items: { kind: "ref", name: "CampaignQualityRatingDTO" },
      },
    },
    required: ["campaignRatings"],
  },
  GetQualityRatingDetailsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "QualityRatingDetailsDTO" },
    },
    required: ["status"],
  },
  GetQualityRatingRequest: {
    kind: "object",
    properties: {
      dateFrom: { kind: "string" },
      dateTo: { kind: "string" },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
      },
    },
    required: ["campaignIds"],
  },
  GetQualityRatingResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "CampaignsQualityRatingDTO" },
    },
    required: ["status"],
  },
  QualityRatingAffectedOrderDTO: {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true, minimum: 0 },
      description: { kind: "string" },
      componentType: {
        kind: "ref",
        name: "AffectedOrderQualityRatingComponentType",
      },
    },
    required: ["orderId", "description", "componentType"],
  },
  QualityRatingComponentDTO: {
    kind: "object",
    properties: {
      value: { kind: "number", minimum: 0, maximum: 100 },
      componentType: { kind: "ref", name: "QualityRatingComponentType" },
    },
    required: ["value", "componentType"],
  },
  QualityRatingComponentType: {
    kind: "string",
    enum: [
      "DBS_CANCELLATION_RATE",
      "DBS_LATE_DELIVERY_RATE",
      "FBS_CANCELLATION_RATE",
      "FBS_LATE_SHIP_RATE",
      "FBY_LATE_DELIVERY_RATE",
      "FBY_CANCELLATION_RATE",
      "FBY_DELIVERY_DIFF_RATE",
      "FBY_LATE_EDITING_RATE",
    ],
  },
  QualityRatingDTO: {
    kind: "object",
    properties: {
      rating: { kind: "number", integer: true, minimum: 0, maximum: 100 },
      calculationDate: { kind: "string" },
      components: {
        kind: "array",
        items: { kind: "ref", name: "QualityRatingComponentDTO" },
      },
    },
    required: ["rating", "calculationDate", "components"],
  },
  QualityRatingDetailsDTO: {
    kind: "object",
    properties: {
      affectedOrders: {
        kind: "array",
        items: { kind: "ref", name: "QualityRatingAffectedOrderDTO" },
      },
    },
    required: ["affectedOrders"],
  },
};
