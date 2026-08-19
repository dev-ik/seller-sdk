// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const categoriesComponents: YmSchemaComponents = {
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
  CategoryDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      children: {
        kind: "array",
        items: { kind: "ref", name: "CategoryDTO" },
        nullable: true,
      },
    },
    required: ["id", "name"],
  },
  CategoryErrorDTO: {
    kind: "object",
    properties: {
      categoryId: { kind: "number", integer: true },
      type: { kind: "ref", name: "CategoryErrorType" },
    },
    required: [],
  },
  CategoryErrorType: {
    kind: "string",
    enum: ["UNKNOWN_CATEGORY", "CATEGORY_IS_NOT_LEAF"],
  },
  GetCategoriesMaxSaleQuantumDTO: {
    kind: "object",
    properties: {
      results: {
        kind: "array",
        items: { kind: "ref", name: "MaxSaleQuantumDTO" },
      },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "CategoryErrorDTO" },
        nullable: true,
      },
    },
    required: ["results"],
  },
  GetCategoriesMaxSaleQuantumRequest: {
    kind: "object",
    properties: {
      marketCategoryIds: {
        kind: "array",
        items: { kind: "number", integer: true },
      },
    },
    required: ["marketCategoryIds"],
  },
  GetCategoriesMaxSaleQuantumResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "MaxSaleQuantumDTO" },
      },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "CategoryErrorDTO" },
        nullable: true,
      },
    },
    required: ["status", "results"],
  },
  GetCategoriesRequest: {
    kind: "object",
    properties: { language: { kind: "ref", name: "LanguageType" } },
    required: [],
  },
  GetCategoriesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "CategoryDTO" },
    },
    required: ["status"],
  },
  LanguageType: { kind: "string", enum: ["RU", "EN"] },
  MaxSaleQuantumDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      maxSaleQuantum: { kind: "number", integer: true },
    },
    required: ["id"],
  },
};
