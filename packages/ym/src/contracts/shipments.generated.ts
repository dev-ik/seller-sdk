// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const shipmentsComponents: YmSchemaComponents = {
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
  BaseShipmentDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      planIntervalFrom: { kind: "string" },
      planIntervalTo: { kind: "string" },
      shipmentType: { kind: "ref", name: "ShipmentType" },
      warehouse: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      warehouseTo: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      externalId: { kind: "string" },
      deliveryService: { kind: "ref", name: "DeliveryServiceDTO" },
      palletsCount: { kind: "ref", name: "PalletsCountDTO" },
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
      },
      draftCount: { kind: "number", integer: true, minimum: 0 },
      plannedCount: { kind: "number", integer: true, minimum: 0 },
      factCount: { kind: "number", integer: true, minimum: 0 },
      signature: { kind: "ref", name: "SignatureDTO" },
    },
    required: [
      "orderIds",
      "id",
      "planIntervalFrom",
      "planIntervalTo",
      "draftCount",
      "plannedCount",
      "factCount",
      "signature",
    ],
  },
  ConfirmShipmentRequest: {
    kind: "object",
    properties: {
      externalShipmentId: { kind: "string" },
      signatory: { kind: "string" },
    },
    required: [],
  },
  DeliveryServiceDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
    },
    required: [],
  },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  ExtensionShipmentDTO: {
    kind: "object",
    properties: {
      currentStatus: { kind: "ref", name: "ShipmentStatusChangeDTO" },
      availableActions: {
        kind: "array",
        items: { kind: "ref", name: "ShipmentActionType" },
      },
    },
    required: ["availableActions"],
  },
  GetShipmentOrdersInfoResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "OrdersShipmentInfoDTO" },
    },
    required: ["status"],
  },
  GetShipmentResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "ShipmentDTO" },
    },
    required: ["status"],
  },
  OrdersShipmentInfoDTO: {
    kind: "object",
    properties: {
      orderIdsWithLabels: {
        kind: "array",
        items: { kind: "number", integer: true },
      },
      orderIdsWithoutLabels: {
        kind: "array",
        items: { kind: "number", integer: true },
      },
    },
    required: ["orderIdsWithLabels", "orderIdsWithoutLabels"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PalletsCountDTO: {
    kind: "object",
    properties: {
      planned: { kind: "number", integer: true, minimum: 0 },
      fact: { kind: "number", integer: true, minimum: 0 },
    },
    required: [],
  },
  PartnerShipmentWarehouseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      name: { kind: "string" },
      address: { kind: "string" },
    },
    required: ["id"],
  },
  SearchShipmentsRequest: {
    kind: "object",
    properties: {
      dateFrom: { kind: "string" },
      dateTo: { kind: "string" },
      statuses: {
        kind: "array",
        items: { kind: "ref", name: "ShipmentStatusType" },
        nullable: true,
      },
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
      cancelledOrders: { kind: "boolean" },
    },
    required: ["dateFrom", "dateTo"],
  },
  SearchShipmentsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "SearchShipmentsResponseDTO" },
    },
    required: ["status"],
  },
  SearchShipmentsResponseDTO: {
    kind: "object",
    properties: {
      shipments: {
        kind: "array",
        items: { kind: "ref", name: "ShipmentInfoDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["shipments"],
  },
  SetShipmentPalletsCountRequest: {
    kind: "object",
    properties: { placesCount: { kind: "number", integer: true, minimum: 0 } },
    required: ["placesCount"],
  },
  ShipmentActionType: {
    kind: "string",
    enum: [
      "CONFIRM",
      "DOWNLOAD_ACT",
      "DOWNLOAD_INBOUND_ACT",
      "DOWNLOAD_DISCREPANCY_ACT",
      "DOWNLOAD_TRANSPORTATION_WAYBILL",
      "CHANGE_PALLETS_COUNT",
    ],
  },
  ShipmentDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      planIntervalFrom: { kind: "string" },
      planIntervalTo: { kind: "string" },
      shipmentType: { kind: "ref", name: "ShipmentType" },
      warehouse: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      warehouseTo: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      externalId: { kind: "string" },
      deliveryService: { kind: "ref", name: "DeliveryServiceDTO" },
      palletsCount: { kind: "ref", name: "PalletsCountDTO" },
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
      },
      draftCount: { kind: "number", integer: true, minimum: 0 },
      plannedCount: { kind: "number", integer: true, minimum: 0 },
      factCount: { kind: "number", integer: true, minimum: 0 },
      signature: { kind: "ref", name: "SignatureDTO" },
      currentStatus: { kind: "ref", name: "ShipmentStatusChangeDTO" },
      availableActions: {
        kind: "array",
        items: { kind: "ref", name: "ShipmentActionType" },
      },
    },
    required: [
      "orderIds",
      "id",
      "planIntervalFrom",
      "planIntervalTo",
      "draftCount",
      "plannedCount",
      "factCount",
      "signature",
      "availableActions",
    ],
  },
  ShipmentInfoDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      planIntervalFrom: { kind: "string" },
      planIntervalTo: { kind: "string" },
      shipmentType: { kind: "ref", name: "ShipmentType" },
      warehouse: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      warehouseTo: { kind: "ref", name: "PartnerShipmentWarehouseDTO" },
      externalId: { kind: "string" },
      deliveryService: { kind: "ref", name: "DeliveryServiceDTO" },
      palletsCount: { kind: "ref", name: "PalletsCountDTO" },
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
      },
      draftCount: { kind: "number", integer: true, minimum: 0 },
      plannedCount: { kind: "number", integer: true, minimum: 0 },
      factCount: { kind: "number", integer: true, minimum: 0 },
      signature: { kind: "ref", name: "SignatureDTO" },
      status: { kind: "ref", name: "ShipmentStatusType" },
      statusDescription: { kind: "string" },
      statusUpdateTime: { kind: "string" },
    },
    required: [
      "orderIds",
      "id",
      "planIntervalFrom",
      "planIntervalTo",
      "draftCount",
      "plannedCount",
      "factCount",
      "signature",
    ],
  },
  ShipmentPalletLabelPageFormatType: { kind: "string", enum: ["A4", "A8"] },
  ShipmentStatusChangeDTO: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ShipmentStatusType" },
      description: { kind: "string" },
      updateTime: { kind: "string" },
    },
    required: [],
  },
  ShipmentStatusType: {
    kind: "string",
    enum: [
      "OUTBOUND_CREATED",
      "OUTBOUND_READY_FOR_CONFIRMATION",
      "OUTBOUND_CONFIRMED",
      "OUTBOUND_SIGNED",
      "FINISHED",
      "ACCEPTED",
      "ACCEPTED_WITH_DISCREPANCIES",
      "ERROR",
    ],
  },
  ShipmentType: { kind: "string", enum: ["IMPORT", "WITHDRAW"] },
  SignatureDTO: {
    kind: "object",
    properties: { signed: { kind: "boolean" } },
    required: ["signed"],
  },
  TransferOrdersFromShipmentRequest: {
    kind: "object",
    properties: {
      orderIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["orderIds"],
  },
};
