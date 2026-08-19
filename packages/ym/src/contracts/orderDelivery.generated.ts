// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const orderDeliveryComponents: YmSchemaComponents = {
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
  EacVerificationResultDTO: {
    kind: "object",
    properties: {
      verificationResult: { kind: "ref", name: "EacVerificationStatusType" },
      attemptsLeft: { kind: "number", integer: true },
    },
    required: [],
  },
  EacVerificationStatusType: {
    kind: "string",
    enum: ["ACCEPTED", "REJECTED", "NEED_UPDATE"],
  },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  GetOrderBuyerInfoResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "OrderBuyerInfoDTO" },
    },
    required: ["status"],
  },
  OrderBuyerBasicInfoDTO: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      lastName: { kind: "string" },
      firstName: { kind: "string" },
      middleName: { kind: "string" },
      type: { kind: "ref", name: "OrderBuyerType" },
    },
    required: ["type"],
  },
  OrderBuyerInfoDTO: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      lastName: { kind: "string" },
      firstName: { kind: "string" },
      middleName: { kind: "string" },
      type: { kind: "ref", name: "OrderBuyerType" },
      phone: { kind: "string" },
      trusted: { kind: "boolean" },
    },
    required: ["type"],
  },
  OrderBuyerType: { kind: "string", enum: ["PERSON", "BUSINESS"] },
  OrderDeliveryDateDTO: {
    kind: "object",
    properties: { toDate: { kind: "string" } },
    required: ["toDate"],
  },
  OrderDeliveryDateReasonType: {
    kind: "string",
    enum: ["USER_MOVED_DELIVERY_DATES", "PARTNER_MOVED_DELIVERY_DATES"],
  },
  SetOrderDeliveryDateRequest: {
    kind: "object",
    properties: {
      dates: { kind: "ref", name: "OrderDeliveryDateDTO" },
      reason: { kind: "ref", name: "OrderDeliveryDateReasonType" },
    },
    required: ["dates", "reason"],
  },
  SetOrderDeliveryTrackCodeRequest: {
    kind: "object",
    properties: {
      trackCode: { kind: "string" },
      deliveryServiceId: { kind: "number", integer: true },
    },
    required: ["trackCode", "deliveryServiceId"],
  },
  UpdateOrderStorageLimitRequest: {
    kind: "object",
    properties: { newDate: { kind: "string" } },
    required: ["newDate"],
  },
  VerifyOrderEacRequest: {
    kind: "object",
    properties: { code: { kind: "string" } },
    required: ["code"],
  },
  VerifyOrderEacResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "EacVerificationResultDTO" },
    },
    required: ["status"],
  },
};
