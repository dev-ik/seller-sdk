// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const outletLicensesComponents: YmSchemaComponents = {
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
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  FullOutletLicenseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      outletId: { kind: "number", integer: true, minimum: 1 },
      licenseType: { kind: "ref", name: "LicenseType" },
      number: { kind: "string" },
      dateOfIssue: { kind: "string" },
      dateOfExpiry: { kind: "string" },
      checkStatus: { kind: "ref", name: "LicenseCheckStatusType" },
      checkComment: { kind: "string" },
    },
    required: [
      "outletId",
      "licenseType",
      "number",
      "dateOfIssue",
      "dateOfExpiry",
    ],
  },
  GetOutletLicensesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "OutletLicensesResponseDTO" },
    },
    required: ["status"],
  },
  LicenseCheckStatusType: {
    kind: "string",
    enum: ["NEW", "SUCCESS", "FAIL", "REVOKE", "DONT_WANT", "FAIL_MANUAL"],
  },
  LicenseType: { kind: "string", enum: ["ALCOHOL", "UNKNOWN"] },
  OutletLicenseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      outletId: { kind: "number", integer: true, minimum: 1 },
      licenseType: { kind: "ref", name: "LicenseType" },
      number: { kind: "string" },
      dateOfIssue: { kind: "string" },
      dateOfExpiry: { kind: "string" },
    },
    required: [
      "outletId",
      "licenseType",
      "number",
      "dateOfIssue",
      "dateOfExpiry",
    ],
  },
  OutletLicensesResponseDTO: {
    kind: "object",
    properties: {
      licenses: {
        kind: "array",
        items: { kind: "ref", name: "FullOutletLicenseDTO" },
      },
    },
    required: ["licenses"],
  },
  UpdateOutletLicenseRequest: {
    kind: "object",
    properties: {
      licenses: {
        kind: "array",
        items: { kind: "ref", name: "OutletLicenseDTO" },
      },
    },
    required: ["licenses"],
  },
};
