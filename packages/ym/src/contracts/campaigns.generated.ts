// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const campaignsComponents: YmSchemaComponents = {
  ApiAvailabilityStatusType: {
    kind: "string",
    enum: [
      "AVAILABLE",
      "DISABLED_BY_INACTIVITY",
      "DISABLED_BY_NO_ACTIVE_CONTRACT",
      "MANUALLY_DISABLED",
      "DISABLED_BY_NO_PLACEMENT_TYPE",
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
  BusinessDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "BusinessId" },
      name: { kind: "string" },
    },
    required: [],
  },
  BusinessId: { kind: "number", integer: true, minimum: 1 },
  CampaignDTO: {
    kind: "object",
    properties: {
      domain: { kind: "string" },
      id: { kind: "ref", name: "CampaignId" },
      clientId: { kind: "number", integer: true },
      business: { kind: "ref", name: "BusinessDTO" },
      placementType: { kind: "ref", name: "PlacementType" },
      apiAvailability: { kind: "ref", name: "ApiAvailabilityStatusType" },
    },
    required: [],
  },
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  CampaignSettingsDTO: {
    kind: "object",
    properties: {
      countryRegion: { kind: "number", integer: true },
      shopName: { kind: "string" },
      showInContext: { kind: "boolean" },
      showInPremium: { kind: "boolean" },
      useOpenStat: { kind: "boolean" },
      localRegion: { kind: "ref", name: "CampaignSettingsLocalRegionDTO" },
      taxation: { kind: "ref", name: "TaxationInfoDTO" },
    },
    required: ["taxation"],
  },
  CampaignSettingsDeliveryDTO: {
    kind: "object",
    properties: {
      schedule: { kind: "ref", name: "CampaignSettingsScheduleDTO" },
    },
    required: [],
  },
  CampaignSettingsLocalRegionDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      type: { kind: "ref", name: "RegionType" },
      deliveryOptionsSource: {
        kind: "ref",
        name: "CampaignSettingsScheduleSourceType",
      },
      delivery: { kind: "ref", name: "CampaignSettingsDeliveryDTO" },
    },
    required: [],
  },
  CampaignSettingsScheduleDTO: {
    kind: "object",
    properties: {
      availableOnHolidays: { kind: "boolean" },
      customHolidays: {
        kind: "array",
        items: { kind: "ref", name: "DateDdMmYyyy" },
      },
      customWorkingDays: {
        kind: "array",
        items: { kind: "ref", name: "DateDdMmYyyy" },
      },
      period: { kind: "ref", name: "CampaignSettingsTimePeriodDTO" },
      totalHolidays: {
        kind: "array",
        items: { kind: "ref", name: "DateDdMmYyyy" },
      },
      weeklyHolidays: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1, maximum: 7 },
      },
    },
    required: [
      "customHolidays",
      "customWorkingDays",
      "totalHolidays",
      "weeklyHolidays",
    ],
  },
  CampaignSettingsScheduleSourceType: { kind: "string", enum: ["WEB", "YML"] },
  CampaignSettingsTimePeriodDTO: {
    kind: "object",
    properties: {
      fromDate: { kind: "ref", name: "DateDdMmYyyy" },
      toDate: { kind: "ref", name: "DateDdMmYyyy" },
    },
    required: [],
  },
  DateDdMmYyyy: { kind: "string" },
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
  GetCampaignResponse: {
    kind: "object",
    properties: { campaign: { kind: "ref", name: "CampaignDTO" } },
    required: [],
  },
  GetCampaignSettingsResponse: {
    kind: "object",
    properties: { settings: { kind: "ref", name: "CampaignSettingsDTO" } },
    required: [],
  },
  GetCampaignsResponse: {
    kind: "object",
    properties: {
      campaigns: { kind: "array", items: { kind: "ref", name: "CampaignDTO" } },
      pager: { kind: "ref", name: "FlippingPagerDTO" },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["campaigns"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PlacementType: { kind: "string", enum: ["FBS", "FBY", "DBS", "LAAS"] },
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
  TaxationInfoDTO: {
    kind: "object",
    properties: { vat: { kind: "ref", name: "VatRateType", nullable: true } },
    required: [],
  },
  VatRateType: {
    kind: "string",
    enum: ["VAT_22", "NO_VAT", "VAT_12", "VAT_10", "VAT_05", "VAT_07"],
  },
};
