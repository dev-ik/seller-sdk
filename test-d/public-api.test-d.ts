import {
  type AddProductBarcodesResponse,
  type ArchiveProductsResponse,
  type ApproveConditionalCancellationRequest,
  type CancelFboPostingResponse,
  type CancelOrderResponse,
  type CheckOrderCancellationResponse,
  type CreateOrderResponse,
  type DeleteProductsResponse,
  type GenerateProductBarcodesResponse,
  Marketplace,
  OzonValues,
  SellerClient,
  type SellerSdkErrorDetails,
  toSellerSdkErrorDetails,
  type Wb,
  WbApiHost,
  WbClient,
  WbValues,
  type Ym,
  YmClient,
  YmValues,
  type GetAnalyticsStockOnWarehousesResponse,
  type GetAnalyticsStocksResponse,
  type GetAnalyticsStocksTurnoverResponse,
  type GetDescriptionCategoryAttributesResponse,
  type GetDescriptionCategoryAttributeValuesResponse,
  type GetDescriptionCategoryTreeResponse,
  type GetOzonLogisticsInfoResponse,
  type GetOrderCancellationStatusResponse,
  type GetRolesResponse,
  type GetSellerInfoResponse,
  type GetSupplyOrderActSummaryResponse,
  type GetSupplyOrderActProductsResponse,
  type GetProductPlacementZoneInfoResponse,
  type GetProductPicturesResponse,
  type GetProductAttributesResponse,
  type GetProductDescriptionResponse,
  type GetProductInfoListResponse,
  type GetProductSubscriptionCountsResponse,
  type GetProductStocksResponse,
  type GetProductStocksByWarehouseResponse,
  type GetProductStocksByWarehouseFbsResponse,
  type GetProductStocksByWarehouseFbsV2Response,
  type GetProductUploadQuotaResponse,
  type GetProductImportStatusResponse,
  type GetProductRatingBySkuResponse,
  type GetQuantProductsInfoResponse,
  type GetRelatedProductSkusResponse,
  type GetFbsRatingIndexInfoResponse,
  type GetFboPostingCancellationStatusResponse,
  type GetFboPostingMarksResponse,
  type GetFinanceAccrualByDayV1Response,
  type GetFinanceAccrualPostingsV1Response,
  type GetRatingHistoryResponse,
  type GetRatingSummaryResponse,
  type ListBrandCertificationsResponse,
  type ListConditionalCancellationsResponse,
  type ListCancelReasonsByOrderResponse,
  type ListCancelReasonsByPostingResponse,
  type ListCancelReasonsResponse,
  type ListFbsRatingIndexPostingsResponse,
  type ListFinanceAccrualTypesV1Response,
  type ListDigitalPostingsResponse,
  type ListDigitalPostingsV2Response,
  type ListOzonWarehousesResponse,
  type ListProductsResponse,
  type ListProductsWithWrongVolumeResponse,
  type ListQuantProductsResponse,
  type MarketplaceRegistry,
  type OzonCredentials,
  type SellerClientOptions,
  type SearchDescriptionCategoryAttributeValuesResponse,
  type RejectConditionalCancellationRequest,
  type UploadDigitalPostingCodesResponse,
  type ImportDigitalProductStocksResponse,
  type ImportProductPicturesResponse,
  type ImportProductsResponse,
  type ImportProductsBySkuResponse,
  type UpdateProductAttributesResponse,
  type UpdateProductOfferIdsResponse,
  type UpdateProductPricesResponse,
  type UpdateProductStocksResponse,
  type UnarchiveProductsResponse,
} from "../packages/seller-sdk/src/index.js";
import type {
  ActivatePromotionProductsResponse,
  AddProductsToPricingStrategyResponse,
  ApproveDiscountTasksResponse,
  CreatePricingStrategyResponse,
  CreateCarriagePassesResponse,
  CreateReturnPassesResponse,
  DeclineDiscountTasksResponse,
  DeletePricingStrategyResponse,
  DeleteProductsFromPricingStrategyResponse,
  DeactivatePromotionProductsResponse,
  GetDiscountedProductInfoResponse,
  GetProductMinPriceTimerStatusResponse,
  GetProductPricesResponse,
  GetPricingStrategyIdsByProductIdsResponse,
  GetPricingStrategyResponse,
  GetPricingStrategyProductInfoResponse,
  ListDiscountTasksResponse,
  ListPricingCompetitorsResponse,
  ListPricingStrategiesResponse,
  ListPricingStrategyProductsResponse,
  ListPassesResponse,
  ListPromotionCandidatesResponse,
  ListPromotionProductsResponse,
  ListPromotionsResponse,
  UpdateProductDiscountResponse,
  UpdatePricingStrategyResponse,
  UpdatePricingStrategyStatusResponse,
} from "../packages/seller-sdk/src/index.js";
import {
  OzonClient,
  type OzonResponseMetadata,
} from "../packages/ozon/src/index.js";
import type {
  ArchiveFbsWarehouseResponse,
  BindDeliveryPolygonV1Response,
  BindProductCertificateResponse,
  CreateDeliveryPolygonV1Response,
  CreateProductCertificateV1Response,
  DeleteProductCertificateResponse,
  GetProductCertificateInfoResponse,
  GetDeliveryMethodReturnSettingsResponse,
  GetFbsWarehouseOperationStatusResponse,
  GetWarehouseInvalidProductsResponse,
  ListCertificateAccordanceTypesV1Response,
  ListCertificateAccordanceTypesV2Response,
  ListCertificateProductStatusesResponse,
  ListCertificateProductsResponse,
  ListCertificateRejectionReasonsResponse,
  ListCertificateStatusesResponse,
  ListCertificateTypesResponse,
  ListCertificationCategoriesV1Response,
  ListCertificationCategoriesV2Response,
  ListDeliveryMethodsV1Response,
  ListDeliveryMethodsV2Response,
  ListProductCertificatesResponse,
  ListFboSupplyWarehousesResponse,
  ListSupplierAvailableWarehousesResponse,
  ListWarehousesV1Response,
  ListWarehousesV2Response,
  ListWarehousesWithInvalidProductsResponse,
  UnarchiveFbsWarehouseResponse,
  UnbindProductCertificateResponse,
  CountSupplyOrdersByStatusResponse,
  CreateSupplyOrderPassResponse,
  GetSupplyOrderBundleResponse,
  GetSupplyOrderPassStatusResponse,
  GetSupplyOrdersV3Response,
  GetSupplyOrderTimeslotStatusResponse,
  ListSupplyOrdersV3Response,
  ListSupplyOrderTimeslotsV1Response,
  ListSupplyOrderTimeslotsV2Response,
  UpdateSupplyOrderTimeslotResponse,
  CreateCrossdockSupplyDraftResponse,
  CreateDirectSupplyDraftResponse,
  CreateMultiClusterSupplyDraftResponse,
  GetFboPostingV2Response,
  GetSupplyOrderDetailsResponse,
  ListFboPostingCancelReasonsResponse,
  ListFboPostingsV2Response,
  ListFboPostingsV3Response,
  ListSupplyClustersV1Response,
  ListSupplyClustersV2Response,
  CreateSupplyCargoesResponse,
  CreateSupplyCargoLabelsResponse,
  DeleteSupplyCargoesResponse,
  GetSupplyCargoesCreateInfoResponse,
  GetSupplyCargoesDeleteStatusResponse,
  GetSupplyCargoesResponse,
  GetSupplyCargoesRulesResponse,
  GetSupplyCargoLabelsResponse,
  GetSupplyDraftInfoResponse,
  GetSupplyDraftTimeslotsResponse,
  CancelSupplyOrderResponse,
  CreateSupplyOrderFromDraftResponse,
  GetSupplyCargoLabelFileResponse,
  GetSupplyOrderCancelStatusResponse,
  GetSupplyOrderContentUpdateStatusResponse,
  GetSupplyOrderFromDraftStatusResponse,
  ListFboSellerWarehousesResponse,
  ShipFbsPostingV4Response,
  ShipFbsPostingPackageV4Response,
  CreateOrGetFbsPostingProductExemplarsV6Response,
  GetFbsPostingProductExemplarStatusV5Response,
  ValidateFbsPostingProductExemplarsV5Response,
  CreateFbsCarriageResponse,
  ApproveFbsCarriageResponse,
  SetFbsCarriagePostingsResponse,
  CancelFbsCarriageResponse,
  ListFbsCarriageDeliveriesV1Response,
  ListFbsCarriageDeliveriesV2Response,
  CreateFbsActResponse,
  ListAvailableFbsCarriagesResponse,
  GetFbsCarriageResponse,
  SplitFbsPostingResponse,
  ListFbsActPostingsResponse,
  GetFbsActContainerLabelsResponse,
  GetFbsActBarcodeResponse,
  GetFbsActBarcodeTextResponse,
  GetFbsDigitalActStatusResponse,
  GetFbsActPdfResponse,
  GetFbsCarriageDiscrepancyActResponse,
  ListFbsActsResponse,
  GetFbsDigitalActPdfResponse,
  GetFbsActStatusResponse,
  SplitTraceableFbsPostingResponse,
  GetFbsTraceableAttributesResponse,
  GetFbsCarriageEttnStatusResponse,
  ListFbsAssemblyCarriagePostingsResponse,
  UpdateSupplyOrderContentResponse,
  ValidateSupplyOrderContentResponse,
} from "../packages/seller-sdk/src/index.js";

