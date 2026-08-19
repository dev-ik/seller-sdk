// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const reportsComponents: YmSchemaComponents = {
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
  BarcodeFormatType: {
    kind: "string",
    enum: ["F_30_20", "F_43_25", "F_58_40", "F_43_25_SINGLE"],
  },
  BarcodeOfferInfoDTO: {
    kind: "object",
    properties: {
      offerId: { kind: "ref", name: "ShopSku" },
      barcodeCount: { kind: "number", integer: true, minimum: 1, maximum: 100 },
    },
    required: ["offerId", "barcodeCount"],
  },
  BusinessId: { kind: "number", integer: true, minimum: 1 },
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  ClosureDocumentsContractType: {
    kind: "string",
    enum: ["INCOME", "OUTCOME", "MARKETING"],
  },
  ClosureDocumentsMonthOfYearDTO: {
    kind: "object",
    properties: {
      year: { kind: "number", integer: true },
      month: { kind: "ref", name: "Month" },
    },
    required: ["year", "month"],
  },
  GenerateBannersStatisticsRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
    },
    required: ["businessId", "dateFrom", "dateTo"],
  },
  GenerateBarcodesReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      barcodeFormat: { kind: "ref", name: "BarcodeFormatType" },
      barcodeOfferInfos: {
        kind: "array",
        items: { kind: "ref", name: "BarcodeOfferInfoDTO" },
        nullable: true,
      },
      supplyRequestId: { kind: "ref", name: "SupplyRequestId" },
    },
    required: ["campaignId", "barcodeFormat"],
  },
  GenerateBoostConsolidatedRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
    },
    required: ["businessId", "dateFrom", "dateTo"],
  },
  GenerateClosureDocumentsDetalizationRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      monthOfYear: { kind: "ref", name: "ClosureDocumentsMonthOfYearDTO" },
      contractType: { kind: "ref", name: "ClosureDocumentsContractType" },
    },
    required: ["campaignId", "monthOfYear", "contractType"],
  },
  GenerateClosureDocumentsRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      monthOfYear: { kind: "ref", name: "ClosureDocumentsMonthOfYearDTO" },
      contractTypes: {
        kind: "array",
        items: { kind: "ref", name: "ClosureDocumentsContractType" },
        nullable: true,
      },
    },
    required: ["campaignId", "monthOfYear"],
  },
  GenerateCompetitorsPositionReportRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      categoryId: { kind: "number", integer: true },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
    },
    required: ["dateFrom", "dateTo", "businessId", "categoryId"],
  },
  GenerateGoodsFeedbackRequest: {
    kind: "object",
    properties: { businessId: { kind: "ref", name: "BusinessId" } },
    required: ["businessId"],
  },
  GenerateGoodsMovementReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
      shopSku: { kind: "ref", name: "ShopSku" },
    },
    required: ["campaignId", "dateFrom", "dateTo"],
  },
  GenerateGoodsPricesReportRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      categoryIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 0 },
        nullable: true,
      },
      campaignId: { kind: "ref", name: "CampaignId" },
    },
    required: [],
  },
  GenerateGoodsRealizationReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      year: { kind: "ref", name: "Year" },
      month: { kind: "ref", name: "Month" },
    },
    required: ["campaignId", "year", "month"],
  },
  GenerateGoodsTurnoverRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      date: { kind: "string" },
    },
    required: ["campaignId"],
  },
  GenerateJewelryFiscalReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
    },
    required: ["campaignId", "dateFrom", "dateTo"],
  },
  GenerateKeyIndicatorsRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      campaignId: { kind: "ref", name: "CampaignId" },
      detalizationLevel: {
        kind: "ref",
        name: "KeyIndicatorsReportDetalizationLevelType",
      },
    },
    required: ["detalizationLevel"],
  },
  GenerateMarketingDetalizationRequest: {
    kind: "object",
    properties: {
      monthOfYear: { kind: "ref", name: "ClosureDocumentsMonthOfYearDTO" },
    },
    required: ["monthOfYear"],
  },
  GenerateMassOrderLabelsRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      orderIds: { kind: "array", items: { kind: "number", integer: true } },
      sortingType: { kind: "ref", name: "LabelsSortingType" },
    },
    required: ["businessId", "orderIds"],
  },
  GenerateReportDTO: {
    kind: "object",
    properties: {
      reportId: { kind: "string" },
      estimatedGenerationTime: { kind: "number", integer: true },
    },
    required: ["reportId", "estimatedGenerationTime"],
  },
  GenerateReportResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GenerateReportDTO" },
    },
    required: ["status"],
  },
  GenerateSalesGeographyRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
      categoryIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 0 },
        nullable: true,
      },
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
    },
    required: ["businessId", "dateFrom", "dateTo"],
  },
  GenerateShelfsStatisticsRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "string" },
      dateTo: { kind: "string" },
      attributionType: { kind: "ref", name: "StatisticsAttributionType" },
    },
    required: ["businessId", "attributionType", "dateFrom", "dateTo"],
  },
  GenerateShipmentListDocumentReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      shipmentId: { kind: "number", integer: true },
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
    },
    required: ["campaignId"],
  },
  GenerateShowsBoostRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
      attributionType: { kind: "ref", name: "StatisticsAttributionType" },
    },
    required: ["businessId", "dateFrom", "dateTo", "attributionType"],
  },
  GenerateShowsSalesReportRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      campaignId: { kind: "ref", name: "CampaignId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
      grouping: { kind: "ref", name: "ShowsSalesGroupingType" },
    },
    required: ["dateFrom", "dateTo", "grouping"],
  },
  GenerateStocksOnWarehousesReportRequest: {
    kind: "object",
    properties: {
      campaignId: { kind: "ref", name: "CampaignId" },
      businessId: { kind: "ref", name: "BusinessId" },
      warehouseIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
      reportDate: { kind: "string" },
      categoryIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 0 },
        nullable: true,
      },
      hasStocks: { kind: "boolean" },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: [],
  },
  GenerateStocksReportRequest: {
    kind: "object",
    properties: {
      categoryIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 1 },
        nullable: true,
      },
      hasStocks: { kind: "boolean" },
      partnerWarehouseIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
    },
    required: [],
  },
  GenerateUnitedMarketplaceServicesReportRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateTimeFrom: { kind: "string" },
      dateTimeTo: { kind: "string" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "string" },
      yearFrom: { kind: "ref", name: "Year" },
      monthFrom: { kind: "ref", name: "Month" },
      yearTo: { kind: "ref", name: "Year" },
      monthTo: { kind: "ref", name: "Month" },
      placementPrograms: {
        kind: "array",
        items: { kind: "ref", name: "PlacementType" },
        nullable: true,
      },
      inns: { kind: "array", items: { kind: "string" }, nullable: true },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: ["businessId"],
  },
  GenerateUnitedNettingReportRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateTimeFrom: { kind: "string" },
      dateTimeTo: { kind: "string" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "string" },
      bankOrderId: { kind: "number", integer: true },
      bankOrderDateTime: { kind: "string" },
      monthOfYear: { kind: "ref", name: "MonthOfYearDTO" },
      placementPrograms: {
        kind: "array",
        items: { kind: "ref", name: "PlacementType" },
        nullable: true,
      },
      inns: { kind: "array", items: { kind: "string" }, nullable: true },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
    },
    required: ["businessId"],
  },
  GenerateUnitedOrdersRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "string" },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
      promoId: { kind: "string" },
    },
    required: ["businessId", "dateFrom", "dateTo"],
  },
  GenerateUnitedReturnsRequest: {
    kind: "object",
    properties: {
      businessId: { kind: "ref", name: "BusinessId" },
      dateFrom: { kind: "ref", name: "PeriodDateFrom" },
      dateTo: { kind: "ref", name: "PeriodDateTo" },
      campaignIds: {
        kind: "array",
        items: { kind: "ref", name: "CampaignId" },
        nullable: true,
      },
      returnType: { kind: "ref", name: "ReturnType", nullable: true },
      returnStatusTypes: {
        kind: "array",
        items: { kind: "ref", name: "ReturnShipmentStatusType" },
        nullable: true,
      },
    },
    required: ["businessId", "dateFrom", "dateTo"],
  },
  GetReportInfoResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "ReportInfoDTO" },
    },
    required: ["status"],
  },
  KeyIndicatorsReportDetalizationLevelType: {
    kind: "string",
    enum: ["WEEK", "MONTH"],
  },
  LabelsSortingType: {
    kind: "string",
    enum: ["SORT_BY_GIVEN_ORDER", "SORT_BY_ORDER_CREATED_AT"],
  },
  Month: { kind: "number", integer: true, minimum: 1, maximum: 12 },
  MonthOfYearDTO: {
    kind: "object",
    properties: {
      year: { kind: "ref", name: "Year" },
      month: { kind: "ref", name: "Month" },
    },
    required: ["year", "month"],
  },
  PageFormatType: {
    kind: "string",
    enum: ["A9_HORIZONTALLY", "A9", "A7", "A4"],
  },
  PeriodDateFrom: { kind: "string" },
  PeriodDateTo: { kind: "string" },
  PlacementType: { kind: "string", enum: ["FBS", "FBY", "DBS", "LAAS"] },
  ReportFormatType: { kind: "string", enum: ["FILE", "CSV", "JSON"] },
  ReportInfoDTO: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ReportStatusType" },
      subStatus: { kind: "ref", name: "ReportSubStatusType" },
      generationRequestedAt: { kind: "string" },
      generationFinishedAt: { kind: "string" },
      file: { kind: "string" },
      estimatedGenerationTime: { kind: "number", integer: true },
    },
    required: ["status", "generationRequestedAt"],
  },
  ReportLanguageType: { kind: "string", enum: ["RU", "EN"] },
  ReportStatusType: {
    kind: "string",
    enum: ["PENDING", "PROCESSING", "FAILED", "DONE"],
  },
  ReportSubStatusType: {
    kind: "string",
    enum: ["NO_DATA", "TOO_LARGE", "RESOURCE_NOT_FOUND"],
  },
  ReturnShipmentStatusType: {
    kind: "string",
    enum: [
      "CREATED",
      "RECEIVED",
      "IN_TRANSIT",
      "READY_FOR_PICKUP",
      "PICKED",
      "LOST",
      "EXPIRED",
      "CANCELLED",
      "FULFILMENT_RECEIVED",
      "PREPARED_FOR_UTILIZATION",
      "NOT_IN_DEMAND",
      "UTILIZED",
      "READY_FOR_EXPROPRIATION",
      "RECEIVED_FOR_EXPROPRIATION",
      "UNKNOWN",
    ],
  },
  ReturnType: { kind: "string", enum: ["UNREDEEMED", "RETURN"] },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  ShowsSalesGroupingType: { kind: "string", enum: ["CATEGORIES", "OFFERS"] },
  SourceType: { kind: "string", enum: ["SELLER", "ADVERTISER"] },
  StatisticsAttributionType: { kind: "string", enum: ["CLICKS", "SHOWS"] },
  SupplyRequestId: { kind: "number", integer: true, minimum: 1 },
  Year: { kind: "number", integer: true },
};
