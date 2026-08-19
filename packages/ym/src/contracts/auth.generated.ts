// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const authComponents: YmSchemaComponents = {
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
  ApiKeyDTO: {
    kind: "object",
    properties: {
      name: { kind: "string", minLength: 1, maxLength: 100 },
      authScopes: {
        kind: "array",
        items: { kind: "ref", name: "ApiKeyScopeType" },
      },
    },
    required: ["name", "authScopes"],
  },
  ApiKeyScopeType: {
    kind: "string",
    enum: [
      "ALL_METHODS",
      "ALL_METHODS_READ_ONLY",
      "INVENTORY_AND_ORDER_PROCESSING",
      "INVENTORY_AND_ORDER_PROCESSING_READ_ONLY",
      "PRICING",
      "PRICING_READ_ONLY",
      "OFFERS_AND_CARDS_MANAGEMENT",
      "OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY",
      "PROMOTION",
      "PROMOTION_READ_ONLY",
      "FINANCE_AND_ACCOUNTING",
      "COMMUNICATION",
      "SETTINGS_MANAGEMENT",
      "SUPPLIES_MANAGEMENT_READ_ONLY",
    ],
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
  GetTokenInfoResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "TokenDTO" },
    },
    required: ["status"],
  },
  TokenDTO: {
    kind: "object",
    properties: { apiKey: { kind: "ref", name: "ApiKeyDTO" } },
    required: ["apiKey"],
  },
};
