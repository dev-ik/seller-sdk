// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const regionsComponents: YmSchemaComponents = {
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
  CountryCode: { kind: "string", minLength: 2, maxLength: 2 },
  CountryDTO: {
    kind: "object",
    properties: {
      region: { kind: "ref", name: "RegionDTO" },
      countryCode: { kind: "ref", name: "CountryCode" },
    },
    required: ["region", "countryCode"],
  },
  FlippingPagerDTO: {
    kind: "object",
    properties: {
      total: { kind: "number", integer: true },
      from: { kind: "number", integer: true },
      to: { kind: "number", integer: true },
      currentPage: { kind: "number", integer: true },
      pagesCount: { kind: "number", integer: true },
      pageSize: { kind: "number", integer: true },
    },
    required: [],
  },
  GetRegionByIdResponse: {
    kind: "object",
    properties: {
      regions: {
        kind: "array",
        items: { kind: "ref", name: "RegionDTO" },
        nullable: true,
      },
      region: { kind: "ref", name: "RegionDTO" },
    },
    required: ["region"],
  },
  GetRegionWithChildrenResponse: {
    kind: "object",
    properties: {
      pager: { kind: "ref", name: "FlippingPagerDTO" },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
      regions: { kind: "ref", name: "RegionWithChildrenDTO" },
    },
    required: [],
  },
  GetRegionsCodesResponse: {
    kind: "object",
    properties: {
      countries: { kind: "array", items: { kind: "ref", name: "CountryDTO" } },
    },
    required: ["countries"],
  },
  GetRegionsResponse: {
    kind: "object",
    properties: {
      regions: { kind: "array", items: { kind: "ref", name: "RegionDTO" } },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["regions"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  RegionDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      type: { kind: "ref", name: "RegionType" },
      parent: { kind: "ref", name: "RegionDTO" },
    },
    required: ["id", "name", "type"],
  },
  RegionType: {
    kind: "string",
    enum: [
      "OTHER",
      "CONTINENT",
      "REGION",
      "COUNTRY",
      "COUNTRY_DISTRICT",
      "REPUBLIC",
      "CITY",
      "VILLAGE",
      "CITY_DISTRICT",
      "SUBWAY_STATION",
      "REPUBLIC_AREA",
    ],
  },
  RegionWithChildrenDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      type: { kind: "ref", name: "RegionType" },
      parent: { kind: "ref", name: "RegionDTO" },
      children: {
        kind: "array",
        items: { kind: "ref", name: "RegionDTO" },
        nullable: true,
      },
    },
    required: ["id", "name", "type"],
  },
};
