// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const orderLabelsComponents: YmSchemaComponents = {
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
  GetOrderLabelsDataResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "OrderLabelDTO" },
    },
    required: ["status"],
  },
  OrderLabelDTO: {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      placesNumber: { kind: "number", integer: true },
      url: { kind: "ref", name: "Url" },
      parcelBoxLabels: {
        kind: "array",
        items: { kind: "ref", name: "ParcelBoxLabelDTO" },
      },
    },
    required: ["orderId", "placesNumber", "url", "parcelBoxLabels"],
  },
  PageFormatType: {
    kind: "string",
    enum: ["A9_HORIZONTALLY", "A9", "A7", "A4"],
  },
  ParcelBoxLabelDTO: {
    kind: "object",
    properties: {
      url: { kind: "ref", name: "Url" },
      supplierName: { kind: "string" },
      deliveryServiceName: { kind: "string" },
      orderId: { kind: "number", integer: true },
      orderNum: { kind: "string" },
      recipientName: { kind: "string" },
      boxId: { kind: "number", integer: true },
      fulfilmentId: { kind: "string" },
      place: { kind: "string" },
      weight: { kind: "string" },
      deliveryServiceId: { kind: "string" },
      deliveryAddress: { kind: "string" },
      shipmentDate: { kind: "string" },
    },
    required: [
      "url",
      "supplierName",
      "deliveryServiceName",
      "orderId",
      "orderNum",
      "recipientName",
      "boxId",
      "fulfilmentId",
      "place",
      "weight",
      "deliveryServiceId",
    ],
  },
  Url: { kind: "string", minLength: 1, maxLength: 2000 },
};
