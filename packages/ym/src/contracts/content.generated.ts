// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const contentComponents: YmSchemaComponents = {
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
  CategoryContentParametersDTO: {
    kind: "object",
    properties: {
      categoryId: { kind: "ref", name: "CategoryId" },
      parameters: {
        kind: "array",
        items: { kind: "ref", name: "CategoryParameterDTO" },
        nullable: true,
      },
    },
    required: ["categoryId"],
  },
  CategoryId: { kind: "number", integer: true, minimum: 0 },
  CategoryParameterDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      name: { kind: "string" },
      type: { kind: "ref", name: "ParameterType" },
      unit: { kind: "ref", name: "CategoryParameterUnitDTO" },
      description: { kind: "string" },
      recommendationTypes: {
        kind: "array",
        items: { kind: "ref", name: "OfferCardRecommendationType" },
        nullable: true,
      },
      required: { kind: "boolean" },
      filtering: { kind: "boolean" },
      distinctive: { kind: "boolean" },
      multivalue: { kind: "boolean" },
      allowCustomValues: { kind: "boolean" },
      values: {
        kind: "array",
        items: { kind: "ref", name: "ParameterValueOptionDTO" },
        nullable: true,
      },
      constraints: { kind: "ref", name: "ParameterValueConstraintsDTO" },
      valueRestrictions: {
        kind: "array",
        items: { kind: "ref", name: "ValueRestrictionDTO" },
        nullable: true,
      },
    },
    required: [
      "id",
      "type",
      "required",
      "filtering",
      "distinctive",
      "multivalue",
      "allowCustomValues",
    ],
  },
  CategoryParameterUnitDTO: {
    kind: "object",
    properties: {
      defaultUnitId: { kind: "number", integer: true },
      units: { kind: "array", items: { kind: "ref", name: "UnitDTO" } },
    },
    required: ["defaultUnitId", "units"],
  },
  GetCategoryContentParametersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "CategoryContentParametersDTO" },
    },
    required: ["status"],
  },
  GetMappingDTO: {
    kind: "object",
    properties: {
      marketSku: { kind: "ref", name: "MarketSku" },
      marketSkuName: { kind: "string" },
      marketModelName: { kind: "string" },
      marketCategoryId: { kind: "number", integer: true },
      marketCategoryName: { kind: "string" },
    },
    required: [],
  },
  GetOfferCardsContentStatusRequest: {
    kind: "object",
    properties: {
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
      cardStatuses: {
        kind: "array",
        items: { kind: "ref", name: "OfferCardStatusType" },
        nullable: true,
      },
      categoryIds: {
        kind: "array",
        items: { kind: "ref", name: "CategoryId" },
        nullable: true,
      },
      withRecommendations: { kind: "boolean" },
    },
    required: [],
  },
  GetOfferCardsContentStatusResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "OfferCardsContentStatusDTO" },
    },
    required: ["status"],
  },
  MarketSku: { kind: "number", integer: true, minimum: 1 },
  OfferCardContentStatusType: { kind: "string", enum: ["UPDATING", "ACTUAL"] },
  OfferCardDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      mapping: { kind: "ref", name: "GetMappingDTO" },
      parameterValues: {
        kind: "array",
        items: { kind: "ref", name: "ParameterValueDTO" },
        nullable: true,
      },
      cardStatus: { kind: "ref", name: "OfferCardStatusType" },
      contentRating: { kind: "number", integer: true },
      averageContentRating: { kind: "number", integer: true },
      contentRatingStatus: { kind: "ref", name: "OfferCardContentStatusType" },
      recommendations: {
        kind: "array",
        items: { kind: "ref", name: "OfferCardRecommendationDTO" },
        nullable: true,
      },
      groupId: { kind: "string" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "OfferErrorDTO" },
        nullable: true,
      },
      warnings: {
        kind: "array",
        items: { kind: "ref", name: "OfferErrorDTO" },
        nullable: true,
      },
    },
    required: ["offerId"],
  },
  OfferCardRecommendationDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "OfferCardRecommendationType" },
      percent: { kind: "number", integer: true, minimum: 0, maximum: 100 },
      remainingRatingPoints: {
        kind: "number",
        integer: true,
        minimum: 1,
        maximum: 100,
      },
    },
    required: ["type"],
  },
  OfferCardRecommendationType: {
    kind: "string",
    enum: [
      "HAS_VIDEO",
      "RECOGNIZED_VENDOR",
      "MAIN",
      "ADDITIONAL",
      "DISTINCTIVE",
      "FILTERABLE",
      "PICTURE_COUNT",
      "HAS_DESCRIPTION",
      "HAS_BARCODE",
      "FIRST_PICTURE_SIZE",
      "TITLE_LENGTH",
      "DESCRIPTION_LENGTH",
      "AVERAGE_PICTURE_SIZE",
      "FIRST_VIDEO_SIZE",
      "FIRST_VIDEO_LENGTH",
      "AVERAGE_VIDEO_SIZE",
      "VIDEO_COUNT",
    ],
  },
  OfferCardStatusType: {
    kind: "string",
    enum: [
      "HAS_CARD_CAN_NOT_UPDATE",
      "HAS_CARD_CAN_UPDATE",
      "HAS_CARD_CAN_UPDATE_ERRORS",
      "HAS_CARD_CAN_UPDATE_PROCESSING",
      "NO_CARD_NEED_CONTENT",
      "NO_CARD_MARKET_WILL_CREATE",
      "NO_CARD_ERRORS",
      "NO_CARD_PROCESSING",
      "NO_CARD_ADD_TO_CAMPAIGN",
    ],
  },
  OfferCardsContentStatusDTO: {
    kind: "object",
    properties: {
      offerCards: {
        kind: "array",
        items: { kind: "ref", name: "OfferCardDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["offerCards"],
  },
  OfferContentDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      categoryId: { kind: "ref", name: "CategoryId" },
      parameterValues: {
        kind: "array",
        items: { kind: "ref", name: "ParameterValueDTO" },
      },
    },
    required: ["offerId", "categoryId", "parameterValues"],
  },
  OfferContentErrorDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "OfferContentErrorType" },
      parameterId: { kind: "number", integer: true },
      message: { kind: "string" },
    },
    required: ["type", "message"],
  },
  OfferContentErrorType: {
    kind: "string",
    enum: [
      "OFFER_NOT_FOUND",
      "UNKNOWN_CATEGORY",
      "INVALID_CATEGORY",
      "UNKNOWN_PARAMETER",
      "UNEXPECTED_BOOLEAN_VALUE",
      "NUMBER_FORMAT",
      "INVALID_UNIT_ID",
      "INVALID_GROUP_ID_LENGTH",
      "INVALID_GROUP_ID_CHARACTERS",
    ],
  },
  OfferErrorDTO: {
    kind: "object",
    properties: { message: { kind: "string" }, comment: { kind: "string" } },
    required: [],
  },
  OptionValuesLimitedDTO: {
    kind: "object",
    properties: {
      limitingOptionValueId: { kind: "number", integer: true },
      optionValueIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
      },
    },
    required: ["limitingOptionValueId", "optionValueIds"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  ParameterType: {
    kind: "string",
    enum: ["TEXT", "ENUM", "BOOLEAN", "NUMERIC"],
  },
  ParameterValueConstraintsDTO: {
    kind: "object",
    properties: {
      minValue: { kind: "number" },
      maxValue: { kind: "number" },
      maxLength: { kind: "number", integer: true },
    },
    required: [],
  },
  ParameterValueDTO: {
    kind: "object",
    properties: {
      parameterId: { kind: "number", integer: true, minimum: 1 },
      unitId: { kind: "number", integer: true },
      valueId: { kind: "number", integer: true },
      value: { kind: "string" },
    },
    required: ["parameterId"],
  },
  ParameterValueOptionDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      value: { kind: "string" },
      description: { kind: "string" },
    },
    required: ["id", "value"],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  UnitDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      fullName: { kind: "string" },
    },
    required: ["id", "name", "fullName"],
  },
  UpdateMappingDTO: {
    kind: "object",
    properties: { marketSku: { kind: "ref", name: "MarketSku" } },
    required: [],
  },
  UpdateOfferContentRequest: {
    kind: "object",
    properties: {
      offersContent: {
        kind: "array",
        items: { kind: "ref", name: "OfferContentDTO" },
      },
    },
    required: ["offersContent"],
  },
  UpdateOfferContentResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "UpdateOfferContentResultDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  UpdateOfferContentResultDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "OfferContentErrorDTO" },
        nullable: true,
      },
      warnings: {
        kind: "array",
        items: { kind: "ref", name: "OfferContentErrorDTO" },
        nullable: true,
      },
    },
    required: ["offerId"],
  },
  ValueRestrictionDTO: {
    kind: "object",
    properties: {
      limitingParameterId: { kind: "number", integer: true, minimum: 1 },
      limitedValues: {
        kind: "array",
        items: { kind: "ref", name: "OptionValuesLimitedDTO" },
      },
    },
    required: ["limitingParameterId", "limitedValues"],
  },
};
