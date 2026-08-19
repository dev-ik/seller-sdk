// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const operationsComponents: YmSchemaComponents = {
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
  GetOperationsRequest: {
    kind: "object",
    properties: {
      operationType: { kind: "ref", name: "OperationType" },
      operationIds: {
        kind: "array",
        items: { kind: "ref", name: "OperationId" },
      },
    },
    required: ["operationType", "operationIds"],
  },
  GetOperationsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetOperationsResultDTO" },
    },
    required: ["status"],
  },
  GetOperationsResultDTO: {
    kind: "object",
    properties: {
      operations: {
        kind: "array",
        items: { kind: "ref", name: "OperationResultDTO" },
      },
    },
    required: ["operations"],
  },
  OperationId: { kind: "string", minLength: 1, maxLength: 1000 },
  OperationResultDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "OperationId" },
      type: { kind: "ref", name: "OperationType" },
      status: { kind: "ref", name: "OperationStatusType" },
    },
    required: ["id", "type", "status"],
  },
  OperationStatusType: {
    kind: "string",
    enum: ["IN_PROGRESS", "DONE", "FAILED"],
  },
  OperationType: {
    kind: "string",
    enum: [
      "ORDER_RECIPIENT_UPDATE",
      "ORDER_DELIVERY_INTERVAL_UPDATE",
      "ORDER_STATUS_UPDATE",
      "RETURN_CANCELLATION",
    ],
  },
};
