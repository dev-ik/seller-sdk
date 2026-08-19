// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const warehousesComponents: YmSchemaComponents = {
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
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  FulfillmentWarehouseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      address: { kind: "ref", name: "WarehouseAddressDTO" },
    },
    required: ["id", "name"],
  },
  FulfillmentWarehousesDTO: {
    kind: "object",
    properties: {
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "FulfillmentWarehouseDTO" },
      },
    },
    required: ["warehouses"],
  },
  GetFulfillmentWarehousesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "FulfillmentWarehousesDTO" },
    },
    required: ["status"],
  },
  GetPagedWarehousesRequest: {
    kind: "object",
    properties: {
      components: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseComponentType" },
        nullable: true,
      },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: [],
  },
  GetPagedWarehousesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "PagedWarehousesDTO" },
    },
    required: ["status"],
  },
  GetPartnerWarehousesRequest: {
    kind: "object",
    properties: {
      warehouseIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
        nullable: true,
      },
      components: {
        kind: "array",
        items: { kind: "ref", name: "PartnerWarehouseComponentType" },
        nullable: true,
      },
    },
    required: [],
  },
  GetPartnerWarehousesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "PartnerWarehousesDTO" },
    },
    required: ["status"],
  },
  GetWarehousesResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "WarehousesDTO" },
    },
    required: ["status"],
  },
  GpsDTO: {
    kind: "object",
    properties: { latitude: { kind: "number" }, longitude: { kind: "number" } },
    required: ["latitude", "longitude"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  PagedWarehousesDTO: {
    kind: "object",
    properties: {
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseDetailsDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["warehouses"],
  },
  PartnerWarehouseComponentType: { kind: "string", enum: ["ADDRESS"] },
  PartnerWarehouseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      name: { kind: "string" },
      models: {
        kind: "array",
        items: { kind: "ref", name: "PartnerWarehouseModelDTO" },
      },
      address: { kind: "ref", name: "WarehouseAddressDTO" },
    },
    required: ["id", "name", "models"],
  },
  PartnerWarehouseModelDTO: {
    kind: "object",
    properties: {
      placementType: { kind: "ref", name: "WarehouseProgramType" },
      apiAvailability: { kind: "ref", name: "ApiAvailabilityStatusType" },
    },
    required: ["placementType", "apiAvailability"],
  },
  PartnerWarehousesDTO: {
    kind: "object",
    properties: {
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "PartnerWarehouseDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["warehouses"],
  },
  UpdateWarehouseModelStatusRequest: {
    kind: "object",
    properties: {
      partnerWarehouseId: { kind: "number", integer: true, minimum: 1 },
      model: { kind: "ref", name: "WarehouseProgramType" },
      enabled: { kind: "boolean" },
    },
    required: ["partnerWarehouseId", "model", "enabled"],
  },
  UpdateWarehouseModelStatusResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "WarehouseModelStatusDTO" },
    },
    required: ["status"],
  },
  UpdateWarehouseStatusRequest: {
    kind: "object",
    properties: { enabled: { kind: "boolean" } },
    required: ["enabled"],
  },
  UpdateWarehouseStatusResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "WarehouseStatusDTO" },
    },
    required: ["status"],
  },
  WarehouseAddressDTO: {
    kind: "object",
    properties: {
      city: { kind: "string", maxLength: 200 },
      street: { kind: "string", maxLength: 512 },
      number: { kind: "string", maxLength: 256 },
      building: { kind: "string", maxLength: 16 },
      block: { kind: "string", maxLength: 16 },
      gps: { kind: "ref", name: "GpsDTO" },
    },
    required: ["city", "gps"],
  },
  WarehouseComponentType: { kind: "string", enum: ["ADDRESS", "STATUS"] },
  WarehouseDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      campaignId: { kind: "ref", name: "CampaignId" },
      express: { kind: "boolean" },
      address: { kind: "ref", name: "WarehouseAddressDTO" },
    },
    required: ["id", "name", "campaignId", "express"],
  },
  WarehouseDetailsDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true },
      name: { kind: "string" },
      campaignId: { kind: "ref", name: "CampaignId" },
      express: { kind: "boolean" },
      groupInfo: { kind: "ref", name: "WarehouseGroupInfoDTO" },
      address: { kind: "ref", name: "WarehouseAddressDTO" },
      status: { kind: "ref", name: "WarehouseStatusDTO" },
    },
    required: ["id", "name", "campaignId", "express"],
  },
  WarehouseGroupDTO: {
    kind: "object",
    properties: {
      name: { kind: "string" },
      mainWarehouse: { kind: "ref", name: "WarehouseDTO" },
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseDTO" },
      },
    },
    required: ["name", "mainWarehouse", "warehouses"],
  },
  WarehouseGroupInfoDTO: {
    kind: "object",
    properties: {
      name: { kind: "string" },
      id: { kind: "number", integer: true },
    },
    required: ["name", "id"],
  },
  WarehouseModelStatusDTO: {
    kind: "object",
    properties: { status: { kind: "ref", name: "WarehouseModelStatusType" } },
    required: ["status"],
  },
  WarehouseModelStatusType: {
    kind: "string",
    enum: ["DISABLED_MANUALLY", "OTHER"],
  },
  WarehouseProgramType: { kind: "string", enum: ["FBS", "DBS", "EXPRESS"] },
  WarehouseStatusDTO: {
    kind: "object",
    properties: { status: { kind: "ref", name: "WarehouseStatusType" } },
    required: ["status"],
  },
  WarehouseStatusType: { kind: "string", enum: ["DISABLED_MANUALLY", "OTHER"] },
  WarehousesDTO: {
    kind: "object",
    properties: {
      warehouses: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseDTO" },
      },
      warehouseGroups: {
        kind: "array",
        items: { kind: "ref", name: "WarehouseGroupDTO" },
      },
    },
    required: ["warehouses", "warehouseGroups"],
  },
};