const credentials: OzonCredentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

const literalOptions: SellerClientOptions = {
  marketplace: "ozon",
  credentials,
};

new SellerClient(literalOptions);
new SellerClient({ marketplace: Marketplace.Ozon, credentials });
new SellerClient({
  marketplace: Marketplace.Ozon,
  credentials,
  config: { timeoutMs: 15_000, maxRetries: 1 },
});
const ozon = new OzonClient(credentials);
const configuredOzon = new OzonClient(credentials, {
  deadlineMs: 30_000,
  maxRetries: 1,
  onResponse: (metadata: OzonResponseMetadata) => void metadata.requestId,
});
void configuredOzon;
const rolesResult: Promise<GetRolesResponse> = ozon.access.getRoles();
const warehouseResult: Promise<ListWarehousesV2Response> =
  ozon.warehouses.listWarehouses({ limit: 100 });
void warehouseResult;
ozon.finance.listFinanceTransactions({
  filter: {
    date: {
      from: "2026-08-01T00:00:00Z",
      to: "2026-08-07T00:00:00Z",
    },
    transaction_type: OzonValues.FinanceTransactionType.All,
  },
  page: 1,
  page_size: 100,
});
const rawResult: Promise<{
  readonly data: { readonly custom: boolean };
  readonly lastResponse: OzonResponseMetadata;
}> = ozon.rawRequest<{ readonly custom: boolean }>("GET", "/v1/custom");
void rawResult;
const domainRolesResult: Promise<GetRolesResponse> = ozon.access.getRoles();
const domainProductsResult: Promise<ListProductsResponse> = ozon.products.list({
  filter: { visibility: OzonValues.ProductListVisibility.All },
  limit: 100,
});
// @ts-expect-error Product list requires both filter and limit.
ozon.products.list({});
// @ts-expect-error Product list requires a filter object; use {} to list all products.
ozon.products.list({ limit: 100 });
// @ts-expect-error Product list requires a page limit.
ozon.products.list({ filter: {} });
ozon.products.list({
  // @ts-expect-error `since` belongs to posting date filters, not ProductAPI_GetProductList.
  filter: { since: "2026-08-01T00:00:00Z" },
  limit: 100,
});
const domainProductPricesResult: Promise<GetProductPricesResponse> =
  ozon.products.prices.get({ filter: { visibility: "ALL" }, limit: 100 });
const domainProductStocksResult: Promise<GetProductStocksResponse> =
  ozon.products.stocks.get({ filter: { visibility: "ALL" }, limit: 100 });
