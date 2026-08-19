// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const logisticPointsComponents: YmSchemaComponents = {
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
  DayOfWeekType: {
    kind: "string",
    enum: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ],
  },
  GetLogisticPointsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetLogisticsPointsDTO" },
    },
    required: ["status"],
  },
  GetLogisticsPointsDTO: {
    kind: "object",
    properties: {
      logisticPoints: {
        kind: "array",
        items: { kind: "ref", name: "LogisticPointDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["logisticPoints"],
  },
  GpsDTO: {
    kind: "object",
    properties: { latitude: { kind: "number" }, longitude: { kind: "number" } },
    required: ["latitude", "longitude"],
  },
  LogisticPointAddressDTO: {
    kind: "object",
    properties: {
      fullAddress: { kind: "string", minLength: 1, maxLength: 512 },
      gps: { kind: "ref", name: "GpsDTO" },
      regionId: { kind: "number", integer: true },
      city: { kind: "string", minLength: 1, maxLength: 128 },
      street: { kind: "string", minLength: 1, maxLength: 128 },
      house: { kind: "string", minLength: 1, maxLength: 16 },
      building: { kind: "string", minLength: 1, maxLength: 16 },
      block: { kind: "string", minLength: 1, maxLength: 16 },
      km: { kind: "number", integer: true, minimum: 0 },
      additional: { kind: "string", minLength: 1, maxLength: 1024 },
    },
    required: ["fullAddress", "gps", "regionId"],
  },
  LogisticPointBrandType: { kind: "string", enum: ["MARKET"] },
  LogisticPointDTO: {
    kind: "object",
    properties: {
      logisticPointId: { kind: "ref", name: "LogisticPointId" },
      brand: { kind: "ref", name: "LogisticPointBrandType" },
      address: { kind: "ref", name: "LogisticPointAddressDTO" },
      workingSchedule: { kind: "ref", name: "LogisticPointScheduleDTO" },
      deliveryRestrictions: {
        kind: "ref",
        name: "LogisticPointDeliveryRestrictionDTO",
      },
      features: {
        kind: "array",
        items: { kind: "ref", name: "LogisticPointFeatureType" },
        nullable: true,
      },
      storagePeriod: { kind: "number", integer: true },
    },
    required: [
      "logisticPointId",
      "brand",
      "address",
      "workingSchedule",
      "deliveryRestrictions",
      "paymentTypes",
      "storagePeriod",
    ],
  },
  LogisticPointDeliveryRestrictionDTO: {
    kind: "object",
    properties: {
      dimensionsRestrictions: {
        kind: "ref",
        name: "LogisticPointDimensionRestrictionsDTO",
      },
    },
    required: ["dimensionsRestrictions"],
  },
  LogisticPointDimensionRestrictionsDTO: {
    kind: "object",
    properties: {
      weight: { kind: "number", integer: true, minimum: 1 },
      height: { kind: "number", integer: true, minimum: 1 },
      width: { kind: "number", integer: true, minimum: 1 },
      length: { kind: "number", integer: true, minimum: 1 },
      dimensionsSum: { kind: "number", integer: true, minimum: 1 },
    },
    required: ["weight", "height", "width", "length", "dimensionsSum"],
  },
  LogisticPointFeatureType: { kind: "string", enum: ["RETURN_ALLOWED"] },
  LogisticPointId: { kind: "number", integer: true, minimum: 1 },
  LogisticPointScheduleDTO: {
    kind: "object",
    properties: {
      schedule: {
        kind: "array",
        items: { kind: "ref", name: "ScheduleDayDTO" },
      },
      holidays: { kind: "array", items: { kind: "string" }, nullable: true },
    },
    required: ["schedule"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  ScheduleDayDTO: {
    kind: "object",
    properties: {
      day: { kind: "ref", name: "DayOfWeekType" },
      startTime: { kind: "string" },
      endTime: { kind: "string" },
    },
    required: ["day", "startTime", "endTime"],
  },
};
