import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const temporaryDirectory = mkdtempSync(join(tmpdir(), "seller-sdk-consumer-"));
const npmEnvironment = {
  ...process.env,
  npm_config_cache: join(temporaryDirectory, "npm-cache"),
};
const ozonVersion = JSON.parse(
  readFileSync(
    join(projectDirectory, "packages", "ozon", "package.json"),
    "utf8",
  ),
).version;
const umbrellaVersion = JSON.parse(
  readFileSync(
    join(projectDirectory, "packages", "seller-sdk", "package.json"),
    "utf8",
  ),
).version;

try {
  const packages = [
    {
      directory: join(projectDirectory, "packages", "ozon"),
      tarball: `seller-sdk-ozon-${ozonVersion}.tgz`,
    },
    {
      directory: join(projectDirectory, "packages", "seller-sdk"),
      tarball: `seller-sdk-${umbrellaVersion}.tgz`,
    },
  ];

  for (const packageInfo of packages) {
    execFileSync("pnpm", ["pack", "--pack-destination", temporaryDirectory], {
      cwd: packageInfo.directory,
      encoding: "utf8",
      env: npmEnvironment,
    });
  }

  const tarballs = packages.map((packageInfo) =>
    join(temporaryDirectory, packageInfo.tarball),
  );
  const focusedConsumerDirectory = join(temporaryDirectory, "focused-consumer");

  mkdirSync(focusedConsumerDirectory, { recursive: true });
  writeFileSync(
    join(focusedConsumerDirectory, "package.json"),
    JSON.stringify(
      {
        name: "seller-sdk-focused-consumer-smoke",
        private: true,
        type: "module",
      },
      null,
      2,
    ),
  );
  execFileSync(
    "npm",
    ["install", "--ignore-scripts", "--no-audit", "--no-fund", tarballs[0]],
    { cwd: focusedConsumerDirectory, stdio: "pipe", env: npmEnvironment },
  );
  const focusedRuntimeFile = join(focusedConsumerDirectory, "smoke.mjs");
  writeFileSync(
    focusedRuntimeFile,
    [
      'import { ConfigurationError, OzonClient, OzonValues } from "@seller-sdk/ozon";',
      "const credentials = { clientId: 'test-client-id', apiKey: 'test-api-key' };",
      "const ozon = new OzonClient(credentials, { maxRetries: 1 });",
      "if (!(ozon instanceof OzonClient) || typeof ConfigurationError !== 'function' || OzonValues.FinanceTransactionType.All !== 'all' || OzonValues.ProductListVisibility.Visible !== 'VISIBLE' || typeof ozon.products.list !== 'function' || typeof ozon.products.listAll !== 'function' || typeof ozon.postings.fbs.list !== 'function' || typeof ozon.finance.listFinanceTransactions !== 'function' || typeof ozon.warehouses.listWarehouses !== 'function' || typeof ozon.rawRequest !== 'function' || typeof ozon.finance.accruals.byDay !== 'function' || typeof ozon.finance.accruals.byPostings !== 'function' || typeof ozon.finance.accruals.types !== 'function' || 'listProducts' in ozon) throw new Error('Focused smoke failed');",
      "console.log('standalone @seller-sdk/ozon consumer smoke passed');",
    ].join("\n"),
  );
  const focusedRuntimeOutput = execFileSync(
    process.execPath,
    [focusedRuntimeFile],
    {
      cwd: focusedConsumerDirectory,
      encoding: "utf8",
    },
  );
  if (!focusedRuntimeOutput.includes("standalone @seller-sdk/ozon")) {
    throw new Error("Focused Ozon runtime smoke did not report success.");
  }
  if (
    existsSync(
      join(
        focusedConsumerDirectory,
        "node_modules",
        "@seller-sdk",
        "core",
        "package.json",
      ),
    ) ||
    existsSync(
      join(
        focusedConsumerDirectory,
        "node_modules",
        "seller-sdk",
        "package.json",
      ),
    )
  ) {
    throw new Error(
      "Focused Ozon install must not install seller-sdk or @seller-sdk/core.",
    );
  }

  const consumerDirectory = join(temporaryDirectory, "consumer");

  mkdirSync(consumerDirectory, { recursive: true });
  writeFileSync(
    join(consumerDirectory, "package.json"),
    JSON.stringify(
      { name: "seller-sdk-consumer-smoke", private: true, type: "module" },
      null,
      2,
    ),
  );
  execFileSync(
    "npm",
    ["install", "--ignore-scripts", "--no-audit", "--no-fund", ...tarballs],
    { cwd: consumerDirectory, stdio: "pipe", env: npmEnvironment },
  );

  writeFileSync(
    join(consumerDirectory, "smoke.ts"),
    [
      'import { Marketplace, OzonValues, SellerClient, type AddProductBarcodesResponse, type ArchiveProductsResponse, type CancelFboPostingResponse, type CancelOrderResponse, type CheckOrderCancellationResponse, type CreateOrderResponse, type DeleteProductsResponse, type GenerateProductBarcodesResponse, type GetAnalyticsStockOnWarehousesResponse, type GetAnalyticsStocksResponse, type GetAnalyticsStocksTurnoverResponse, type GetDescriptionCategoryAttributesResponse, type GetDescriptionCategoryAttributeValuesResponse, type GetDescriptionCategoryTreeResponse, type GetFboPostingCancellationStatusResponse, type GetFboPostingMarksResponse, type GetFbsRatingIndexInfoResponse, type GetOrderCancellationStatusResponse, type GetOzonLogisticsInfoResponse, type GetProductAttributesResponse, type GetProductDescriptionResponse, type GetProductImportStatusResponse, type GetProductInfoListResponse, type GetProductPicturesResponse, type GetProductPlacementZoneInfoResponse, type GetProductRatingBySkuResponse, type GetProductStocksByWarehouseFbsResponse, type GetProductStocksByWarehouseFbsV2Response, type GetProductStocksByWarehouseResponse, type GetProductStocksResponse, type GetProductSubscriptionCountsResponse, type GetProductUploadQuotaResponse, type GetQuantProductsInfoResponse, type GetRatingHistoryResponse, type GetRatingSummaryResponse, type GetRelatedProductSkusResponse, type GetRolesResponse, type GetSellerInfoResponse, type GetSupplyOrderActProductsResponse, type GetSupplyOrderActSummaryResponse, type ImportDigitalProductStocksResponse, type ImportProductPicturesResponse, type ImportProductsBySkuResponse, type ImportProductsResponse, type ListBrandCertificationsResponse, type ListCancelReasonsByOrderResponse, type ListCancelReasonsByPostingResponse, type ListCancelReasonsResponse, type ListConditionalCancellationsResponse, type ListDigitalPostingsResponse, type ListDigitalPostingsV2Response, type ListFbsRatingIndexPostingsResponse, type ListOzonWarehousesResponse, type ListProductsResponse, type ListProductsWithWrongVolumeResponse, type ListQuantProductsResponse, type SearchDescriptionCategoryAttributeValuesResponse, type UnarchiveProductsResponse, type UpdateProductAttributesResponse, type UpdateProductOfferIdsResponse, type UpdateProductPricesResponse, type UpdateProductStocksResponse, type UploadDigitalPostingCodesResponse } from "seller-sdk";',
      'import type { ActivatePromotionProductsResponse, AddProductsToPricingStrategyResponse, ApproveDiscountTasksResponse, CreatePricingStrategyResponse, DeclineDiscountTasksResponse, DeactivatePromotionProductsResponse, GetDiscountedProductInfoResponse, GetProductMinPriceTimerStatusResponse, GetProductPricesResponse, GetPricingStrategyIdsByProductIdsResponse, GetPricingStrategyResponse, ListDiscountTasksResponse, ListPricingCompetitorsResponse, ListPricingStrategiesResponse, ListPricingStrategyProductsResponse, ListPromotionCandidatesResponse, ListPromotionProductsResponse, ListPromotionsResponse, UpdateProductDiscountResponse, UpdatePricingStrategyResponse } from "seller-sdk";',
      'import type { CreateCarriagePassesResponse, CreateReturnPassesResponse, DeletePricingStrategyResponse, DeleteProductsFromPricingStrategyResponse, GetPricingStrategyProductInfoResponse, ListPassesResponse, UpdatePricingStrategyStatusResponse } from "seller-sdk";',
      'import type { GetDeliveryMethodReturnSettingsResponse, ListCertificateProductStatusesResponse, ListCertificateProductsResponse, ListCertificateRejectionReasonsResponse, ListCertificateStatusesResponse, ListDeliveryMethodsV1Response, ListDeliveryMethodsV2Response, ListProductCertificatesResponse, ListWarehousesV1Response, UnbindProductCertificateResponse } from "seller-sdk";',
      'import type { ArchiveFbsWarehouseResponse, BindDeliveryPolygonV1Response, CreateDeliveryPolygonV1Response, GetFbsWarehouseOperationStatusResponse, GetWarehouseInvalidProductsResponse, ListFboSupplyWarehousesResponse, ListSupplierAvailableWarehousesResponse, ListWarehousesV2Response, ListWarehousesWithInvalidProductsResponse, UnarchiveFbsWarehouseResponse } from "seller-sdk";',
      'import type { CountSupplyOrdersByStatusResponse, CreateSupplyOrderPassResponse, GetSupplyOrderBundleResponse, GetSupplyOrderPassStatusResponse, GetSupplyOrdersV3Response, GetSupplyOrderTimeslotStatusResponse, ListSupplyOrdersV3Response, ListSupplyOrderTimeslotsV1Response, ListSupplyOrderTimeslotsV2Response, UpdateSupplyOrderTimeslotResponse } from "seller-sdk";',
      'import type { CreateCrossdockSupplyDraftResponse, CreateDirectSupplyDraftResponse, CreateMultiClusterSupplyDraftResponse, GetFboPostingV2Response, GetSupplyOrderDetailsResponse, ListFboPostingCancelReasonsResponse, ListFboPostingsV2Response, ListFboPostingsV3Response, ListSupplyClustersV1Response, ListSupplyClustersV2Response } from "seller-sdk";',
      'import type { CreateSupplyCargoesResponse, CreateSupplyCargoLabelsResponse, DeleteSupplyCargoesResponse, GetSupplyCargoesCreateInfoResponse, GetSupplyCargoesDeleteStatusResponse, GetSupplyCargoesResponse, GetSupplyCargoesRulesResponse, GetSupplyCargoLabelsResponse, GetSupplyDraftInfoResponse, GetSupplyDraftTimeslotsResponse } from "seller-sdk";',
      'import type { ApproveFbsCarriageResponse, CancelFbsCarriageResponse, CancelSupplyOrderResponse, CreateFbsActResponse, CreateFbsCarriageResponse, CreateOrGetFbsPostingProductExemplarsV6Response, CreateSupplyOrderFromDraftResponse, GetFbsActBarcodeResponse, GetFbsActBarcodeTextResponse, GetFbsActContainerLabelsResponse, GetFbsCarriageResponse, GetFbsPostingProductExemplarStatusV5Response, GetSupplyCargoLabelFileResponse, GetSupplyOrderCancelStatusResponse, GetSupplyOrderContentUpdateStatusResponse, GetSupplyOrderFromDraftStatusResponse, ListAvailableFbsCarriagesResponse, ListFboSellerWarehousesResponse, ListFbsActPostingsResponse, ListFbsCarriageDeliveriesV1Response, ListFbsCarriageDeliveriesV2Response, SetFbsCarriagePostingsResponse, ShipFbsPostingPackageV4Response, ShipFbsPostingV4Response, SplitFbsPostingResponse, UpdateSupplyOrderContentResponse, ValidateFbsPostingProductExemplarsV5Response, ValidateSupplyOrderContentResponse } from "seller-sdk";',
      'import type { GetFbsActPdfResponse, GetFbsActStatusResponse, GetFbsCarriageDiscrepancyActResponse, GetFbsCarriageEttnStatusResponse, GetFbsDigitalActPdfResponse, GetFbsDigitalActStatusResponse, GetFbsTraceableAttributesResponse, ListFbsActsResponse, ListFbsAssemblyCarriagePostingsResponse, SplitTraceableFbsPostingResponse } from "seller-sdk";',
      'import { OzonClient } from "@seller-sdk/ozon";',
      "const credentials = { clientId: 'test-client-id', apiKey: 'test-api-key' };",
      "const seller = new SellerClient({ marketplace: Marketplace.Ozon, credentials });",
      "const ozon = new OzonClient(credentials, { maxRetries: 1, timeoutMs: 10_000 });",
      "const directRoles: Promise<GetRolesResponse> = ozon.access.getRoles();",
      "const domainRoles: Promise<GetRolesResponse> = ozon.access.getRoles();",
      "const domainProducts: Promise<ListProductsResponse> = ozon.products.list({ filter: { visibility: OzonValues.ProductListVisibility.All }, limit: 100 });",
      "const latestWarehouses: Promise<ListWarehousesV2Response> = ozon.warehouses.listWarehouses({ limit: 100 });",
      "const rawRequest = ozon.rawRequest<{ result: unknown }>('GET', '/v1/new-operation');",
      "const allProducts = ozon.products.listAll({ filter: {}, limit: 100 });",
      "const financeAccrualsByDay = ozon.finance.accruals.byDay({ date: '2026-08-15', last_id: '' });",
      "const financeAccrualsByPostings = ozon.finance.accruals.byPostings({ posting_numbers: ['12345-0001-1'] });",
      "const financeAccrualTypes = ozon.finance.accruals.types();",
      "// @ts-expect-error Operations must be called through a marketplace domain.",
      "ozon.listProducts({ limit: 100 });",
      "const rootRoles: Promise<GetRolesResponse> = seller.ozon.access.getRoles();",
      "const logistics: Promise<GetOzonLogisticsInfoResponse> = seller.ozon.seller.getOzonLogisticsInfo();",
      "const sellerInfo: Promise<GetSellerInfoResponse> = seller.ozon.seller.getSellerInfo();",
      "const categoryTree: Promise<GetDescriptionCategoryTreeResponse> = seller.ozon.categories.getDescriptionCategoryTree({ language: OzonValues.Language.Ru });",
      "const categoryAttributes: Promise<GetDescriptionCategoryAttributesResponse> = seller.ozon.categories.getDescriptionCategoryAttributes({ description_category_id: 200000001, type_id: 100001 });",
      "const categoryAttributeValues: Promise<GetDescriptionCategoryAttributeValuesResponse> = seller.ozon.categories.getDescriptionCategoryAttributeValues({ attribute_id: 85, description_category_id: 200000001, limit: 100, type_id: 100001 });",
      "const searchedAttributeValues: Promise<SearchDescriptionCategoryAttributeValuesResponse> = seller.ozon.categories.searchDescriptionCategoryAttributeValues({ attribute_id: 85, description_category_id: 200000001, limit: 100, type_id: 100001, value: 'test' });",
      "const placementZones: Promise<GetProductPlacementZoneInfoResponse> = seller.ozon.products.getProductPlacementZoneInfo({ skus: ['100000001'] });",
      "const brandCertifications: Promise<ListBrandCertificationsResponse> = seller.ozon.brands.listBrandCertifications({ page: 1, page_size: 100 });",
      "const ozonWarehouses: Promise<ListOzonWarehousesResponse> = seller.ozon.warehouses.listOzonWarehouses({ warehouse_types: ['FULL_FILLMENT'] });",
      "const certificates: Promise<ListProductCertificatesResponse> = seller.ozon.products.listProductCertificates({ page: 1, page_size: 100 });",
      "const certificateProductStatuses: Promise<ListCertificateProductStatusesResponse> = seller.ozon.products.listCertificateProductStatuses();",
      "const certificateProducts: Promise<ListCertificateProductsResponse> = seller.ozon.products.listCertificateProducts({ certificate_id: 50058, limit: 100 });",
      "const unboundCertificate: Promise<UnbindProductCertificateResponse> = seller.ozon.products.unbindProductCertificate({ certificate_id: 50058, skus: ['2901231'] });",
      "const certificateRejectionReasons: Promise<ListCertificateRejectionReasonsResponse> = seller.ozon.products.listCertificateRejectionReasons();",
      "const certificateStatuses: Promise<ListCertificateStatusesResponse> = seller.ozon.products.listCertificateStatuses();",
      "const warehousesV1: Promise<ListWarehousesV1Response> = seller.ozon.warehouses.listWarehousesV1({ limit: 100 });",
      "const deliveryMethodsV1: Promise<ListDeliveryMethodsV1Response> = seller.ozon.deliveryMethods.listDeliveryMethodsV1({ limit: 100 });",
      "const deliveryMethodsV2: Promise<ListDeliveryMethodsV2Response> = seller.ozon.deliveryMethods.listDeliveryMethodsV2({ limit: 100 });",
      "const deliveryReturnSettings: Promise<GetDeliveryMethodReturnSettingsResponse> = seller.ozon.deliveryMethods.getDeliveryMethodReturnSettings({ delivery_method_id: 50058 });",
      "const warehousesV2: Promise<ListWarehousesV2Response> = seller.ozon.warehouses.listWarehousesV2({ limit: 100 });",
      "const warehouseOperation: Promise<GetFbsWarehouseOperationStatusResponse> = seller.ozon.warehouses.getFbsWarehouseOperationStatus({ operation_id: 'test-operation' });",
      "const archivedFbsWarehouse: Promise<ArchiveFbsWarehouseResponse> = seller.ozon.warehouses.archiveFbsWarehouse({ warehouse_id: 100, reason: 'Synthetic reason' });",
      "const unarchivedFbsWarehouse: Promise<UnarchiveFbsWarehouseResponse> = seller.ozon.warehouses.unarchiveFbsWarehouse({ warehouse_id: 100 });",
      "const invalidWarehouseProducts: Promise<GetWarehouseInvalidProductsResponse> = seller.ozon.warehouses.getWarehouseInvalidProducts({ warehouse_id: 100 });",
      "const warehousesWithInvalidProducts: Promise<ListWarehousesWithInvalidProductsResponse> = seller.ozon.warehouses.listWarehousesWithInvalidProducts();",
      "const createdDeliveryPolygon: Promise<CreateDeliveryPolygonV1Response> = seller.ozon.polygons.createDeliveryPolygonV1({ coordinates: '[[[55,37],[56,38],[55,39]]]' });",
      "const boundDeliveryPolygon: Promise<BindDeliveryPolygonV1Response> = seller.ozon.polygons.bindDeliveryPolygonV1({ delivery_method_id: 10, polygons: [{ polygon_id: 20, time: 30 }], warehouse_location: { lat: '55', lon: '37' } });",
      "const supplierWarehouses: Promise<ListSupplierAvailableWarehousesResponse> = seller.ozon.suppliers.listSupplierAvailableWarehouses();",
      "const fboSupplyWarehouses: Promise<ListFboSupplyWarehousesResponse> = seller.ozon.warehouses.listFboSupplyWarehouses({ filter_by_supply_type: ['CREATE_TYPE_CROSSDOCK'], search: 'Test' });",
      "const supplyOrderStatusCounters: Promise<CountSupplyOrdersByStatusResponse> = seller.ozon.supplyOrders.countSupplyOrdersByStatus();",
      "const supplyOrderBundle: Promise<GetSupplyOrderBundleResponse> = seller.ozon.supplyOrders.getSupplyOrderBundle({ bundle_ids: ['test-bundle'], limit: 100 });",
      "const supplyOrdersV3: Promise<ListSupplyOrdersV3Response> = seller.ozon.supplyOrders.listSupplyOrdersV3({ filter: { states: ['DATA_FILLING'] }, limit: 100, sort_by: 'ORDER_CREATION' });",
      "const supplyOrderV3: Promise<GetSupplyOrdersV3Response> = seller.ozon.supplyOrders.getSupplyOrdersV3({ order_ids: ['100000001'] });",
      "const supplyOrderTimeslotsV1: Promise<ListSupplyOrderTimeslotsV1Response> = seller.ozon.supplyOrders.listSupplyOrderTimeslotsV1({ supply_order_id: 100000001 });",
      "const supplyOrderTimeslotsV2: Promise<ListSupplyOrderTimeslotsV2Response> = seller.ozon.supplyOrders.listSupplyOrderTimeslotsV2({ order_id: 100000001 });",
      "const supplyOrderTimeslotUpdate: Promise<UpdateSupplyOrderTimeslotResponse> = seller.ozon.supplyOrders.updateSupplyOrderTimeslot({ supply_order_id: 100000001, timeslot: { from: '2026-08-20T10:00:00Z', to: '2026-08-20T11:00:00Z' } });",
      "const supplyOrderTimeslotStatus: Promise<GetSupplyOrderTimeslotStatusResponse> = seller.ozon.supplyOrders.getSupplyOrderTimeslotStatus({ operation_id: 'test-operation' });",
      "const supplyOrderPassCreate: Promise<CreateSupplyOrderPassResponse> = seller.ozon.supplyOrders.createSupplyOrderPass({ supply_order_id: 100000001, vehicle: { driver_name: 'Synthetic Driver', driver_phone: '+70000000000', vehicle_model: 'Synthetic Model', vehicle_number: 'TEST-001' } });",
      "const supplyOrderPassStatus: Promise<GetSupplyOrderPassStatusResponse> = seller.ozon.supplyOrders.getSupplyOrderPassStatus({ operation_id: 'test-operation' });",
      "const fboPostingsV2: Promise<ListFboPostingsV2Response> = seller.ozon.postings.listFboPostingsV2({ filter: { since: '2026-08-01T00:00:00Z', to: '2026-08-15T00:00:00Z' }, limit: 100 });",
      "const fboPostingsV3: Promise<ListFboPostingsV3Response> = seller.ozon.postings.listFboPostingsV3({ limit: 100 });",
      "const fboPostingV2: Promise<GetFboPostingV2Response> = seller.ozon.postings.getFboPostingV2({ posting_number: 'TEST-POSTING-001' });",
      "const fboPostingCancelReasons: Promise<ListFboPostingCancelReasonsResponse> = seller.ozon.postings.listFboPostingCancelReasons();",
      "const supplyOrderDetails: Promise<GetSupplyOrderDetailsResponse> = seller.ozon.supplyOrders.getSupplyOrderDetails({ order_id: 100000001 });",
      "const supplyClustersV1: Promise<ListSupplyClustersV1Response> = seller.ozon.supplyDrafts.listSupplyClustersV1({ cluster_type: 'CLUSTER_TYPE_OZON' });",
      "const supplyClustersV2: Promise<ListSupplyClustersV2Response> = seller.ozon.supplyDrafts.listSupplyClustersV2();",
      "const crossdockSupplyDraft: Promise<CreateCrossdockSupplyDraftResponse> = seller.ozon.supplyDrafts.createCrossdockSupplyDraft({ cluster_info: { items: [{ quantity: 1, sku: 100000001 }], macrolocal_cluster_id: 200000001 }, deletion_sku_mode: 'PARTIAL', delivery_info: { type: 'DROPOFF' } });",
      "const directSupplyDraft: Promise<CreateDirectSupplyDraftResponse> = seller.ozon.supplyDrafts.createDirectSupplyDraft({ cluster_info: { items: [{ quantity: 1, sku: 100000001 }], macrolocal_cluster_id: 200000001 }, deletion_sku_mode: 'FULL' });",
      "const multiClusterSupplyDraft: Promise<CreateMultiClusterSupplyDraftResponse> = seller.ozon.supplyDrafts.createMultiClusterSupplyDraft({ clusters_info: [{ items: [{ quantity: 1, sku: 100000001 }], macrolocal_cluster_id: 200000001 }], deletion_sku_mode: 'PARTIAL', delivery_info: { type: 'DROPOFF' } });",
      "const supplyDraftInfo: Promise<GetSupplyDraftInfoResponse> = seller.ozon.supplyDrafts.getSupplyDraftInfo({ draft_id: 1 });",
      "const supplyDraftTimeslots: Promise<GetSupplyDraftTimeslotsResponse> = seller.ozon.supplyDrafts.getSupplyDraftTimeslots({ date_from: '2026-08-20', date_to: '2026-08-21', draft_id: 1, supply_type: 'DIRECT', selected_cluster_warehouses: [] });",
      "const createdSupplyCargoes: Promise<CreateSupplyCargoesResponse> = seller.ozon.supplyDrafts.createSupplyCargoes({ cargoes: [{ key: 'test', value: { type: 'BOX' } }], supply_id: 1 });",
      "const supplyCargoesCreateInfo: Promise<GetSupplyCargoesCreateInfoResponse> = seller.ozon.supplyDrafts.getSupplyCargoesCreateInfo({ operation_id: 'test' });",
      "const supplyCargoes: Promise<GetSupplyCargoesResponse> = seller.ozon.supplyDrafts.getSupplyCargoes({ supply_ids: ['1'] });",
      "const deletedSupplyCargoes: Promise<DeleteSupplyCargoesResponse> = seller.ozon.supplyDrafts.deleteSupplyCargoes({ cargo_ids: ['1'], supply_id: 1 });",
      "const supplyCargoesDeleteStatus: Promise<GetSupplyCargoesDeleteStatusResponse> = seller.ozon.supplyDrafts.getSupplyCargoesDeleteStatus({ operation_id: 'test' });",
      "const supplyCargoesRules: Promise<GetSupplyCargoesRulesResponse> = seller.ozon.supplyDrafts.getSupplyCargoesRules({ supply_ids: ['1'] });",
      "const createdSupplyCargoLabels: Promise<CreateSupplyCargoLabelsResponse> = seller.ozon.supplyDrafts.createSupplyCargoLabels({ supply_id: 1 });",
      "const supplyCargoLabels: Promise<GetSupplyCargoLabelsResponse> = seller.ozon.supplyDrafts.getSupplyCargoLabels({ operation_id: 'test' });",
      "const supplyCargoLabelFile: Promise<GetSupplyCargoLabelFileResponse> = seller.ozon.supplyDrafts.getSupplyCargoLabelFile({ file_guid: 'test' });",
      "const cancelledSupplyOrder: Promise<CancelSupplyOrderResponse> = seller.ozon.supplyOrders.cancelSupplyOrder({ order_id: 1 });",
      "const supplyOrderCancelStatus: Promise<GetSupplyOrderCancelStatusResponse> = seller.ozon.supplyOrders.getSupplyOrderCancelStatus({ operation_id: 'test' });",
      "const updatedSupplyOrderContent: Promise<UpdateSupplyOrderContentResponse> = seller.ozon.supplyOrders.updateSupplyOrderContent({ order_id: 1, supply_id: 2, items: [] });",
      "const supplyOrderContentStatus: Promise<GetSupplyOrderContentUpdateStatusResponse> = seller.ozon.supplyOrders.getSupplyOrderContentUpdateStatus({ operation_id: 'test' });",
      "const validatedSupplyOrderContent: Promise<ValidateSupplyOrderContentResponse> = seller.ozon.supplyOrders.validateSupplyOrderContent({ new_bundle_id: 'test', supply_id: 2 });",
      "const createdSupplyOrderFromDraft: Promise<CreateSupplyOrderFromDraftResponse> = seller.ozon.supplyDrafts.createSupplyOrderFromDraft({ draft_id: 1, selected_cluster_warehouses: [], supply_type: 'DIRECT' });",
      "const supplyOrderFromDraftStatus: Promise<GetSupplyOrderFromDraftStatusResponse> = seller.ozon.supplyDrafts.getSupplyOrderFromDraftStatus({ draft_id: 1 });",
      "const fboSellerWarehouses: Promise<ListFboSellerWarehousesResponse> = seller.ozon.warehouses.listFboSellerWarehouses();",
      "const shippedFbsPostingV4: Promise<ShipFbsPostingV4Response> = seller.ozon.postings.shipFbsPostingV4({ posting_number: 'TEST', packages: [] });",
      "const shippedFbsPostingPackageV4: Promise<ShipFbsPostingPackageV4Response> = seller.ozon.postings.shipFbsPostingPackageV4({ posting_number: 'TEST' });",
      "const setFbsExemplarsV6: Promise<void> = seller.ozon.postings.setFbsPostingProductExemplarsV6({ posting_number: 'TEST', products: [] });",
      "const createdOrGotFbsExemplarsV6: Promise<CreateOrGetFbsPostingProductExemplarsV6Response> = seller.ozon.postings.createOrGetFbsPostingProductExemplarsV6({ posting_number: 'TEST' });",
      "const fbsExemplarStatusV5: Promise<GetFbsPostingProductExemplarStatusV5Response> = seller.ozon.postings.getFbsPostingProductExemplarStatusV5({ posting_number: 'TEST' });",
      "const validatedFbsExemplarsV5: Promise<ValidateFbsPostingProductExemplarsV5Response> = seller.ozon.postings.validateFbsPostingProductExemplarsV5({ posting_number: 'TEST', products: [] });",
      "const updatedFbsExemplars: Promise<void> = seller.ozon.postings.updateFbsPostingProductExemplars({ posting_number: 'TEST' });",
      "const createdFbsCarriage: Promise<CreateFbsCarriageResponse> = seller.ozon.deliveries.createFbsCarriage({ delivery_method_id: 1 });",
      "const approvedFbsCarriage: Promise<ApproveFbsCarriageResponse> = seller.ozon.deliveries.approveFbsCarriage({ carriage_id: 1 });",
      "const setFbsCarriagePostings: Promise<SetFbsCarriagePostingsResponse> = seller.ozon.deliveries.setFbsCarriagePostings({ carriage_id: 1, posting_numbers: [] });",
      "const cancelledFbsCarriage: Promise<CancelFbsCarriageResponse> = seller.ozon.deliveries.cancelFbsCarriage({ carriage_id: 1 });",
      "const fbsCarriageDeliveriesV1: Promise<ListFbsCarriageDeliveriesV1Response> = seller.ozon.deliveries.listFbsCarriageDeliveriesV1();",
      "const fbsCarriageDeliveriesV2: Promise<ListFbsCarriageDeliveriesV2Response> = seller.ozon.deliveries.listFbsCarriageDeliveriesV2({ limit: 100 });",
      "const createdFbsAct: Promise<CreateFbsActResponse> = seller.ozon.postings.createFbsAct({ delivery_method_id: 1 });",
      "const availableFbsCarriages: Promise<ListAvailableFbsCarriagesResponse> = seller.ozon.deliveries.listAvailableFbsCarriages({ delivery_method_id: 1 });",
      "const fbsCarriage: Promise<GetFbsCarriageResponse> = seller.ozon.deliveries.getFbsCarriage({ carriage_id: 1 });",
      "const splitFbsPosting: Promise<SplitFbsPostingResponse> = seller.ozon.postings.splitFbsPosting();",
      "const fbsActPostings: Promise<ListFbsActPostingsResponse> = seller.ozon.postings.listFbsActPostings({ id: 1 });",
      "const fbsActContainerLabels: Promise<GetFbsActContainerLabelsResponse> = seller.ozon.postings.getFbsActContainerLabels({ id: 1 });",
      "const fbsActBarcode: Promise<GetFbsActBarcodeResponse> = seller.ozon.postings.getFbsActBarcode({ id: 1 });",
      "const fbsActBarcodeText: Promise<GetFbsActBarcodeTextResponse> = seller.ozon.postings.getFbsActBarcodeText({ id: 1 });",
      "const fbsDigitalActStatus: Promise<GetFbsDigitalActStatusResponse> = seller.ozon.postings.getFbsDigitalActStatus({ id: 1 });",
      "const fbsActPdf: Promise<GetFbsActPdfResponse> = seller.ozon.postings.getFbsActPdf({ id: 1 });",
      "const fbsCarriageDiscrepancy: Promise<GetFbsCarriageDiscrepancyActResponse> = seller.ozon.deliveries.getFbsCarriageDiscrepancyAct({ carriage_id: 1 });",
      "const fbsActs: Promise<ListFbsActsResponse> = seller.ozon.postings.listFbsActs({ limit: 50 });",
      "const fbsDigitalActPdf: Promise<GetFbsDigitalActPdfResponse> = seller.ozon.postings.getFbsDigitalActPdf({ id: 1 });",
      "const fbsActStatus: Promise<GetFbsActStatusResponse> = seller.ozon.postings.getFbsActStatus({ id: 1 });",
      "const splitTraceableFbsPosting: Promise<SplitTraceableFbsPostingResponse> = seller.ozon.postings.splitTraceableFbsPosting({ posting_number: 'TEST' });",
      "const fbsTraceableAttributes: Promise<GetFbsTraceableAttributesResponse> = seller.ozon.postings.getFbsTraceableAttributes({ posting_number: 'TEST' });",
      "const fbsCarriageEttnStatus: Promise<GetFbsCarriageEttnStatusResponse> = seller.ozon.deliveries.getFbsCarriageEttnStatus({ carriage_id: 1 });",
      "const fbsAssemblyPostings: Promise<ListFbsAssemblyCarriagePostingsResponse> = seller.ozon.deliveries.listFbsAssemblyCarriagePostings({ filter: { carriage_id: 1 }, limit: 100 });",
      "const ratingSummary: Promise<GetRatingSummaryResponse> = seller.ozon.ratings.getRatingSummary();",
      "const ratingHistory: Promise<GetRatingHistoryResponse> = seller.ozon.ratings.getRatingHistory({ date_from: '2026-08-01T00:00:00Z', date_to: '2026-08-14T23:59:59Z', ratings: ['rating_test'] });",
      "const fbsRatingIndex: Promise<GetFbsRatingIndexInfoResponse> = seller.ozon.ratings.getFbsRatingIndexInfo();",
      "const fbsRatingIndexPostings: Promise<ListFbsRatingIndexPostingsResponse> = seller.ozon.ratings.listFbsRatingIndexPostings({ filter: { date_from: '2026-08-01T00:00:00Z', date_to: '2026-08-14T23:59:59Z' }, limit: 100 });",
      "const cancelReasons: Promise<ListCancelReasonsResponse> = seller.ozon.cancellations.listCancelReasons();",
      "const orderCancelReasons: Promise<ListCancelReasonsByOrderResponse> = seller.ozon.cancellations.listCancelReasonsByOrder({ order_number: 'TEST-ORDER-001' });",
      "const postingCancelReasons: Promise<ListCancelReasonsByPostingResponse> = seller.ozon.cancellations.listCancelReasonsByPosting({ posting_number: 'TEST-POSTING-001' });",
      "const legacyAnalyticsStocks: Promise<GetAnalyticsStockOnWarehousesResponse> = seller.ozon.analytics.getAnalyticsStockOnWarehouses({ limit: 100 });",
      "const analyticsStocksTurnover: Promise<GetAnalyticsStocksTurnoverResponse> = seller.ozon.analytics.getAnalyticsStocksTurnover({ sku: ['100000001'] });",
      "const analyticsStocks: Promise<GetAnalyticsStocksResponse> = seller.ozon.analytics.getAnalyticsStocks({ cluster_ids: ['1001'], skus: ['100000001'] });",
      "const addedBarcodes: Promise<AddProductBarcodesResponse> = seller.ozon.barcodes.addProductBarcodes({ barcodes: [{ barcode: 'TEST-BARCODE-001', sku: 100000001 }] });",
      "const generatedBarcodes: Promise<GenerateProductBarcodesResponse> = seller.ozon.barcodes.generateProductBarcodes({ product_ids: ['100000002'] });",
      "const quantProducts: Promise<ListQuantProductsResponse> = seller.ozon.products.listQuantProducts({ limit: 100, visibility: 'ALL' });",
      "const quantProductsInfo: Promise<GetQuantProductsInfoResponse> = seller.ozon.products.getQuantProductsInfo({ quant_code: ['TEST-QUANT-001'] });",
      "const conditionalCancellations: Promise<ListConditionalCancellationsResponse> = seller.ozon.cancellations.listConditionalCancellations({ limit: 100 });",
      "const approvedCancellation: Promise<void> = seller.ozon.cancellations.approveConditionalCancellation({ cancellation_id: 700000001 });",
      "const rejectedCancellation: Promise<void> = seller.ozon.cancellations.rejectConditionalCancellation({ cancellation_id: 700000002, comment: 'Test reason' });",
      "const digitalPostings: Promise<ListDigitalPostingsResponse> = seller.ozon.digital.listDigitalPostings({ limit: 100, offset: 0 });",
      "const digitalPostingsV2: Promise<ListDigitalPostingsV2Response> = seller.ozon.digital.listDigitalPostingsV2({ cursor: 'TEST-CURSOR-001', limit: 100, sort_dir: 'ASC' });",
      "const uploadedDigitalCodes: Promise<UploadDigitalPostingCodesResponse> = seller.ozon.digital.uploadDigitalPostingCodes({ exemplars_by_sku: [{ exemplar_keys: ['TEST-CODE-001'], exemplar_qty: 1, not_available_exemplar_qty: 0, sku: 6605735423 }], posting_number: 'TEST-POSTING-001' });",
      "const importedDigitalStocks: Promise<ImportDigitalProductStocksResponse> = seller.ozon.digital.importDigitalProductStocks({ stocks: [{ offer_id: 'TEST-OFFER-001', stock: 2 }] });",
      "const importedProducts: Promise<ImportProductsResponse> = seller.ozon.products.importProducts({ items: [{ description_category_id: 100000001, depth: 100, dimension_unit: 'mm', height: 200, offer_id: 'TEST-OFFER-002', price: '1000.00', type_id: 100001, weight: 500, weight_unit: 'g', width: 150 }] });",
      "const importedProductsBySku: Promise<ImportProductsBySkuResponse> = seller.ozon.products.importProductsBySku({ items: [{ offer_id: 'TEST-OFFER-003', sku: 500000001 }] });",
      "const updatedProductAttributes: Promise<UpdateProductAttributesResponse> = seller.ozon.products.updateProductAttributes({ items: [{ attributes: [{ id: 85, values: [{ dictionary_value_id: 500000001 }] }], offer_id: 'TEST-OFFER-001' }] });",
      "const importedProductPictures: Promise<ImportProductPicturesResponse> = seller.ozon.products.importProductPictures({ images: ['https://example.invalid/product-main.png'], product_id: 500000001 });",
      "const productPictures: Promise<GetProductPicturesResponse> = seller.ozon.products.getProductPictures({ product_id: ['500000001'] });",
      "const updatedProductPrices: Promise<UpdateProductPricesResponse> = seller.ozon.products.updateProductPrices({ prices: [{ offer_id: 'TEST-OFFER-PRICE-001', old_price: '1600.00', price: '1448.00' }] });",
      "const updatedProductMinPriceTimer: Promise<void> = seller.ozon.products.updateProductMinPriceTimer({ product_ids: ['500000001'] });",
      "const productMinPriceTimerStatus: Promise<GetProductMinPriceTimerStatusResponse> = seller.ozon.products.getProductMinPriceTimerStatus({ product_ids: ['500000001'] });",
      "const productPrices: Promise<GetProductPricesResponse> = seller.ozon.products.getProductPrices({ filter: { visibility: 'ALL' }, limit: 100 });",
      "const discountedProductInfo: Promise<GetDiscountedProductInfoResponse> = seller.ozon.products.getDiscountedProductInfo({ discounted_skus: ['635548518'] });",
      "const updatedProductDiscount: Promise<UpdateProductDiscountResponse> = seller.ozon.products.updateProductDiscount({ discount: 15, product_id: 500000001 });",
      "const promotions: Promise<ListPromotionsResponse> = seller.ozon.promotions.listPromotions();",
      "const promotionCandidates: Promise<ListPromotionCandidatesResponse> = seller.ozon.promotions.listPromotionCandidates({ action_id: 71342, limit: 100 });",
      "const promotionProducts: Promise<ListPromotionProductsResponse> = seller.ozon.promotions.listPromotionProducts({ action_id: 71342, limit: 100 });",
      "const activatedPromotionProducts: Promise<ActivatePromotionProductsResponse> = seller.ozon.promotions.activatePromotionProducts({ action_id: 71342, products: [{ action_price: 100, product_id: 1389 }] });",
      "const deactivatedPromotionProducts: Promise<DeactivatePromotionProductsResponse> = seller.ozon.promotions.deactivatePromotionProducts({ action_id: 71342, product_ids: [1389] });",
      "const discountTasks: Promise<ListDiscountTasksResponse> = seller.ozon.promotions.listDiscountTasks({ status: 'NEW', page: 1, limit: 50 });",
      "const approvedDiscountTasks: Promise<ApproveDiscountTasksResponse> = seller.ozon.promotions.approveDiscountTasks({ tasks: [{ id: 1001, approved_price: 1450, approved_quantity_min: 1, approved_quantity_max: 3 }] });",
      "const declinedDiscountTasks: Promise<DeclineDiscountTasksResponse> = seller.ozon.promotions.declineDiscountTasks({ tasks: [{ id: 1002 }] });",
      "const pricingCompetitors: Promise<ListPricingCompetitorsResponse> = seller.ozon.pricingStrategies.listPricingCompetitors({ page: 1, limit: 100 });",
      "const pricingStrategies: Promise<ListPricingStrategiesResponse> = seller.ozon.pricingStrategies.listPricingStrategies({ page: 1, limit: 100 });",
      "const createdPricingStrategy: Promise<CreatePricingStrategyResponse> = seller.ozon.pricingStrategies.createPricingStrategy({ competitors: [{ coefficient: 0.95, competitor_id: 101 }], strategy_name: 'Synthetic strategy' });",
      "const pricingStrategy: Promise<GetPricingStrategyResponse> = seller.ozon.pricingStrategies.getPricingStrategy({ strategy_id: 'strategy-test-001' });",
      "const updatedPricingStrategy: Promise<UpdatePricingStrategyResponse> = seller.ozon.pricingStrategies.updatePricingStrategy({ competitors: [{ coefficient: 0.95, competitor_id: 101 }], strategy_id: 'strategy-test-001', strategy_name: 'Updated synthetic strategy' });",
      "const addedPricingStrategyProducts: Promise<AddProductsToPricingStrategyResponse> = seller.ozon.pricingStrategies.addProductsToPricingStrategy({ product_id: ['500000001'], strategy_id: 'strategy-test-001' });",
      "const productPricingStrategyIds: Promise<GetPricingStrategyIdsByProductIdsResponse> = seller.ozon.pricingStrategies.getPricingStrategyIdsByProductIds({ product_id: ['500000001'] });",
      "const pricingStrategyProducts: Promise<ListPricingStrategyProductsResponse> = seller.ozon.pricingStrategies.listPricingStrategyProducts({ strategy_id: 'strategy-test-001' });",
      "const pricingStrategyProductInfo: Promise<GetPricingStrategyProductInfoResponse> = seller.ozon.pricingStrategies.getPricingStrategyProductInfo({ product_id: 500000001 });",
      "const deletedPricingStrategyProducts: Promise<DeleteProductsFromPricingStrategyResponse> = seller.ozon.pricingStrategies.deleteProductsFromPricingStrategy({ product_id: ['500000001'] });",
      "const pricingStrategyStatus: Promise<UpdatePricingStrategyStatusResponse> = seller.ozon.pricingStrategies.updatePricingStrategyStatus({ enabled: false, strategy_id: 'strategy-test-001' });",
      "const deletedPricingStrategy: Promise<DeletePricingStrategyResponse> = seller.ozon.pricingStrategies.deletePricingStrategy({ strategy_id: 'strategy-test-001' });",
      "const passes: Promise<ListPassesResponse> = seller.ozon.passes.listPasses({ limit: 100 });",
      "const carriagePasses: Promise<CreateCarriagePassesResponse> = seller.ozon.passes.createCarriagePasses({ arrival_passes: [{ driver_name: 'Test Driver', driver_phone: '+00000000000', vehicle_license_plate: 'TEST-PLATE', vehicle_model: 'Test Vehicle' }], carriage_id: 600000001 });",
      "const updatedCarriagePasses: Promise<void> = seller.ozon.passes.updateCarriagePasses({ arrival_passes: [{ driver_name: 'Test Driver', driver_phone: '+00000000000', id: 700000001, vehicle_license_plate: 'TEST-PLATE', vehicle_model: 'Test Vehicle' }], carriage_id: 600000001 });",
      "const deletedCarriagePasses: Promise<void> = seller.ozon.passes.deleteCarriagePasses({ arrival_pass_ids: ['700000001'], carriage_id: 600000001 });",
      "const returnPasses: Promise<CreateReturnPassesResponse> = seller.ozon.passes.createReturnPasses({ arrival_passes: [{ arrival_time: '2026-08-20T10:00:00Z', driver_name: 'Test Driver', driver_phone: '+00000000000', dropoff_point_id: 800000001, vehicle_license_plate: 'TEST-PLATE', vehicle_model: 'Test Vehicle', warehouse_id: 900000001 }] });",
      "const updatedReturnPasses: Promise<void> = seller.ozon.passes.updateReturnPasses({ arrival_passes: [{ arrival_pass_id: 700000002, arrival_time: '2026-08-20T11:00:00Z', driver_name: 'Test Driver', driver_phone: '+00000000000', vehicle_license_plate: 'TEST-PLATE', vehicle_model: 'Test Vehicle' }] });",
      "const listedProducts: Promise<ListProductsResponse> = seller.ozon.products.listProducts({ filter: { offer_id: ['TEST-OFFER-001'], visibility: 'ALL' }, limit: 100 });",
      "const productInfoList: Promise<GetProductInfoListResponse> = seller.ozon.products.getProductInfoList({ offer_id: ['TEST-OFFER-001'] });",
      "const productAttributes: Promise<GetProductAttributesResponse> = seller.ozon.products.getProductAttributes({ filter: { sku: ['600000001'], visibility: 'ALL' }, limit: 100 });",
      "const productDescription: Promise<GetProductDescriptionResponse> = seller.ozon.products.getProductDescription({ offer_id: 'TEST-OFFER-001' });",
      "const productsWithWrongVolume: Promise<ListProductsWithWrongVolumeResponse> = seller.ozon.products.listProductsWithWrongVolume({ limit: 1000 });",
      "const updatedProductStocks: Promise<UpdateProductStocksResponse> = seller.ozon.products.updateProductStocks({ stocks: [{ offer_id: 'TEST-OFFER-STOCK-001', stock: 100, warehouse_id: 700000001 }] });",
      "const productStocks: Promise<GetProductStocksResponse> = seller.ozon.products.getProductStocks({ filter: { visibility: 'ALL' }, limit: 100 });",
      "const warehouseProductStocks: Promise<GetProductStocksByWarehouseResponse> = seller.ozon.products.getProductStocksByWarehouse({ limit: 1000, warehouse_id: 700000001 });",
      "const fbsWarehouseProductStocks: Promise<GetProductStocksByWarehouseFbsResponse> = seller.ozon.products.getProductStocksByWarehouseFbs({ sku: ['600000001'] });",
      "const fbsWarehouseProductStocksV2: Promise<GetProductStocksByWarehouseFbsV2Response> = seller.ozon.products.getProductStocksByWarehouseFbsV2({ limit: 1000, sku: ['600000001'] });",
      "const productSubscriptionCounts: Promise<GetProductSubscriptionCountsResponse> = seller.ozon.products.getProductSubscriptionCounts({ skus: ['600000001'] });",
      "const relatedProductSkus: Promise<GetRelatedProductSkusResponse> = seller.ozon.products.getRelatedProductSkus({ sku: ['600000001'] });",
      "const productUploadQuota: Promise<GetProductUploadQuotaResponse> = seller.ozon.products.getProductUploadQuota();",
      "const archivedProducts: Promise<ArchiveProductsResponse> = seller.ozon.products.archiveProducts({ product_id: [500000001] });",
      "const unarchivedProducts: Promise<UnarchiveProductsResponse> = seller.ozon.products.unarchiveProducts({ product_id: [500000001] });",
      "const deletedProducts: Promise<DeleteProductsResponse> = seller.ozon.products.deleteProducts({ products: [{ offer_id: 'TEST-OFFER-DELETABLE' }] });",
      "const updatedProductOfferIds: Promise<UpdateProductOfferIdsResponse> = seller.ozon.products.updateProductOfferIds({ update_offer_id: [{ offer_id: 'TEST-OFFER-OLD', new_offer_id: 'TEST-OFFER-NEW' }] });",
      "const productRating: Promise<GetProductRatingBySkuResponse> = seller.ozon.products.getProductRatingBySku({ skus: ['600000001'] });",
      "const productImportStatus: Promise<GetProductImportStatusResponse> = seller.ozon.products.getProductImportStatus({ task_id: 400000001 });",
      "const cancelledFboPosting: Promise<CancelFboPostingResponse> = seller.ozon.postings.cancelFboPosting({ posting_number: 'TEST-POSTING-003', reason_id: 101 });",
      "const fboCancellationStatus: Promise<GetFboPostingCancellationStatusResponse> = seller.ozon.postings.getFboPostingCancellationStatus({ posting_number: 'TEST-POSTING-003' });",
      "const fboPostingMarks: Promise<GetFboPostingMarksResponse> = seller.ozon.postings.getFboPostingMarks({ posting_numbers: ['TEST-POSTING-003'] });",
      "const cancelledOrder: Promise<CancelOrderResponse> = seller.ozon.orders.cancelOrder({ order_number: 'TEST-ORDER-004', reason_id: 101 });",
      "const orderCancellationCheck: Promise<CheckOrderCancellationResponse> = seller.ozon.orders.checkOrderCancellation({ order_number: 'TEST-ORDER-004' });",
      "const orderCancellationStatus: Promise<GetOrderCancellationStatusResponse> = seller.ozon.orders.getOrderCancellationStatus({ order_number: 'TEST-ORDER-004' });",
      "const createdOrder: Promise<CreateOrderResponse> = seller.ozon.orders.createOrder({ buyer: { first_name: 'TEST', last_name: 'BUYER', phone: '+00000000000' }, recipient: { recipient_first_name: 'TEST', recipient_last_name: 'RECIPIENT', recipient_phone: '+00000000000' }, delivery: { pick_up: { map_point_id: 100000001 } }, delivery_schema: 'FBO', splits: [] });",
      "const supplyOrderActSummary: Promise<GetSupplyOrderActSummaryResponse> = seller.ozon.supplyOrders.getSupplyOrderActSummary({ order_id: 100000001 });",
      "const supplyOrderActProducts: Promise<GetSupplyOrderActProductsResponse> = seller.ozon.supplyOrders.getSupplyOrderActProducts({ supply_id: 100000001 });",
      "void seller;",
      "void ozon;",
      "void directRoles;",
      "void latestWarehouses;",
      "void rawRequest;",
      "void allProducts;",
      "void rootRoles;",
      "void logistics;",
      "void sellerInfo;",
      "void categoryTree;",
      "void categoryAttributes;",
      "void categoryAttributeValues;",
      "void searchedAttributeValues;",
      "void placementZones;",
      "void brandCertifications;",
      "void ozonWarehouses;",
      "void certificates;",
      "void certificateProductStatuses;",
      "void certificateProducts;",
      "void unboundCertificate;",
      "void certificateRejectionReasons;",
      "void certificateStatuses;",
      "void warehousesV1;",
      "void deliveryMethodsV1;",
      "void deliveryMethodsV2;",
      "void deliveryReturnSettings;",
      "void warehousesV2;",
      "void warehouseOperation;",
      "void archivedFbsWarehouse;",
      "void unarchivedFbsWarehouse;",
      "void invalidWarehouseProducts;",
      "void warehousesWithInvalidProducts;",
      "void createdDeliveryPolygon;",
      "void boundDeliveryPolygon;",
      "void supplierWarehouses;",
      "void fboSupplyWarehouses;",
      "void ratingSummary;",
      "void ratingHistory;",
      "void fbsRatingIndex;",
      "void fbsRatingIndexPostings;",
      "void cancelReasons;",
      "void orderCancelReasons;",
      "void postingCancelReasons;",
      "void legacyAnalyticsStocks;",
      "void analyticsStocksTurnover;",
      "void analyticsStocks;",
      "void addedBarcodes;",
      "void generatedBarcodes;",
      "void quantProducts;",
      "void quantProductsInfo;",
      "void conditionalCancellations;",
      "void approvedCancellation;",
      "void rejectedCancellation;",
      "void digitalPostings;",
      "void digitalPostingsV2;",
      "void uploadedDigitalCodes;",
      "void importedDigitalStocks;",
      "void importedProducts;",
      "void importedProductsBySku;",
      "void updatedProductAttributes;",
      "void importedProductPictures;",
      "void productPictures;",
      "void updatedProductPrices;",
      "void updatedProductMinPriceTimer;",
      "void productMinPriceTimerStatus;",
      "void productPrices;",
      "void discountedProductInfo;",
      "void updatedProductDiscount;",
      "void promotions;",
      "void promotionCandidates;",
      "void promotionProducts;",
      "void activatedPromotionProducts;",
      "void deactivatedPromotionProducts;",
      "void discountTasks;",
      "void approvedDiscountTasks;",
      "void declinedDiscountTasks;",
      "void pricingCompetitors;",
      "void pricingStrategies;",
      "void createdPricingStrategy;",
      "void pricingStrategy;",
      "void updatedPricingStrategy;",
      "void addedPricingStrategyProducts;",
      "void productPricingStrategyIds;",
      "void pricingStrategyProducts;",
      "void pricingStrategyProductInfo;",
      "void deletedPricingStrategyProducts;",
      "void pricingStrategyStatus;",
      "void deletedPricingStrategy;",
      "void passes;",
      "void carriagePasses;",
      "void updatedCarriagePasses;",
      "void deletedCarriagePasses;",
      "void returnPasses;",
      "void updatedReturnPasses;",
      "void listedProducts;",
      "void productInfoList;",
      "void productAttributes;",
      "void productDescription;",
      "void productsWithWrongVolume;",
      "void updatedProductStocks;",
      "void productStocks;",
      "void warehouseProductStocks;",
      "void fbsWarehouseProductStocks;",
      "void fbsWarehouseProductStocksV2;",
      "void productSubscriptionCounts;",
      "void relatedProductSkus;",
      "void productUploadQuota;",
      "void archivedProducts;",
      "void unarchivedProducts;",
      "void deletedProducts;",
      "void updatedProductOfferIds;",
      "void productRating;",
      "void productImportStatus;",
      "void cancelledFboPosting;",
      "void fboCancellationStatus;",
      "void fboPostingMarks;",
      "void cancelledOrder;",
      "void orderCancellationCheck;",
      "void orderCancellationStatus;",
      "void createdOrder;",
      "void supplyOrderActSummary;",
      "void supplyOrderActProducts;",
    ].join("\n"),
  );
  writeFileSync(
    join(consumerDirectory, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2022",
          module: "NodeNext",
          moduleResolution: "NodeNext",
          strict: true,
          noEmit: true,
          skipLibCheck: false,
        },
        include: ["smoke.ts"],
      },
      null,
      2,
    ),
  );

  const typescriptBinary = join(
    projectDirectory,
    "node_modules",
    "typescript",
    "bin",
    "tsc",
  );
  execFileSync(process.execPath, [typescriptBinary, "-p", "tsconfig.json"], {
    cwd: consumerDirectory,
    stdio: "pipe",
  });

  const runtimeFile = join(consumerDirectory, "smoke.mjs");
  writeFileSync(
    runtimeFile,
    [
      'import { Marketplace, SellerClient } from "seller-sdk";',
      'import { OzonClient } from "@seller-sdk/ozon";',
      "const credentials = { clientId: 'test-client-id', apiKey: 'test-api-key' };",
      "const seller = new SellerClient({ marketplace: Marketplace.Ozon, credentials });",
      "const ozon = new OzonClient(credentials, { maxRetries: 1 });",
      "if (seller.marketplace !== 'ozon' || !(ozon instanceof OzonClient) || typeof seller.ozon.products.list !== 'function' || typeof ozon.finance.listFinanceTransactions !== 'function' || typeof ozon.finance.listFinanceTransactionsV3 !== 'function' || typeof ozon.warehouses.listWarehouses !== 'function' || typeof ozon.products.listAll !== 'function' || typeof ozon.rawRequest !== 'function' || typeof seller.ozon.finance.accruals.byDay !== 'function' || typeof seller.ozon.finance.accruals.byPostings !== 'function' || typeof seller.ozon.finance.accruals.types !== 'function' || 'listProducts' in seller.ozon) throw new Error('Smoke failed');",
      "console.log('seller-sdk consumer smoke passed');",
    ].join("\n"),
  );
  const runtimeOutput = execFileSync(process.execPath, [runtimeFile], {
    cwd: consumerDirectory,
    encoding: "utf8",
  });
  if (!runtimeOutput.includes("consumer smoke passed")) {
    throw new Error("Consumer runtime smoke did not report success.");
  }

  const installedPackageJson = JSON.parse(
    readFileSync(
      join(consumerDirectory, "node_modules", "seller-sdk", "package.json"),
      "utf8",
    ),
  );
  if (installedPackageJson.name !== "seller-sdk") {
    throw new Error("Packed package name is incorrect.");
  }

  const installedOzonPackageJson = JSON.parse(
    readFileSync(
      join(
        consumerDirectory,
        "node_modules",
        "@seller-sdk",
        "ozon",
        "package.json",
      ),
      "utf8",
    ),
  );
  if (installedOzonPackageJson.name !== "@seller-sdk/ozon") {
    throw new Error("Packed Ozon package name is incorrect.");
  }
  if ("@seller-sdk/core" in (installedOzonPackageJson.dependencies ?? {})) {
    throw new Error("Packed Ozon package must not depend on @seller-sdk/core.");
  }

  if (
    existsSync(
      join(
        consumerDirectory,
        "node_modules",
        "@seller-sdk",
        "core",
        "package.json",
      ),
    )
  ) {
    throw new Error("Consumer must not install @seller-sdk/core.");
  }

  console.log(
    "seller-sdk and standalone @seller-sdk/ozon tarballs, runtime imports, type imports, and dependency isolation passed",
  );
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
