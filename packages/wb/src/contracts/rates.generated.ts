// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const ratesComponents: WbSchemaComponents = {
  "models.RatesBoxResponse": {
    kind: "object",
    properties: { data: { kind: "ref", name: "models.WarehousesBoxRates" } },
    required: [],
  },
  "models.WarehousesBoxRates": {
    kind: "object",
    properties: {
      currency: { kind: "string" },
      dtNextBox: { kind: "string" },
      dtTillMax: { kind: "string" },
      warehouseList: {
        kind: "array",
        items: { kind: "ref", name: "models.WarehouseBoxRates" },
        nullable: true,
      },
    },
    required: [],
  },
  "models.WarehouseBoxRates": {
    kind: "object",
    properties: {
      boxDeliveryBase: { kind: "string" },
      boxDeliveryCoefExpr: { kind: "string" },
      boxDeliveryLiter: { kind: "string" },
      boxDeliveryMarketplaceBase: { kind: "string" },
      boxDeliveryMarketplaceCoefExpr: { kind: "string" },
      boxDeliveryMarketplaceLiter: { kind: "string" },
      boxStorageBase: { kind: "string" },
      boxStorageCoefExpr: { kind: "string" },
      boxStorageLiter: { kind: "string" },
      geoName: { kind: "string" },
      warehouseName: { kind: "string" },
    },
    required: [],
  },
  "models.RatesPalletResponse": {
    kind: "object",
    properties: { data: { kind: "ref", name: "models.WarehousesPalletRates" } },
    required: [],
  },
  "models.WarehousesPalletRates": {
    kind: "object",
    properties: {
      currency: { kind: "string" },
      dtNextPallet: { kind: "string" },
      dtTillMax: { kind: "string" },
      warehouseList: {
        kind: "array",
        items: { kind: "ref", name: "models.WarehousePalletRates" },
        nullable: true,
      },
    },
    required: [],
  },
  "models.WarehousePalletRates": {
    kind: "object",
    properties: {
      palletDeliveryExpr: { kind: "string" },
      palletDeliveryValueBase: { kind: "string" },
      palletDeliveryValueLiter: { kind: "string" },
      palletStorageExpr: { kind: "string" },
      palletStorageValueExpr: { kind: "string" },
      warehouseName: { kind: "string" },
    },
    required: [],
  },
  "models.ReturnRatesResponse": {
    kind: "object",
    properties: { data: { kind: "ref", name: "models.WarehousesReturnRates" } },
    required: [],
  },
  "models.WarehousesReturnRates": {
    kind: "object",
    properties: {
      currency: { kind: "string" },
      dtNextDeliveryDumpKgt: { kind: "string" },
      dtNextDeliveryDumpSrg: { kind: "string" },
      dtNextDeliveryDumpSup: { kind: "string" },
      warehouseList: {
        kind: "array",
        items: { kind: "ref", name: "models.WarehouseReturnRates" },
        nullable: true,
      },
    },
    required: [],
  },
  "models.WarehouseReturnRates": {
    kind: "object",
    properties: {
      deliveryDumpKgtOfficeBase: { kind: "string" },
      deliveryDumpKgtOfficeLiter: { kind: "string" },
      deliveryDumpKgtReturnExpr: { kind: "string" },
      deliveryDumpSrgOfficeExpr: { kind: "string" },
      deliveryDumpSrgReturnExpr: { kind: "string" },
      deliveryDumpSupCourierBase: { kind: "string" },
      deliveryDumpSupCourierLiter: { kind: "string" },
      deliveryDumpSupOfficeBase: { kind: "string" },
      deliveryDumpSupOfficeLiter: { kind: "string" },
      deliveryDumpSupReturnExpr: { kind: "string" },
      warehouseName: { kind: "string" },
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
  "models.AcceptanceCoefficient": {
    kind: "object",
    properties: {
      date: { kind: "string" },
      coefficient: { kind: "number" },
      warehouseID: { kind: "number", integer: true },
      warehouseName: { kind: "string" },
      allowUnload: { kind: "boolean" },
      boxTypeID: { kind: "number", integer: true },
      storageCoef: { kind: "string", nullable: true },
      deliveryCoef: { kind: "string", nullable: true },
      deliveryBaseLiter: { kind: "string", nullable: true },
      deliveryAdditionalLiter: { kind: "string", nullable: true },
      storageBaseLiter: { kind: "string", nullable: true },
      storageAdditionalLiter: { kind: "string", nullable: true },
      isSortingCenter: { kind: "boolean" },
    },
    required: [],
  },
  RatesBoxResponse: {
    kind: "object",
    properties: { response: { kind: "ref", name: "models.RatesBoxResponse" } },
    required: [],
  },
  RatesPalletResponse: {
    kind: "object",
    properties: {
      response: { kind: "ref", name: "models.RatesPalletResponse" },
    },
    required: [],
  },
  ReturnRatesResponse: {
    kind: "object",
    properties: {
      response: { kind: "ref", name: "models.ReturnRatesResponse" },
    },
    required: [],
  },
  Fee: {
    kind: "object",
    properties: {
      report: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            kgvpBooking: { kind: "number" },
            kgvpMarketplace: { kind: "number" },
            kgvpPickup: { kind: "number" },
            kgvpSupplier: { kind: "number" },
            kgvpSupplierExpress: { kind: "number" },
            paidStorageKgvp: { kind: "number" },
            parentID: { kind: "number", integer: true },
            parentName: { kind: "string" },
            subjectID: { kind: "number", integer: true },
            subjectName: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
    additionalProperties: false,
  },
  FeeChina: {
    kind: "object",
    properties: {
      report: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            kgvpChina: { kind: "number" },
            parentID: { kind: "number", integer: true },
            parentName: { kind: "string" },
            subjectID: { kind: "number", integer: true },
            subjectName: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  FeeTurkey: {
    kind: "object",
    properties: {
      report: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            kgvpTurkey: { kind: "number" },
            parentID: { kind: "number", integer: true },
            parentName: { kind: "string" },
            subjectID: { kind: "number", integer: true },
            subjectName: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  FeeUzbekistan: {
    kind: "object",
    properties: {
      report: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            kgvpMarketplaceUz: { kind: "number" },
            kgvpPaidStorageUz: { kind: "number" },
            kgvpSupplierUz: { kind: "number" },
            parentID: { kind: "number", integer: true },
            parentName: { kind: "string" },
            subjectID: { kind: "number", integer: true },
            subjectName: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  FeeUAE: {
    kind: "object",
    properties: {
      report: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            kgvpUAE: { kind: "number" },
            parentID: { kind: "number", integer: true },
            parentName: { kind: "string" },
            subjectID: { kind: "number", integer: true },
            subjectName: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  BadRequest: {
    kind: "object",
    properties: {
      detail: { kind: "string" },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      title: { kind: "string" },
    },
    required: [],
  },
};
