// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const stocksComponents: YmSchemaComponents = {
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
  GetStocksOnPartnerWarehousesDTO: {
    kind: "object",
    properties: {
      partnerWarehouseId: { kind: "number", integer: true, minimum: 1 },
      offers: {
        kind: "array",
        items: { kind: "ref", name: "PartnerWarehouseOfferDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["partnerWarehouseId", "offers"],
  },
  GetStocksOnPartnerWarehousesRequest: {
    kind: "object",
    properties: {
      partnerWarehouseId: { kind: "number", integer: true, minimum: 1 },
      archived: { kind: "boolean" },
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
    },
    required: ["partnerWarehouseId"],
  },
  GetStocksOnPartnerWarehousesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetStocksOnPartnerWarehousesDTO" },
    },
    required: ["status"],
  },
  GetWarehouseStocksDTO: {
    kind: "object",
    properties: {
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseOffersDTO" },
      },
    },
    required: ["warehouses"],
  },
  GetWarehouseStocksRequest: {
    kind: "object",
    properties: {
      stocksWarehouseId: { kind: "number", integer: true, minimum: 1 },
      hasStocks: { kind: "boolean" },
      withTurnover: { kind: "boolean" },
      archived: { kind: "boolean" },
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
    },
    required: [],
  },
  GetWarehouseStocksResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetWarehouseStocksDTO" },
    },
    required: ["status"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PartnerWarehouseOfferDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      stocks: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseStockDTO" },
      },
      updatedAt: { kind: "string" },
    },
    required: ["offerId", "stocks"],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  TurnoverDTO: {
    kind: "object",
    properties: {
      turnover: { kind: "ref", name: "TurnoverType" },
      turnoverDays: { kind: "number" },
    },
    required: ["turnover"],
  },
  TurnoverType: {
    kind: "string",
    enum: ["LOW", "ALMOST_LOW", "HIGH", "VERY_HIGH", "NO_SALES", "FREE_STORE"],
  },
  UpdateStockDTO: {
    kind: "object",
    properties: {
      sku: { kind: "ref", name: "ShopSku" },
      items: {
        kind: "array",
        items: { kind: "ref", name: "UpdateStockItemDTO" },
      },
    },
    required: ["sku", "items"],
  },
  UpdateStockItemDTO: {
    kind: "object",
    properties: {
      count: { kind: "number", integer: true, minimum: 0, maximum: 2000000000 },
      updatedAt: { kind: "string" },
    },
    required: ["count"],
  },
  UpdateStockOnWarehouseItemDTO: {
    kind: "object",
    properties: {
      sku: { kind: "ref", name: "ShopSku" },
      partnerWarehouseId: { kind: "number", integer: true, minimum: 1 },
      count: { kind: "number", integer: true, minimum: 0, maximum: 2000000000 },
      updatedAt: { kind: "string" },
    },
    required: ["sku", "partnerWarehouseId", "count"],
  },
  UpdateStocksOnWarehousesRequest: {
    kind: "object",
    properties: {
      skuItems: {
        kind: "array",
        items: { kind: "ref", name: "UpdateStockOnWarehouseItemDTO" },
      },
    },
    required: ["skuItems"],
  },
  UpdateStocksRequest: {
    kind: "object",
    properties: {
      skus: { kind: "array", items: { kind: "ref", name: "UpdateStockDTO" } },
    },
    required: ["skus"],
  },
  WarehouseOfferDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      turnoverSummary: { kind: "ref", name: "TurnoverDTO" },
      stocks: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseStockDTO" },
      },
      updatedAt: { kind: "string" },
    },
    required: ["offerId", "stocks"],
  },
  WarehouseOffersDTO: {
    kind: "object",
    properties: {
      warehouseId: { kind: "number", integer: true },
      offers: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseOfferDTO" },
      },
    },
    required: ["warehouseId", "offers"],
  },
  WarehouseStockDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "WarehouseStockType" },
      count: { kind: "number", integer: true },
    },
    required: ["type", "count"],
  },
  WarehouseStockType: {
    kind: "string",
    enum: [
      "FIT",
      "FREEZE",
      "AVAILABLE",
      "QUARANTINE",
      "UTILIZATION",
      "DEFECT",
      "EXPIRED",
    ],
  },
};
