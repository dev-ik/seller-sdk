// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const ordersFbwComponents: WbSchemaComponents = {
  "models.TransitTariff": {
    kind: "object",
    properties: {
      transitWarehouseName: { kind: "string" },
      destinationWarehouseName: { kind: "string" },
      activeFrom: { kind: "string" },
      boxTariff: {
        kind: "array",
        items: { kind: "ref", name: "models.VolumeTariff" },
        nullable: true,
      },
      palletTariff: { kind: "number", integer: true },
    },
    required: [],
  },
  "models.VolumeTariff": {
    kind: "object",
    properties: {
      from: { kind: "number", integer: true },
      to: { kind: "number", integer: true },
      value: { kind: "number" },
    },
    required: [],
  },
  "models.Box": {
    kind: "object",
    properties: {
      packageCode: { kind: "string" },
      quantity: { kind: "number", integer: true },
      barcodes: {
        kind: "array",
        items: { kind: "ref", name: "models.GoodInBox" },
      },
    },
    required: [],
  },
  "models.GoodInBox": {
    kind: "object",
    properties: {
      barcode: { kind: "string" },
      quantity: { kind: "number", integer: true },
    },
    required: [],
  },
  "models.SuppliesFiltersRequest": {
    kind: "object",
    properties: {
      dates: {
        kind: "array",
        items: { kind: "ref", name: "models.DateFilterRequest" },
      },
      statusIDs: {
        kind: "array",
        items: { kind: "ref", name: "models.HandySupplyStatus" },
      },
    },
    required: [],
  },
  "models.GoodInSupply": {
    kind: "object",
    properties: {
      barcode: { kind: "string" },
      vendorCode: { kind: "string" },
      nmID: { kind: "number", integer: true },
      needKiz: { kind: "boolean" },
      tnved: { kind: "string", nullable: true },
      techSize: { kind: "string" },
      color: { kind: "string", nullable: true },
      supplierBoxAmount: { kind: "number", integer: true, nullable: true },
      quantity: { kind: "number", integer: true },
      readyForSaleQuantity: { kind: "number", integer: true, nullable: true },
      acceptedQuantity: { kind: "number", integer: true, nullable: true },
      unloadingQuantity: { kind: "number", integer: true, nullable: true },
    },
    required: [],
  },
  "models.DateFilterRequest": {
    kind: "object",
    properties: {
      from: { kind: "string" },
      till: { kind: "string" },
      type: {
        kind: "string",
        enum: ["factDate", "createDate", "supplyDate", "updatedDate"],
      },
    },
    required: ["type"],
  },
  "models.SupplyDetails": {
    kind: "object",
    properties: {
      phone: { kind: "string" },
      statusID: { kind: "number", integer: true, enum: [1, 2, 3, 4, 5, 6] },
      virtualTypeID: { kind: "number", integer: true },
      boxTypeID: { kind: "number", integer: true },
      createDate: { kind: "string" },
      supplyDate: { kind: "string", nullable: true },
      factDate: { kind: "string", nullable: true },
      updatedDate: { kind: "string", nullable: true },
      warehouseID: { kind: "number", integer: true },
      warehouseName: { kind: "string" },
      actualWarehouseID: { kind: "number", integer: true, nullable: true },
      actualWarehouseName: { kind: "string" },
      transitWarehouseID: { kind: "number", integer: true, nullable: true },
      transitWarehouseName: { kind: "string" },
      acceptanceCost: { kind: "number", nullable: true },
      paidAcceptanceCoefficient: { kind: "number", nullable: true },
      rejectReason: { kind: "string", nullable: true },
      supplierAssignName: { kind: "string", nullable: true },
      storageCoef: { kind: "string", nullable: true },
      deliveryCoef: { kind: "string", nullable: true },
      quantity: { kind: "number", integer: true },
      readyForSaleQuantity: { kind: "number", integer: true },
      acceptedQuantity: { kind: "number", integer: true },
      unloadingQuantity: { kind: "number", integer: true },
      depersonalizedQuantity: { kind: "number", integer: true, nullable: true },
      isBoxOnPallet: { kind: "boolean" },
    },
    required: [],
  },
  "models.HandySupplyStatus": {
    kind: "number",
    integer: true,
    enum: [1, 2, 3, 4, 5, 6],
  },
  "models.Supply": {
    kind: "object",
    properties: {
      phone: { kind: "string" },
      supplyID: { kind: "number", integer: true, nullable: true },
      preorderID: { kind: "number", integer: true },
      createDate: { kind: "string" },
      supplyDate: { kind: "string", nullable: true },
      factDate: { kind: "string", nullable: true },
      updatedDate: { kind: "string", nullable: true },
      statusID: { kind: "number", integer: true, enum: [1, 2, 3, 4, 5, 6] },
      boxTypeID: { kind: "unknown" },
      isBoxOnPallet: { kind: "boolean" },
    },
    required: [],
  },
  "models.WarehousesResultItems": {
    kind: "object",
    properties: {
      ID: { kind: "number", integer: true },
      name: { kind: "string" },
      address: { kind: "string" },
      workTime: { kind: "string" },
      isActive: { kind: "boolean" },
      isTransitActive: { kind: "boolean" },
    },
    required: [],
  },
  "models.Good": {
    kind: "object",
    properties: {
      quantity: { kind: "number", integer: true, minimum: 1, maximum: 999999 },
      barcode: { kind: "string" },
    },
    required: [],
  },
  "models.ErrorModel": {
    kind: "object",
    properties: {
      status: { kind: "number", integer: true },
      title: { kind: "string" },
      detail: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
    },
    required: [],
  },
  "models.OptionsResultModel": {
    kind: "object",
    properties: {
      result: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            barcode: { kind: "string" },
            error: {
              kind: "object",
              properties: {
                title: { kind: "string" },
                detail: { kind: "string" },
              },
              required: [],
            },
            isError: { kind: "boolean" },
            warehouses: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  warehouseID: { kind: "number", integer: true },
                  canBox: { kind: "boolean" },
                  canMonopallet: { kind: "boolean" },
                  canSupersafe: { kind: "boolean" },
                  isBoxOnPallet: { kind: "boolean" },
                },
                required: [],
              },
              nullable: true,
            },
          },
          required: [],
        },
      },
      requestId: { kind: "string" },
    },
    required: [],
  },
};