const domainFbsPostingsResult = ozon.postings.fbs.list({
  filter: {
    since: "2026-08-01T00:00:00Z",
    to: "2026-08-15T00:00:00Z",
  },
  limit: 100,
});
const domainFinanceTransactionsResult = ozon.finance.listFinanceTransactionsV3({
  filter: {
    date: { from: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
    transaction_type: OzonValues.FinanceTransactionType.All,
  },
  page: 1,
  page_size: 100,
});
const financeAccrualsByDayResult: Promise<GetFinanceAccrualByDayV1Response> =
  ozon.finance.accruals.byDay({
    date: "2026-08-15",
    last_id: "",
  });
const financeAccrualsByPostingsResult: Promise<GetFinanceAccrualPostingsV1Response> =
  ozon.finance.accruals.byPostings({ posting_numbers: ["12345-0001-1"] });
const financeAccrualTypesResult: Promise<ListFinanceAccrualTypesV1Response> =
  ozon.finance.accruals.types();
// @ts-expect-error Operations must be called through a marketplace domain.
ozon.listProducts({ limit: 100 });
const logisticsResult: Promise<GetOzonLogisticsInfoResponse> =
  ozon.seller.getOzonLogisticsInfo();
const sellerInfoResult: Promise<GetSellerInfoResponse> =
  ozon.seller.getSellerInfo();
const categoryTreeResult: Promise<GetDescriptionCategoryTreeResponse> =
  ozon.categories.getDescriptionCategoryTree({
    language: OzonValues.Language.Ru,
  });
const categoryAttributesResult: Promise<GetDescriptionCategoryAttributesResponse> =
  ozon.categories.getDescriptionCategoryAttributes({
    description_category_id: 200000001,
    type_id: 100001,
  });
const categoryAttributeValuesResult: Promise<GetDescriptionCategoryAttributeValuesResponse> =
  ozon.categories.getDescriptionCategoryAttributeValues({
    attribute_id: 85,
    description_category_id: 200000001,
    limit: 100,
    type_id: 100001,
  });
const searchedAttributeValuesResult: Promise<SearchDescriptionCategoryAttributeValuesResponse> =
  ozon.categories.searchDescriptionCategoryAttributeValues({
    attribute_id: 85,
    description_category_id: 200000001,
    limit: 100,
    type_id: 100001,
    value: "test",
  });
const productPlacementResult: Promise<GetProductPlacementZoneInfoResponse> =
  ozon.products.getProductPlacementZoneInfo({ skus: ["100000001"] });
const brandCertificationsResult: Promise<ListBrandCertificationsResponse> =
  ozon.brands.listBrandCertifications({ page: 1, page_size: 100 });
const ozonWarehousesResult: Promise<ListOzonWarehousesResponse> =
  ozon.warehouses.listOzonWarehouses({ warehouse_types: ["FULL_FILLMENT"] });
const ratingSummaryResult: Promise<GetRatingSummaryResponse> =
  ozon.ratings.getRatingSummary();
const ratingHistoryResult: Promise<GetRatingHistoryResponse> =
  ozon.ratings.getRatingHistory({
    date_from: "2026-08-01T00:00:00Z",
    date_to: "2026-08-14T23:59:59Z",
    ratings: ["rating_test"],
  });
const fbsRatingIndexResult: Promise<GetFbsRatingIndexInfoResponse> =
  ozon.ratings.getFbsRatingIndexInfo();
const fbsRatingIndexPostingsResult: Promise<ListFbsRatingIndexPostingsResponse> =
  ozon.ratings.listFbsRatingIndexPostings({
    filter: {
      date_from: "2026-08-01T00:00:00Z",
      date_to: "2026-08-14T23:59:59Z",
    },
    limit: 100,
  });
const cancelReasonsResult: Promise<ListCancelReasonsResponse> =
  ozon.cancellations.listCancelReasons();
const orderCancelReasonsResult: Promise<ListCancelReasonsByOrderResponse> =
  ozon.cancellations.listCancelReasonsByOrder({
    order_number: "TEST-ORDER-001",
  });
const postingCancelReasonsResult: Promise<ListCancelReasonsByPostingResponse> =
  ozon.cancellations.listCancelReasonsByPosting({
    posting_number: "TEST-POSTING-001",
  });
const legacyAnalyticsStocksResult: Promise<GetAnalyticsStockOnWarehousesResponse> =
  ozon.analytics.getAnalyticsStockOnWarehouses({ limit: 100 });
const analyticsStocksTurnoverResult: Promise<GetAnalyticsStocksTurnoverResponse> =
  ozon.analytics.getAnalyticsStocksTurnover({ sku: ["100000001"] });
const analyticsStocksResult: Promise<GetAnalyticsStocksResponse> =
  ozon.analytics.getAnalyticsStocks({
    cluster_ids: ["1001"],
    skus: ["100000001"],
  });
const addedBarcodesResult: Promise<AddProductBarcodesResponse> =
  ozon.barcodes.addProductBarcodes({
    barcodes: [{ barcode: "TEST-BARCODE-001", sku: 100000001 }],
  });
const generatedBarcodesResult: Promise<GenerateProductBarcodesResponse> =
  ozon.barcodes.generateProductBarcodes({ product_ids: ["100000002"] });
const quantProductsResult: Promise<ListQuantProductsResponse> =
  ozon.products.listQuantProducts({ limit: 100, visibility: "ALL" });
const quantProductsInfoResult: Promise<GetQuantProductsInfoResponse> =
  ozon.products.getQuantProductsInfo({ quant_code: ["TEST-QUANT-001"] });
const conditionalCancellationsResult: Promise<ListConditionalCancellationsResponse> =
  ozon.cancellations.listConditionalCancellations({
    filters: { cancellation_initiator: ["CLIENT"], state: "ON_APPROVAL" },
    limit: 100,
  });
const approveCancellationInput: ApproveConditionalCancellationRequest = {
  cancellation_id: 700000001,
};
const approvedCancellationResult: Promise<void> =
  ozon.cancellations.approveConditionalCancellation(approveCancellationInput);
const rejectCancellationInput: RejectConditionalCancellationRequest = {
  cancellation_id: 700000002,
  comment: "Тестовая причина",
};
const rejectedCancellationResult: Promise<void> =
  ozon.cancellations.rejectConditionalCancellation(rejectCancellationInput);
const digitalPostingsResult: Promise<ListDigitalPostingsResponse> =
  ozon.digital.listDigitalPostings({ limit: 100, offset: 0 });
const digitalPostingsV2Result: Promise<ListDigitalPostingsV2Response> =
  ozon.digital.listDigitalPostingsV2({
    cursor: "TEST-CURSOR-001",
    filter: { posting_numbers: ["TEST-POSTING-002"] },
    limit: 100,
    sort_dir: "ASC",
  });
const uploadedDigitalCodesResult: Promise<UploadDigitalPostingCodesResponse> =
  ozon.digital.uploadDigitalPostingCodes({
    exemplars_by_sku: [
      {
        exemplar_keys: ["TEST-CODE-001"],
        exemplar_qty: 1,
        not_available_exemplar_qty: 0,
        sku: 6605735423,
      },
    ],
    posting_number: "TEST-POSTING-001",
  });
const importedDigitalStocksResult: Promise<ImportDigitalProductStocksResponse> =
  ozon.digital.importDigitalProductStocks({
    stocks: [{ offer_id: "TEST-OFFER-001", stock: 2 }],
  });
const importedProductsResult: Promise<ImportProductsResponse> =
  ozon.products.importProducts({
    items: [
      {
        description_category_id: 100000001,
        depth: 100,
        dimension_unit: "mm",
        height: 200,
        offer_id: "TEST-OFFER-002",
        price: "1000.00",
        type_id: 100001,
        weight: 500,
        weight_unit: "g",
        width: 150,
      },
    ],
  });
const productImportStatusResult: Promise<GetProductImportStatusResponse> =
  ozon.products.getProductImportStatus({ task_id: 400000001 });
const importedProductsBySkuResult: Promise<ImportProductsBySkuResponse> =
  ozon.products.importProductsBySku({
    items: [{ offer_id: "TEST-OFFER-003", sku: 500000001 }],
  });
const updatedProductAttributesResult: Promise<UpdateProductAttributesResponse> =
  ozon.products.updateProductAttributes({
    items: [
      {
        attributes: [
          {
            id: 85,
            values: [{ dictionary_value_id: 500000001 }],
          },
        ],
        offer_id: "TEST-OFFER-001",
      },
    ],
  });
const importedProductPicturesResult: Promise<ImportProductPicturesResponse> =
  ozon.products.importProductPictures({
    images: ["https://example.invalid/product-main.png"],
    product_id: 500000001,
  });
const productPicturesResult: Promise<GetProductPicturesResponse> =
  ozon.products.getProductPictures({ product_id: ["500000001"] });
const updatedProductPricesResult: Promise<UpdateProductPricesResponse> =
  ozon.products.updateProductPrices({
    prices: [
      {
        offer_id: "TEST-OFFER-PRICE-001",
        old_price: "1600.00",
        price: "1448.00",
      },
    ],
  });
const updatedProductMinPriceTimerResult: Promise<void> =
  ozon.products.updateProductMinPriceTimer({ product_ids: ["500000001"] });
const productMinPriceTimerStatusResult: Promise<GetProductMinPriceTimerStatusResponse> =
  ozon.products.getProductMinPriceTimerStatus({ product_ids: ["500000001"] });
const productPricesResult: Promise<GetProductPricesResponse> =
  ozon.products.getProductPrices({ filter: { visibility: "ALL" }, limit: 100 });
const discountedProductInfoResult: Promise<GetDiscountedProductInfoResponse> =
  ozon.products.getDiscountedProductInfo({ discounted_skus: ["635548518"] });
const updatedProductDiscountResult: Promise<UpdateProductDiscountResponse> =
  ozon.products.updateProductDiscount({ discount: 15, product_id: 500000001 });
const promotionsResult: Promise<ListPromotionsResponse> =
  ozon.promotions.listPromotions();
const promotionCandidatesResult: Promise<ListPromotionCandidatesResponse> =
  ozon.promotions.listPromotionCandidates({ action_id: 71342, limit: 100 });
const promotionProductsResult: Promise<ListPromotionProductsResponse> =
  ozon.promotions.listPromotionProducts({ action_id: 71342, limit: 100 });
const activatedPromotionProductsResult: Promise<ActivatePromotionProductsResponse> =
  ozon.promotions.activatePromotionProducts({
    action_id: 71342,
    products: [{ action_price: 100, product_id: 1389 }],
  });
const deactivatedPromotionProductsResult: Promise<DeactivatePromotionProductsResponse> =
  ozon.promotions.deactivatePromotionProducts({
    action_id: 71342,
    product_ids: [1389],
  });
const discountTasksResult: Promise<ListDiscountTasksResponse> =
  ozon.promotions.listDiscountTasks({ status: "NEW", page: 1, limit: 50 });
const approvedDiscountTasksResult: Promise<ApproveDiscountTasksResponse> =
  ozon.promotions.approveDiscountTasks({
    tasks: [
      {
        id: 1001,
        approved_price: 1450,
        approved_quantity_min: 1,
        approved_quantity_max: 3,
      },
    ],
  });
const declinedDiscountTasksResult: Promise<DeclineDiscountTasksResponse> =
  ozon.promotions.declineDiscountTasks({ tasks: [{ id: 1002 }] });
const pricingCompetitorsResult: Promise<ListPricingCompetitorsResponse> =
  ozon.pricingStrategies.listPricingCompetitors({ page: 1, limit: 100 });
const pricingStrategiesResult: Promise<ListPricingStrategiesResponse> =
  ozon.pricingStrategies.listPricingStrategies({ page: 1, limit: 100 });
const createdPricingStrategyResult: Promise<CreatePricingStrategyResponse> =
  ozon.pricingStrategies.createPricingStrategy({
    competitors: [{ coefficient: 0.95, competitor_id: 101 }],
    strategy_name: "Synthetic strategy",
  });
const pricingStrategyResult: Promise<GetPricingStrategyResponse> =
  ozon.pricingStrategies.getPricingStrategy({
    strategy_id: "strategy-test-001",
  });
const updatedPricingStrategyResult: Promise<UpdatePricingStrategyResponse> =
  ozon.pricingStrategies.updatePricingStrategy({
    competitors: [{ coefficient: 0.95, competitor_id: 101 }],
    strategy_id: "strategy-test-001",
    strategy_name: "Updated synthetic strategy",
  });
const addedPricingStrategyProductsResult: Promise<AddProductsToPricingStrategyResponse> =
  ozon.pricingStrategies.addProductsToPricingStrategy({
    product_id: ["500000001"],
    strategy_id: "strategy-test-001",
  });
const productPricingStrategyIdsResult: Promise<GetPricingStrategyIdsByProductIdsResponse> =
  ozon.pricingStrategies.getPricingStrategyIdsByProductIds({
    product_id: ["500000001"],
  });
const pricingStrategyProductsResult: Promise<ListPricingStrategyProductsResponse> =
  ozon.pricingStrategies.listPricingStrategyProducts({
    strategy_id: "strategy-test-001",
  });
const pricingStrategyProductInfoResult: Promise<GetPricingStrategyProductInfoResponse> =
  ozon.pricingStrategies.getPricingStrategyProductInfo({
    product_id: 500000001,
  });
const deletedPricingStrategyProductsResult: Promise<DeleteProductsFromPricingStrategyResponse> =
  ozon.pricingStrategies.deleteProductsFromPricingStrategy({
    product_id: ["500000001"],
  });
const pricingStrategyStatusResult: Promise<UpdatePricingStrategyStatusResponse> =
  ozon.pricingStrategies.updatePricingStrategyStatus({
    enabled: false,
    strategy_id: "strategy-test-001",
  });
const deletedPricingStrategyResult: Promise<DeletePricingStrategyResponse> =
  ozon.pricingStrategies.deletePricingStrategy({
    strategy_id: "strategy-test-001",
  });
const passesResult: Promise<ListPassesResponse> = ozon.passes.listPasses({
  limit: 100,
});
const carriagePassesResult: Promise<CreateCarriagePassesResponse> =
  ozon.passes.createCarriagePasses({
    arrival_passes: [
      {
        driver_name: "Test Driver",
        driver_phone: "+00000000000",
        vehicle_license_plate: "TEST-PLATE",
        vehicle_model: "Test Vehicle",
      },
    ],
    carriage_id: 600000001,
  });
const updatedCarriagePassesResult: Promise<void> =
  ozon.passes.updateCarriagePasses({
    arrival_passes: [
      {
        driver_name: "Test Driver",
        driver_phone: "+00000000000",
        id: 700000001,
        vehicle_license_plate: "TEST-PLATE",
        vehicle_model: "Test Vehicle",
      },
    ],
    carriage_id: 600000001,
  });
const deletedCarriagePassesResult: Promise<void> =
  ozon.passes.deleteCarriagePasses({
    arrival_pass_ids: ["700000001"],
    carriage_id: 600000001,
  });
const returnPassesResult: Promise<CreateReturnPassesResponse> =
  ozon.passes.createReturnPasses({
    arrival_passes: [
      {
        arrival_time: "2026-08-20T10:00:00Z",
        driver_name: "Test Driver",
        driver_phone: "+00000000000",
        dropoff_point_id: 800000001,
        vehicle_license_plate: "TEST-PLATE",
        vehicle_model: "Test Vehicle",
        warehouse_id: 900000001,
      },
    ],
  });
const updatedReturnPassesResult: Promise<void> = ozon.passes.updateReturnPasses(
  {
    arrival_passes: [
      {
        arrival_pass_id: 700000002,
        arrival_time: "2026-08-20T11:00:00Z",
        driver_name: "Test Driver",
        driver_phone: "+00000000000",
        vehicle_license_plate: "TEST-PLATE",
        vehicle_model: "Test Vehicle",
      },
    ],
  },
);
const deletedReturnPassesResult: Promise<void> = ozon.passes.deleteReturnPasses(
  {
    arrival_pass_ids: ["700000002"],
  },
);
const certificateAccordanceV1Result: Promise<ListCertificateAccordanceTypesV1Response> =
  ozon.products.listCertificateAccordanceTypesV1();
const certificateAccordanceV2Result: Promise<ListCertificateAccordanceTypesV2Response> =
  ozon.products.listCertificateAccordanceTypesV2();
const certificateTypesResult: Promise<ListCertificateTypesResponse> =
  ozon.products.listCertificateTypes();
const certificationCategoriesV2Result: Promise<ListCertificationCategoriesV2Response> =
  ozon.products.listCertificationCategoriesV2({ page: 1, page_size: 100 });
const certificationCategoriesV1Result: Promise<ListCertificationCategoriesV1Response> =
  ozon.products.listCertificationCategoriesV1({ page: 1, page_size: 100 });
const createdCertificateResult: Promise<CreateProductCertificateV1Response> =
  ozon.products.createProductCertificateV1({
    files: [{ data: new Blob(["synthetic"]) }],
    name: "Synthetic",
    number: "TEST-001",
    type_code: "declaration",
    issue_date: "2026-08-01T00:00:00Z",
  });
const boundCertificateResult: Promise<BindProductCertificateResponse> =
  ozon.products.bindProductCertificate({
    certificate_id: 50058,
    skus: ["2901231"],
  });
const deletedCertificateResult: Promise<DeleteProductCertificateResponse> =
  ozon.products.deleteProductCertificate({ certificate_id: 50058 });
const certificateInfoResult: Promise<GetProductCertificateInfoResponse> =
  ozon.products.getProductCertificateInfo({ certificate_number: "TEST-001" });
const certificatesResult: Promise<ListProductCertificatesResponse> =
  ozon.products.listProductCertificates({ page: 1, page_size: 100 });
const certificateProductStatusesResult: Promise<ListCertificateProductStatusesResponse> =
  ozon.products.listCertificateProductStatuses();
const certificateProductsResult: Promise<ListCertificateProductsResponse> =
  ozon.products.listCertificateProducts({ certificate_id: 50058, limit: 100 });
const unboundCertificateResult: Promise<UnbindProductCertificateResponse> =
  ozon.products.unbindProductCertificate({
    certificate_id: 50058,
    skus: ["2901231"],
  });
const certificateRejectionReasonsResult: Promise<ListCertificateRejectionReasonsResponse> =
  ozon.products.listCertificateRejectionReasons();
const certificateStatusesResult: Promise<ListCertificateStatusesResponse> =
  ozon.products.listCertificateStatuses();
const warehousesV1Result: Promise<ListWarehousesV1Response> =
  ozon.warehouses.listWarehousesV1({ limit: 100 });
const deliveryMethodsV1Result: Promise<ListDeliveryMethodsV1Response> =
  ozon.deliveryMethods.listDeliveryMethodsV1({ limit: 100 });
const deliveryMethodsV2Result: Promise<ListDeliveryMethodsV2Response> =
  ozon.deliveryMethods.listDeliveryMethodsV2({ limit: 100, sort_dir: "ASC" });
const deliveryMethodReturnSettingsResult: Promise<GetDeliveryMethodReturnSettingsResponse> =
  ozon.deliveryMethods.getDeliveryMethodReturnSettings({
    delivery_method_id: 50058,
  });
const warehousesV2Result: Promise<ListWarehousesV2Response> =
  ozon.warehouses.listWarehousesV2({ limit: 100 });
const warehouseOperationStatusResult: Promise<GetFbsWarehouseOperationStatusResponse> =
  ozon.warehouses.getFbsWarehouseOperationStatus({
    operation_id: "test-operation",
  });
const archivedFbsWarehouseResult: Promise<ArchiveFbsWarehouseResponse> =
  ozon.warehouses.archiveFbsWarehouse({
    warehouse_id: 100,
    reason: "Synthetic reason",
  });
const unarchivedFbsWarehouseResult: Promise<UnarchiveFbsWarehouseResponse> =
  ozon.warehouses.unarchiveFbsWarehouse({ warehouse_id: 100 });
const warehouseInvalidProductsResult: Promise<GetWarehouseInvalidProductsResponse> =
  ozon.warehouses.getWarehouseInvalidProducts({ warehouse_id: 100 });
const warehousesWithInvalidProductsResult: Promise<ListWarehousesWithInvalidProductsResponse> =
  ozon.warehouses.listWarehousesWithInvalidProducts();
const createdDeliveryPolygonResult: Promise<CreateDeliveryPolygonV1Response> =
  ozon.polygons.createDeliveryPolygonV1({
    coordinates: "[[[55,37],[56,38],[55,39]]]",
  });
const boundDeliveryPolygonResult: Promise<BindDeliveryPolygonV1Response> =
  ozon.polygons.bindDeliveryPolygonV1({
    delivery_method_id: 10,
    polygons: [{ polygon_id: 20, time: 30 }],
    warehouse_location: { lat: "55", lon: "37" },
  });
const supplierWarehousesResult: Promise<ListSupplierAvailableWarehousesResponse> =
  ozon.suppliers.listSupplierAvailableWarehouses();
const fboSupplyWarehousesResult: Promise<ListFboSupplyWarehousesResponse> =
  ozon.warehouses.listFboSupplyWarehouses({
    filter_by_supply_type: ["CREATE_TYPE_CROSSDOCK"],
    search: "Test",
  });
const listedProductsResult: Promise<ListProductsResponse> =
  ozon.products.listProducts({
    filter: { offer_id: ["TEST-OFFER-001"], visibility: "ALL" },
    limit: 100,
  });
const productInfoListResult: Promise<GetProductInfoListResponse> =
  ozon.products.getProductInfoList({ offer_id: ["TEST-OFFER-001"] });
const productAttributesResult: Promise<GetProductAttributesResponse> =
  ozon.products.getProductAttributes({
    filter: { sku: ["600000001"], visibility: "ALL" },
    limit: 100,
  });
const productDescriptionResult: Promise<GetProductDescriptionResponse> =
  ozon.products.getProductDescription({ offer_id: "TEST-OFFER-001" });
const productsWithWrongVolumeResult: Promise<ListProductsWithWrongVolumeResponse> =
  ozon.products.listProductsWithWrongVolume({ limit: 1000 });
const updatedProductStocksResult: Promise<UpdateProductStocksResponse> =
  ozon.products.updateProductStocks({
    stocks: [
      {
        offer_id: "TEST-OFFER-STOCK-001",
        stock: 100,
        warehouse_id: 700000001,
      },
    ],
  });
const productStocksResult: Promise<GetProductStocksResponse> =
  ozon.products.getProductStocks({ filter: { visibility: "ALL" }, limit: 100 });
const warehouseProductStocksResult: Promise<GetProductStocksByWarehouseResponse> =
  ozon.products.getProductStocksByWarehouse({
    limit: 1000,
    warehouse_id: 700000001,
  });
const fbsWarehouseProductStocksResult: Promise<GetProductStocksByWarehouseFbsResponse> =
  ozon.products.getProductStocksByWarehouseFbs({ sku: ["600000001"] });
const fbsWarehouseProductStocksV2Result: Promise<GetProductStocksByWarehouseFbsV2Response> =
  ozon.products.getProductStocksByWarehouseFbsV2({
    limit: 1000,
    sku: ["600000001"],
  });
const productSubscriptionCountsResult: Promise<GetProductSubscriptionCountsResponse> =
  ozon.products.getProductSubscriptionCounts({ skus: ["600000001"] });
const relatedProductSkusResult: Promise<GetRelatedProductSkusResponse> =
  ozon.products.getRelatedProductSkus({ sku: ["600000001"] });
const productUploadQuotaResult: Promise<GetProductUploadQuotaResponse> =
  ozon.products.getProductUploadQuota();
const archivedProductsResult: Promise<ArchiveProductsResponse> =
  ozon.products.archiveProducts({ product_id: [500000001] });
const unarchivedProductsResult: Promise<UnarchiveProductsResponse> =
  ozon.products.unarchiveProducts({ product_id: [500000001] });
const deletedProductsResult: Promise<DeleteProductsResponse> =
  ozon.products.deleteProducts({
    products: [{ offer_id: "TEST-OFFER-DELETABLE" }],
  });
const updatedProductOfferIdsResult: Promise<UpdateProductOfferIdsResponse> =
  ozon.products.updateProductOfferIds({
    update_offer_id: [
      {
        offer_id: "TEST-OFFER-OLD",
        new_offer_id: "TEST-OFFER-NEW",
      },
    ],
  });
const productRatingResult: Promise<GetProductRatingBySkuResponse> =
  ozon.products.getProductRatingBySku({ skus: ["600000001"] });
const cancelledFboPostingResult: Promise<CancelFboPostingResponse> =
  ozon.postings.cancelFboPosting({
    posting_number: "TEST-POSTING-003",
    reason_id: 101,
  });
const fboCancellationStatusResult: Promise<GetFboPostingCancellationStatusResponse> =
  ozon.postings.getFboPostingCancellationStatus({
    posting_number: "TEST-POSTING-003",
  });
const fboPostingMarksResult: Promise<GetFboPostingMarksResponse> =
  ozon.postings.getFboPostingMarks({ posting_numbers: ["TEST-POSTING-003"] });
const orderCancellationCheckResult: Promise<CheckOrderCancellationResponse> =
  ozon.orders.checkOrderCancellation({ order_number: "TEST-ORDER-004" });
const orderCancellationResult: Promise<CancelOrderResponse> =
  ozon.orders.cancelOrder({
    order_number: "TEST-ORDER-004",
    reason_id: 101,
  });
const orderCancellationStatusResult: Promise<GetOrderCancellationStatusResponse> =
  ozon.orders.getOrderCancellationStatus({ order_number: "TEST-ORDER-004" });
const orderCreationResult: Promise<CreateOrderResponse> =
  ozon.orders.createOrder({
    buyer: { first_name: "TEST", last_name: "BUYER", phone: "+00000000000" },
    recipient: {
      recipient_first_name: "TEST",
      recipient_last_name: "RECIPIENT",
      recipient_phone: "+00000000000",
    },
    delivery: { pick_up: { map_point_id: 100000001 } },
    delivery_schema: "FBO",
    splits: [],
  });
const supplyOrderActSummaryResult: Promise<GetSupplyOrderActSummaryResponse> =
  ozon.supplyOrders.getSupplyOrderActSummary({ order_id: 100000001 });
const supplyOrderActProductsResult: Promise<GetSupplyOrderActProductsResponse> =
  ozon.supplyOrders.getSupplyOrderActProducts({ supply_id: 100000001 });
const supplyOrderStatusCountersResult: Promise<CountSupplyOrdersByStatusResponse> =
  ozon.supplyOrders.countSupplyOrdersByStatus();
const supplyOrderBundleResult: Promise<GetSupplyOrderBundleResponse> =
  ozon.supplyOrders.getSupplyOrderBundle({
    bundle_ids: ["test-bundle"],
    limit: 100,
  });
const supplyOrdersV3Result: Promise<ListSupplyOrdersV3Response> =
  ozon.supplyOrders.listSupplyOrdersV3({
    filter: { states: ["DATA_FILLING"] },
    limit: 100,
    sort_by: "ORDER_CREATION",
  });
const supplyOrderV3Result: Promise<GetSupplyOrdersV3Response> =
  ozon.supplyOrders.getSupplyOrdersV3({ order_ids: ["100000001"] });
const supplyOrderTimeslotsV1Result: Promise<ListSupplyOrderTimeslotsV1Response> =
  ozon.supplyOrders.listSupplyOrderTimeslotsV1({ supply_order_id: 100000001 });
const supplyOrderTimeslotsV2Result: Promise<ListSupplyOrderTimeslotsV2Response> =
  ozon.supplyOrders.listSupplyOrderTimeslotsV2({ order_id: 100000001 });
const supplyOrderTimeslotUpdateResult: Promise<UpdateSupplyOrderTimeslotResponse> =
  ozon.supplyOrders.updateSupplyOrderTimeslot({
    supply_order_id: 100000001,
    timeslot: {
      from: "2026-08-20T10:00:00Z",
      to: "2026-08-20T11:00:00Z",
    },
  });
const supplyOrderTimeslotStatusResult: Promise<GetSupplyOrderTimeslotStatusResponse> =
  ozon.supplyOrders.getSupplyOrderTimeslotStatus({
    operation_id: "test-operation",
  });
const supplyOrderPassCreateResult: Promise<CreateSupplyOrderPassResponse> =
  ozon.supplyOrders.createSupplyOrderPass({
    supply_order_id: 100000001,
    vehicle: {
      driver_name: "Synthetic Driver",
      driver_phone: "+70000000000",
      vehicle_model: "Synthetic Model",
      vehicle_number: "TEST-001",
    },
  });
const supplyOrderPassStatusResult: Promise<GetSupplyOrderPassStatusResponse> =
  ozon.supplyOrders.getSupplyOrderPassStatus({
    operation_id: "test-operation",
  });
const fboPostingsV2Result: Promise<ListFboPostingsV2Response> =
  ozon.postings.listFboPostingsV2({
    filter: { since: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
    limit: 100,
  });
const fboPostingsV3Result: Promise<ListFboPostingsV3Response> =
  ozon.postings.listFboPostingsV3({ limit: 100 });
const fboPostingV2Result: Promise<GetFboPostingV2Response> =
  ozon.postings.getFboPostingV2({ posting_number: "TEST-POSTING-001" });
const fboPostingCancelReasonsResult: Promise<ListFboPostingCancelReasonsResponse> =
  ozon.postings.listFboPostingCancelReasons();
const supplyOrderDetailsResult: Promise<GetSupplyOrderDetailsResponse> =
  ozon.supplyOrders.getSupplyOrderDetails({ order_id: 100000001 });
const supplyClustersV1Result: Promise<ListSupplyClustersV1Response> =
  ozon.supplyDrafts.listSupplyClustersV1({ cluster_type: "CLUSTER_TYPE_OZON" });
const supplyClustersV2Result: Promise<ListSupplyClustersV2Response> =
  ozon.supplyDrafts.listSupplyClustersV2();
const testClusterInfo = {
  items: [{ quantity: 1, sku: 100000001 }],
  macrolocal_cluster_id: 200000001,
};
const crossdockSupplyDraftResult: Promise<CreateCrossdockSupplyDraftResponse> =
  ozon.supplyDrafts.createCrossdockSupplyDraft({
    cluster_info: testClusterInfo,
    deletion_sku_mode: "PARTIAL",
    delivery_info: { type: "DROPOFF" },
  });
const directSupplyDraftResult: Promise<CreateDirectSupplyDraftResponse> =
  ozon.supplyDrafts.createDirectSupplyDraft({
    cluster_info: testClusterInfo,
    deletion_sku_mode: "FULL",
  });
const multiClusterSupplyDraftResult: Promise<CreateMultiClusterSupplyDraftResponse> =
  ozon.supplyDrafts.createMultiClusterSupplyDraft({
    clusters_info: [testClusterInfo],
    deletion_sku_mode: "PARTIAL",
    delivery_info: { type: "DROPOFF" },
  });
const supplyDraftInfoResult: Promise<GetSupplyDraftInfoResponse> =
  ozon.supplyDrafts.getSupplyDraftInfo({ draft_id: 1 });
const supplyDraftTimeslotsResult: Promise<GetSupplyDraftTimeslotsResponse> =
  ozon.supplyDrafts.getSupplyDraftTimeslots({
    date_from: "2026-08-20",
    date_to: "2026-08-21",
    draft_id: 1,
    supply_type: "DIRECT",
    selected_cluster_warehouses: [],
  });
const supplyCargoesResult: Promise<GetSupplyCargoesResponse> =
  ozon.supplyDrafts.getSupplyCargoes({ supply_ids: ["1"] });
const createdSupplyCargoesResult: Promise<CreateSupplyCargoesResponse> =
  ozon.supplyDrafts.createSupplyCargoes({
    cargoes: [{ key: "test", value: { type: "BOX" } }],
    supply_id: 1,
  });
const supplyCargoesCreateInfoResult: Promise<GetSupplyCargoesCreateInfoResponse> =
  ozon.supplyDrafts.getSupplyCargoesCreateInfo({ operation_id: "test" });
const deletedSupplyCargoesResult: Promise<DeleteSupplyCargoesResponse> =
  ozon.supplyDrafts.deleteSupplyCargoes({ cargo_ids: ["1"], supply_id: 1 });
const supplyCargoesDeleteStatusResult: Promise<GetSupplyCargoesDeleteStatusResponse> =
  ozon.supplyDrafts.getSupplyCargoesDeleteStatus({ operation_id: "test" });
const supplyCargoesRulesResult: Promise<GetSupplyCargoesRulesResponse> =
  ozon.supplyDrafts.getSupplyCargoesRules({ supply_ids: ["1"] });
const createdSupplyCargoLabelsResult: Promise<CreateSupplyCargoLabelsResponse> =
  ozon.supplyDrafts.createSupplyCargoLabels({ supply_id: 1 });
const supplyCargoLabelsResult: Promise<GetSupplyCargoLabelsResponse> =
  ozon.supplyDrafts.getSupplyCargoLabels({ operation_id: "test" });
const supplyCargoLabelFileResult: Promise<GetSupplyCargoLabelFileResponse> =
  ozon.supplyDrafts.getSupplyCargoLabelFile({ file_guid: "test" });
const cancelledSupplyOrderResult: Promise<CancelSupplyOrderResponse> =
  ozon.supplyOrders.cancelSupplyOrder({ order_id: 1 });
const supplyOrderCancelStatusResult: Promise<GetSupplyOrderCancelStatusResponse> =
  ozon.supplyOrders.getSupplyOrderCancelStatus({ operation_id: "test" });
const updatedSupplyOrderContentResult: Promise<UpdateSupplyOrderContentResponse> =
  ozon.supplyOrders.updateSupplyOrderContent({
    order_id: 1,
    supply_id: 2,
    items: [],
  });
const supplyOrderContentStatusResult: Promise<GetSupplyOrderContentUpdateStatusResponse> =
  ozon.supplyOrders.getSupplyOrderContentUpdateStatus({ operation_id: "test" });
const validatedSupplyOrderContentResult: Promise<ValidateSupplyOrderContentResponse> =
  ozon.supplyOrders.validateSupplyOrderContent({
    new_bundle_id: "test",
    supply_id: 2,
  });
const createdSupplyOrderFromDraftResult: Promise<CreateSupplyOrderFromDraftResponse> =
  ozon.supplyDrafts.createSupplyOrderFromDraft({
    draft_id: 1,
    selected_cluster_warehouses: [],
    supply_type: "DIRECT",
  });
const supplyOrderFromDraftStatusResult: Promise<GetSupplyOrderFromDraftStatusResponse> =
  ozon.supplyDrafts.getSupplyOrderFromDraftStatus({ draft_id: 1 });
const fboSellerWarehousesResult: Promise<ListFboSellerWarehousesResponse> =
  ozon.warehouses.listFboSellerWarehouses();
const shippedFbsPostingV4Result: Promise<ShipFbsPostingV4Response> =
  ozon.postings.shipFbsPostingV4({ posting_number: "TEST", packages: [] });
const shippedFbsPostingPackageV4Result: Promise<ShipFbsPostingPackageV4Response> =
  ozon.postings.shipFbsPostingPackageV4({ posting_number: "TEST" });
const setFbsExemplarsV6Result: Promise<void> =
  ozon.postings.setFbsPostingProductExemplarsV6({
    posting_number: "TEST",
    products: [],
  });
const createdOrGotFbsExemplarsV6Result: Promise<CreateOrGetFbsPostingProductExemplarsV6Response> =
  ozon.postings.createOrGetFbsPostingProductExemplarsV6({
    posting_number: "TEST",
  });
const fbsExemplarStatusV5Result: Promise<GetFbsPostingProductExemplarStatusV5Response> =
  ozon.postings.getFbsPostingProductExemplarStatusV5({
    posting_number: "TEST",
  });
const validatedFbsExemplarsV5Result: Promise<ValidateFbsPostingProductExemplarsV5Response> =
  ozon.postings.validateFbsPostingProductExemplarsV5({
    posting_number: "TEST",
    products: [],
  });
const updatedFbsExemplarsResult: Promise<void> =
  ozon.postings.updateFbsPostingProductExemplars({ posting_number: "TEST" });
const createdFbsCarriageResult: Promise<CreateFbsCarriageResponse> =
  ozon.deliveries.createFbsCarriage({ delivery_method_id: 1 });
const approvedFbsCarriageResult: Promise<ApproveFbsCarriageResponse> =
  ozon.deliveries.approveFbsCarriage({ carriage_id: 1 });
const setFbsCarriagePostingsResult: Promise<SetFbsCarriagePostingsResponse> =
  ozon.deliveries.setFbsCarriagePostings({
    carriage_id: 1,
    posting_numbers: [],
  });
const cancelledFbsCarriageResult: Promise<CancelFbsCarriageResponse> =
  ozon.deliveries.cancelFbsCarriage({ carriage_id: 1 });
const fbsCarriageDeliveriesV1Result: Promise<ListFbsCarriageDeliveriesV1Response> =
  ozon.deliveries.listFbsCarriageDeliveriesV1();
const fbsCarriageDeliveriesV2Result: Promise<ListFbsCarriageDeliveriesV2Response> =
  ozon.deliveries.listFbsCarriageDeliveriesV2({ limit: 100 });
const createdFbsActResult: Promise<CreateFbsActResponse> =
  ozon.postings.createFbsAct({
    delivery_method_id: 1,
  });
const availableFbsCarriagesResult: Promise<ListAvailableFbsCarriagesResponse> =
  ozon.deliveries.listAvailableFbsCarriages({ delivery_method_id: 1 });
const fbsCarriageResult: Promise<GetFbsCarriageResponse> =
  ozon.deliveries.getFbsCarriage({
    carriage_id: 1,
  });
const splitFbsPostingResult: Promise<SplitFbsPostingResponse> =
  ozon.postings.splitFbsPosting();
const fbsActPostingsResult: Promise<ListFbsActPostingsResponse> =
  ozon.postings.listFbsActPostings({ id: 1 });
const fbsActContainerLabelsResult: Promise<GetFbsActContainerLabelsResponse> =
  ozon.postings.getFbsActContainerLabels({ id: 1 });
const fbsActBarcodeResult: Promise<GetFbsActBarcodeResponse> =
  ozon.postings.getFbsActBarcode({ id: 1 });
const fbsActBarcodeTextResult: Promise<GetFbsActBarcodeTextResponse> =
  ozon.postings.getFbsActBarcodeText({ id: 1 });
const fbsDigitalActStatusResult: Promise<GetFbsDigitalActStatusResponse> =
  ozon.postings.getFbsDigitalActStatus({ id: 1 });
const fbsActPdfResult: Promise<GetFbsActPdfResponse> =
  ozon.postings.getFbsActPdf({
    id: 1,
  });
const fbsCarriageDiscrepancyResult: Promise<GetFbsCarriageDiscrepancyActResponse> =
  ozon.deliveries.getFbsCarriageDiscrepancyAct({ carriage_id: 1 });
const fbsActsResult: Promise<ListFbsActsResponse> = ozon.postings.listFbsActs({
  limit: 50,
});
const fbsDigitalActPdfResult: Promise<GetFbsDigitalActPdfResponse> =
  ozon.postings.getFbsDigitalActPdf({ id: 1 });
const fbsActStatusResult: Promise<GetFbsActStatusResponse> =
  ozon.postings.getFbsActStatus({ id: 1 });
const splitTraceableFbsPostingResult: Promise<SplitTraceableFbsPostingResponse> =
  ozon.postings.splitTraceableFbsPosting({ posting_number: "TEST" });
const fbsTraceableAttributesResult: Promise<GetFbsTraceableAttributesResponse> =
  ozon.postings.getFbsTraceableAttributes({ posting_number: "TEST" });
const fbsCarriageEttnStatusResult: Promise<GetFbsCarriageEttnStatusResponse> =
  ozon.deliveries.getFbsCarriageEttnStatus({ carriage_id: 1 });
const fbsAssemblyPostingsResult: Promise<ListFbsAssemblyCarriagePostingsResponse> =
  ozon.deliveries.listFbsAssemblyCarriagePostings({
    filter: { carriage_id: 1 },
    limit: 100,
  });
const sellerRolesResult: Promise<GetRolesResponse> = new SellerClient({
  marketplace: "ozon",
  credentials,
}).ozon.access.getRoles({ signal: new AbortController().signal });
void rolesResult;
void domainRolesResult;
void domainProductsResult;
void domainProductPricesResult;
void domainProductStocksResult;
void domainFbsPostingsResult;
void domainFinanceTransactionsResult;
void financeAccrualsByDayResult;
void financeAccrualsByPostingsResult;
void financeAccrualTypesResult;
void logisticsResult;
void sellerInfoResult;
void categoryTreeResult;
void categoryAttributesResult;
void categoryAttributeValuesResult;
void searchedAttributeValuesResult;
void productPlacementResult;
void brandCertificationsResult;
void ozonWarehousesResult;
void ratingSummaryResult;
void ratingHistoryResult;
void fbsRatingIndexResult;
void fbsRatingIndexPostingsResult;
void cancelReasonsResult;
void orderCancelReasonsResult;
void postingCancelReasonsResult;
void legacyAnalyticsStocksResult;
void analyticsStocksTurnoverResult;
void analyticsStocksResult;
void addedBarcodesResult;
void generatedBarcodesResult;
void quantProductsResult;
void quantProductsInfoResult;
void conditionalCancellationsResult;
void approvedCancellationResult;
void rejectedCancellationResult;
void digitalPostingsResult;
void digitalPostingsV2Result;
void uploadedDigitalCodesResult;
void importedDigitalStocksResult;
void importedProductsResult;
void productImportStatusResult;
void importedProductsBySkuResult;
void updatedProductAttributesResult;
void importedProductPicturesResult;
void productPicturesResult;
void updatedProductPricesResult;
void updatedProductMinPriceTimerResult;
void productMinPriceTimerStatusResult;
void productPricesResult;
void discountedProductInfoResult;
void updatedProductDiscountResult;
void promotionsResult;
void promotionCandidatesResult;
void promotionProductsResult;
void activatedPromotionProductsResult;
void deactivatedPromotionProductsResult;
void discountTasksResult;
void approvedDiscountTasksResult;
void declinedDiscountTasksResult;
void pricingCompetitorsResult;
void pricingStrategiesResult;
void createdPricingStrategyResult;
void pricingStrategyResult;
void updatedPricingStrategyResult;
void addedPricingStrategyProductsResult;
void productPricingStrategyIdsResult;
void pricingStrategyProductsResult;
void pricingStrategyProductInfoResult;
void deletedPricingStrategyProductsResult;
void pricingStrategyStatusResult;
void deletedPricingStrategyResult;
void passesResult;
void carriagePassesResult;
void updatedCarriagePassesResult;
void deletedCarriagePassesResult;
void returnPassesResult;
void updatedReturnPassesResult;
void deletedReturnPassesResult;
void certificateAccordanceV1Result;
void certificateAccordanceV2Result;
void certificateTypesResult;
void certificationCategoriesV2Result;
void certificationCategoriesV1Result;
void createdCertificateResult;
void boundCertificateResult;
void deletedCertificateResult;
void certificateInfoResult;
void certificatesResult;
void certificateProductStatusesResult;
void certificateProductsResult;
void unboundCertificateResult;
void certificateRejectionReasonsResult;
void certificateStatusesResult;
void warehousesV1Result;
void deliveryMethodsV1Result;
void deliveryMethodsV2Result;
void deliveryMethodReturnSettingsResult;
void warehousesV2Result;
void warehouseOperationStatusResult;
void archivedFbsWarehouseResult;
void unarchivedFbsWarehouseResult;
void warehouseInvalidProductsResult;
void warehousesWithInvalidProductsResult;
void createdDeliveryPolygonResult;
void boundDeliveryPolygonResult;
void supplierWarehousesResult;
void fboSupplyWarehousesResult;
void listedProductsResult;
void productInfoListResult;
void productAttributesResult;
void productDescriptionResult;
void productsWithWrongVolumeResult;
void updatedProductStocksResult;
void productStocksResult;
void warehouseProductStocksResult;
void fbsWarehouseProductStocksResult;
void fbsWarehouseProductStocksV2Result;
void productSubscriptionCountsResult;
void relatedProductSkusResult;
void productUploadQuotaResult;
void archivedProductsResult;
void unarchivedProductsResult;
void deletedProductsResult;
void updatedProductOfferIdsResult;
void productRatingResult;
void cancelledFboPostingResult;
void fboCancellationStatusResult;
void fboPostingMarksResult;
void orderCancellationCheckResult;
void orderCancellationResult;
void orderCancellationStatusResult;
void orderCreationResult;
void supplyOrderActSummaryResult;
void supplyOrderActProductsResult;
void supplyOrderStatusCountersResult;
void supplyOrderBundleResult;
void supplyOrdersV3Result;
void supplyOrderV3Result;
void supplyOrderTimeslotsV1Result;
void supplyOrderTimeslotsV2Result;
void supplyOrderTimeslotUpdateResult;
void supplyOrderTimeslotStatusResult;
void supplyOrderPassCreateResult;
void supplyOrderPassStatusResult;
void fboPostingsV2Result;
void fboPostingsV3Result;
void fboPostingV2Result;
void fboPostingCancelReasonsResult;
void supplyOrderDetailsResult;
void supplyClustersV1Result;
void supplyClustersV2Result;
void crossdockSupplyDraftResult;
void directSupplyDraftResult;
void multiClusterSupplyDraftResult;
void supplyDraftInfoResult;
void supplyDraftTimeslotsResult;
void supplyCargoesResult;
void createdSupplyCargoesResult;
void supplyCargoesCreateInfoResult;
void deletedSupplyCargoesResult;
void supplyCargoesDeleteStatusResult;
void supplyCargoesRulesResult;
void createdSupplyCargoLabelsResult;
void supplyCargoLabelsResult;
void supplyCargoLabelFileResult;
void cancelledSupplyOrderResult;
void supplyOrderCancelStatusResult;
void updatedSupplyOrderContentResult;
void supplyOrderContentStatusResult;
void validatedSupplyOrderContentResult;
void createdSupplyOrderFromDraftResult;
void supplyOrderFromDraftStatusResult;
void fboSellerWarehousesResult;
void shippedFbsPostingV4Result;
void shippedFbsPostingPackageV4Result;
void setFbsExemplarsV6Result;
void createdOrGotFbsExemplarsV6Result;
void fbsExemplarStatusV5Result;
void validatedFbsExemplarsV5Result;
void updatedFbsExemplarsResult;
void createdFbsCarriageResult;
void approvedFbsCarriageResult;
void setFbsCarriagePostingsResult;
void cancelledFbsCarriageResult;
void fbsCarriageDeliveriesV1Result;
void fbsCarriageDeliveriesV2Result;
void createdFbsActResult;
void availableFbsCarriagesResult;
void fbsCarriageResult;
void splitFbsPostingResult;
void fbsActPostingsResult;
void fbsActContainerLabelsResult;
void fbsActBarcodeResult;
void fbsActBarcodeTextResult;
void fbsDigitalActStatusResult;
void fbsActPdfResult;
void fbsCarriageDiscrepancyResult;
void fbsActsResult;
void fbsDigitalActPdfResult;
void fbsActStatusResult;
void splitTraceableFbsPostingResult;
void fbsTraceableAttributesResult;
void fbsCarriageEttnStatusResult;
void fbsAssemblyPostingsResult;

// @ts-expect-error Ozon forbids combining cluster and macrolocal cluster filters.
ozon.analytics.getAnalyticsStocks({
  cluster_ids: ["1001"],
  macrolocal_cluster_ids: ["2001"],
  skus: ["100000001"],
});

ozon.products.importProducts({
  items: [
    // @ts-expect-error Ozon requires real packaging dimensions and weight.
    {
      description_category_id: 100000001,
      offer_id: "TEST-OFFER-003",
      price: "1000.00",
      type_id: 100001,
    },
  ],
});

ozon.products.listProducts({
  // @ts-expect-error Only one product identifier group is allowed.
  filter: {
    offer_id: ["TEST-OFFER-001"],
    product_id: ["500000001"],
  },
  limit: 100,
});

// @ts-expect-error Only one product identifier group is allowed.
ozon.products.getProductInfoList({
  offer_id: ["TEST-OFFER-001"],
  product_id: ["500000001"],
});

// @ts-expect-error Exactly one product identifier is allowed.
ozon.products.getProductDescription({
  offer_id: "TEST-OFFER-001",
  product_id: 500000001,
});

ozon.products.updateProductOfferIds({
  // @ts-expect-error At least one offer identifier pair is required.
  update_offer_id: [],
});

// @ts-expect-error Certificate product listing requires one pagination strategy.
ozon.products.listCertificateProducts({ certificate_id: 50058 });

// @ts-expect-error Exactly one certificate product identifier collection is allowed.
ozon.products.unbindProductCertificate({
  certificate_id: 50058,
  skus: ["2901231"],
  product_id: ["500000001"],
});

ozon.cargoes.bindTransportCargoesV1({
  cargoes_unbind_transport_cargoes: ["1001"],
  supply_id: 1,
});

// @ts-expect-error A transport-cargo bind request requires exactly one operation payload.
ozon.cargoes.bindTransportCargoesV1({ supply_id: 1 });

// @ts-expect-error Bind and unbind payloads are mutually exclusive.
ozon.cargoes.bindTransportCargoesV1({
  cargoes_unbind_transport_cargoes: ["1001"],
  supply_id: 1,
  transport_cargo_bind: [{ cargo_ids: ["2001"], transport_cargo_id: 3001 }],
});

ozon.cargoes.deleteCargoesV2({
  cargo_ids: ["1001"],
  supply_id: 1,
  transport_cargo_deletion_type: "UNBIND_CONTAINED_CARGOES",
});

// @ts-expect-error A cargo deletion requires cargo_ids or transport_cargo_ids.
ozon.cargoes.deleteCargoesV2({
  supply_id: 1,
  transport_cargo_deletion_type: "UNBIND_CONTAINED_CARGOES",
});

// @ts-expect-error operation_id is required for transport-label status.
ozon.cargoes.getTransportLabelsStatusV1({});

// @ts-expect-error Product report visibility is a closed Ozon enum.
ozon.reports.createProductsReportV1({ visibility: "VISIBLE" });

ozon.reports.createReturnsReportV2({
  filter: {
    date_from: "2026-08-01T00:00:00Z",
    date_to: "2026-08-15T00:00:00Z",
    status: OzonValues.ReturnReportStatus.Approved,
  },
});

ozon.reports.createReturnsReportV2({
  filter: {
    date_from: "2026-08-01T00:00:00Z",
    date_to: "2026-08-15T00:00:00Z",
    // @ts-expect-error ALL is not a returns-report status accepted by Ozon.
    status: "ALL",
  },
});

// @ts-expect-error Chat statuses use the wire values ALL, OPENED, and CLOSED.
ozon.chats.listChatsV3({ filter: { chat_status: "Opened" }, limit: 30 });

ozon.warehouses.createErfbsAggregatorWarehouseV1({
  address_coordinates: { latitude: 55.75, longitude: 37.61 },
  delivery_method: {
    courier_phones: ["+79990000000"],
    cut_in: 60,
    deliver_to_pvz: true,
    delivery_costs: {},
    name: "Partners",
    return_settings: { return_method: "COURIER" },
  },
  name: "Warehouse",
  phone: "+79990000000",
  // @ts-expect-error Creating an eRFBS warehouse requires working days.
  timetable_warehouse: {},
});
void sellerRolesResult;

const registryCredentials: MarketplaceRegistry["ozon"]["credentials"] =
  credentials;
void registryCredentials;

// @ts-expect-error Unsupported marketplaces are rejected at compile time.
new SellerClient({ marketplace: "unsupported", credentials });

new SellerClient({
  marketplace: "ozon",
  // @ts-expect-error Ozon credentials require apiKey.
  credentials: { clientId: "test-client-id" },
});

// @ts-expect-error Marketplace is a closed set.
const unsupportedMarketplace: keyof MarketplaceRegistry = "unsupported";
void unsupportedMarketplace;

const wbCredentials = { token: "test-wb-token" };
const wb = new WbClient(wbCredentials, { environment: "production" });
const normalizedError: SellerSdkErrorDetails = toSellerSdkErrorDetails(
  new Error("test"),
);
void normalizedError;
const activeWbSubscription: "active" =
  WbValues.GeneralSubscriptionsJamInfoState.Active;
void activeWbSubscription;
const wbSeller = new SellerClient({
  marketplace: Marketplace.Wb,
  credentials: wbCredentials,
});
const directWbPing: Promise<Wb.GetPingResponse> = wb.general.getPing();
const rootWbPing: Promise<Wb.GetPingResponse> = wbSeller.wb.general.getPing();
const wbNews: Promise<Wb.GetV2NewsResponse> = wb.general.getNews({
  query: { from: "2026-08-01", fromID: 42 },
});
const wbNewsV2: Promise<Wb.GetV2NewsResponse> = wb.general.getV2News({
  query: { from: "2026-08-01", fromID: 42 },
});
wb.general.getTariffConstructorOptions({
  query: { locale: WbValues.GetV1TariffConstructorOptionsLocale.Ru },
});
const wbRaw = wb.rawRequest<{ future: boolean }>(
  WbApiHost.Common,
  "GET",
  "/api/future",
);
void directWbPing;
void rootWbPing;
void wbNews;
void wbNewsV2;
void wbRaw;

new SellerClient({
  marketplace: "wb",
  // @ts-expect-error WB credentials require token instead of Ozon clientId/apiKey.
  credentials,
});

// @ts-expect-error A required path parameter cannot be omitted.
wb.communications.getSellerDownloadId({});

// @ts-expect-error Wildberries enum fields remain closed unions.
wb.general.getTariffConstructorOptions({ query: { locale: "de" } });

// @ts-expect-error Raw requests only accept documented WB origins.
wb.rawRequest("https://example.com", "GET", "/api/future");

const ymCredentials = { apiKey: "test-ym-api-key" };
const ym = new YmClient(ymCredentials);
const ymSeller = new SellerClient({
  marketplace: Marketplace.Ym,
  credentials: ymCredentials,
});
const ymOrders: Promise<Ym.GetBusinessOrdersResponse> =
  ymSeller.ym.orders.getBusinessOrders({
    path: { businessId: 123456 },
    body: { statuses: [YmValues.OrdersOrderStatusType.Processing] },
  });
const ymCategoryTree: Promise<Ym.GetCategoriesTreeResponse> =
  ym.categories.getCategoriesTree({ body: {} });
const registryYmCredentials: MarketplaceRegistry["ym"]["credentials"] =
  ymCredentials;
void ymOrders;
void ymCategoryTree;
void registryYmCredentials;

new SellerClient({
  marketplace: "ym",
  // @ts-expect-error YM credentials require apiKey.
  credentials: { token: "wrong-credential" },
});

// @ts-expect-error A required YM path parameter cannot be omitted.
ym.orders.getBusinessOrders({ body: {} });

ym.orders.getBusinessOrders({
  path: { businessId: 123456 },
  // @ts-expect-error Yandex Market enum fields remain closed unions.
  body: { statuses: ["NOT_A_REAL_STATUS"] },
});
