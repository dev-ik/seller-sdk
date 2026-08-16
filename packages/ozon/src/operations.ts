import type { Transport } from "#internal-core";
import { executeGetRoles } from "./endpoints/access/get-roles/execute.js";
import type { GetRolesResponse } from "./endpoints/access/get-roles/types.js";
import { executeGetAnalyticsStockOnWarehouses } from "./endpoints/analytics/get-stock-on-warehouses/execute.js";
import type {
  GetAnalyticsStockOnWarehousesRequest,
  GetAnalyticsStockOnWarehousesResponse,
} from "./endpoints/analytics/get-stock-on-warehouses/types.js";
import { executeGetAnalyticsStocks } from "./endpoints/analytics/get-stocks/execute.js";
import type {
  GetAnalyticsStocksRequest,
  GetAnalyticsStocksResponse,
} from "./endpoints/analytics/get-stocks/types.js";
import { executeGetAnalyticsStocksTurnover } from "./endpoints/analytics/get-stocks-turnover/execute.js";
import type {
  GetAnalyticsStocksTurnoverRequest,
  GetAnalyticsStocksTurnoverResponse,
} from "./endpoints/analytics/get-stocks-turnover/types.js";
import { executeAddProductBarcodes } from "./endpoints/barcode/add/execute.js";
import type {
  AddProductBarcodesRequest,
  AddProductBarcodesResponse,
} from "./endpoints/barcode/add/types.js";
import { executeGenerateProductBarcodes } from "./endpoints/barcode/generate/execute.js";
import type {
  GenerateProductBarcodesRequest,
  GenerateProductBarcodesResponse,
} from "./endpoints/barcode/generate/types.js";
import { executeListBrandCertifications } from "./endpoints/brand/list-certifications/execute.js";
import type {
  ListBrandCertificationsRequest,
  ListBrandCertificationsResponse,
} from "./endpoints/brand/list-certifications/types.js";
import { executeApproveConditionalCancellation } from "./endpoints/cancellation/conditional/approve/execute.js";
import type { ApproveConditionalCancellationRequest } from "./endpoints/cancellation/conditional/approve/types.js";
import { executeListConditionalCancellations } from "./endpoints/cancellation/conditional/list/execute.js";
import type {
  ListConditionalCancellationsRequest,
  ListConditionalCancellationsResponse,
} from "./endpoints/cancellation/conditional/list/types.js";
import { executeRejectConditionalCancellation } from "./endpoints/cancellation/conditional/reject/execute.js";
import type { RejectConditionalCancellationRequest } from "./endpoints/cancellation/conditional/reject/types.js";
import { executeListCancelReasons } from "./endpoints/cancellation/list-reasons/execute.js";
import type { ListCancelReasonsResponse } from "./endpoints/cancellation/list-reasons/types.js";
import { executeListCancelReasonsByOrder } from "./endpoints/cancellation/list-reasons-by-order/execute.js";
import type {
  ListCancelReasonsByOrderRequest,
  ListCancelReasonsByOrderResponse,
} from "./endpoints/cancellation/list-reasons-by-order/types.js";
import { executeListCancelReasonsByPosting } from "./endpoints/cancellation/list-reasons-by-posting/execute.js";
import type {
  ListCancelReasonsByPostingRequest,
  ListCancelReasonsByPostingResponse,
} from "./endpoints/cancellation/list-reasons-by-posting/types.js";
import { executeGetDescriptionCategoryAttributes } from "./endpoints/category/get-attributes/execute.js";
import type {
  GetDescriptionCategoryAttributesRequest,
  GetDescriptionCategoryAttributesResponse,
} from "./endpoints/category/get-attributes/types.js";
import { executeGetDescriptionCategoryAttributeValues } from "./endpoints/category/get-attribute-values/execute.js";
import type {
  GetDescriptionCategoryAttributeValuesRequest,
  GetDescriptionCategoryAttributeValuesResponse,
} from "./endpoints/category/get-attribute-values/types.js";
import { executeGetDescriptionCategoryTree } from "./endpoints/category/get-tree/execute.js";
import type {
  GetDescriptionCategoryTreeRequest,
  GetDescriptionCategoryTreeResponse,
} from "./endpoints/category/get-tree/types.js";
import { executeSearchDescriptionCategoryAttributeValues } from "./endpoints/category/search-attribute-values/execute.js";
import type {
  SearchDescriptionCategoryAttributeValuesRequest,
  SearchDescriptionCategoryAttributeValuesResponse,
} from "./endpoints/category/search-attribute-values/types.js";
import { executeListDigitalPostings } from "./endpoints/digital/posting/list/execute.js";
import type {
  ListDigitalPostingsRequest,
  ListDigitalPostingsResponse,
} from "./endpoints/digital/posting/list/types.js";
import { executeListDigitalPostingsV2 } from "./endpoints/digital/posting/list-v2/execute.js";
import type {
  ListDigitalPostingsV2Request,
  ListDigitalPostingsV2Response,
} from "./endpoints/digital/posting/list-v2/types.js";
import { executeUploadDigitalPostingCodes } from "./endpoints/digital/posting/upload-codes/execute.js";
import type {
  UploadDigitalPostingCodesRequest,
  UploadDigitalPostingCodesResponse,
} from "./endpoints/digital/posting/upload-codes/types.js";
import { executeImportDigitalProductStocks } from "./endpoints/digital/product/import-stocks/execute.js";
import type {
  ImportDigitalProductStocksRequest,
  ImportDigitalProductStocksResponse,
} from "./endpoints/digital/product/import-stocks/types.js";
import { executeCreateOrUpdateInvoice } from "./endpoints/invoice/create-or-update/execute.js";
import type {
  CreateOrUpdateInvoiceRequest,
  CreateOrUpdateInvoiceResponse,
} from "./endpoints/invoice/create-or-update/types.js";
import { executeDeleteInvoice } from "./endpoints/invoice/delete/execute.js";
import type {
  DeleteInvoiceRequest,
  DeleteInvoiceResponse,
} from "./endpoints/invoice/delete/types.js";
import { executeGetInvoice } from "./endpoints/invoice/get/execute.js";
import type {
  GetInvoiceRequest,
  GetInvoiceResponse,
} from "./endpoints/invoice/get/types.js";
import { executeUploadInvoiceFile } from "./endpoints/invoice/upload-file/execute.js";
import type {
  UploadInvoiceFileRequest,
  UploadInvoiceFileResponse,
} from "./endpoints/invoice/upload-file/types.js";
import { executeCancelOrder } from "./endpoints/order/cancel/execute.js";
import type {
  CancelOrderRequest,
  CancelOrderResponse,
} from "./endpoints/order/cancel/types.js";
import { executeCheckOrderCancellation } from "./endpoints/order/check-cancellation/execute.js";
import type {
  CheckOrderCancellationRequest,
  CheckOrderCancellationResponse,
} from "./endpoints/order/check-cancellation/types.js";
import { executeCreateOrder } from "./endpoints/order/create/execute.js";
import type {
  CreateOrderRequest,
  CreateOrderResponse,
} from "./endpoints/order/create/types.js";
import { executeGetOrderCancellationStatus } from "./endpoints/order/get-cancellation-status/execute.js";
import type {
  GetOrderCancellationStatusRequest,
  GetOrderCancellationStatusResponse,
} from "./endpoints/order/get-cancellation-status/types.js";
import { executeCancelFboPosting } from "./endpoints/posting/fbo/cancel/execute.js";
import type {
  CancelFboPostingRequest,
  CancelFboPostingResponse,
} from "./endpoints/posting/fbo/cancel/types.js";
import { executeGetFboPostingCancellationStatus } from "./endpoints/posting/fbo/get-cancel-status/execute.js";
import type {
  GetFboPostingCancellationStatusRequest,
  GetFboPostingCancellationStatusResponse,
} from "./endpoints/posting/fbo/get-cancel-status/types.js";
import { executeGetFboPostingMarks } from "./endpoints/posting/fbo/get-marks/execute.js";
import type {
  GetFboPostingMarksRequest,
  GetFboPostingMarksResponse,
} from "./endpoints/posting/fbo/get-marks/types.js";
import { executeGetProductPlacementZoneInfo } from "./endpoints/product/get-placement-zone-info/execute.js";
import type {
  GetProductPlacementZoneInfoRequest,
  GetProductPlacementZoneInfoResponse,
} from "./endpoints/product/get-placement-zone-info/types.js";
import { executeGetProductAttributes } from "./endpoints/product/info/attributes/execute.js";
import type {
  GetProductAttributesRequest,
  GetProductAttributesResponse,
} from "./endpoints/product/info/attributes/types.js";
import { executeGetProductDescription } from "./endpoints/product/info/description/execute.js";
import type {
  GetProductDescriptionRequest,
  GetProductDescriptionResponse,
} from "./endpoints/product/info/description/types.js";
import { executeGetProductInfoList } from "./endpoints/product/info/list/execute.js";
import type {
  GetProductInfoListRequest,
  GetProductInfoListResponse,
} from "./endpoints/product/info/list/types.js";
import { executeGetProductSubscriptionCounts } from "./endpoints/product/info/subscription/execute.js";
import type {
  GetProductSubscriptionCountsRequest,
  GetProductSubscriptionCountsResponse,
} from "./endpoints/product/info/subscription/types.js";
import { executeGetProductUploadQuota } from "./endpoints/product/info/upload-quota/execute.js";
import type { GetProductUploadQuotaResponse } from "./endpoints/product/info/upload-quota/types.js";
import { executeUpdateProductAttributes } from "./endpoints/product/attributes/update/execute.js";
import type {
  UpdateProductAttributesRequest,
  UpdateProductAttributesResponse,
} from "./endpoints/product/attributes/update/types.js";
import { executeUpdateProductOfferIds } from "./endpoints/product/offer-id/update/execute.js";
import type {
  UpdateProductOfferIdsRequest,
  UpdateProductOfferIdsResponse,
} from "./endpoints/product/offer-id/update/types.js";
import { executeImportProducts } from "./endpoints/product/import/create/execute.js";
import type {
  ImportProductsRequest,
  ImportProductsResponse,
} from "./endpoints/product/import/create/types.js";
import { executeImportProductsBySku } from "./endpoints/product/import/by-sku/execute.js";
import type {
  ImportProductsBySkuRequest,
  ImportProductsBySkuResponse,
} from "./endpoints/product/import/by-sku/types.js";
import { executeGetProductImportStatus } from "./endpoints/product/import/get-status/execute.js";
import type {
  GetProductImportStatusRequest,
  GetProductImportStatusResponse,
} from "./endpoints/product/import/get-status/types.js";
import { executeListProductsWithWrongVolume } from "./endpoints/product/info/wrong-volume/execute.js";
import type {
  ListProductsWithWrongVolumeRequest,
  ListProductsWithWrongVolumeResponse,
} from "./endpoints/product/info/wrong-volume/types.js";
import { executeArchiveProducts } from "./endpoints/product/lifecycle/archive/execute.js";
import type {
  ArchiveProductsRequest,
  ArchiveProductsResponse,
} from "./endpoints/product/lifecycle/archive/types.js";
import { executeDeleteProducts } from "./endpoints/product/lifecycle/delete/execute.js";
import type {
  DeleteProductsRequest,
  DeleteProductsResponse,
} from "./endpoints/product/lifecycle/delete/types.js";
import { executeUnarchiveProducts } from "./endpoints/product/lifecycle/unarchive/execute.js";
import type {
  UnarchiveProductsRequest,
  UnarchiveProductsResponse,
} from "./endpoints/product/lifecycle/unarchive/types.js";
import { executeGetQuantProductsInfo } from "./endpoints/product/quant/get-info/execute.js";
import type {
  GetQuantProductsInfoRequest,
  GetQuantProductsInfoResponse,
} from "./endpoints/product/quant/get-info/types.js";
import { executeImportProductPictures } from "./endpoints/product/pictures/import/execute.js";
import type {
  ImportProductPicturesRequest,
  ImportProductPicturesResponse,
} from "./endpoints/product/pictures/import/types.js";
import { executeUpdateProductPrices } from "./endpoints/product/prices/update/execute.js";
import type {
  UpdateProductPricesRequest,
  UpdateProductPricesResponse,
} from "./endpoints/product/prices/update/types.js";
import { executeUpdateProductMinPriceTimer } from "./endpoints/product/prices/update-min-price-timer/execute.js";
import type { UpdateProductMinPriceTimerRequest } from "./endpoints/product/prices/update-min-price-timer/types.js";
import { executeGetProductMinPriceTimerStatus } from "./endpoints/product/prices/get-min-price-timer-status/execute.js";
import type {
  GetProductMinPriceTimerStatusRequest,
  GetProductMinPriceTimerStatusResponse,
} from "./endpoints/product/prices/get-min-price-timer-status/types.js";
import { executeGetProductPrices } from "./endpoints/product/prices/get-info/execute.js";
import type {
  GetProductPricesRequest,
  GetProductPricesResponse,
} from "./endpoints/product/prices/get-info/types.js";
import { executeGetDiscountedProductInfo } from "./endpoints/product/discount/get-info/execute.js";
import type {
  GetDiscountedProductInfoRequest,
  GetDiscountedProductInfoResponse,
} from "./endpoints/product/discount/get-info/types.js";
import { executeUpdateProductDiscount } from "./endpoints/product/discount/update/execute.js";
import type {
  UpdateProductDiscountRequest,
  UpdateProductDiscountResponse,
} from "./endpoints/product/discount/update/types.js";
import { executeListPromotions } from "./endpoints/promotion/list/execute.js";
import type { ListPromotionsResponse } from "./endpoints/promotion/list/types.js";
import { executeListPromotionCandidates } from "./endpoints/promotion/products/list-candidates/execute.js";
import type {
  ListPromotionCandidatesRequest,
  ListPromotionCandidatesResponse,
} from "./endpoints/promotion/products/list-candidates/types.js";
import { executeListPromotionProducts } from "./endpoints/promotion/products/list-participating/execute.js";
import type {
  ListPromotionProductsRequest,
  ListPromotionProductsResponse,
} from "./endpoints/promotion/products/list-participating/types.js";
import { executeActivatePromotionProducts } from "./endpoints/promotion/products/activate/execute.js";
import type {
  ActivatePromotionProductsRequest,
  ActivatePromotionProductsResponse,
} from "./endpoints/promotion/products/activate/types.js";
import { executeDeactivatePromotionProducts } from "./endpoints/promotion/products/deactivate/execute.js";
import type {
  DeactivatePromotionProductsRequest,
  DeactivatePromotionProductsResponse,
} from "./endpoints/promotion/products/deactivate/types.js";
import { executeListDiscountTasks } from "./endpoints/promotion/discount-task/list/v1/execute.js";
import type {
  ListDiscountTasksRequest,
  ListDiscountTasksResponse,
} from "./endpoints/promotion/discount-task/list/v1/types.js";
import { executeApproveDiscountTasks } from "./endpoints/promotion/discount-task/approve/v1/execute.js";
import type {
  ApproveDiscountTasksRequest,
  ApproveDiscountTasksResponse,
} from "./endpoints/promotion/discount-task/approve/v1/types.js";
import { executeDeclineDiscountTasks } from "./endpoints/promotion/discount-task/decline/v1/execute.js";
import type {
  DeclineDiscountTasksRequest,
  DeclineDiscountTasksResponse,
} from "./endpoints/promotion/discount-task/decline/v1/types.js";
import { executeListPricingCompetitors } from "./endpoints/pricing-strategy/competitors/list/execute.js";
import type {
  ListPricingCompetitorsRequest,
  ListPricingCompetitorsResponse,
} from "./endpoints/pricing-strategy/competitors/list/types.js";
import { executeListPricingStrategies } from "./endpoints/pricing-strategy/list/execute.js";
import type {
  ListPricingStrategiesRequest,
  ListPricingStrategiesResponse,
} from "./endpoints/pricing-strategy/list/types.js";
import { executeCreatePricingStrategy } from "./endpoints/pricing-strategy/create/execute.js";
import type {
  CreatePricingStrategyRequest,
  CreatePricingStrategyResponse,
} from "./endpoints/pricing-strategy/create/types.js";
import { executeGetPricingStrategy } from "./endpoints/pricing-strategy/get-info/execute.js";
import type {
  GetPricingStrategyRequest,
  GetPricingStrategyResponse,
} from "./endpoints/pricing-strategy/get-info/types.js";
import { executeUpdatePricingStrategy } from "./endpoints/pricing-strategy/update/execute.js";
import type {
  UpdatePricingStrategyRequest,
  UpdatePricingStrategyResponse,
} from "./endpoints/pricing-strategy/update/types.js";
import { executeAddProductsToPricingStrategy } from "./endpoints/pricing-strategy/products/add/execute.js";
import type {
  AddProductsToPricingStrategyRequest,
  AddProductsToPricingStrategyResponse,
} from "./endpoints/pricing-strategy/products/add/types.js";
import { executeGetPricingStrategyIdsByProductIds } from "./endpoints/pricing-strategy/products/get-strategy-ids/execute.js";
import type {
  GetPricingStrategyIdsByProductIdsRequest,
  GetPricingStrategyIdsByProductIdsResponse,
} from "./endpoints/pricing-strategy/products/get-strategy-ids/types.js";
import { executeListPricingStrategyProducts } from "./endpoints/pricing-strategy/products/list/execute.js";
import type {
  ListPricingStrategyProductsRequest,
  ListPricingStrategyProductsResponse,
} from "./endpoints/pricing-strategy/products/list/types.js";
import { executeGetPricingStrategyProductInfo } from "./endpoints/pricing-strategy/products/get-info/execute.js";
import type {
  GetPricingStrategyProductInfoRequest,
  GetPricingStrategyProductInfoResponse,
} from "./endpoints/pricing-strategy/products/get-info/types.js";
import { executeDeleteProductsFromPricingStrategy } from "./endpoints/pricing-strategy/products/delete/execute.js";
import type {
  DeleteProductsFromPricingStrategyRequest,
  DeleteProductsFromPricingStrategyResponse,
} from "./endpoints/pricing-strategy/products/delete/types.js";
import { executeUpdatePricingStrategyStatus } from "./endpoints/pricing-strategy/status/update/execute.js";
import type {
  UpdatePricingStrategyStatusRequest,
  UpdatePricingStrategyStatusResponse,
} from "./endpoints/pricing-strategy/status/update/types.js";
import { executeDeletePricingStrategy } from "./endpoints/pricing-strategy/delete/execute.js";
import type {
  DeletePricingStrategyRequest,
  DeletePricingStrategyResponse,
} from "./endpoints/pricing-strategy/delete/types.js";
import { executeListPasses } from "./endpoints/pass/list/execute.js";
import type {
  ListPassesRequest,
  ListPassesResponse,
} from "./endpoints/pass/list/types.js";
import { executeCreateCarriagePasses } from "./endpoints/pass/carriage/create/execute.js";
import type {
  CreateCarriagePassesRequest,
  CreateCarriagePassesResponse,
} from "./endpoints/pass/carriage/create/types.js";
import { executeUpdateCarriagePasses } from "./endpoints/pass/carriage/update/execute.js";
import type { UpdateCarriagePassesRequest } from "./endpoints/pass/carriage/update/types.js";
import { executeDeleteCarriagePasses } from "./endpoints/pass/carriage/delete/execute.js";
import type { DeleteCarriagePassesRequest } from "./endpoints/pass/carriage/delete/types.js";
import { executeCreateReturnPasses } from "./endpoints/pass/return/create/execute.js";
import type {
  CreateReturnPassesRequest,
  CreateReturnPassesResponse,
} from "./endpoints/pass/return/create/types.js";
import { executeUpdateReturnPasses } from "./endpoints/pass/return/update/execute.js";
import type { UpdateReturnPassesRequest } from "./endpoints/pass/return/update/types.js";
import { executeDeleteReturnPasses } from "./endpoints/pass/return/delete/execute.js";
import type { DeleteReturnPassesRequest } from "./endpoints/pass/return/delete/types.js";
import { executeBindDeliveryPolygonV1 } from "./endpoints/polygon/bind/v1/execute.js";
import type {
  BindDeliveryPolygonV1Request,
  BindDeliveryPolygonV1Response,
} from "./endpoints/polygon/bind/v1/types.js";
import { executeCreateDeliveryPolygonV1 } from "./endpoints/polygon/create/v1/execute.js";
import type {
  CreateDeliveryPolygonV1Request,
  CreateDeliveryPolygonV1Response,
} from "./endpoints/polygon/create/v1/types.js";
import { executeListCertificateAccordanceTypesV1 } from "./endpoints/product/certificate/accordance-types/v1/execute.js";
import type { ListCertificateAccordanceTypesV1Response } from "./endpoints/product/certificate/accordance-types/v1/types.js";
import { executeListCertificateAccordanceTypesV2 } from "./endpoints/product/certificate/accordance-types/v2/execute.js";
import type { ListCertificateAccordanceTypesV2Response } from "./endpoints/product/certificate/accordance-types/v2/types.js";
import { executeListCertificateTypes } from "./endpoints/product/certificate/types/list/execute.js";
import type { ListCertificateTypesResponse } from "./endpoints/product/certificate/types/list/types.js";
import { executeListCertificationCategoriesV2 } from "./endpoints/product/certificate/certification/list/v2/execute.js";
import type {
  ListCertificationCategoriesV2Request,
  ListCertificationCategoriesV2Response,
} from "./endpoints/product/certificate/certification/list/v2/types.js";
import { executeListCertificationCategoriesV1 } from "./endpoints/product/certificate/certification/list/v1/execute.js";
import type {
  ListCertificationCategoriesV1Request,
  ListCertificationCategoriesV1Response,
} from "./endpoints/product/certificate/certification/list/v1/types.js";
import { executeCreateProductCertificateV1 } from "./endpoints/product/certificate/create/v1/execute.js";
import type {
  CreateProductCertificateV1Request,
  CreateProductCertificateV1Response,
} from "./endpoints/product/certificate/create/v1/types.js";
import { executeBindProductCertificate } from "./endpoints/product/certificate/bind/execute.js";
import type {
  BindProductCertificateRequest,
  BindProductCertificateResponse,
} from "./endpoints/product/certificate/bind/types.js";
import { executeDeleteProductCertificate } from "./endpoints/product/certificate/delete/execute.js";
import type {
  DeleteProductCertificateRequest,
  DeleteProductCertificateResponse,
} from "./endpoints/product/certificate/delete/types.js";
import { executeGetProductCertificateInfo } from "./endpoints/product/certificate/get-info/execute.js";
import type {
  GetProductCertificateInfoRequest,
  GetProductCertificateInfoResponse,
} from "./endpoints/product/certificate/get-info/types.js";
import { executeListProductCertificates } from "./endpoints/product/certificate/list/execute.js";
import type {
  ListProductCertificatesRequest,
  ListProductCertificatesResponse,
} from "./endpoints/product/certificate/list/types.js";
import { executeListCertificateProductStatuses } from "./endpoints/product/certificate/product-status/list/execute.js";
import type { ListCertificateProductStatusesResponse } from "./endpoints/product/certificate/product-status/list/types.js";
import { executeListCertificateProducts } from "./endpoints/product/certificate/products/list/execute.js";
import type {
  ListCertificateProductsRequest,
  ListCertificateProductsResponse,
} from "./endpoints/product/certificate/products/list/types.js";
import { executeListCertificateRejectionReasons } from "./endpoints/product/certificate/rejection-reasons/list/execute.js";
import type { ListCertificateRejectionReasonsResponse } from "./endpoints/product/certificate/rejection-reasons/list/types.js";
import { executeListCertificateStatuses } from "./endpoints/product/certificate/status/list/execute.js";
import type { ListCertificateStatusesResponse } from "./endpoints/product/certificate/status/list/types.js";
import { executeUnbindProductCertificate } from "./endpoints/product/certificate/unbind/execute.js";
import type {
  UnbindProductCertificateRequest,
  UnbindProductCertificateResponse,
} from "./endpoints/product/certificate/unbind/types.js";
import { executeGetProductPictures } from "./endpoints/product/pictures/info/execute.js";
import type {
  GetProductPicturesRequest,
  GetProductPicturesResponse,
} from "./endpoints/product/pictures/info/types.js";
import { executeListProducts } from "./endpoints/product/list/execute.js";
import type {
  ListProductsRequest,
  ListProductsResponse,
} from "./endpoints/product/list/types.js";
import { executeGetProductRatingBySku } from "./endpoints/product/rating/get-by-sku/execute.js";
import type {
  GetProductRatingBySkuRequest,
  GetProductRatingBySkuResponse,
} from "./endpoints/product/rating/get-by-sku/types.js";
import { executeGetRelatedProductSkus } from "./endpoints/product/sku/related/execute.js";
import type {
  GetRelatedProductSkusRequest,
  GetRelatedProductSkusResponse,
} from "./endpoints/product/sku/related/types.js";
import { executeGetProductStocksByWarehouse } from "./endpoints/product/stocks/get-by-warehouse/execute.js";
import type {
  GetProductStocksByWarehouseRequest,
  GetProductStocksByWarehouseResponse,
} from "./endpoints/product/stocks/get-by-warehouse/types.js";
import { executeGetProductStocksByWarehouseFbs } from "./endpoints/product/stocks/get-by-warehouse-fbs/v1/execute.js";
import type {
  GetProductStocksByWarehouseFbsRequest,
  GetProductStocksByWarehouseFbsResponse,
} from "./endpoints/product/stocks/get-by-warehouse-fbs/v1/types.js";
import { executeGetProductStocksByWarehouseFbsV2 } from "./endpoints/product/stocks/get-by-warehouse-fbs/v2/execute.js";
import type {
  GetProductStocksByWarehouseFbsV2Request,
  GetProductStocksByWarehouseFbsV2Response,
} from "./endpoints/product/stocks/get-by-warehouse-fbs/v2/types.js";
import { executeGetProductStocks } from "./endpoints/product/stocks/get-info/execute.js";
import type {
  GetProductStocksRequest,
  GetProductStocksResponse,
} from "./endpoints/product/stocks/get-info/types.js";
import { executeUpdateProductStocks } from "./endpoints/product/stocks/update/execute.js";
import type {
  UpdateProductStocksRequest,
  UpdateProductStocksResponse,
} from "./endpoints/product/stocks/update/types.js";
import { executeListQuantProducts } from "./endpoints/product/quant/list/execute.js";
import type {
  ListQuantProductsRequest,
  ListQuantProductsResponse,
} from "./endpoints/product/quant/list/types.js";
import { executeGetFbsRatingIndexInfo } from "./endpoints/rating/get-fbs-index-info/execute.js";
import type { GetFbsRatingIndexInfoResponse } from "./endpoints/rating/get-fbs-index-info/types.js";
import { executeGetRatingHistory } from "./endpoints/rating/get-history/execute.js";
import type {
  GetRatingHistoryRequest,
  GetRatingHistoryResponse,
} from "./endpoints/rating/get-history/types.js";
import { executeGetRatingSummary } from "./endpoints/rating/get-summary/execute.js";
import type { GetRatingSummaryResponse } from "./endpoints/rating/get-summary/types.js";
import { executeListFbsRatingIndexPostings } from "./endpoints/rating/list-fbs-index-postings/execute.js";
import type {
  ListFbsRatingIndexPostingsRequest,
  ListFbsRatingIndexPostingsResponse,
} from "./endpoints/rating/list-fbs-index-postings/types.js";
import { executeGetSellerInfo } from "./endpoints/seller/get-info/execute.js";
import type { GetSellerInfoResponse } from "./endpoints/seller/get-info/types.js";
import { executeGetOzonLogisticsInfo } from "./endpoints/seller/get-ozon-logistics-info/execute.js";
import type { GetOzonLogisticsInfoResponse } from "./endpoints/seller/get-ozon-logistics-info/types.js";
import { executeListSupplierAvailableWarehouses } from "./endpoints/supplier/available-warehouses/execute.js";
import type { ListSupplierAvailableWarehousesResponse } from "./endpoints/supplier/available-warehouses/types.js";
import { executeArchiveFbsWarehouse } from "./endpoints/warehouse/archive/execute.js";
import type {
  ArchiveFbsWarehouseRequest,
  ArchiveFbsWarehouseResponse,
} from "./endpoints/warehouse/archive/types.js";
import { executeListFboSupplyWarehouses } from "./endpoints/warehouse/fbo/list/execute.js";
import type {
  ListFboSupplyWarehousesRequest,
  ListFboSupplyWarehousesResponse,
} from "./endpoints/warehouse/fbo/list/types.js";
import { executeGetWarehouseInvalidProducts } from "./endpoints/warehouse/invalid-products/get/execute.js";
import type {
  GetWarehouseInvalidProductsRequest,
  GetWarehouseInvalidProductsResponse,
} from "./endpoints/warehouse/invalid-products/get/types.js";
import { executeListWarehousesWithInvalidProducts } from "./endpoints/warehouse/invalid-products/list-warehouses/execute.js";
import type { ListWarehousesWithInvalidProductsResponse } from "./endpoints/warehouse/invalid-products/list-warehouses/types.js";
import { executeListOzonWarehouses } from "./endpoints/warehouse/list-ozon/execute.js";
import type {
  ListOzonWarehousesRequest,
  ListOzonWarehousesResponse,
} from "./endpoints/warehouse/list-ozon/types.js";
import { executeListWarehousesV1 } from "./endpoints/warehouse/list/v1/execute.js";
import type {
  ListWarehousesV1Request,
  ListWarehousesV1Response,
} from "./endpoints/warehouse/list/v1/types.js";
import { executeListWarehousesV2 } from "./endpoints/warehouse/list/v2/execute.js";
import type {
  ListWarehousesV2Request,
  ListWarehousesV2Response,
} from "./endpoints/warehouse/list/v2/types.js";
import { executeGetFbsWarehouseOperationStatus } from "./endpoints/warehouse/operation/status/execute.js";
import type {
  GetFbsWarehouseOperationStatusRequest,
  GetFbsWarehouseOperationStatusResponse,
} from "./endpoints/warehouse/operation/status/types.js";
import { executeUnarchiveFbsWarehouse } from "./endpoints/warehouse/unarchive/execute.js";
import type {
  UnarchiveFbsWarehouseRequest,
  UnarchiveFbsWarehouseResponse,
} from "./endpoints/warehouse/unarchive/types.js";
import { executeListDeliveryMethodsV1 } from "./endpoints/warehouse/delivery-method/list/v1/execute.js";
import type {
  ListDeliveryMethodsV1Request,
  ListDeliveryMethodsV1Response,
} from "./endpoints/warehouse/delivery-method/list/v1/types.js";
import { executeListDeliveryMethodsV2 } from "./endpoints/warehouse/delivery-method/list/v2/execute.js";
import type {
  ListDeliveryMethodsV2Request,
  ListDeliveryMethodsV2Response,
} from "./endpoints/warehouse/delivery-method/list/v2/types.js";
import { executeGetDeliveryMethodReturnSettings } from "./endpoints/warehouse/delivery-method/return-settings/get/execute.js";
import type {
  GetDeliveryMethodReturnSettingsRequest,
  GetDeliveryMethodReturnSettingsResponse,
} from "./endpoints/warehouse/delivery-method/return-settings/get/types.js";
import type { OzonRequestOptions } from "./request-options.js";
import { executeAcceptSupplyOrderAct } from "./endpoints/supply-order/act/accept/execute.js";
import type {
  AcceptSupplyOrderActRequest,
  AcceptSupplyOrderActResponse,
} from "./endpoints/supply-order/act/accept/types.js";
import { executeGetSupplyOrderActAcceptanceStatus } from "./endpoints/supply-order/act/get-accept-status/execute.js";
import type {
  GetSupplyOrderActAcceptanceStatusRequest,
  GetSupplyOrderActAcceptanceStatusResponse,
} from "./endpoints/supply-order/act/get-accept-status/types.js";
import { executeGetSupplyOrderActProducts } from "./endpoints/supply-order/act/get-products/execute.js";
import type {
  GetSupplyOrderActProductsRequest,
  GetSupplyOrderActProductsResponse,
} from "./endpoints/supply-order/act/get-products/types.js";
import { executeGetSupplyOrderActSummary } from "./endpoints/supply-order/act/get-summary/execute.js";
import type {
  GetSupplyOrderActSummaryRequest,
  GetSupplyOrderActSummaryResponse,
} from "./endpoints/supply-order/act/get-summary/types.js";
import { executeGetSupplyOrderBundle } from "./endpoints/supply-order/bundle/get/execute.js";
import type {
  GetSupplyOrderBundleRequest,
  GetSupplyOrderBundleResponse,
} from "./endpoints/supply-order/bundle/get/types.js";
import { executeGetSupplyOrdersV3 } from "./endpoints/supply-order/get/v3/execute.js";
import type {
  GetSupplyOrdersV3Request,
  GetSupplyOrdersV3Response,
} from "./endpoints/supply-order/get/v3/types.js";
import { executeListSupplyOrdersV3 } from "./endpoints/supply-order/list/v3/execute.js";
import type {
  ListSupplyOrdersV3Request,
  ListSupplyOrdersV3Response,
} from "./endpoints/supply-order/list/v3/types.js";
import { executeCreateSupplyOrderPass } from "./endpoints/supply-order/pass/create/v1/execute.js";
import type {
  CreateSupplyOrderPassRequest,
  CreateSupplyOrderPassResponse,
} from "./endpoints/supply-order/pass/create/v1/types.js";
import { executeGetSupplyOrderPassStatus } from "./endpoints/supply-order/pass/status/v1/execute.js";
import type {
  GetSupplyOrderPassStatusRequest,
  GetSupplyOrderPassStatusResponse,
} from "./endpoints/supply-order/pass/status/v1/types.js";
import { executeCountSupplyOrdersByStatus } from "./endpoints/supply-order/status/count/execute.js";
import type { CountSupplyOrdersByStatusResponse } from "./endpoints/supply-order/status/count/types.js";
import { executeListSupplyOrderTimeslotsV1 } from "./endpoints/supply-order/timeslot/list/v1/execute.js";
import type {
  ListSupplyOrderTimeslotsV1Request,
  ListSupplyOrderTimeslotsV1Response,
} from "./endpoints/supply-order/timeslot/list/v1/types.js";
import { executeListSupplyOrderTimeslotsV2 } from "./endpoints/supply-order/timeslot/list/v2/execute.js";
import type {
  ListSupplyOrderTimeslotsV2Request,
  ListSupplyOrderTimeslotsV2Response,
} from "./endpoints/supply-order/timeslot/list/v2/types.js";
import { executeGetSupplyOrderTimeslotStatus } from "./endpoints/supply-order/timeslot/status/v1/execute.js";
import type {
  GetSupplyOrderTimeslotStatusRequest,
  GetSupplyOrderTimeslotStatusResponse,
} from "./endpoints/supply-order/timeslot/status/v1/types.js";
import { executeUpdateSupplyOrderTimeslot } from "./endpoints/supply-order/timeslot/update/v1/execute.js";
import type {
  UpdateSupplyOrderTimeslotRequest,
  UpdateSupplyOrderTimeslotResponse,
} from "./endpoints/supply-order/timeslot/update/v1/types.js";
import { executeListFboPostingCancelReasons } from "./endpoints/posting/fbo/cancel-reason/list/v1/execute.js";
import type { ListFboPostingCancelReasonsResponse } from "./endpoints/posting/fbo/cancel-reason/list/v1/types.js";
import { executeGetFboPostingV2 } from "./endpoints/posting/fbo/get/v2/execute.js";
import type {
  GetFboPostingV2Request,
  GetFboPostingV2Response,
} from "./endpoints/posting/fbo/get/v2/types.js";
import { executeListFboPostingsV2 } from "./endpoints/posting/fbo/list/v2/execute.js";
import type {
  ListFboPostingsV2Request,
  ListFboPostingsV2Response,
} from "./endpoints/posting/fbo/list/v2/types.js";
import { executeListFboPostingsV3 } from "./endpoints/posting/fbo/list/v3/execute.js";
import type {
  ListFboPostingsV3Request,
  ListFboPostingsV3Response,
} from "./endpoints/posting/fbo/list/v3/types.js";
import { executeListSupplyClustersV1 } from "./endpoints/supply-draft/cluster/list/v1/execute.js";
import type {
  ListSupplyClustersV1Request,
  ListSupplyClustersV1Response,
} from "./endpoints/supply-draft/cluster/list/v1/types.js";
import { executeListSupplyClustersV2 } from "./endpoints/supply-draft/cluster/list/v2/execute.js";
import type { ListSupplyClustersV2Response } from "./endpoints/supply-draft/cluster/list/v2/types.js";
import { executeCreateCrossdockSupplyDraft } from "./endpoints/supply-draft/create/crossdock/v1/execute.js";
import type {
  CreateCrossdockSupplyDraftRequest,
  CreateCrossdockSupplyDraftResponse,
} from "./endpoints/supply-draft/create/crossdock/v1/types.js";
import { executeCreateDirectSupplyDraft } from "./endpoints/supply-draft/create/direct/v1/execute.js";
import type {
  CreateDirectSupplyDraftRequest,
  CreateDirectSupplyDraftResponse,
} from "./endpoints/supply-draft/create/direct/v1/types.js";
import { executeCreateMultiClusterSupplyDraft } from "./endpoints/supply-draft/create/multi-cluster/v1/execute.js";
import type {
  CreateMultiClusterSupplyDraftRequest,
  CreateMultiClusterSupplyDraftResponse,
} from "./endpoints/supply-draft/create/multi-cluster/v1/types.js";
import { executeGetSupplyOrderDetails } from "./endpoints/supply-order/details/get/v1/execute.js";
import type {
  GetSupplyOrderDetailsRequest,
  GetSupplyOrderDetailsResponse,
} from "./endpoints/supply-order/details/get/v1/types.js";
import { executeGetSupplyDraftInfo } from "./endpoints/supply-draft/info/create/v2/execute.js";
import type {
  GetSupplyDraftInfoRequest,
  GetSupplyDraftInfoResponse,
} from "./endpoints/supply-draft/info/create/v2/types.js";
import { executeGetSupplyDraftTimeslots } from "./endpoints/supply-draft/info/timeslot/v2/execute.js";
import type {
  GetSupplyDraftTimeslotsRequest,
  GetSupplyDraftTimeslotsResponse,
} from "./endpoints/supply-draft/info/timeslot/v2/types.js";
import { executeCreateSupplyCargoes } from "./endpoints/supply-draft/cargoes/create/v1/execute.js";
import type {
  CreateSupplyCargoesRequest,
  CreateSupplyCargoesResponse,
} from "./endpoints/supply-draft/cargoes/create/v1/types.js";
import { executeGetSupplyCargoesCreateInfo } from "./endpoints/supply-draft/cargoes/create-info/v2/execute.js";
import type {
  GetSupplyCargoesCreateInfoRequest,
  GetSupplyCargoesCreateInfoResponse,
} from "./endpoints/supply-draft/cargoes/create-info/v2/types.js";
import { executeGetSupplyCargoes } from "./endpoints/supply-draft/cargoes/get/v1/execute.js";
import type {
  GetSupplyCargoesRequest,
  GetSupplyCargoesResponse,
} from "./endpoints/supply-draft/cargoes/get/v1/types.js";
import { executeDeleteSupplyCargoes } from "./endpoints/supply-draft/cargoes/delete/v1/execute.js";
import type {
  DeleteSupplyCargoesRequest,
  DeleteSupplyCargoesResponse,
} from "./endpoints/supply-draft/cargoes/delete/v1/types.js";
import { executeGetSupplyCargoesDeleteStatus } from "./endpoints/supply-draft/cargoes/delete-status/v1/execute.js";
import type {
  GetSupplyCargoesDeleteStatusRequest,
  GetSupplyCargoesDeleteStatusResponse,
} from "./endpoints/supply-draft/cargoes/delete-status/v1/types.js";
import { executeGetSupplyCargoesRules } from "./endpoints/supply-draft/cargoes/rules/get/v1/execute.js";
import type {
  GetSupplyCargoesRulesRequest,
  GetSupplyCargoesRulesResponse,
} from "./endpoints/supply-draft/cargoes/rules/get/v1/types.js";
import { executeCreateSupplyCargoLabels } from "./endpoints/supply-draft/cargoes/label/create/v1/execute.js";
import type {
  CreateSupplyCargoLabelsRequest,
  CreateSupplyCargoLabelsResponse,
} from "./endpoints/supply-draft/cargoes/label/create/v1/types.js";
import { executeGetSupplyCargoLabels } from "./endpoints/supply-draft/cargoes/label/get/v1/execute.js";
import type {
  GetSupplyCargoLabelsRequest,
  GetSupplyCargoLabelsResponse,
} from "./endpoints/supply-draft/cargoes/label/get/v1/types.js";
import { executeGetSupplyCargoLabelFile } from "./endpoints/supply-draft/cargoes/label/file/v1/execute.js";
import type {
  GetSupplyCargoLabelFileRequest,
  GetSupplyCargoLabelFileResponse,
} from "./endpoints/supply-draft/cargoes/label/file/v1/types.js";
import { executeCancelSupplyOrder } from "./endpoints/supply-order/cancel/create/v1/execute.js";
import type {
  CancelSupplyOrderRequest,
  CancelSupplyOrderResponse,
} from "./endpoints/supply-order/cancel/create/v1/types.js";
import { executeGetSupplyOrderCancelStatus } from "./endpoints/supply-order/cancel/status/v1/execute.js";
import type {
  GetSupplyOrderCancelStatusRequest,
  GetSupplyOrderCancelStatusResponse,
} from "./endpoints/supply-order/cancel/status/v1/types.js";
import { executeUpdateSupplyOrderContent } from "./endpoints/supply-order/content/update/v1/execute.js";
import type {
  UpdateSupplyOrderContentRequest,
  UpdateSupplyOrderContentResponse,
} from "./endpoints/supply-order/content/update/v1/types.js";
import { executeGetSupplyOrderContentUpdateStatus } from "./endpoints/supply-order/content/status/v1/execute.js";
import type {
  GetSupplyOrderContentUpdateStatusRequest,
  GetSupplyOrderContentUpdateStatusResponse,
} from "./endpoints/supply-order/content/status/v1/types.js";
import { executeValidateSupplyOrderContent } from "./endpoints/supply-order/content/validate/v1/execute.js";
import type {
  ValidateSupplyOrderContentRequest,
  ValidateSupplyOrderContentResponse,
} from "./endpoints/supply-order/content/validate/v1/types.js";
import { executeCreateSupplyOrderFromDraft } from "./endpoints/supply-draft/supply/create/v2/execute.js";
import type {
  CreateSupplyOrderFromDraftRequest,
  CreateSupplyOrderFromDraftResponse,
} from "./endpoints/supply-draft/supply/create/v2/types.js";
import { executeGetSupplyOrderFromDraftStatus } from "./endpoints/supply-draft/supply/status/v2/execute.js";
import type {
  GetSupplyOrderFromDraftStatusRequest,
  GetSupplyOrderFromDraftStatusResponse,
} from "./endpoints/supply-draft/supply/status/v2/types.js";
import { executeListFboSellerWarehouses } from "./endpoints/warehouse/fbo/seller/list/v1/execute.js";
import type { ListFboSellerWarehousesResponse } from "./endpoints/warehouse/fbo/seller/list/v1/types.js";
import { executeShipFbsPostingV4 } from "./endpoints/posting/fbs/ship/v4/execute.js";
import type {
  ShipFbsPostingV4Request,
  ShipFbsPostingV4Response,
} from "./endpoints/posting/fbs/ship/v4/types.js";
import { executeShipFbsPostingPackageV4 } from "./endpoints/posting/fbs/ship/package/v4/execute.js";
import type {
  ShipFbsPostingPackageV4Request,
  ShipFbsPostingPackageV4Response,
} from "./endpoints/posting/fbs/ship/package/v4/types.js";
import { executeSetFbsPostingProductExemplarsV6 } from "./endpoints/posting/fbs/exemplar/set/v6/execute.js";
import type { SetFbsPostingProductExemplarsV6Request } from "./endpoints/posting/fbs/exemplar/set/v6/types.js";
import { executeCreateOrGetFbsPostingProductExemplarsV6 } from "./endpoints/posting/fbs/exemplar/create-or-get/v6/execute.js";
import type {
  CreateOrGetFbsPostingProductExemplarsV6Request,
  CreateOrGetFbsPostingProductExemplarsV6Response,
} from "./endpoints/posting/fbs/exemplar/create-or-get/v6/types.js";
import { executeGetFbsPostingProductExemplarStatusV5 } from "./endpoints/posting/fbs/exemplar/status/v5/execute.js";
import type {
  GetFbsPostingProductExemplarStatusV5Request,
  GetFbsPostingProductExemplarStatusV5Response,
} from "./endpoints/posting/fbs/exemplar/status/v5/types.js";
import { executeValidateFbsPostingProductExemplarsV5 } from "./endpoints/posting/fbs/exemplar/validate/v5/execute.js";
import type {
  ValidateFbsPostingProductExemplarsV5Request,
  ValidateFbsPostingProductExemplarsV5Response,
} from "./endpoints/posting/fbs/exemplar/validate/v5/types.js";
import { executeUpdateFbsPostingProductExemplars } from "./endpoints/posting/fbs/exemplar/update/v1/execute.js";
import type { UpdateFbsPostingProductExemplarsRequest } from "./endpoints/posting/fbs/exemplar/update/v1/types.js";
import { executeCreateFbsCarriage } from "./endpoints/delivery/fbs/carriage/create/v1/execute.js";
import type {
  CreateFbsCarriageRequest,
  CreateFbsCarriageResponse,
} from "./endpoints/delivery/fbs/carriage/create/v1/types.js";
import { executeApproveFbsCarriage } from "./endpoints/delivery/fbs/carriage/approve/v1/execute.js";
import type {
  ApproveFbsCarriageRequest,
  ApproveFbsCarriageResponse,
} from "./endpoints/delivery/fbs/carriage/approve/v1/types.js";
import { executeSetFbsCarriagePostings } from "./endpoints/delivery/fbs/carriage/set-postings/v1/execute.js";
import type {
  SetFbsCarriagePostingsRequest,
  SetFbsCarriagePostingsResponse,
} from "./endpoints/delivery/fbs/carriage/set-postings/v1/types.js";
import { executeCancelFbsCarriage } from "./endpoints/delivery/fbs/carriage/cancel/v1/execute.js";
import type {
  CancelFbsCarriageRequest,
  CancelFbsCarriageResponse,
} from "./endpoints/delivery/fbs/carriage/cancel/v1/types.js";
import { executeListFbsCarriageDeliveriesV1 } from "./endpoints/delivery/fbs/carriage/delivery-list/v1/execute.js";
import type {
  ListFbsCarriageDeliveriesV1Request,
  ListFbsCarriageDeliveriesV1Response,
} from "./endpoints/delivery/fbs/carriage/delivery-list/v1/types.js";
import { executeListFbsCarriageDeliveriesV2 } from "./endpoints/delivery/fbs/carriage/delivery-list/v2/execute.js";
import type {
  ListFbsCarriageDeliveriesV2Request,
  ListFbsCarriageDeliveriesV2Response,
} from "./endpoints/delivery/fbs/carriage/delivery-list/v2/types.js";
import { executeCreateFbsAct } from "./endpoints/posting/fbs/act/create/v2/execute.js";
import type {
  CreateFbsActRequest,
  CreateFbsActResponse,
} from "./endpoints/posting/fbs/act/create/v2/types.js";
import { executeListAvailableFbsCarriages } from "./endpoints/delivery/fbs/carriage/available-list/v1/execute.js";
import type {
  ListAvailableFbsCarriagesRequest,
  ListAvailableFbsCarriagesResponse,
} from "./endpoints/delivery/fbs/carriage/available-list/v1/types.js";
import { executeGetFbsCarriage } from "./endpoints/delivery/fbs/carriage/get/v1/execute.js";
import type {
  GetFbsCarriageRequest,
  GetFbsCarriageResponse,
} from "./endpoints/delivery/fbs/carriage/get/v1/types.js";
import { executeSplitFbsPosting } from "./endpoints/posting/fbs/split/v1/execute.js";
import type { SplitFbsPostingResponse } from "./endpoints/posting/fbs/split/v1/types.js";
import { executeListFbsActPostings } from "./endpoints/posting/fbs/act/postings/v2/execute.js";
import type {
  ListFbsActPostingsRequest,
  ListFbsActPostingsResponse,
} from "./endpoints/posting/fbs/act/postings/v2/types.js";
import { executeGetFbsActContainerLabels } from "./endpoints/posting/fbs/act/container-labels/v2/execute.js";
import type {
  GetFbsActContainerLabelsRequest,
  GetFbsActContainerLabelsResponse,
} from "./endpoints/posting/fbs/act/container-labels/v2/types.js";
import { executeGetFbsActBarcode } from "./endpoints/posting/fbs/act/barcode/v2/execute.js";
import type {
  GetFbsActBarcodeRequest,
  GetFbsActBarcodeResponse,
} from "./endpoints/posting/fbs/act/barcode/v2/types.js";
import { executeGetFbsActBarcodeText } from "./endpoints/posting/fbs/act/barcode-text/v2/execute.js";
import type {
  GetFbsActBarcodeTextRequest,
  GetFbsActBarcodeTextResponse,
} from "./endpoints/posting/fbs/act/barcode-text/v2/types.js";
import { executeGetFbsDigitalActStatus } from "./endpoints/posting/fbs/act/digital/status/v2/execute.js";
import type {
  GetFbsDigitalActStatusRequest,
  GetFbsDigitalActStatusResponse,
} from "./endpoints/posting/fbs/act/digital/status/v2/types.js";
import { executeGetFbsActPdf } from "./endpoints/posting/fbs/act/pdf/v2/execute.js";
import type {
  GetFbsActPdfRequest,
  GetFbsActPdfResponse,
} from "./endpoints/posting/fbs/act/pdf/v2/types.js";
import { executeGetFbsCarriageDiscrepancyAct } from "./endpoints/delivery/fbs/carriage/discrepancy/pdf/v1/execute.js";
import type {
  GetFbsCarriageDiscrepancyActRequest,
  GetFbsCarriageDiscrepancyActResponse,
} from "./endpoints/delivery/fbs/carriage/discrepancy/pdf/v1/types.js";
import { executeListFbsActs } from "./endpoints/posting/fbs/act/list/v2/execute.js";
import type {
  ListFbsActsRequest,
  ListFbsActsResponse,
} from "./endpoints/posting/fbs/act/list/v2/types.js";
import { executeGetFbsDigitalActPdf } from "./endpoints/posting/fbs/act/digital/pdf/v2/execute.js";
import type {
  GetFbsDigitalActPdfRequest,
  GetFbsDigitalActPdfResponse,
} from "./endpoints/posting/fbs/act/digital/pdf/v2/types.js";
import { executeGetFbsActStatus } from "./endpoints/posting/fbs/act/status/v2/execute.js";
import type {
  GetFbsActStatusRequest,
  GetFbsActStatusResponse,
} from "./endpoints/posting/fbs/act/status/v2/types.js";
import { executeSplitTraceableFbsPosting } from "./endpoints/posting/fbs/traceable/split/v1/execute.js";
import type {
  SplitTraceableFbsPostingRequest,
  SplitTraceableFbsPostingResponse,
} from "./endpoints/posting/fbs/traceable/split/v1/types.js";
import { executeGetFbsTraceableAttributes } from "./endpoints/posting/fbs/traceable/attributes/v1/execute.js";
import type {
  GetFbsTraceableAttributesRequest,
  GetFbsTraceableAttributesResponse,
} from "./endpoints/posting/fbs/traceable/attributes/v1/types.js";
import { executeGetFbsCarriageEttnStatus } from "./endpoints/delivery/fbs/carriage/ettn/status/v1/execute.js";
import type {
  GetFbsCarriageEttnStatusRequest,
  GetFbsCarriageEttnStatusResponse,
} from "./endpoints/delivery/fbs/carriage/ettn/status/v1/types.js";
import { executeListFbsAssemblyCarriagePostings } from "./endpoints/delivery/fbs/assembly/carriage/posting/list/v1/execute.js";
import type {
  ListFbsAssemblyCarriagePostingsRequest,
  ListFbsAssemblyCarriagePostingsResponse,
} from "./endpoints/delivery/fbs/assembly/carriage/posting/list/v1/types.js";
import { executeListFbsAssemblyCarriageProducts } from "./endpoints/delivery/fbs/assembly/carriage/product/list/v1/execute.js";
import type {
  ListFbsAssemblyCarriageProductsRequest,
  ListFbsAssemblyCarriageProductsResponse,
} from "./endpoints/delivery/fbs/assembly/carriage/product/list/v1/types.js";
import { executeListFbsAssemblyPostings } from "./endpoints/delivery/fbs/assembly/posting/list/v1/execute.js";
import type {
  ListFbsAssemblyPostingsRequest,
  ListFbsAssemblyPostingsResponse,
} from "./endpoints/delivery/fbs/assembly/posting/list/v1/types.js";
import { executeListFbsAssemblyProducts } from "./endpoints/delivery/fbs/assembly/product/list/v1/execute.js";
import type {
  ListFbsAssemblyProductsRequest,
  ListFbsAssemblyProductsResponse,
} from "./endpoints/delivery/fbs/assembly/product/list/v1/types.js";
import { executeSetFbsPostingTrackingNumbers } from "./endpoints/posting/fbs/tracking-number/set/v2/execute.js";
import type {
  SetFbsPostingTrackingNumbersRequest,
  SetFbsPostingTrackingNumbersResponse,
} from "./endpoints/posting/fbs/tracking-number/set/v2/types.js";
import { executeSetFbsPostingsDelivering } from "./endpoints/posting/fbs/status/delivering/v2/execute.js";
import type {
  SetFbsPostingsDeliveringRequest,
  SetFbsPostingsDeliveringResponse,
} from "./endpoints/posting/fbs/status/delivering/v2/types.js";
import { executeSetFbsPostingsLastMile } from "./endpoints/posting/fbs/status/last-mile/v2/execute.js";
import type {
  SetFbsPostingsLastMileRequest,
  SetFbsPostingsLastMileResponse,
} from "./endpoints/posting/fbs/status/last-mile/v2/types.js";
import { executeSetFbsPostingsDelivered } from "./endpoints/posting/fbs/status/delivered/v2/execute.js";
import type {
  SetFbsPostingsDeliveredRequest,
  SetFbsPostingsDeliveredResponse,
} from "./endpoints/posting/fbs/status/delivered/v2/types.js";
import { executeGetFbsPostingTimeslotChangeRestrictions } from "./endpoints/posting/fbs/timeslot/change-restrictions/v1/execute.js";
import type {
  GetFbsPostingTimeslotChangeRestrictionsRequest,
  GetFbsPostingTimeslotChangeRestrictionsResponse,
} from "./endpoints/posting/fbs/timeslot/change-restrictions/v1/types.js";
import { executeSetFbsPostingTimeslot } from "./endpoints/posting/fbs/timeslot/set/v1/execute.js";
import type {
  SetFbsPostingTimeslotRequest,
  SetFbsPostingTimeslotResponse,
} from "./endpoints/posting/fbs/timeslot/set/v1/types.js";
import { executeSetFbsPostingCutoff } from "./endpoints/posting/fbs/cutoff/set/v1/execute.js";
import type {
  SetFbsPostingCutoffRequest,
  SetFbsPostingCutoffResponse,
} from "./endpoints/posting/fbs/cutoff/set/v1/types.js";
import { executeListUnfulfilledFbsPostingsV3 } from "./endpoints/posting/fbs/unfulfilled/list/v3/execute.js";
import type {
  ListUnfulfilledFbsPostingsV3Request,
  ListUnfulfilledFbsPostingsV3Response,
} from "./endpoints/posting/fbs/unfulfilled/list/v3/types.js";
import { executeListUnfulfilledFbsPostingsV4 } from "./endpoints/posting/fbs/unfulfilled/list/v4/execute.js";
import type {
  ListUnfulfilledFbsPostingsV4Request,
  ListUnfulfilledFbsPostingsV4Response,
} from "./endpoints/posting/fbs/unfulfilled/list/v4/types.js";
import { executeListFbsPostingsV3 } from "./endpoints/posting/fbs/list/v3/execute.js";
import type {
  ListFbsPostingsV3Request,
  ListFbsPostingsV3Response,
} from "./endpoints/posting/fbs/list/v3/types.js";
import { executeListFbsPostingsV4 } from "./endpoints/posting/fbs/list/v4/execute.js";
import type {
  ListFbsPostingsV4Request,
  ListFbsPostingsV4Response,
} from "./endpoints/posting/fbs/list/v4/types.js";
import { executeGetFbsPostingV3 } from "./endpoints/posting/fbs/get/v3/execute.js";
import type {
  GetFbsPostingV3Request,
  GetFbsPostingV3Response,
} from "./endpoints/posting/fbs/get/v3/types.js";
import { executeGetFbsPostingByBarcodeV2 } from "./endpoints/posting/fbs/get-by-barcode/v2/execute.js";
import type {
  GetFbsPostingByBarcodeV2Request,
  GetFbsPostingByBarcodeV2Response,
} from "./endpoints/posting/fbs/get-by-barcode/v2/types.js";
import { executeSetFbsPostingMultiboxQuantityV3 } from "./endpoints/posting/fbs/multibox-quantity/set/v3/execute.js";
import type {
  SetFbsPostingMultiboxQuantityV3Request,
  SetFbsPostingMultiboxQuantityV3Response,
} from "./endpoints/posting/fbs/multibox-quantity/set/v3/types.js";
import { executeListFbsPostingProductCountriesV2 } from "./endpoints/posting/fbs/product/country/list/v2/execute.js";
import type {
  ListFbsPostingProductCountriesV2Request,
  ListFbsPostingProductCountriesV2Response,
} from "./endpoints/posting/fbs/product/country/list/v2/types.js";
import { executeSetFbsPostingProductCountryV2 } from "./endpoints/posting/fbs/product/country/set/v2/execute.js";
import type {
  SetFbsPostingProductCountryV2Request,
  SetFbsPostingProductCountryV2Response,
} from "./endpoints/posting/fbs/product/country/set/v2/types.js";
import { executeGetFbsPostingRestrictionsV1 } from "./endpoints/posting/fbs/restrictions/get/v1/execute.js";
import type {
  GetFbsPostingRestrictionsV1Request,
  GetFbsPostingRestrictionsV1Response,
} from "./endpoints/posting/fbs/restrictions/get/v1/types.js";
import { executePrintFbsPackageLabelsV2 } from "./endpoints/posting/fbs/package-label/print/v2/execute.js";
import type {
  PrintFbsPackageLabelsV2Request,
  PrintFbsPackageLabelsV2Response,
} from "./endpoints/posting/fbs/package-label/print/v2/types.js";
import { executeCreateFbsPackageLabelBatchV1 } from "./endpoints/posting/fbs/package-label/create/v1/execute.js";
import type {
  CreateFbsPackageLabelBatchV1Request,
  CreateFbsPackageLabelBatchV1Response,
} from "./endpoints/posting/fbs/package-label/create/v1/types.js";
import { executeCreateFbsPackageLabelBatchV2 } from "./endpoints/posting/fbs/package-label/create/v2/execute.js";
import type {
  CreateFbsPackageLabelBatchV2Request,
  CreateFbsPackageLabelBatchV2Response,
} from "./endpoints/posting/fbs/package-label/create/v2/types.js";
import { executeGetFbsPackageLabelBatchV1 } from "./endpoints/posting/fbs/package-label/get/v1/execute.js";
import type {
  GetFbsPackageLabelBatchV1Request,
  GetFbsPackageLabelBatchV1Response,
} from "./endpoints/posting/fbs/package-label/get/v1/types.js";
import { executeGetFbsPostingCancelReasonsV1 } from "./endpoints/posting/fbs/cancel-reason/get/v1/execute.js";
import type {
  GetFbsPostingCancelReasonsV1Request,
  GetFbsPostingCancelReasonsV1Response,
} from "./endpoints/posting/fbs/cancel-reason/get/v1/types.js";
import { executeListFbsPostingCancelReasonsV2 } from "./endpoints/posting/fbs/cancel-reason/list/v2/execute.js";
import type { ListFbsPostingCancelReasonsV2Response } from "./endpoints/posting/fbs/cancel-reason/list/v2/types.js";
import { executeCancelFbsPostingProductsV2 } from "./endpoints/posting/fbs/product/cancel/v2/execute.js";
import type {
  CancelFbsPostingProductsV2Request,
  CancelFbsPostingProductsV2Response,
} from "./endpoints/posting/fbs/product/cancel/v2/types.js";
import { executeCancelFbsPostingV2 } from "./endpoints/posting/fbs/cancel/v2/execute.js";
import type {
  CancelFbsPostingV2Request,
  CancelFbsPostingV2Response,
} from "./endpoints/posting/fbs/cancel/v2/types.js";
import { executeOpenFbsPostingArbitrationV2 } from "./endpoints/posting/fbs/arbitration/open/v2/execute.js";
import type {
  OpenFbsPostingArbitrationV2Request,
  OpenFbsPostingArbitrationV2Response,
} from "./endpoints/posting/fbs/arbitration/open/v2/types.js";
import { executeSetFbsPostingsAwaitingDeliveryV2 } from "./endpoints/posting/fbs/status/awaiting-delivery/v2/execute.js";
import type {
  SetFbsPostingsAwaitingDeliveryV2Request,
  SetFbsPostingsAwaitingDeliveryV2Response,
} from "./endpoints/posting/fbs/status/awaiting-delivery/v2/types.js";
import { executeVerifyFbsPickupCodeV1 } from "./endpoints/posting/fbs/pickup-code/verify/v1/execute.js";
import type {
  VerifyFbsPickupCodeV1Request,
  VerifyFbsPickupCodeV1Response,
} from "./endpoints/posting/fbs/pickup-code/verify/v1/types.js";
import { executeGetEtgbDeclarationsV1 } from "./endpoints/posting/global/etgb/get/v1/execute.js";
import type {
  GetEtgbDeclarationsV1Request,
  GetEtgbDeclarationsV1Response,
} from "./endpoints/posting/global/etgb/get/v1/types.js";
import { executeListUnpaidLegalProductsV1 } from "./endpoints/posting/unpaid-legal/product/list/v1/execute.js";
import type {
  ListUnpaidLegalProductsV1Request,
  ListUnpaidLegalProductsV1Response,
} from "./endpoints/posting/unpaid-legal/product/list/v1/types.js";
import { executeListFboProductStocksByWarehouseV1 } from "./endpoints/product/info/stocks-by-warehouse/fbo/v1/execute.js";
import type {
  ListFboProductStocksByWarehouseV1Request,
  ListFboProductStocksByWarehouseV1Response,
} from "./endpoints/product/info/stocks-by-warehouse/fbo/v1/types.js";
import { executeListRfbsReturnsV2 } from "./endpoints/returns/rfbs/list/v2/execute.js";
import type {
  ListRfbsReturnsV2Request,
  ListRfbsReturnsV2Response,
} from "./endpoints/returns/rfbs/list/v2/types.js";
import { executeGetRfbsReturnV2 } from "./endpoints/returns/rfbs/get/v2/execute.js";
import type {
  GetRfbsReturnV2Request,
  GetRfbsReturnV2Response,
} from "./endpoints/returns/rfbs/get/v2/types.js";
import { executeSetRfbsReturnActionV1 } from "./endpoints/returns/rfbs/action/set/v1/execute.js";
import type {
  SetRfbsReturnActionV1Request,
  SetRfbsReturnActionV1Response,
} from "./endpoints/returns/rfbs/action/set/v1/types.js";
import { executeListReturnsV1 } from "./endpoints/returns/list/v1/execute.js";
import type {
  ListReturnsV1Request,
  ListReturnsV1Response,
} from "./endpoints/returns/list/v1/types.js";
import { executeGetFbsReturnCompanyInfoV1 } from "./endpoints/returns/company/fbs/info/v1/execute.js";
import type {
  GetFbsReturnCompanyInfoV1Request,
  GetFbsReturnCompanyInfoV1Response,
} from "./endpoints/returns/company/fbs/info/v1/types.js";
import { executeGetUtilizationHistoryV1 } from "./endpoints/returns/settings/utilization/history/v1/execute.js";
import type { GetUtilizationHistoryV1Response } from "./endpoints/returns/settings/utilization/history/v1/types.js";
import { executeGetUtilizationSettingsV1 } from "./endpoints/returns/settings/utilization/info/v1/execute.js";
import type { GetUtilizationSettingsV1Response } from "./endpoints/returns/settings/utilization/info/v1/types.js";
import { executeUpdateUtilizationSettingsV1 } from "./endpoints/returns/settings/utilization/update/v1/execute.js";
import type {
  UpdateUtilizationSettingsV1Request,
  UpdateUtilizationSettingsV1Response,
} from "./endpoints/returns/settings/utilization/update/v1/types.js";
import { executeIsGiveoutEnabledV1 } from "./endpoints/returns/giveout/is-enabled/v1/execute.js";
import type { IsGiveoutEnabledV1Response } from "./endpoints/returns/giveout/is-enabled/v1/types.js";
import { executeListGiveoutsV1 } from "./endpoints/returns/giveout/list/v1/execute.js";
import type {
  ListGiveoutsV1Request,
  ListGiveoutsV1Response,
} from "./endpoints/returns/giveout/list/v1/types.js";
import { executeGetGiveoutInfoV1 } from "./endpoints/returns/giveout/info/v1/execute.js";
import type {
  GetGiveoutInfoV1Request,
  GetGiveoutInfoV1Response,
} from "./endpoints/returns/giveout/info/v1/types.js";
import { executeGetGiveoutBarcodeV1 } from "./endpoints/returns/giveout/barcode/get/v1/execute.js";
import type { GetGiveoutBarcodeV1Response } from "./endpoints/returns/giveout/barcode/get/v1/types.js";
import { executeGetGiveoutBarcodePdfV1 } from "./endpoints/returns/giveout/document/pdf/v1/execute.js";
import type { GetGiveoutBarcodePdfV1Response } from "./endpoints/returns/giveout/document/pdf/v1/types.js";
import { executeGetGiveoutBarcodePngV1 } from "./endpoints/returns/giveout/document/png/v1/execute.js";
import type { GetGiveoutBarcodePngV1Response } from "./endpoints/returns/giveout/document/png/v1/types.js";
import { executeResetGiveoutBarcodeV1 } from "./endpoints/returns/giveout/barcode/reset/v1/execute.js";
import type { ResetGiveoutBarcodeV1Response } from "./endpoints/returns/giveout/barcode/reset/v1/types.js";
import { executeSendChatFileV1 } from "./endpoints/chat/file/send/v1/execute.js";
import type {
  SendChatFileV1Request,
  SendChatFileV1Response,
} from "./endpoints/chat/file/send/v1/types.js";
import { executeGetChatHistoryV3 } from "./endpoints/chat/history/v3/execute.js";
import type {
  GetChatHistoryV3Request,
  GetChatHistoryV3Response,
} from "./endpoints/chat/history/v3/types.js";
import { executeListChatsV3 } from "./endpoints/chat/list/v3/execute.js";
import type {
  ListChatsV3Request,
  ListChatsV3Response,
} from "./endpoints/chat/list/v3/types.js";
import { executeListFinanceCashFlowV1 } from "./endpoints/finance/cash-flow/list/v1/execute.js";
import type {
  ListFinanceCashFlowV1Request,
  ListFinanceCashFlowV1Response,
} from "./endpoints/finance/cash-flow/list/v1/types.js";
import { executeCreateDiscountedReportV1 } from "./endpoints/report/discounted/create/v1/execute.js";
import type {
  CreateDiscountedReportV1Request,
  CreateDiscountedReportV1Response,
} from "./endpoints/report/discounted/create/v1/types.js";
import { executeGetReportInfoV1 } from "./endpoints/report/info/v1/execute.js";
import type {
  GetReportInfoV1Request,
  GetReportInfoV1Response,
} from "./endpoints/report/info/v1/types.js";
import { executeListReportsV1 } from "./endpoints/report/list/v1/execute.js";
import type {
  ListReportsV1Request,
  ListReportsV1Response,
} from "./endpoints/report/list/v1/types.js";
import { executeCreatePostingsReportV1 } from "./endpoints/report/postings/create/v1/execute.js";
import type {
  CreatePostingsReportV1Request,
  CreatePostingsReportV1Response,
} from "./endpoints/report/postings/create/v1/types.js";
import { executeCreateProductsReportV1 } from "./endpoints/report/products/create/v1/execute.js";
import type {
  CreateProductsReportV1Request,
  CreateProductsReportV1Response,
} from "./endpoints/report/products/create/v1/types.js";
import { executeCreateReturnsReportV2 } from "./endpoints/report/returns/create/v2/execute.js";
import type {
  CreateReturnsReportV2Request,
  CreateReturnsReportV2Response,
} from "./endpoints/report/returns/create/v2/types.js";
import { executeCreateWarehouseStockReportV1 } from "./endpoints/report/warehouse/stock/create/v1/execute.js";
import type {
  CreateWarehouseStockReportV1Request,
  CreateWarehouseStockReportV1Response,
} from "./endpoints/report/warehouse/stock/create/v1/types.js";
import { executeCreatePlacementByProductsReportV1 } from "./endpoints/report/placement/by-products/create/v1/execute.js";
import type {
  CreatePlacementByProductsReportV1Request,
  CreatePlacementByProductsReportV1Response,
} from "./endpoints/report/placement/by-products/create/v1/types.js";
import { executeCreatePlacementBySuppliesReportV1 } from "./endpoints/report/placement/by-supplies/create/v1/execute.js";
import type {
  CreatePlacementBySuppliesReportV1Request,
  CreatePlacementBySuppliesReportV1Response,
} from "./endpoints/report/placement/by-supplies/create/v1/types.js";
import { executeCreateMarkedProductsSalesReportV1 } from "./endpoints/report/marked-products/sales/create/v1/execute.js";
import type {
  CreateMarkedProductsSalesReportV1Request,
  CreateMarkedProductsSalesReportV1Response,
} from "./endpoints/report/marked-products/sales/create/v1/types.js";
import { executeGetRealizationReportV2 } from "./endpoints/finance/realization/get/v2/execute.js";
import type {
  GetRealizationReportV2Request,
  GetRealizationReportV2Response,
} from "./endpoints/finance/realization/get/v2/types.js";
import { executeGetRealizationPostingReportV1 } from "./endpoints/finance/realization/posting/v1/execute.js";
import type {
  GetRealizationPostingReportV1Request,
  GetRealizationPostingReportV1Response,
} from "./endpoints/finance/realization/posting/v1/types.js";
import { executeListFinanceTransactionsV3 } from "./endpoints/finance/transaction/list/v3/execute.js";
import type {
  ListFinanceTransactionsV3Request,
  ListFinanceTransactionsV3Response,
} from "./endpoints/finance/transaction/list/v3/types.js";
import { executeGetFinanceTransactionTotalsV3 } from "./endpoints/finance/transaction/totals/v3/execute.js";
import type {
  GetFinanceTransactionTotalsV3Request,
  GetFinanceTransactionTotalsV3Response,
} from "./endpoints/finance/transaction/totals/v3/types.js";
import { executeCreateB2BSalesReportV1 } from "./endpoints/finance/document/b2b-sales/create/v1/execute.js";
import type {
  CreateB2BSalesReportV1Request,
  CreateB2BSalesReportV1Response,
} from "./endpoints/finance/document/b2b-sales/create/v1/types.js";
import { executeGetB2BSalesJsonReportV1 } from "./endpoints/finance/document/b2b-sales/json/v1/execute.js";
import type {
  GetB2BSalesJsonReportV1Request,
  GetB2BSalesJsonReportV1Response,
} from "./endpoints/finance/document/b2b-sales/json/v1/types.js";
import { executeCreateMutualSettlementReportV1 } from "./endpoints/finance/mutual-settlement/create/v1/execute.js";
import type {
  CreateMutualSettlementReportV1Request,
  CreateMutualSettlementReportV1Response,
} from "./endpoints/finance/mutual-settlement/create/v1/types.js";
import { executeGetFinanceProductsBuyoutV1 } from "./endpoints/finance/products/buyout/v1/execute.js";
import type {
  GetFinanceProductsBuyoutV1Request,
  GetFinanceProductsBuyoutV1Response,
} from "./endpoints/finance/products/buyout/v1/types.js";
import { executeCreateCompensationReportV1 } from "./endpoints/finance/compensation/create/v1/execute.js";
import type {
  CreateCompensationReportV1Request,
  CreateCompensationReportV1Response,
} from "./endpoints/finance/compensation/create/v1/types.js";
import { executeCreateDecompensationReportV1 } from "./endpoints/finance/compensation/reversal/create/v1/execute.js";
import type {
  CreateDecompensationReportV1Request,
  CreateDecompensationReportV1Response,
} from "./endpoints/finance/compensation/reversal/create/v1/types.js";
import { executeGetReceiptV1 } from "./endpoints/receipt/get/v1/execute.js";
import type {
  GetReceiptV1Request,
  GetReceiptV1Response,
} from "./endpoints/receipt/get/v1/types.js";
import { executeListSellerReceiptsV1 } from "./endpoints/receipt/list/v1/execute.js";
import type {
  ListSellerReceiptsV1Request,
  ListSellerReceiptsV1Response,
} from "./endpoints/receipt/list/v1/types.js";
import { executeUploadReceiptV1 } from "./endpoints/receipt/upload/v1/execute.js";
import type {
  UploadReceiptV1Request,
  UploadReceiptV1Response,
} from "./endpoints/receipt/upload/v1/types.js";
import { executeCreateReviewCommentV1 } from "./endpoints/review/comment/create/v1/execute.js";
import type {
  CreateReviewCommentV1Request,
  CreateReviewCommentV1Response,
} from "./endpoints/review/comment/create/v1/types.js";
import { executeDeleteReviewCommentV1 } from "./endpoints/review/comment/delete/v1/execute.js";
import type {
  DeleteReviewCommentV1Request,
  DeleteReviewCommentV1Response,
} from "./endpoints/review/comment/delete/v1/types.js";
import { executeDeleteReviewCommentV2 } from "./endpoints/review/comment/delete/v2/execute.js";
import type {
  DeleteReviewCommentV2Request,
  DeleteReviewCommentV2Response,
} from "./endpoints/review/comment/delete/v2/types.js";
import { executeListReviewCommentsV1 } from "./endpoints/review/comment/list/v1/execute.js";
import type {
  ListReviewCommentsV1Request,
  ListReviewCommentsV1Response,
} from "./endpoints/review/comment/list/v1/types.js";
import { executeUpdateReviewStatusV1 } from "./endpoints/review/status/update/v1/execute.js";
import type {
  UpdateReviewStatusV1Request,
  UpdateReviewStatusV1Response,
} from "./endpoints/review/status/update/v1/types.js";
import { executeUpdateReviewStatusV2 } from "./endpoints/review/status/update/v2/execute.js";
import type {
  UpdateReviewStatusV2Request,
  UpdateReviewStatusV2Response,
} from "./endpoints/review/status/update/v2/types.js";
import { executeGetReviewCountV1 } from "./endpoints/review/count/v1/execute.js";
import type { GetReviewCountV1Response } from "./endpoints/review/count/v1/types.js";
import { executeGetReviewCountV2 } from "./endpoints/review/count/v2/execute.js";
import type { GetReviewCountV2Response } from "./endpoints/review/count/v2/types.js";
import { executeGetReviewInfoV1 } from "./endpoints/review/info/v1/execute.js";
import type {
  GetReviewInfoV1Request,
  GetReviewInfoV1Response,
} from "./endpoints/review/info/v1/types.js";
import { executeGetReviewInfoV2 } from "./endpoints/review/info/v2/execute.js";
import type {
  GetReviewInfoV2Request,
  GetReviewInfoV2Response,
} from "./endpoints/review/info/v2/types.js";
import { executeListReviewsV1 } from "./endpoints/review/list/v1/execute.js";
import type {
  ListReviewsV1Request,
  ListReviewsV1Response,
} from "./endpoints/review/list/v1/types.js";
import { executeListReviewsV2 } from "./endpoints/review/list/v2/execute.js";
import type {
  ListReviewsV2Request,
  ListReviewsV2Response,
} from "./endpoints/review/list/v2/types.js";
import { executeCreateQuestionAnswerV1 } from "./endpoints/question/answer/create/v1/execute.js";
import type {
  CreateQuestionAnswerV1Request,
  CreateQuestionAnswerV1Response,
} from "./endpoints/question/answer/create/v1/types.js";
import { executeDeleteQuestionAnswerV1 } from "./endpoints/question/answer/delete/v1/execute.js";
import type {
  DeleteQuestionAnswerV1Request,
  DeleteQuestionAnswerV1Response,
} from "./endpoints/question/answer/delete/v1/types.js";
import { executeListQuestionAnswersV1 } from "./endpoints/question/answer/list/v1/execute.js";
import type {
  ListQuestionAnswersV1Request,
  ListQuestionAnswersV1Response,
} from "./endpoints/question/answer/list/v1/types.js";
import { executeUpdateQuestionStatusV1 } from "./endpoints/question/status/update/v1/execute.js";
import type {
  UpdateQuestionStatusV1Request,
  UpdateQuestionStatusV1Response,
} from "./endpoints/question/status/update/v1/types.js";
import { executeGetQuestionCountV1 } from "./endpoints/question/count/v1/execute.js";
import type { GetQuestionCountV1Response } from "./endpoints/question/count/v1/types.js";
import { executeGetQuestionInfoV1 } from "./endpoints/question/info/v1/execute.js";
import type {
  GetQuestionInfoV1Request,
  GetQuestionInfoV1Response,
} from "./endpoints/question/info/v1/types.js";
import { executeListQuestionsV1 } from "./endpoints/question/list/v1/execute.js";
import type {
  ListQuestionsV1Request,
  ListQuestionsV1Response,
} from "./endpoints/question/list/v1/types.js";
import { executeGetQuestionTopSkusV1 } from "./endpoints/question/top-sku/v1/execute.js";
import type {
  GetQuestionTopSkusV1Request,
  GetQuestionTopSkusV1Response,
} from "./endpoints/question/top-sku/v1/types.js";
import { executeGetAnalyticsManageStocksV1 } from "./endpoints/analytics/manage/stocks/v1/execute.js";
import type {
  GetAnalyticsManageStocksV1Request,
  GetAnalyticsManageStocksV1Response,
} from "./endpoints/analytics/manage/stocks/v1/types.js";
import { executeListSupplyReturnsV1 } from "./endpoints/removal/from-supply/list/v1/execute.js";
import type {
  ListSupplyReturnsV1Request,
  ListSupplyReturnsV1Response,
} from "./endpoints/removal/from-supply/list/v1/types.js";
import { executeListStockReturnsV1 } from "./endpoints/removal/from-stock/list/v1/execute.js";
import type {
  ListStockReturnsV1Request,
  ListStockReturnsV1Response,
} from "./endpoints/removal/from-stock/list/v1/types.js";
import { executeSetProductStairwayDiscountByQuantityV1 } from "./endpoints/product/stairway-discount/by-quantity/set/v1/execute.js";
import type {
  SetProductStairwayDiscountByQuantityV1Request,
  SetProductStairwayDiscountByQuantityV1Response,
} from "./endpoints/product/stairway-discount/by-quantity/set/v1/types.js";
import { executeGetProductStairwayDiscountByQuantityV1 } from "./endpoints/product/stairway-discount/by-quantity/get/v1/execute.js";
import type {
  GetProductStairwayDiscountByQuantityV1Request,
  GetProductStairwayDiscountByQuantityV1Response,
} from "./endpoints/product/stairway-discount/by-quantity/get/v1/types.js";
import { executeGetFinanceBalanceV1 } from "./endpoints/finance/balance/get/v1/execute.js";
import type {
  GetFinanceBalanceV1Request,
  GetFinanceBalanceV1Response,
} from "./endpoints/finance/balance/get/v1/types.js";
import { executeListDiscountTasksV2 } from "./endpoints/promotion/discount-task/list/v2/execute.js";
import type {
  ListDiscountTasksV2Request,
  ListDiscountTasksV2Response,
} from "./endpoints/promotion/discount-task/list/v2/types.js";
import { executeSetProductVisibilityV1 } from "./endpoints/product/visibility/set/v1/execute.js";
import type {
  SetProductVisibilityV1Request,
  SetProductVisibilityV1Response,
} from "./endpoints/product/visibility/set/v1/types.js";
import { executeGetFinanceAccrualPostingsV1 } from "./endpoints/finance/accrual/postings/get/v1/execute.js";
import type {
  GetFinanceAccrualPostingsV1Request,
  GetFinanceAccrualPostingsV1Response,
} from "./endpoints/finance/accrual/postings/get/v1/types.js";
import { executeListFinanceAccrualTypesV1 } from "./endpoints/finance/accrual/types/list/v1/execute.js";
import type { ListFinanceAccrualTypesV1Response } from "./endpoints/finance/accrual/types/list/v1/types.js";
import { executeGetFinanceAccrualByDayV1 } from "./endpoints/finance/accrual/by-day/get/v1/execute.js";
import type {
  GetFinanceAccrualByDayV1Request,
  GetFinanceAccrualByDayV1Response,
} from "./endpoints/finance/accrual/by-day/get/v1/types.js";
import { executeGetProductVisibilityInfoV1 } from "./endpoints/product/visibility/info/v1/execute.js";
import type {
  GetProductVisibilityInfoV1Request,
  GetProductVisibilityInfoV1Response,
} from "./endpoints/product/visibility/info/v1/types.js";
import { executeGetFbpPostingV1 } from "./endpoints/posting/fbp/get/v1/execute.js";
import type {
  GetFbpPostingV1Request,
  GetFbpPostingV1Response,
} from "./endpoints/posting/fbp/get/v1/types.js";
import { executeCreateRealizationPostingReportV1 } from "./endpoints/report/realization/posting/create/v1/execute.js";
import type {
  CreateRealizationPostingReportV1Request,
  CreateRealizationPostingReportV1Response,
} from "./endpoints/report/realization/posting/create/v1/types.js";
import { executeListProductCertificateOptionsV2 } from "./endpoints/product/certificate/options/list/v2/execute.js";
import type { ListProductCertificateOptionsV2Response } from "./endpoints/product/certificate/options/list/v2/types.js";
import { executeGetProductCertificateParamsV2 } from "./endpoints/product/certificate/params/get/v2/execute.js";
import type {
  GetProductCertificateParamsV2Request,
  GetProductCertificateParamsV2Response,
} from "./endpoints/product/certificate/params/get/v2/types.js";
import { executeCreateProductCertificateV2 } from "./endpoints/product/certificate/create/v2/execute.js";
import type {
  CreateProductCertificateV2Request,
  CreateProductCertificateV2Response,
} from "./endpoints/product/certificate/create/v2/types.js";
import { executeListDropOffPointsForWarehouseCreateV1 } from "./endpoints/warehouse/fbs/drop-off/points/list-for-create/v1/execute.js";
import type {
  ListDropOffPointsForWarehouseCreateV1Request,
  ListDropOffPointsForWarehouseCreateV1Response,
} from "./endpoints/warehouse/fbs/drop-off/points/list-for-create/v1/types.js";
import { executeListDropOffPointsForWarehouseUpdateV1 } from "./endpoints/warehouse/fbs/drop-off/points/list-for-update/v1/execute.js";
import type {
  ListDropOffPointsForWarehouseUpdateV1Request,
  ListDropOffPointsForWarehouseUpdateV1Response,
} from "./endpoints/warehouse/fbs/drop-off/points/list-for-update/v1/types.js";
import { executeListDropOffTimeslotsForWarehouseCreateV1 } from "./endpoints/warehouse/fbs/drop-off/timeslot/list-for-create/v1/execute.js";
import type {
  ListDropOffTimeslotsForWarehouseCreateV1Request,
  ListDropOffTimeslotsForWarehouseCreateV1Response,
} from "./endpoints/warehouse/fbs/drop-off/timeslot/list-for-create/v1/types.js";
import { executeListDropOffTimeslotsForWarehouseUpdateV1 } from "./endpoints/warehouse/fbs/drop-off/timeslot/list-for-update/v1/execute.js";
import type {
  ListDropOffTimeslotsForWarehouseUpdateV1Request,
  ListDropOffTimeslotsForWarehouseUpdateV1Response,
} from "./endpoints/warehouse/fbs/drop-off/timeslot/list-for-update/v1/types.js";
import { executeListPickUpTimeslotsForWarehouseCreateV1 } from "./endpoints/warehouse/fbs/pick-up/timeslot/list-for-create/v1/execute.js";
import type {
  ListPickUpTimeslotsForWarehouseCreateV1Request,
  ListPickUpTimeslotsForWarehouseCreateV1Response,
} from "./endpoints/warehouse/fbs/pick-up/timeslot/list-for-create/v1/types.js";
import { executeListPickUpTimeslotsForWarehouseUpdateV1 } from "./endpoints/warehouse/fbs/pick-up/timeslot/list-for-update/v1/execute.js";
import type {
  ListPickUpTimeslotsForWarehouseUpdateV1Request,
  ListPickUpTimeslotsForWarehouseUpdateV1Response,
} from "./endpoints/warehouse/fbs/pick-up/timeslot/list-for-update/v1/types.js";
import { executeCreateFbsWarehouseV1 } from "./endpoints/warehouse/fbs/create/v1/execute.js";
import type {
  CreateFbsWarehouseV1Request,
  CreateFbsWarehouseV1Response,
} from "./endpoints/warehouse/fbs/create/v1/types.js";
import { executeUpdateFbsWarehouseV1 } from "./endpoints/warehouse/fbs/update/v1/execute.js";
import type {
  UpdateFbsWarehouseV1Request,
  UpdateFbsWarehouseV1Response,
} from "./endpoints/warehouse/fbs/update/v1/types.js";
import { executeUpdateFbsWarehouseFirstMileV1 } from "./endpoints/warehouse/fbs/first-mile/update/v1/execute.js";
import type {
  UpdateFbsWarehouseFirstMileV1Request,
  UpdateFbsWarehouseFirstMileV1Response,
} from "./endpoints/warehouse/fbs/first-mile/update/v1/types.js";
import { executeListReturnPointsForWarehouseCreateV1 } from "./endpoints/warehouse/fbs/return-point/list-for-create/v1/execute.js";
import type {
  ListReturnPointsForWarehouseCreateV1Request,
  ListReturnPointsForWarehouseCreateV1Response,
} from "./endpoints/warehouse/fbs/return-point/list-for-create/v1/types.js";
import { executeListReturnPointsForWarehouseUpdateV1 } from "./endpoints/warehouse/fbs/return-point/list-for-update/v1/execute.js";
import type {
  ListReturnPointsForWarehouseUpdateV1Request,
  ListReturnPointsForWarehouseUpdateV1Response,
} from "./endpoints/warehouse/fbs/return-point/list-for-update/v1/types.js";
import { executeGetFbsWarehouseReturnMileInfoV1 } from "./endpoints/warehouse/fbs/return-mile/info/v1/execute.js";
import type {
  GetFbsWarehouseReturnMileInfoV1Request,
  GetFbsWarehouseReturnMileInfoV1Response,
} from "./endpoints/warehouse/fbs/return-mile/info/v1/types.js";
import { executeCheckFbsWarehouseReturnMileV1 } from "./endpoints/warehouse/fbs/return-mile/check/v1/execute.js";
import type {
  CheckFbsWarehouseReturnMileV1Request,
  CheckFbsWarehouseReturnMileV1Response,
} from "./endpoints/warehouse/fbs/return-mile/check/v1/types.js";
import { executeCreateFbsPickupCourierCallV1 } from "./endpoints/warehouse/fbs/pickup/courier/create/v1/execute.js";
import type {
  CreateFbsPickupCourierCallV1Request,
  CreateFbsPickupCourierCallV1Response,
} from "./endpoints/warehouse/fbs/pickup/courier/create/v1/types.js";
import { executeCancelFbsPickupCourierCallV1 } from "./endpoints/warehouse/fbs/pickup/courier/cancel/v1/execute.js";
import type {
  CancelFbsPickupCourierCallV1Request,
  CancelFbsPickupCourierCallV1Response,
} from "./endpoints/warehouse/fbs/pickup/courier/cancel/v1/types.js";
import { executeListFbsPickupHistoryV1 } from "./endpoints/warehouse/fbs/pickup/history/list/v1/execute.js";
import type {
  ListFbsPickupHistoryV1Request,
  ListFbsPickupHistoryV1Response,
} from "./endpoints/warehouse/fbs/pickup/history/list/v1/types.js";
import { executeListFbsPickupPlanningV1 } from "./endpoints/warehouse/fbs/pickup/planning/list/v1/execute.js";
import type { ListFbsPickupPlanningV1Response } from "./endpoints/warehouse/fbs/pickup/planning/list/v1/types.js";
import { executeCreateErfbsAggregatorWarehouseV1 } from "./endpoints/warehouse/erfbs/aggregator/create/v1/execute.js";
import type {
  CreateErfbsAggregatorWarehouseV1Request,
  CreateErfbsAggregatorWarehouseV1Response,
} from "./endpoints/warehouse/erfbs/aggregator/create/v1/types.js";
import { executeUpdateErfbsWarehouseV1 } from "./endpoints/warehouse/erfbs/update/v1/execute.js";
import type {
  UpdateErfbsWarehouseV1Request,
  UpdateErfbsWarehouseV1Response,
} from "./endpoints/warehouse/erfbs/update/v1/types.js";
import { executeUpdateErfbsAggregatorDeliveryMethodV1 } from "./endpoints/warehouse/erfbs/aggregator/delivery-method/update/v1/execute.js";
import type {
  UpdateErfbsAggregatorDeliveryMethodV1Request,
  UpdateErfbsAggregatorDeliveryMethodV1Response,
} from "./endpoints/warehouse/erfbs/aggregator/delivery-method/update/v1/types.js";
import { executeCreateErfbsNonIntegratedWarehouseV1 } from "./endpoints/warehouse/erfbs/non-integrated/create/v1/execute.js";
import type {
  CreateErfbsNonIntegratedWarehouseV1Request,
  CreateErfbsNonIntegratedWarehouseV1Response,
} from "./endpoints/warehouse/erfbs/non-integrated/create/v1/types.js";
import { executeUpdateErfbsNonIntegratedDeliveryMethodV1 } from "./endpoints/warehouse/erfbs/non-integrated/delivery-method/update/v1/execute.js";
import type {
  UpdateErfbsNonIntegratedDeliveryMethodV1Request,
  UpdateErfbsNonIntegratedDeliveryMethodV1Response,
} from "./endpoints/warehouse/erfbs/non-integrated/delivery-method/update/v1/types.js";
import { executePauseRfbsWarehouseV1 } from "./endpoints/warehouse/rfbs/pause/v1/execute.js";
import type {
  PauseRfbsWarehouseV1Request,
  PauseRfbsWarehouseV1Response,
} from "./endpoints/warehouse/rfbs/pause/v1/types.js";
import { executeUnpauseRfbsWarehouseV1 } from "./endpoints/warehouse/rfbs/unpause/v1/execute.js";
import type {
  UnpauseRfbsWarehouseV1Request,
  UnpauseRfbsWarehouseV1Response,
} from "./endpoints/warehouse/rfbs/unpause/v1/types.js";
import { executeBindDeliveryPolygonV2 } from "./endpoints/polygon/bind/v2/execute.js";
import type {
  BindDeliveryPolygonV2Request,
  BindDeliveryPolygonV2Response,
} from "./endpoints/polygon/bind/v2/types.js";
import { executeDeleteDeliveryPolygonV1 } from "./endpoints/polygon/delete/v1/execute.js";
import type {
  DeleteDeliveryPolygonV1Request,
  DeleteDeliveryPolygonV1Response,
} from "./endpoints/polygon/delete/v1/types.js";
import { executeListDeliveryPolygonsV1 } from "./endpoints/polygon/list/v1/execute.js";
import type {
  ListDeliveryPolygonsV1Request,
  ListDeliveryPolygonsV1Response,
} from "./endpoints/polygon/list/v1/types.js";
import { executeUpdateDeliveryPolygonCoordinatesV1 } from "./endpoints/polygon/time/coordinates/update/v1/execute.js";
import type {
  UpdateDeliveryPolygonCoordinatesV1Request,
  UpdateDeliveryPolygonCoordinatesV1Response,
} from "./endpoints/polygon/time/coordinates/update/v1/types.js";
import { executeSetDeliveryPolygonTimeV1 } from "./endpoints/polygon/time/set/v1/execute.js";
import type {
  SetDeliveryPolygonTimeV1Request,
  SetDeliveryPolygonTimeV1Response,
} from "./endpoints/polygon/time/set/v1/types.js";
import { executeCreateSellerDiscountActionV1 } from "./endpoints/seller-action/create/discount/v1/execute.js";
import type {
  CreateSellerDiscountActionV1Request,
  CreateSellerDiscountActionV1Response,
} from "./endpoints/seller-action/create/discount/v1/types.js";
import { executeCreateSellerDiscountWithConditionActionV1 } from "./endpoints/seller-action/create/discount-with-condition/v1/execute.js";
import type {
  CreateSellerDiscountWithConditionActionV1Request,
  CreateSellerDiscountWithConditionActionV1Response,
} from "./endpoints/seller-action/create/discount-with-condition/v1/types.js";
import { executeCreateSellerInstallmentActionV1 } from "./endpoints/seller-action/create/installment/v1/execute.js";
import type {
  CreateSellerInstallmentActionV1Request,
  CreateSellerInstallmentActionV1Response,
} from "./endpoints/seller-action/create/installment/v1/types.js";
import { executeCreateSellerMultiLevelDiscountActionV1 } from "./endpoints/seller-action/create/multi-level-discount/v1/execute.js";
import type {
  CreateSellerMultiLevelDiscountActionV1Request,
  CreateSellerMultiLevelDiscountActionV1Response,
} from "./endpoints/seller-action/create/multi-level-discount/v1/types.js";
import { executeCreateSellerVoucherActionV1 } from "./endpoints/seller-action/create/voucher/v1/execute.js";
import type {
  CreateSellerVoucherActionV1Request,
  CreateSellerVoucherActionV1Response,
} from "./endpoints/seller-action/create/voucher/v1/types.js";
import { executeUpdateSellerDiscountActionV1 } from "./endpoints/seller-action/update/discount/v1/execute.js";
import type {
  UpdateSellerDiscountActionV1Request,
  UpdateSellerDiscountActionV1Response,
} from "./endpoints/seller-action/update/discount/v1/types.js";
import { executeUpdateSellerDiscountWithConditionActionV1 } from "./endpoints/seller-action/update/discount-with-condition/v1/execute.js";
import type {
  UpdateSellerDiscountWithConditionActionV1Request,
  UpdateSellerDiscountWithConditionActionV1Response,
} from "./endpoints/seller-action/update/discount-with-condition/v1/types.js";
import { executeUpdateSellerInstallmentActionV1 } from "./endpoints/seller-action/update/installment/v1/execute.js";
import type {
  UpdateSellerInstallmentActionV1Request,
  UpdateSellerInstallmentActionV1Response,
} from "./endpoints/seller-action/update/installment/v1/types.js";
import { executeUpdateSellerMultiLevelDiscountActionV1 } from "./endpoints/seller-action/update/multi-level-discount/v1/execute.js";
import type {
  UpdateSellerMultiLevelDiscountActionV1Request,
  UpdateSellerMultiLevelDiscountActionV1Response,
} from "./endpoints/seller-action/update/multi-level-discount/v1/types.js";
import { executeUpdateSellerVoucherActionV1 } from "./endpoints/seller-action/update/voucher/v1/execute.js";
import type {
  UpdateSellerVoucherActionV1Request,
  UpdateSellerVoucherActionV1Response,
} from "./endpoints/seller-action/update/voucher/v1/types.js";
import { executeAddSellerActionProductsV1 } from "./endpoints/seller-action/products/add/v1/execute.js";
import type {
  AddSellerActionProductsV1Request,
  AddSellerActionProductsV1Response,
} from "./endpoints/seller-action/products/add/v1/types.js";
import { executeListSellerActionProductCandidatesV1 } from "./endpoints/seller-action/products/candidates/v1/execute.js";
import type {
  ListSellerActionProductCandidatesV1Request,
  ListSellerActionProductCandidatesV1Response,
} from "./endpoints/seller-action/products/candidates/v1/types.js";
import { executeDeleteSellerActionProductsV1 } from "./endpoints/seller-action/products/delete/v1/execute.js";
import type {
  DeleteSellerActionProductsV1Request,
  DeleteSellerActionProductsV1Response,
} from "./endpoints/seller-action/products/delete/v1/types.js";
import { executeListSellerActionProductsV1 } from "./endpoints/seller-action/products/list/v1/execute.js";
import type {
  ListSellerActionProductsV1Request,
  ListSellerActionProductsV1Response,
} from "./endpoints/seller-action/products/list/v1/types.js";
import { executeArchiveSellerActionV1 } from "./endpoints/seller-action/archive/v1/execute.js";
import type {
  ArchiveSellerActionV1Request,
  ArchiveSellerActionV1Response,
} from "./endpoints/seller-action/archive/v1/types.js";
import { executeChangeSellerActionActivityV1 } from "./endpoints/seller-action/change-activity/v1/execute.js";
import type {
  ChangeSellerActionActivityV1Request,
  ChangeSellerActionActivityV1Response,
} from "./endpoints/seller-action/change-activity/v1/types.js";
import { executeListSellerActionsV1 } from "./endpoints/seller-action/list/v1/execute.js";
import type {
  ListSellerActionsV1Request,
  ListSellerActionsV1Response,
} from "./endpoints/seller-action/list/v1/types.js";
import { executeGetSellerActionVoucherFileV1 } from "./endpoints/seller-action/voucher/get/v1/execute.js";
import type {
  GetSellerActionVoucherFileV1Request,
  GetSellerActionVoucherFileV1Response,
} from "./endpoints/seller-action/voucher/get/v1/types.js";
import { executeListAutoAddProductsV1 } from "./endpoints/actions/auto-add/products/list/v1/execute.js";
import type {
  ListAutoAddProductsV1Request,
  ListAutoAddProductsV1Response,
} from "./endpoints/actions/auto-add/products/list/v1/types.js";
import { executeListAutoAddProductCandidatesV1 } from "./endpoints/actions/auto-add/products/candidates/v1/execute.js";
import type {
  ListAutoAddProductCandidatesV1Request,
  ListAutoAddProductCandidatesV1Response,
} from "./endpoints/actions/auto-add/products/candidates/v1/types.js";
import { executeDeleteAutoAddProductsV1 } from "./endpoints/actions/auto-add/products/delete/v1/execute.js";
import type {
  DeleteAutoAddProductsV1Request,
  DeleteAutoAddProductsV1Response,
} from "./endpoints/actions/auto-add/products/delete/v1/types.js";
import { executeUpdateAutoAddProductsV1 } from "./endpoints/actions/auto-add/products/update/v1/execute.js";
import type {
  UpdateAutoAddProductsV1Request,
  UpdateAutoAddProductsV1Response,
} from "./endpoints/actions/auto-add/products/update/v1/types.js";
import { executeSetNotificationV1 } from "./endpoints/notification/set/v1/execute.js";
import type {
  SetNotificationV1Request,
  SetNotificationV1Response,
} from "./endpoints/notification/set/v1/types.js";
import { executeUpdateNotificationV1 } from "./endpoints/notification/update/v1/execute.js";
import type {
  UpdateNotificationV1Request,
  UpdateNotificationV1Response,
} from "./endpoints/notification/update/v1/types.js";
import { executeDeleteNotificationV1 } from "./endpoints/notification/delete/v1/execute.js";
import type {
  DeleteNotificationV1Request,
  DeleteNotificationV1Response,
} from "./endpoints/notification/delete/v1/types.js";
import { executeCheckNotificationV1 } from "./endpoints/notification/check/v1/execute.js";
import type {
  CheckNotificationV1Request,
  CheckNotificationV1Response,
} from "./endpoints/notification/check/v1/types.js";
import { executeEnableNotificationV1 } from "./endpoints/notification/enable/v1/execute.js";
import type {
  EnableNotificationV1Request,
  EnableNotificationV1Response,
} from "./endpoints/notification/enable/v1/types.js";
import { executeListNotificationsV1 } from "./endpoints/notification/list/v1/execute.js";
import type { ListNotificationsV1Response } from "./endpoints/notification/list/v1/types.js";
import { executeListNotificationPushTypesV1 } from "./endpoints/notification/push-type/list/v1/execute.js";
import type { ListNotificationPushTypesV1Response } from "./endpoints/notification/push-type/list/v1/types.js";
import { executeGetCargoesV2 } from "./endpoints/cargoes/get/v2/execute.js";
import type {
  GetCargoesV2Request,
  GetCargoesV2Response,
} from "./endpoints/cargoes/get/v2/types.js";
import { executeDeleteCargoesV2 } from "./endpoints/cargoes/delete/v2/execute.js";
import type {
  DeleteCargoesV2Request,
  DeleteCargoesV2Response,
} from "./endpoints/cargoes/delete/v2/types.js";
import { executeGetCargoesDeleteStatusV2 } from "./endpoints/cargoes/delete/status/v2/execute.js";
import type {
  GetCargoesDeleteStatusV2Request,
  GetCargoesDeleteStatusV2Response,
} from "./endpoints/cargoes/delete/status/v2/types.js";
import { executeActivateTransportCargoesV1 } from "./endpoints/cargoes/transport/activate/v1/execute.js";
import type {
  ActivateTransportCargoesV1Request,
  ActivateTransportCargoesV1Response,
} from "./endpoints/cargoes/transport/activate/v1/types.js";
import { executeGetTransportCargoesActivationStatusV1 } from "./endpoints/cargoes/transport/activate/status/v1/execute.js";
import type {
  GetTransportCargoesActivationStatusV1Request,
  GetTransportCargoesActivationStatusV1Response,
} from "./endpoints/cargoes/transport/activate/status/v1/types.js";
import { executeCreateTransportCargoesV1 } from "./endpoints/cargoes/transport/create/v1/execute.js";
import type {
  CreateTransportCargoesV1Request,
  CreateTransportCargoesV1Response,
} from "./endpoints/cargoes/transport/create/v1/types.js";
import { executeGetTransportCargoesCreateStatusV1 } from "./endpoints/cargoes/transport/create/status/v1/execute.js";
import type {
  GetTransportCargoesCreateStatusV1Request,
  GetTransportCargoesCreateStatusV1Response,
} from "./endpoints/cargoes/transport/create/status/v1/types.js";
import { executeBindTransportCargoesV1 } from "./endpoints/cargoes/transport/bind/v1/execute.js";
import type {
  BindTransportCargoesV1Request,
  BindTransportCargoesV1Response,
} from "./endpoints/cargoes/transport/bind/v1/types.js";
import { executeGetTransportCargoesBindStatusV1 } from "./endpoints/cargoes/transport/bind/status/v1/execute.js";
import type {
  GetTransportCargoesBindStatusV1Request,
  GetTransportCargoesBindStatusV1Response,
} from "./endpoints/cargoes/transport/bind/status/v1/types.js";
import { executeGetSupplyCargoesV1 } from "./endpoints/cargoes/supplies/get/v1/execute.js";
import type {
  GetSupplyCargoesV1Request,
  GetSupplyCargoesV1Response,
} from "./endpoints/cargoes/supplies/get/v1/types.js";
import { executeCreateTransportLabelsByOrderV1 } from "./endpoints/cargoes/label/transport-by-order/create/v1/execute.js";
import type {
  CreateTransportLabelsByOrderV1Request,
  CreateTransportLabelsByOrderV1Response,
} from "./endpoints/cargoes/label/transport-by-order/create/v1/types.js";
import { executeGetTransportLabelsByOrderStatusV1 } from "./endpoints/cargoes/label/transport-by-order/status/v1/execute.js";
import type {
  GetTransportLabelsByOrderStatusV1Request,
  GetTransportLabelsByOrderStatusV1Response,
} from "./endpoints/cargoes/label/transport-by-order/status/v1/types.js";
import { executeCreateTransportLabelsV1 } from "./endpoints/cargoes/label/transport/create/v1/execute.js";
import type {
  CreateTransportLabelsV1Request,
  CreateTransportLabelsV1Response,
} from "./endpoints/cargoes/label/transport/create/v1/types.js";
import { executeGetTransportLabelsStatusV1 } from "./endpoints/cargoes/label/transport/status/v1/execute.js";
import type {
  GetTransportLabelsStatusV1Request,
  GetTransportLabelsStatusV1Response,
} from "./endpoints/cargoes/label/transport/status/v1/types.js";
import { executeCreateFbpDirectSellerDeliveryDraftV1 } from "./endpoints/fbp/draft/direct/seller-delivery/create/v1/execute.js";
import type {
  CreateFbpDirectSellerDeliveryDraftV1Request,
  CreateFbpDirectSellerDeliveryDraftV1Response,
} from "./endpoints/fbp/draft/direct/seller-delivery/create/v1/types.js";
import { executeEditFbpDirectSellerDeliveryDraftV1 } from "./endpoints/fbp/draft/direct/seller-delivery/edit/v1/execute.js";
import type {
  EditFbpDirectSellerDeliveryDraftV1Request,
  EditFbpDirectSellerDeliveryDraftV1Response,
} from "./endpoints/fbp/draft/direct/seller-delivery/edit/v1/types.js";
import { executeEditFbpDirectTimeslotV1 } from "./endpoints/fbp/draft/direct/timeslot/edit/v1/execute.js";
import type {
  EditFbpDirectTimeslotV1Request,
  EditFbpDirectTimeslotV1Response,
} from "./endpoints/fbp/draft/direct/timeslot/edit/v1/types.js";
import { executeGetFbpDirectTimeslotsV1 } from "./endpoints/fbp/draft/direct/timeslot/get/v1/execute.js";
import type {
  GetFbpDirectTimeslotsV1Request,
  GetFbpDirectTimeslotsV1Response,
} from "./endpoints/fbp/draft/direct/timeslot/get/v1/types.js";
import { executeCreateFbpDirectDraftV1 } from "./endpoints/fbp/draft/direct/create/v1/execute.js";
import type {
  CreateFbpDirectDraftV1Request,
  CreateFbpDirectDraftV1Response,
} from "./endpoints/fbp/draft/direct/create/v1/types.js";
import { executeDeleteFbpDirectDraftV1 } from "./endpoints/fbp/draft/direct/delete/v1/execute.js";
import type {
  DeleteFbpDirectDraftV1Request,
  DeleteFbpDirectDraftV1Response,
} from "./endpoints/fbp/draft/direct/delete/v1/types.js";
import { executeValidateFbpDirectDraftProductsV1 } from "./endpoints/fbp/draft/direct/product/validate/v1/execute.js";
import type {
  ValidateFbpDirectDraftProductsV1Request,
  ValidateFbpDirectDraftProductsV1Response,
} from "./endpoints/fbp/draft/direct/product/validate/v1/types.js";
import { executeRegisterFbpDirectDraftV1 } from "./endpoints/fbp/draft/direct/register/v1/execute.js";
import type {
  RegisterFbpDirectDraftV1Request,
  RegisterFbpDirectDraftV1Response,
} from "./endpoints/fbp/draft/direct/register/v1/types.js";
import { executeCreateFbpDropOffDraftV1 } from "./endpoints/fbp/draft/drop-off/create/v1/execute.js";
import type {
  CreateFbpDropOffDraftV1Request,
  CreateFbpDropOffDraftV1Response,
} from "./endpoints/fbp/draft/drop-off/create/v1/types.js";
import { executeDeleteFbpDropOffDraftV1 } from "./endpoints/fbp/draft/drop-off/delete/v1/execute.js";
import type {
  DeleteFbpDropOffDraftV1Request,
  DeleteFbpDropOffDraftV1Response,
} from "./endpoints/fbp/draft/drop-off/delete/v1/types.js";
import { executeEditFbpDropOffDeliveryV1 } from "./endpoints/fbp/draft/drop-off/delivery/edit/v1/execute.js";
import type {
  EditFbpDropOffDeliveryV1Request,
  EditFbpDropOffDeliveryV1Response,
} from "./endpoints/fbp/draft/drop-off/delivery/edit/v1/types.js";
import { executeListFbpDropOffPointsV1 } from "./endpoints/fbp/draft/drop-off/point/list/v1/execute.js";
import type {
  ListFbpDropOffPointsV1Request,
  ListFbpDropOffPointsV1Response,
} from "./endpoints/fbp/draft/drop-off/point/list/v1/types.js";
import { executeGetFbpDropOffPointTimetableV1 } from "./endpoints/fbp/draft/drop-off/point/timetable/v1/execute.js";
import type {
  GetFbpDropOffPointTimetableV1Request,
  GetFbpDropOffPointTimetableV1Response,
} from "./endpoints/fbp/draft/drop-off/point/timetable/v1/types.js";
import { executeListFbpDropOffProvincesV1 } from "./endpoints/fbp/draft/drop-off/province/list/v1/execute.js";
import type {
  ListFbpDropOffProvincesV1Request,
  ListFbpDropOffProvincesV1Response,
} from "./endpoints/fbp/draft/drop-off/province/list/v1/types.js";
import { executeRegisterFbpDropOffDraftV1 } from "./endpoints/fbp/draft/drop-off/register/v1/execute.js";
import type {
  RegisterFbpDropOffDraftV1Request,
  RegisterFbpDropOffDraftV1Response,
} from "./endpoints/fbp/draft/drop-off/register/v1/types.js";
import { executeValidateFbpDropOffDraftProductsV1 } from "./endpoints/fbp/draft/drop-off/product/validate/v1/execute.js";
import type {
  ValidateFbpDropOffDraftProductsV1Request,
  ValidateFbpDropOffDraftProductsV1Response,
} from "./endpoints/fbp/draft/drop-off/product/validate/v1/types.js";
import { executeCancelFbpDirectOrderV1 } from "./endpoints/fbp/order/direct/cancel/v1/execute.js";
import type {
  CancelFbpDirectOrderV1Request,
  CancelFbpDirectOrderV1Response,
} from "./endpoints/fbp/order/direct/cancel/v1/types.js";
import { executeEditFbpDirectOrderSellerDeliveryV1 } from "./endpoints/fbp/order/direct/seller-delivery/edit/v1/execute.js";
import type {
  EditFbpDirectOrderSellerDeliveryV1Request,
  EditFbpDirectOrderSellerDeliveryV1Response,
} from "./endpoints/fbp/order/direct/seller-delivery/edit/v1/types.js";
import { executeEditFbpDirectOrderTimeslotV1 } from "./endpoints/fbp/order/direct/timeslot/edit/v1/execute.js";
import type {
  EditFbpDirectOrderTimeslotV1Request,
  EditFbpDirectOrderTimeslotV1Response,
} from "./endpoints/fbp/order/direct/timeslot/edit/v1/types.js";
import { executeListFbpDirectOrderTimeslotsV1 } from "./endpoints/fbp/order/direct/timeslot/list/v1/execute.js";
import type {
  ListFbpDirectOrderTimeslotsV1Request,
  ListFbpDirectOrderTimeslotsV1Response,
} from "./endpoints/fbp/order/direct/timeslot/list/v1/types.js";
import { executeCreateFbpAcceptanceActV1 } from "./endpoints/fbp/act/from/create/v1/execute.js";
import type {
  CreateFbpAcceptanceActV1Request,
  CreateFbpAcceptanceActV1Response,
} from "./endpoints/fbp/act/from/create/v1/types.js";
import { executeGetFbpAcceptanceActV1 } from "./endpoints/fbp/act/from/get/v1/execute.js";
import type {
  GetFbpAcceptanceActV1Request,
  GetFbpAcceptanceActV1Response,
} from "./endpoints/fbp/act/from/get/v1/types.js";
import { executeCreateFbpConsignmentNoteV1 } from "./endpoints/fbp/act/to/create/v1/execute.js";
import type {
  CreateFbpConsignmentNoteV1Request,
  CreateFbpConsignmentNoteV1Response,
} from "./endpoints/fbp/act/to/create/v1/types.js";
import { executeGetFbpConsignmentNoteV1 } from "./endpoints/fbp/act/to/get/v1/execute.js";
import type {
  GetFbpConsignmentNoteV1Request,
  GetFbpConsignmentNoteV1Response,
} from "./endpoints/fbp/act/to/get/v1/types.js";
import { executeGetFbpArchiveSupplyV1 } from "./endpoints/fbp/archive/get/v1/execute.js";
import type {
  GetFbpArchiveSupplyV1Request,
  GetFbpArchiveSupplyV1Response,
} from "./endpoints/fbp/archive/get/v1/types.js";
import { executeListFbpArchiveSuppliesV1 } from "./endpoints/fbp/archive/list/v1/execute.js";
import type {
  ListFbpArchiveSuppliesV1Request,
  ListFbpArchiveSuppliesV1Response,
} from "./endpoints/fbp/archive/list/v1/types.js";
import { executeCreateFbpLabelsV1 } from "./endpoints/fbp/label/create/v1/execute.js";
import type {
  CreateFbpLabelsV1Request,
  CreateFbpLabelsV1Response,
} from "./endpoints/fbp/label/create/v1/types.js";
import { executeGetFbpLabelsV1 } from "./endpoints/fbp/label/get/v1/execute.js";
import type {
  GetFbpLabelsV1Request,
  GetFbpLabelsV1Response,
} from "./endpoints/fbp/label/get/v1/types.js";
import { executeCreateFbpPickupDraftV1 } from "./endpoints/fbp/draft/pick-up/create/v1/execute.js";
import type {
  CreateFbpPickupDraftV1Request,
  CreateFbpPickupDraftV1Response,
} from "./endpoints/fbp/draft/pick-up/create/v1/types.js";
import { executeDeleteFbpPickupDraftV1 } from "./endpoints/fbp/draft/pick-up/delete/v1/execute.js";
import type {
  DeleteFbpPickupDraftV1Request,
  DeleteFbpPickupDraftV1Response,
} from "./endpoints/fbp/draft/pick-up/delete/v1/types.js";
import { executeEditFbpPickupDraftDeliveryV1 } from "./endpoints/fbp/draft/pick-up/delivery/edit/v1/execute.js";
import type {
  EditFbpPickupDraftDeliveryV1Request,
  EditFbpPickupDraftDeliveryV1Response,
} from "./endpoints/fbp/draft/pick-up/delivery/edit/v1/types.js";
import { executeValidateFbpPickupDraftProductsV1 } from "./endpoints/fbp/draft/pick-up/product/validate/v1/execute.js";
import type {
  ValidateFbpPickupDraftProductsV1Request,
  ValidateFbpPickupDraftProductsV1Response,
} from "./endpoints/fbp/draft/pick-up/product/validate/v1/types.js";
import { executeListFbpWarehousesV1 } from "./endpoints/fbp/warehouse/list/v1/execute.js";
import type { ListFbpWarehousesV1Response } from "./endpoints/fbp/warehouse/list/v1/types.js";
import { executeRegisterFbpPickupDraftV1 } from "./endpoints/fbp/draft/pick-up/register/v1/execute.js";
import type {
  RegisterFbpPickupDraftV1Request,
  RegisterFbpPickupDraftV1Response,
} from "./endpoints/fbp/draft/pick-up/register/v1/types.js";
import { executeGetFbpDraftV1 } from "./endpoints/fbp/draft/get/v1/execute.js";
import type {
  GetFbpDraftV1Request,
  GetFbpDraftV1Response,
} from "./endpoints/fbp/draft/get/v1/types.js";
import { executeListFbpDraftsV1 } from "./endpoints/fbp/draft/list/v1/execute.js";
import type {
  ListFbpDraftsV1Request,
  ListFbpDraftsV1Response,
} from "./endpoints/fbp/draft/list/v1/types.js";
import { executeCreateFbpDirectTplDeliveryDraftV1 } from "./endpoints/fbp/draft/direct/tpl-delivery/create/v1/execute.js";
import type {
  CreateFbpDirectTplDeliveryDraftV1Request,
  CreateFbpDirectTplDeliveryDraftV1Response,
} from "./endpoints/fbp/draft/direct/tpl-delivery/create/v1/types.js";
import { executeEditFbpDirectTplDeliveryDraftV1 } from "./endpoints/fbp/draft/direct/tpl-delivery/edit/v1/execute.js";
import type {
  EditFbpDirectTplDeliveryDraftV1Request,
  EditFbpDirectTplDeliveryDraftV1Response,
} from "./endpoints/fbp/draft/direct/tpl-delivery/edit/v1/types.js";
import { executeCancelFbpDropOffOrderV1 } from "./endpoints/fbp/order/drop-off/cancel/v1/execute.js";
import type {
  CancelFbpDropOffOrderV1Request,
  CancelFbpDropOffOrderV1Response,
} from "./endpoints/fbp/order/drop-off/cancel/v1/types.js";
import { executeEditFbpDropOffOrderDeliveryV1 } from "./endpoints/fbp/order/drop-off/delivery/edit/v1/execute.js";
import type {
  EditFbpDropOffOrderDeliveryV1Request,
  EditFbpDropOffOrderDeliveryV1Response,
} from "./endpoints/fbp/order/drop-off/delivery/edit/v1/types.js";
import { executeGetFbpDropOffOrderTimetableV1 } from "./endpoints/fbp/order/drop-off/timetable/v1/execute.js";
import type {
  GetFbpDropOffOrderTimetableV1Request,
  GetFbpDropOffOrderTimetableV1Response,
} from "./endpoints/fbp/order/drop-off/timetable/v1/types.js";
import { executeGetFbpOrderV1 } from "./endpoints/fbp/order/get/v1/execute.js";
import type {
  GetFbpOrderV1Request,
  GetFbpOrderV1Response,
} from "./endpoints/fbp/order/get/v1/types.js";
import { executeListFbpOrdersV1 } from "./endpoints/fbp/order/list/v1/execute.js";
import type {
  ListFbpOrdersV1Request,
  ListFbpOrdersV1Response,
} from "./endpoints/fbp/order/list/v1/types.js";
import { executeListFbpPostingsV1 } from "./endpoints/posting/fbp/list/v1/execute.js";
import type {
  ListFbpPostingsV1Request,
  ListFbpPostingsV1Response,
} from "./endpoints/posting/fbp/list/v1/types.js";
import { executeCancelFbpPickupOrderV1 } from "./endpoints/fbp/order/pick-up/cancel/v1/execute.js";
import type {
  CancelFbpPickupOrderV1Request,
  CancelFbpPickupOrderV1Response,
} from "./endpoints/fbp/order/pick-up/cancel/v1/types.js";
import { executeEditFbpPickupOrderDeliveryV1 } from "./endpoints/fbp/order/pick-up/delivery/edit/v1/execute.js";
import type {
  EditFbpPickupOrderDeliveryV1Request,
  EditFbpPickupOrderDeliveryV1Response,
} from "./endpoints/fbp/order/pick-up/delivery/edit/v1/types.js";
import { executeCreateCarriageContainersV1 } from "./endpoints/carriage/container/create/v1/execute.js";
import type {
  CreateCarriageContainersV1Request,
  CreateCarriageContainersV1Response,
} from "./endpoints/carriage/container/create/v1/types.js";
import { executeFillCarriageContainerV1 } from "./endpoints/carriage/container/fill/v1/execute.js";
import type {
  FillCarriageContainerV1Request,
  FillCarriageContainerV1Response,
} from "./endpoints/carriage/container/fill/v1/types.js";
import { executeApproveCarriageContainersV1 } from "./endpoints/carriage/container/approve/v1/execute.js";
import type {
  ApproveCarriageContainersV1Request,
  ApproveCarriageContainersV1Response,
} from "./endpoints/carriage/container/approve/v1/types.js";
import { executePlaceCarriageContainersIntoV1 } from "./endpoints/carriage/container/place-into/v1/execute.js";
import type {
  PlaceCarriageContainersIntoV1Request,
  PlaceCarriageContainersIntoV1Response,
} from "./endpoints/carriage/container/place-into/v1/types.js";
import { executeRemoveCarriageContainerPostingsV1 } from "./endpoints/carriage/container/remove-postings/v1/execute.js";
import type {
  RemoveCarriageContainerPostingsV1Request,
  RemoveCarriageContainerPostingsV1Response,
} from "./endpoints/carriage/container/remove-postings/v1/types.js";
import { executeRemoveCarriageContainersFromV1 } from "./endpoints/carriage/container/remove-from/v1/execute.js";
import type {
  RemoveCarriageContainersFromV1Request,
  RemoveCarriageContainersFromV1Response,
} from "./endpoints/carriage/container/remove-from/v1/types.js";
import { executeCancelCarriageContainersV1 } from "./endpoints/carriage/container/cancel/v1/execute.js";
import type {
  CancelCarriageContainersV1Request,
  CancelCarriageContainersV1Response,
} from "./endpoints/carriage/container/cancel/v1/types.js";
import { executeListCarriageContainersV1 } from "./endpoints/carriage/container/list/v1/execute.js";
import type {
  ListCarriageContainersV1Request,
  ListCarriageContainersV1Response,
} from "./endpoints/carriage/container/list/v1/types.js";
import { executeGetCarriageContainerV1 } from "./endpoints/carriage/container/get/v1/execute.js";
import type {
  GetCarriageContainerV1Request,
  GetCarriageContainerV1Response,
} from "./endpoints/carriage/container/get/v1/types.js";
import { executeGetCarriageContainerStatusesV1 } from "./endpoints/carriage/container/status/get/v1/execute.js";
import type {
  GetCarriageContainerStatusesV1Request,
  GetCarriageContainerStatusesV1Response,
} from "./endpoints/carriage/container/status/get/v1/types.js";
import { executeGetCarriageContainerTaskV1 } from "./endpoints/carriage/container/task/info/v1/execute.js";
import type {
  GetCarriageContainerTaskV1Request,
  GetCarriageContainerTaskV1Response,
} from "./endpoints/carriage/container/task/info/v1/types.js";
import { executeGetCarriageContainerDocumentsV1 } from "./endpoints/carriage/container/document/get/v1/execute.js";
import type {
  GetCarriageContainerDocumentsV1Request,
  GetCarriageContainerDocumentsV1Response,
} from "./endpoints/carriage/container/document/get/v1/types.js";
import { executeGetCarriageContainerLabelsV1 } from "./endpoints/carriage/container/label/get/v1/execute.js";
import type {
  GetCarriageContainerLabelsV1Request,
  GetCarriageContainerLabelsV1Response,
} from "./endpoints/carriage/container/label/get/v1/types.js";
import { executeSendChatMessageV1 } from "./endpoints/chat/message/send/v1/execute.js";
import type {
  SendChatMessageV1Request,
  SendChatMessageV1Response,
} from "./endpoints/chat/message/send/v1/types.js";
import { executeStartChatV1 } from "./endpoints/chat/start/v1/execute.js";
import type {
  StartChatV1Request,
  StartChatV1Response,
} from "./endpoints/chat/start/v1/types.js";
import { executeReadChatV2 } from "./endpoints/chat/read/v2/execute.js";
import type {
  ReadChatV2Request,
  ReadChatV2Response,
} from "./endpoints/chat/read/v2/types.js";
import { executeGetAnalyticsDataV1 } from "./endpoints/analytics/data/get/v1/execute.js";
import type {
  GetAnalyticsDataV1Request,
  GetAnalyticsDataV1Response,
} from "./endpoints/analytics/data/get/v1/types.js";
import { executeListAnalyticsProductQueriesV1 } from "./endpoints/analytics/product-queries/list/v1/execute.js";
import type {
  ListAnalyticsProductQueriesV1Request,
  ListAnalyticsProductQueriesV1Response,
} from "./endpoints/analytics/product-queries/list/v1/types.js";
import { executeGetAnalyticsProductQueryDetailsV1 } from "./endpoints/analytics/product-queries/details/v1/execute.js";
import type {
  GetAnalyticsProductQueryDetailsV1Request,
  GetAnalyticsProductQueryDetailsV1Response,
} from "./endpoints/analytics/product-queries/details/v1/types.js";
import { executeGetRealizationReportByDayV1 } from "./endpoints/finance/realization/by-day/get/v1/execute.js";
import type {
  GetRealizationReportByDayV1Request,
  GetRealizationReportByDayV1Response,
} from "./endpoints/finance/realization/by-day/get/v1/types.js";
import { executeListSearchQueriesByTextV1 } from "./endpoints/search-queries/text/list/v1/execute.js";
import type {
  ListSearchQueriesByTextV1Request,
  ListSearchQueriesByTextV1Response,
} from "./endpoints/search-queries/text/list/v1/types.js";
import { executeListTopSearchQueriesV1 } from "./endpoints/search-queries/top/list/v1/execute.js";
import type {
  ListTopSearchQueriesV1Request,
  ListTopSearchQueriesV1Response,
} from "./endpoints/search-queries/top/list/v1/types.js";
import { executeGetProductPriceDetailsV1 } from "./endpoints/product/prices/details/v1/execute.js";
import type {
  GetProductPriceDetailsV1Request,
  GetProductPriceDetailsV1Response,
} from "./endpoints/product/prices/details/v1/types.js";
import { executeCheckDeliveryAvailabilityV1 } from "./endpoints/delivery/check/v1/execute.js";
import type {
  CheckDeliveryAvailabilityV1Request,
  CheckDeliveryAvailabilityV1Response,
} from "./endpoints/delivery/check/v1/types.js";
import { executeCheckoutDeliveryV2 } from "./endpoints/delivery/checkout/v2/execute.js";
import type {
  CheckoutDeliveryV2Request,
  CheckoutDeliveryV2Response,
} from "./endpoints/delivery/checkout/v2/types.js";
import { executeGetDeliveryMapV1 } from "./endpoints/delivery/map/v1/execute.js";
import type {
  GetDeliveryMapV1Request,
  GetDeliveryMapV1Response,
} from "./endpoints/delivery/map/v1/types.js";
import { executeGetDeliveryPointInfoV1 } from "./endpoints/delivery/point/info/v1/execute.js";
import type {
  GetDeliveryPointInfoV1Request,
  GetDeliveryPointInfoV1Response,
} from "./endpoints/delivery/point/info/v1/types.js";
import { executeListDeliveryPointsV1 } from "./endpoints/delivery/point/list/v1/execute.js";
import type { ListDeliveryPointsV1Response } from "./endpoints/delivery/point/list/v1/types.js";

export class OzonOperations {
  readonly #transport: Transport;

  constructor(transport: Transport) {
    this.#transport = transport;
  }

  acceptSupplyOrderAct(
    input: AcceptSupplyOrderActRequest,
    options: OzonRequestOptions = {},
  ): Promise<AcceptSupplyOrderActResponse> {
    return executeAcceptSupplyOrderAct(this.#transport, input, options);
  }
  getSupplyOrderActAcceptanceStatus(
    input: GetSupplyOrderActAcceptanceStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderActAcceptanceStatusResponse> {
    return executeGetSupplyOrderActAcceptanceStatus(
      this.#transport,
      input,
      options,
    );
  }
  getSupplyOrderActSummary(
    input: GetSupplyOrderActSummaryRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderActSummaryResponse> {
    return executeGetSupplyOrderActSummary(this.#transport, input, options);
  }
  getSupplyOrderActProducts(
    input: GetSupplyOrderActProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderActProductsResponse> {
    return executeGetSupplyOrderActProducts(this.#transport, input, options);
  }

  countSupplyOrdersByStatus(
    options: OzonRequestOptions = {},
  ): Promise<CountSupplyOrdersByStatusResponse> {
    return executeCountSupplyOrdersByStatus(this.#transport, options);
  }

  getSupplyOrderBundle(
    input: GetSupplyOrderBundleRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderBundleResponse> {
    return executeGetSupplyOrderBundle(this.#transport, input, options);
  }

  listSupplyOrdersV3(
    input: ListSupplyOrdersV3Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyOrdersV3Response> {
    return executeListSupplyOrdersV3(this.#transport, input, options);
  }

  getSupplyOrdersV3(
    input: GetSupplyOrdersV3Request,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrdersV3Response> {
    return executeGetSupplyOrdersV3(this.#transport, input, options);
  }

  /**
   * @deprecated Ozon объявил отключение этого метода 19 августа 2026 года.
   * Используйте `listSupplyOrderTimeslotsV2`.
   */
  listSupplyOrderTimeslotsV1(
    input: ListSupplyOrderTimeslotsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyOrderTimeslotsV1Response> {
    return executeListSupplyOrderTimeslotsV1(this.#transport, input, options);
  }

  listSupplyOrderTimeslotsV2(
    input: ListSupplyOrderTimeslotsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyOrderTimeslotsV2Response> {
    return executeListSupplyOrderTimeslotsV2(this.#transport, input, options);
  }

  updateSupplyOrderTimeslot(
    input: UpdateSupplyOrderTimeslotRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSupplyOrderTimeslotResponse> {
    return executeUpdateSupplyOrderTimeslot(this.#transport, input, options);
  }

  getSupplyOrderTimeslotStatus(
    input: GetSupplyOrderTimeslotStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderTimeslotStatusResponse> {
    return executeGetSupplyOrderTimeslotStatus(this.#transport, input, options);
  }

  createSupplyOrderPass(
    input: CreateSupplyOrderPassRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateSupplyOrderPassResponse> {
    return executeCreateSupplyOrderPass(this.#transport, input, options);
  }

  getSupplyOrderPassStatus(
    input: GetSupplyOrderPassStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderPassStatusResponse> {
    return executeGetSupplyOrderPassStatus(this.#transport, input, options);
  }

  /** @deprecated Ozon отключает v2 31 августа 2026 года. Используйте `listFboPostingsV3`. */
  listFboPostingsV2(
    input: ListFboPostingsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFboPostingsV2Response> {
    return executeListFboPostingsV2(this.#transport, input, options);
  }

  listFboPostingsV3(
    input: ListFboPostingsV3Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListFboPostingsV3Response> {
    return executeListFboPostingsV3(this.#transport, input, options);
  }

  getFboPostingV2(
    input: GetFboPostingV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFboPostingV2Response> {
    return executeGetFboPostingV2(this.#transport, input, options);
  }

  listFboPostingCancelReasons(
    options: OzonRequestOptions = {},
  ): Promise<ListFboPostingCancelReasonsResponse> {
    return executeListFboPostingCancelReasons(this.#transport, options);
  }

  getSupplyOrderDetails(
    input: GetSupplyOrderDetailsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderDetailsResponse> {
    return executeGetSupplyOrderDetails(this.#transport, input, options);
  }

  listSupplyClustersV1(
    input: ListSupplyClustersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyClustersV1Response> {
    return executeListSupplyClustersV1(this.#transport, input, options);
  }

  listSupplyClustersV2(
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyClustersV2Response> {
    return executeListSupplyClustersV2(this.#transport, options);
  }

  createCrossdockSupplyDraft(
    input: CreateCrossdockSupplyDraftRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateCrossdockSupplyDraftResponse> {
    return executeCreateCrossdockSupplyDraft(this.#transport, input, options);
  }

  createDirectSupplyDraft(
    input: CreateDirectSupplyDraftRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateDirectSupplyDraftResponse> {
    return executeCreateDirectSupplyDraft(this.#transport, input, options);
  }

  createMultiClusterSupplyDraft(
    input: CreateMultiClusterSupplyDraftRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateMultiClusterSupplyDraftResponse> {
    return executeCreateMultiClusterSupplyDraft(
      this.#transport,
      input,
      options,
    );
  }

  getSupplyDraftInfo(
    input: GetSupplyDraftInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyDraftInfoResponse> {
    return executeGetSupplyDraftInfo(this.#transport, input, options);
  }
  getSupplyDraftTimeslots(
    input: GetSupplyDraftTimeslotsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyDraftTimeslotsResponse> {
    return executeGetSupplyDraftTimeslots(this.#transport, input, options);
  }
  createSupplyCargoes(
    input: CreateSupplyCargoesRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateSupplyCargoesResponse> {
    return executeCreateSupplyCargoes(this.#transport, input, options);
  }
  getSupplyCargoesCreateInfo(
    input: GetSupplyCargoesCreateInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoesCreateInfoResponse> {
    return executeGetSupplyCargoesCreateInfo(this.#transport, input, options);
  }
  getSupplyCargoes(
    input: GetSupplyCargoesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoesResponse> {
    return executeGetSupplyCargoes(this.#transport, input, options);
  }
  deleteSupplyCargoes(
    input: DeleteSupplyCargoesRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeleteSupplyCargoesResponse> {
    return executeDeleteSupplyCargoes(this.#transport, input, options);
  }
  getSupplyCargoesDeleteStatus(
    input: GetSupplyCargoesDeleteStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoesDeleteStatusResponse> {
    return executeGetSupplyCargoesDeleteStatus(this.#transport, input, options);
  }
  getSupplyCargoesRules(
    input: GetSupplyCargoesRulesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoesRulesResponse> {
    return executeGetSupplyCargoesRules(this.#transport, input, options);
  }
  createSupplyCargoLabels(
    input: CreateSupplyCargoLabelsRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateSupplyCargoLabelsResponse> {
    return executeCreateSupplyCargoLabels(this.#transport, input, options);
  }
  getSupplyCargoLabels(
    input: GetSupplyCargoLabelsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoLabelsResponse> {
    return executeGetSupplyCargoLabels(this.#transport, input, options);
  }

  /** @deprecated Ozon отключил метод 10 апреля 2026 года. Используйте `getSupplyCargoLabels`. */
  getSupplyCargoLabelFile(
    input: GetSupplyCargoLabelFileRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoLabelFileResponse> {
    return executeGetSupplyCargoLabelFile(this.#transport, input, options);
  }

  cancelSupplyOrder(
    input: CancelSupplyOrderRequest,
    options: OzonRequestOptions = {},
  ): Promise<CancelSupplyOrderResponse> {
    return executeCancelSupplyOrder(this.#transport, input, options);
  }
  getSupplyOrderCancelStatus(
    input: GetSupplyOrderCancelStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderCancelStatusResponse> {
    return executeGetSupplyOrderCancelStatus(this.#transport, input, options);
  }
  updateSupplyOrderContent(
    input: UpdateSupplyOrderContentRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSupplyOrderContentResponse> {
    return executeUpdateSupplyOrderContent(this.#transport, input, options);
  }
  getSupplyOrderContentUpdateStatus(
    input: GetSupplyOrderContentUpdateStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderContentUpdateStatusResponse> {
    return executeGetSupplyOrderContentUpdateStatus(
      this.#transport,
      input,
      options,
    );
  }
  validateSupplyOrderContent(
    input: ValidateSupplyOrderContentRequest,
    options: OzonRequestOptions = {},
  ): Promise<ValidateSupplyOrderContentResponse> {
    return executeValidateSupplyOrderContent(this.#transport, input, options);
  }
  createSupplyOrderFromDraft(
    input: CreateSupplyOrderFromDraftRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateSupplyOrderFromDraftResponse> {
    return executeCreateSupplyOrderFromDraft(this.#transport, input, options);
  }
  getSupplyOrderFromDraftStatus(
    input: GetSupplyOrderFromDraftStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyOrderFromDraftStatusResponse> {
    return executeGetSupplyOrderFromDraftStatus(
      this.#transport,
      input,
      options,
    );
  }
  listFboSellerWarehouses(
    options: OzonRequestOptions = {},
  ): Promise<ListFboSellerWarehousesResponse> {
    return executeListFboSellerWarehouses(this.#transport, options);
  }
  shipFbsPostingV4(
    input: ShipFbsPostingV4Request,
    options: OzonRequestOptions = {},
  ): Promise<ShipFbsPostingV4Response> {
    return executeShipFbsPostingV4(this.#transport, input, options);
  }
  shipFbsPostingPackageV4(
    input: ShipFbsPostingPackageV4Request,
    options: OzonRequestOptions = {},
  ): Promise<ShipFbsPostingPackageV4Response> {
    return executeShipFbsPostingPackageV4(this.#transport, input, options);
  }
  setFbsPostingProductExemplarsV6(
    input: SetFbsPostingProductExemplarsV6Request,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeSetFbsPostingProductExemplarsV6(
      this.#transport,
      input,
      options,
    );
  }
  createOrGetFbsPostingProductExemplarsV6(
    input: CreateOrGetFbsPostingProductExemplarsV6Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateOrGetFbsPostingProductExemplarsV6Response> {
    return executeCreateOrGetFbsPostingProductExemplarsV6(
      this.#transport,
      input,
      options,
    );
  }
  getFbsPostingProductExemplarStatusV5(
    input: GetFbsPostingProductExemplarStatusV5Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingProductExemplarStatusV5Response> {
    return executeGetFbsPostingProductExemplarStatusV5(
      this.#transport,
      input,
      options,
    );
  }
  validateFbsPostingProductExemplarsV5(
    input: ValidateFbsPostingProductExemplarsV5Request,
    options: OzonRequestOptions = {},
  ): Promise<ValidateFbsPostingProductExemplarsV5Response> {
    return executeValidateFbsPostingProductExemplarsV5(
      this.#transport,
      input,
      options,
    );
  }
  updateFbsPostingProductExemplars(
    input: UpdateFbsPostingProductExemplarsRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeUpdateFbsPostingProductExemplars(
      this.#transport,
      input,
      options,
    );
  }
  createFbsCarriage(
    input: CreateFbsCarriageRequest = {},
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsCarriageResponse> {
    return executeCreateFbsCarriage(this.#transport, input, options);
  }
  approveFbsCarriage(
    input: ApproveFbsCarriageRequest,
    options: OzonRequestOptions = {},
  ): Promise<ApproveFbsCarriageResponse> {
    return executeApproveFbsCarriage(this.#transport, input, options);
  }
  setFbsCarriagePostings(
    input: SetFbsCarriagePostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsCarriagePostingsResponse> {
    return executeSetFbsCarriagePostings(this.#transport, input, options);
  }
  cancelFbsCarriage(
    input: CancelFbsCarriageRequest,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbsCarriageResponse> {
    return executeCancelFbsCarriage(this.#transport, input, options);
  }
  listFbsCarriageDeliveriesV1(
    input: ListFbsCarriageDeliveriesV1Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListFbsCarriageDeliveriesV1Response> {
    return executeListFbsCarriageDeliveriesV1(this.#transport, input, options);
  }
  listFbsCarriageDeliveriesV2(
    input: ListFbsCarriageDeliveriesV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsCarriageDeliveriesV2Response> {
    return executeListFbsCarriageDeliveriesV2(this.#transport, input, options);
  }
  createFbsAct(
    input: CreateFbsActRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsActResponse> {
    return executeCreateFbsAct(this.#transport, input, options);
  }
  listAvailableFbsCarriages(
    input: ListAvailableFbsCarriagesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListAvailableFbsCarriagesResponse> {
    return executeListAvailableFbsCarriages(this.#transport, input, options);
  }
  getFbsCarriage(
    input: GetFbsCarriageRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsCarriageResponse> {
    return executeGetFbsCarriage(this.#transport, input, options);
  }
  splitFbsPosting(
    options: OzonRequestOptions = {},
  ): Promise<SplitFbsPostingResponse> {
    return executeSplitFbsPosting(this.#transport, options);
  }
  listFbsActPostings(
    input: ListFbsActPostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsActPostingsResponse> {
    return executeListFbsActPostings(this.#transport, input, options);
  }
  getFbsActContainerLabels(
    input: GetFbsActContainerLabelsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsActContainerLabelsResponse> {
    return executeGetFbsActContainerLabels(this.#transport, input, options);
  }
  getFbsActBarcode(
    input: GetFbsActBarcodeRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsActBarcodeResponse> {
    return executeGetFbsActBarcode(this.#transport, input, options);
  }
  getFbsActBarcodeText(
    input: GetFbsActBarcodeTextRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsActBarcodeTextResponse> {
    return executeGetFbsActBarcodeText(this.#transport, input, options);
  }
  /** @deprecated Ozon marks this digital-act status method as deprecated. */
  getFbsDigitalActStatus(
    input: GetFbsDigitalActStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsDigitalActStatusResponse> {
    return executeGetFbsDigitalActStatus(this.#transport, input, options);
  }
  getFbsActPdf(
    input: GetFbsActPdfRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsActPdfResponse> {
    return executeGetFbsActPdf(this.#transport, input, options);
  }
  getFbsCarriageDiscrepancyAct(
    input: GetFbsCarriageDiscrepancyActRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsCarriageDiscrepancyActResponse> {
    return executeGetFbsCarriageDiscrepancyAct(this.#transport, input, options);
  }
  listFbsActs(
    input: ListFbsActsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsActsResponse> {
    return executeListFbsActs(this.#transport, input, options);
  }
  /** @deprecated Ozon marks this digital-act PDF method as deprecated. */
  getFbsDigitalActPdf(
    input: GetFbsDigitalActPdfRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsDigitalActPdfResponse> {
    return executeGetFbsDigitalActPdf(this.#transport, input, options);
  }
  getFbsActStatus(
    input: GetFbsActStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsActStatusResponse> {
    return executeGetFbsActStatus(this.#transport, input, options);
  }
  splitTraceableFbsPosting(
    input: SplitTraceableFbsPostingRequest,
    options: OzonRequestOptions = {},
  ): Promise<SplitTraceableFbsPostingResponse> {
    return executeSplitTraceableFbsPosting(this.#transport, input, options);
  }
  getFbsTraceableAttributes(
    input: GetFbsTraceableAttributesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsTraceableAttributesResponse> {
    return executeGetFbsTraceableAttributes(this.#transport, input, options);
  }
  getFbsCarriageEttnStatus(
    input: GetFbsCarriageEttnStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsCarriageEttnStatusResponse> {
    return executeGetFbsCarriageEttnStatus(this.#transport, input, options);
  }
  listFbsAssemblyCarriagePostings(
    input: ListFbsAssemblyCarriagePostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsAssemblyCarriagePostingsResponse> {
    return executeListFbsAssemblyCarriagePostings(
      this.#transport,
      input,
      options,
    );
  }
  listFbsAssemblyCarriageProducts(
    input: ListFbsAssemblyCarriageProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsAssemblyCarriageProductsResponse> {
    return executeListFbsAssemblyCarriageProducts(
      this.#transport,
      input,
      options,
    );
  }
  listFbsAssemblyPostings(
    input: ListFbsAssemblyPostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsAssemblyPostingsResponse> {
    return executeListFbsAssemblyPostings(this.#transport, input, options);
  }
  listFbsAssemblyProducts(
    input: ListFbsAssemblyProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsAssemblyProductsResponse> {
    return executeListFbsAssemblyProducts(this.#transport, input, options);
  }
  setFbsPostingTrackingNumbers(
    input: SetFbsPostingTrackingNumbersRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingTrackingNumbersResponse> {
    return executeSetFbsPostingTrackingNumbers(this.#transport, input, options);
  }
  setFbsPostingsDelivering(
    input: SetFbsPostingsDeliveringRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingsDeliveringResponse> {
    return executeSetFbsPostingsDelivering(this.#transport, input, options);
  }
  setFbsPostingsLastMile(
    input: SetFbsPostingsLastMileRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingsLastMileResponse> {
    return executeSetFbsPostingsLastMile(this.#transport, input, options);
  }
  setFbsPostingsDelivered(
    input: SetFbsPostingsDeliveredRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingsDeliveredResponse> {
    return executeSetFbsPostingsDelivered(this.#transport, input, options);
  }
  getFbsPostingTimeslotChangeRestrictions(
    input: GetFbsPostingTimeslotChangeRestrictionsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingTimeslotChangeRestrictionsResponse> {
    return executeGetFbsPostingTimeslotChangeRestrictions(
      this.#transport,
      input,
      options,
    );
  }
  setFbsPostingTimeslot(
    input: SetFbsPostingTimeslotRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingTimeslotResponse> {
    return executeSetFbsPostingTimeslot(this.#transport, input, options);
  }
  setFbsPostingCutoff(
    input: SetFbsPostingCutoffRequest,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingCutoffResponse> {
    return executeSetFbsPostingCutoff(this.#transport, input, options);
  }

  /** @deprecated Ozon plans to disable this version on 2026-08-31. */
  listUnfulfilledFbsPostingsV3(
    input: ListUnfulfilledFbsPostingsV3Request,
    options: OzonRequestOptions = {},
  ): Promise<ListUnfulfilledFbsPostingsV3Response> {
    return executeListUnfulfilledFbsPostingsV3(this.#transport, input, options);
  }

  listUnfulfilledFbsPostingsV4(
    input: ListUnfulfilledFbsPostingsV4Request,
    options: OzonRequestOptions = {},
  ): Promise<ListUnfulfilledFbsPostingsV4Response> {
    return executeListUnfulfilledFbsPostingsV4(this.#transport, input, options);
  }

  /** @deprecated Ozon plans to disable this version on 2026-08-31. */
  listFbsPostingsV3(
    input: ListFbsPostingsV3Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPostingsV3Response> {
    return executeListFbsPostingsV3(this.#transport, input, options);
  }

  listFbsPostingsV4(
    input: ListFbsPostingsV4Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPostingsV4Response> {
    return executeListFbsPostingsV4(this.#transport, input, options);
  }

  getFbsPostingV3(
    input: GetFbsPostingV3Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingV3Response> {
    return executeGetFbsPostingV3(this.#transport, input, options);
  }

  getFbsPostingByBarcodeV2(
    input: GetFbsPostingByBarcodeV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingByBarcodeV2Response> {
    return executeGetFbsPostingByBarcodeV2(this.#transport, input, options);
  }

  setFbsPostingMultiboxQuantityV3(
    input: SetFbsPostingMultiboxQuantityV3Request,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingMultiboxQuantityV3Response> {
    return executeSetFbsPostingMultiboxQuantityV3(
      this.#transport,
      input,
      options,
    );
  }

  listFbsPostingProductCountriesV2(
    input: ListFbsPostingProductCountriesV2Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPostingProductCountriesV2Response> {
    return executeListFbsPostingProductCountriesV2(
      this.#transport,
      input,
      options,
    );
  }

  setFbsPostingProductCountryV2(
    input: SetFbsPostingProductCountryV2Request,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingProductCountryV2Response> {
    return executeSetFbsPostingProductCountryV2(
      this.#transport,
      input,
      options,
    );
  }

  getFbsPostingRestrictionsV1(
    input: GetFbsPostingRestrictionsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingRestrictionsV1Response> {
    return executeGetFbsPostingRestrictionsV1(this.#transport, input, options);
  }

  printFbsPackageLabelsV2(
    input: PrintFbsPackageLabelsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<PrintFbsPackageLabelsV2Response> {
    return executePrintFbsPackageLabelsV2(this.#transport, input, options);
  }
  createFbsPackageLabelBatchV1(
    input: CreateFbsPackageLabelBatchV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsPackageLabelBatchV1Response> {
    return executeCreateFbsPackageLabelBatchV1(this.#transport, input, options);
  }
  createFbsPackageLabelBatchV2(
    input: CreateFbsPackageLabelBatchV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsPackageLabelBatchV2Response> {
    return executeCreateFbsPackageLabelBatchV2(this.#transport, input, options);
  }
  getFbsPackageLabelBatchV1(
    input: GetFbsPackageLabelBatchV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPackageLabelBatchV1Response> {
    return executeGetFbsPackageLabelBatchV1(this.#transport, input, options);
  }
  getFbsPostingCancelReasonsV1(
    input: GetFbsPostingCancelReasonsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsPostingCancelReasonsV1Response> {
    return executeGetFbsPostingCancelReasonsV1(this.#transport, input, options);
  }
  listFbsPostingCancelReasonsV2(
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPostingCancelReasonsV2Response> {
    return executeListFbsPostingCancelReasonsV2(this.#transport, options);
  }
  cancelFbsPostingProductsV2(
    input: CancelFbsPostingProductsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbsPostingProductsV2Response> {
    return executeCancelFbsPostingProductsV2(this.#transport, input, options);
  }
  cancelFbsPostingV2(
    input: CancelFbsPostingV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbsPostingV2Response> {
    return executeCancelFbsPostingV2(this.#transport, input, options);
  }
  openFbsPostingArbitrationV2(
    input: OpenFbsPostingArbitrationV2Request,
    options: OzonRequestOptions = {},
  ): Promise<OpenFbsPostingArbitrationV2Response> {
    return executeOpenFbsPostingArbitrationV2(this.#transport, input, options);
  }
  setFbsPostingsAwaitingDeliveryV2(
    input: SetFbsPostingsAwaitingDeliveryV2Request,
    options: OzonRequestOptions = {},
  ): Promise<SetFbsPostingsAwaitingDeliveryV2Response> {
    return executeSetFbsPostingsAwaitingDeliveryV2(
      this.#transport,
      input,
      options,
    );
  }

  verifyFbsPickupCodeV1(
    input: VerifyFbsPickupCodeV1Request,
    options: OzonRequestOptions = {},
  ): Promise<VerifyFbsPickupCodeV1Response> {
    return executeVerifyFbsPickupCodeV1(this.#transport, input, options);
  }
  getEtgbDeclarationsV1(
    input: GetEtgbDeclarationsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetEtgbDeclarationsV1Response> {
    return executeGetEtgbDeclarationsV1(this.#transport, input, options);
  }
  listUnpaidLegalProductsV1(
    input: ListUnpaidLegalProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListUnpaidLegalProductsV1Response> {
    return executeListUnpaidLegalProductsV1(this.#transport, input, options);
  }
  listFboProductStocksByWarehouseV1(
    input: ListFboProductStocksByWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFboProductStocksByWarehouseV1Response> {
    return executeListFboProductStocksByWarehouseV1(
      this.#transport,
      input,
      options,
    );
  }
  listRfbsReturnsV2(
    input: ListRfbsReturnsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListRfbsReturnsV2Response> {
    return executeListRfbsReturnsV2(this.#transport, input, options);
  }
  getRfbsReturnV2(
    input: GetRfbsReturnV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetRfbsReturnV2Response> {
    return executeGetRfbsReturnV2(this.#transport, input, options);
  }
  setRfbsReturnActionV1(
    input: SetRfbsReturnActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SetRfbsReturnActionV1Response> {
    return executeSetRfbsReturnActionV1(this.#transport, input, options);
  }
  listReturnsV1(
    input: ListReturnsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReturnsV1Response> {
    return executeListReturnsV1(this.#transport, input, options);
  }
  getFbsReturnCompanyInfoV1(
    input: GetFbsReturnCompanyInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsReturnCompanyInfoV1Response> {
    return executeGetFbsReturnCompanyInfoV1(this.#transport, input, options);
  }
  getUtilizationHistoryV1(
    options: OzonRequestOptions = {},
  ): Promise<GetUtilizationHistoryV1Response> {
    return executeGetUtilizationHistoryV1(this.#transport, options);
  }
  getUtilizationSettingsV1(
    options: OzonRequestOptions = {},
  ): Promise<GetUtilizationSettingsV1Response> {
    return executeGetUtilizationSettingsV1(this.#transport, options);
  }
  updateUtilizationSettingsV1(
    input: UpdateUtilizationSettingsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateUtilizationSettingsV1Response> {
    return executeUpdateUtilizationSettingsV1(this.#transport, input, options);
  }
  isGiveoutEnabledV1(
    options: OzonRequestOptions = {},
  ): Promise<IsGiveoutEnabledV1Response> {
    return executeIsGiveoutEnabledV1(this.#transport, options);
  }
  listGiveoutsV1(
    input: ListGiveoutsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListGiveoutsV1Response> {
    return executeListGiveoutsV1(this.#transport, input, options);
  }
  getGiveoutInfoV1(
    input: GetGiveoutInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetGiveoutInfoV1Response> {
    return executeGetGiveoutInfoV1(this.#transport, input, options);
  }
  getGiveoutBarcodeV1(
    options: OzonRequestOptions = {},
  ): Promise<GetGiveoutBarcodeV1Response> {
    return executeGetGiveoutBarcodeV1(this.#transport, options);
  }
  getGiveoutBarcodePdfV1(
    options: OzonRequestOptions = {},
  ): Promise<GetGiveoutBarcodePdfV1Response> {
    return executeGetGiveoutBarcodePdfV1(this.#transport, options);
  }
  getGiveoutBarcodePngV1(
    options: OzonRequestOptions = {},
  ): Promise<GetGiveoutBarcodePngV1Response> {
    return executeGetGiveoutBarcodePngV1(this.#transport, options);
  }
  resetGiveoutBarcodeV1(
    options: OzonRequestOptions = {},
  ): Promise<ResetGiveoutBarcodeV1Response> {
    return executeResetGiveoutBarcodeV1(this.#transport, options);
  }
  sendChatFileV1(
    input: SendChatFileV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SendChatFileV1Response> {
    return executeSendChatFileV1(this.#transport, input, options);
  }
  listChatsV3(
    input: ListChatsV3Request,
    options: OzonRequestOptions = {},
  ): Promise<ListChatsV3Response> {
    return executeListChatsV3(this.#transport, input, options);
  }
  getChatHistoryV3(
    input: GetChatHistoryV3Request,
    options: OzonRequestOptions = {},
  ): Promise<GetChatHistoryV3Response> {
    return executeGetChatHistoryV3(this.#transport, input, options);
  }
  getReportInfoV1(
    input: GetReportInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetReportInfoV1Response> {
    return executeGetReportInfoV1(this.#transport, input, options);
  }
  listReportsV1(
    input: ListReportsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReportsV1Response> {
    return executeListReportsV1(this.#transport, input, options);
  }
  createProductsReportV1(
    input: CreateProductsReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateProductsReportV1Response> {
    return executeCreateProductsReportV1(this.#transport, input, options);
  }
  createReturnsReportV2(
    input: CreateReturnsReportV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateReturnsReportV2Response> {
    return executeCreateReturnsReportV2(this.#transport, input, options);
  }
  createPostingsReportV1(
    input: CreatePostingsReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreatePostingsReportV1Response> {
    return executeCreatePostingsReportV1(this.#transport, input, options);
  }
  listFinanceCashFlowV1(
    input: ListFinanceCashFlowV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFinanceCashFlowV1Response> {
    return executeListFinanceCashFlowV1(this.#transport, input, options);
  }
  createDiscountedReportV1(
    input: CreateDiscountedReportV1Request = {},
    options: OzonRequestOptions = {},
  ): Promise<CreateDiscountedReportV1Response> {
    return executeCreateDiscountedReportV1(this.#transport, input, options);
  }
  createWarehouseStockReportV1(
    input: CreateWarehouseStockReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateWarehouseStockReportV1Response> {
    return executeCreateWarehouseStockReportV1(this.#transport, input, options);
  }
  createPlacementByProductsReportV1(
    input: CreatePlacementByProductsReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreatePlacementByProductsReportV1Response> {
    return executeCreatePlacementByProductsReportV1(
      this.#transport,
      input,
      options,
    );
  }
  createPlacementBySuppliesReportV1(
    input: CreatePlacementBySuppliesReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreatePlacementBySuppliesReportV1Response> {
    return executeCreatePlacementBySuppliesReportV1(
      this.#transport,
      input,
      options,
    );
  }
  createMarkedProductsSalesReportV1(
    input: CreateMarkedProductsSalesReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateMarkedProductsSalesReportV1Response> {
    return executeCreateMarkedProductsSalesReportV1(
      this.#transport,
      input,
      options,
    );
  }
  getRealizationReportV2(
    input: GetRealizationReportV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetRealizationReportV2Response> {
    return executeGetRealizationReportV2(this.#transport, input, options);
  }
  getRealizationPostingReportV1(
    input: GetRealizationPostingReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetRealizationPostingReportV1Response> {
    return executeGetRealizationPostingReportV1(
      this.#transport,
      input,
      options,
    );
  }
  listFinanceTransactionsV3(
    input: ListFinanceTransactionsV3Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFinanceTransactionsV3Response> {
    return executeListFinanceTransactionsV3(this.#transport, input, options);
  }
  getFinanceTransactionTotalsV3(
    input: GetFinanceTransactionTotalsV3Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFinanceTransactionTotalsV3Response> {
    return executeGetFinanceTransactionTotalsV3(
      this.#transport,
      input,
      options,
    );
  }
  createB2BSalesReportV1(
    input: CreateB2BSalesReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateB2BSalesReportV1Response> {
    return executeCreateB2BSalesReportV1(this.#transport, input, options);
  }
  getB2BSalesJsonReportV1(
    input: GetB2BSalesJsonReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetB2BSalesJsonReportV1Response> {
    return executeGetB2BSalesJsonReportV1(this.#transport, input, options);
  }
  createMutualSettlementReportV1(
    input: CreateMutualSettlementReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateMutualSettlementReportV1Response> {
    return executeCreateMutualSettlementReportV1(
      this.#transport,
      input,
      options,
    );
  }
  getFinanceProductsBuyoutV1(
    input: GetFinanceProductsBuyoutV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFinanceProductsBuyoutV1Response> {
    return executeGetFinanceProductsBuyoutV1(this.#transport, input, options);
  }
  createCompensationReportV1(
    input: CreateCompensationReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateCompensationReportV1Response> {
    return executeCreateCompensationReportV1(this.#transport, input, options);
  }
  createDecompensationReportV1(
    input: CreateDecompensationReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateDecompensationReportV1Response> {
    return executeCreateDecompensationReportV1(this.#transport, input, options);
  }
  getReceiptV1(
    input: GetReceiptV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetReceiptV1Response> {
    return executeGetReceiptV1(this.#transport, input, options);
  }
  listSellerReceiptsV1(
    input: ListSellerReceiptsV1Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListSellerReceiptsV1Response> {
    return executeListSellerReceiptsV1(this.#transport, input, options);
  }
  uploadReceiptV1(
    input: UploadReceiptV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UploadReceiptV1Response> {
    return executeUploadReceiptV1(this.#transport, input, options);
  }
  createReviewCommentV1(
    input: CreateReviewCommentV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateReviewCommentV1Response> {
    return executeCreateReviewCommentV1(this.#transport, input, options);
  }
  /** @deprecated Use `deleteReviewCommentV2`. */
  deleteReviewCommentV1(
    input: DeleteReviewCommentV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteReviewCommentV1Response> {
    return executeDeleteReviewCommentV1(this.#transport, input, options);
  }
  deleteReviewCommentV2(
    input: DeleteReviewCommentV2Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteReviewCommentV2Response> {
    return executeDeleteReviewCommentV2(this.#transport, input, options);
  }
  listReviewCommentsV1(
    input: ListReviewCommentsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReviewCommentsV1Response> {
    return executeListReviewCommentsV1(this.#transport, input, options);
  }
  /** @deprecated Use `updateReviewStatusV2`. */
  updateReviewStatusV1(
    input: UpdateReviewStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateReviewStatusV1Response> {
    return executeUpdateReviewStatusV1(this.#transport, input, options);
  }
  updateReviewStatusV2(
    input: UpdateReviewStatusV2Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateReviewStatusV2Response> {
    return executeUpdateReviewStatusV2(this.#transport, input, options);
  }
  /** @deprecated Use `getReviewCountV2`. */
  getReviewCountV1(
    options: OzonRequestOptions = {},
  ): Promise<GetReviewCountV1Response> {
    return executeGetReviewCountV1(this.#transport, options);
  }
  getReviewCountV2(
    options: OzonRequestOptions = {},
  ): Promise<GetReviewCountV2Response> {
    return executeGetReviewCountV2(this.#transport, options);
  }
  /** @deprecated Use `getReviewInfoV2`. */
  getReviewInfoV1(
    input: GetReviewInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetReviewInfoV1Response> {
    return executeGetReviewInfoV1(this.#transport, input, options);
  }
  getReviewInfoV2(
    input: GetReviewInfoV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetReviewInfoV2Response> {
    return executeGetReviewInfoV2(this.#transport, input, options);
  }
  /** @deprecated Use `listReviewsV2`. */
  listReviewsV1(
    input: ListReviewsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReviewsV1Response> {
    return executeListReviewsV1(this.#transport, input, options);
  }
  listReviewsV2(
    input: ListReviewsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReviewsV2Response> {
    return executeListReviewsV2(this.#transport, input, options);
  }
  createQuestionAnswerV1(
    input: CreateQuestionAnswerV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateQuestionAnswerV1Response> {
    return executeCreateQuestionAnswerV1(this.#transport, input, options);
  }
  deleteQuestionAnswerV1(
    input: DeleteQuestionAnswerV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteQuestionAnswerV1Response> {
    return executeDeleteQuestionAnswerV1(this.#transport, input, options);
  }
  listQuestionAnswersV1(
    input: ListQuestionAnswersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListQuestionAnswersV1Response> {
    return executeListQuestionAnswersV1(this.#transport, input, options);
  }
  updateQuestionStatusV1(
    input: UpdateQuestionStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateQuestionStatusV1Response> {
    return executeUpdateQuestionStatusV1(this.#transport, input, options);
  }
  getQuestionCountV1(
    options: OzonRequestOptions = {},
  ): Promise<GetQuestionCountV1Response> {
    return executeGetQuestionCountV1(this.#transport, options);
  }
  getQuestionInfoV1(
    input: GetQuestionInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetQuestionInfoV1Response> {
    return executeGetQuestionInfoV1(this.#transport, input, options);
  }
  listQuestionsV1(
    input: ListQuestionsV1Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListQuestionsV1Response> {
    return executeListQuestionsV1(this.#transport, input, options);
  }
  getQuestionTopSkusV1(
    input: GetQuestionTopSkusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetQuestionTopSkusV1Response> {
    return executeGetQuestionTopSkusV1(this.#transport, input, options);
  }
  /** @deprecated Ozon shut this endpoint down on 2026-01-22. */
  getAnalyticsManageStocksV1(
    input: GetAnalyticsManageStocksV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsManageStocksV1Response> {
    return executeGetAnalyticsManageStocksV1(this.#transport, input, options);
  }
  listSupplyReturnsV1(
    input: ListSupplyReturnsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSupplyReturnsV1Response> {
    return executeListSupplyReturnsV1(this.#transport, input, options);
  }
  listStockReturnsV1(
    input: ListStockReturnsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListStockReturnsV1Response> {
    return executeListStockReturnsV1(this.#transport, input, options);
  }
  setProductStairwayDiscountByQuantityV1(
    input: SetProductStairwayDiscountByQuantityV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SetProductStairwayDiscountByQuantityV1Response> {
    return executeSetProductStairwayDiscountByQuantityV1(
      this.#transport,
      input,
      options,
    );
  }
  getProductStairwayDiscountByQuantityV1(
    input: GetProductStairwayDiscountByQuantityV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetProductStairwayDiscountByQuantityV1Response> {
    return executeGetProductStairwayDiscountByQuantityV1(
      this.#transport,
      input,
      options,
    );
  }
  getFinanceBalanceV1(
    input: GetFinanceBalanceV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFinanceBalanceV1Response> {
    return executeGetFinanceBalanceV1(this.#transport, input, options);
  }
  listDiscountTasksV2(
    input: ListDiscountTasksV2Request = {},
    options: OzonRequestOptions = {},
  ): Promise<ListDiscountTasksV2Response> {
    return executeListDiscountTasksV2(this.#transport, input, options);
  }
  setProductVisibilityV1(
    input: SetProductVisibilityV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SetProductVisibilityV1Response> {
    return executeSetProductVisibilityV1(this.#transport, input, options);
  }
  getFinanceAccrualPostingsV1(
    input: GetFinanceAccrualPostingsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFinanceAccrualPostingsV1Response> {
    return executeGetFinanceAccrualPostingsV1(this.#transport, input, options);
  }
  listFinanceAccrualTypesV1(
    options: OzonRequestOptions = {},
  ): Promise<ListFinanceAccrualTypesV1Response> {
    return executeListFinanceAccrualTypesV1(this.#transport, options);
  }
  getFinanceAccrualByDayV1(
    input: GetFinanceAccrualByDayV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFinanceAccrualByDayV1Response> {
    return executeGetFinanceAccrualByDayV1(this.#transport, input, options);
  }
  getProductVisibilityInfoV1(
    input: GetProductVisibilityInfoV1Request = {},
    options: OzonRequestOptions = {},
  ): Promise<GetProductVisibilityInfoV1Response> {
    return executeGetProductVisibilityInfoV1(this.#transport, input, options);
  }
  getFbpPostingV1(
    input: GetFbpPostingV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpPostingV1Response> {
    return executeGetFbpPostingV1(this.#transport, input, options);
  }
  createRealizationPostingReportV1(
    input: CreateRealizationPostingReportV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateRealizationPostingReportV1Response> {
    return executeCreateRealizationPostingReportV1(
      this.#transport,
      input,
      options,
    );
  }
  listProductCertificateOptionsV2(
    options: OzonRequestOptions = {},
  ): Promise<ListProductCertificateOptionsV2Response> {
    return executeListProductCertificateOptionsV2(this.#transport, options);
  }
  getProductCertificateParamsV2(
    input: GetProductCertificateParamsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetProductCertificateParamsV2Response> {
    return executeGetProductCertificateParamsV2(
      this.#transport,
      input,
      options,
    );
  }
  createProductCertificateV2(
    input: CreateProductCertificateV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateProductCertificateV2Response> {
    return executeCreateProductCertificateV2(this.#transport, input, options);
  }
  listDropOffPointsForWarehouseCreateV1(
    input: ListDropOffPointsForWarehouseCreateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDropOffPointsForWarehouseCreateV1Response> {
    return executeListDropOffPointsForWarehouseCreateV1(
      this.#transport,
      input,
      options,
    );
  }
  listDropOffPointsForWarehouseUpdateV1(
    input: ListDropOffPointsForWarehouseUpdateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDropOffPointsForWarehouseUpdateV1Response> {
    return executeListDropOffPointsForWarehouseUpdateV1(
      this.#transport,
      input,
      options,
    );
  }
  listDropOffTimeslotsForWarehouseCreateV1(
    input: ListDropOffTimeslotsForWarehouseCreateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDropOffTimeslotsForWarehouseCreateV1Response> {
    return executeListDropOffTimeslotsForWarehouseCreateV1(
      this.#transport,
      input,
      options,
    );
  }
  listDropOffTimeslotsForWarehouseUpdateV1(
    input: ListDropOffTimeslotsForWarehouseUpdateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDropOffTimeslotsForWarehouseUpdateV1Response> {
    return executeListDropOffTimeslotsForWarehouseUpdateV1(
      this.#transport,
      input,
      options,
    );
  }
  listPickUpTimeslotsForWarehouseCreateV1(
    input: ListPickUpTimeslotsForWarehouseCreateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListPickUpTimeslotsForWarehouseCreateV1Response> {
    return executeListPickUpTimeslotsForWarehouseCreateV1(
      this.#transport,
      input,
      options,
    );
  }
  listPickUpTimeslotsForWarehouseUpdateV1(
    input: ListPickUpTimeslotsForWarehouseUpdateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListPickUpTimeslotsForWarehouseUpdateV1Response> {
    return executeListPickUpTimeslotsForWarehouseUpdateV1(
      this.#transport,
      input,
      options,
    );
  }
  createFbsWarehouseV1(
    input: CreateFbsWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsWarehouseV1Response> {
    return executeCreateFbsWarehouseV1(this.#transport, input, options);
  }
  updateFbsWarehouseV1(
    input: UpdateFbsWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateFbsWarehouseV1Response> {
    return executeUpdateFbsWarehouseV1(this.#transport, input, options);
  }
  updateFbsWarehouseFirstMileV1(
    input: UpdateFbsWarehouseFirstMileV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateFbsWarehouseFirstMileV1Response> {
    return executeUpdateFbsWarehouseFirstMileV1(
      this.#transport,
      input,
      options,
    );
  }
  listReturnPointsForWarehouseCreateV1(
    input: ListReturnPointsForWarehouseCreateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReturnPointsForWarehouseCreateV1Response> {
    return executeListReturnPointsForWarehouseCreateV1(
      this.#transport,
      input,
      options,
    );
  }
  listReturnPointsForWarehouseUpdateV1(
    input: ListReturnPointsForWarehouseUpdateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListReturnPointsForWarehouseUpdateV1Response> {
    return executeListReturnPointsForWarehouseUpdateV1(
      this.#transport,
      input,
      options,
    );
  }
  getFbsWarehouseReturnMileInfoV1(
    input: GetFbsWarehouseReturnMileInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsWarehouseReturnMileInfoV1Response> {
    return executeGetFbsWarehouseReturnMileInfoV1(
      this.#transport,
      input,
      options,
    );
  }
  checkFbsWarehouseReturnMileV1(
    input: CheckFbsWarehouseReturnMileV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CheckFbsWarehouseReturnMileV1Response> {
    return executeCheckFbsWarehouseReturnMileV1(
      this.#transport,
      input,
      options,
    );
  }
  createFbsPickupCourierCallV1(
    input: CreateFbsPickupCourierCallV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbsPickupCourierCallV1Response> {
    return executeCreateFbsPickupCourierCallV1(this.#transport, input, options);
  }
  cancelFbsPickupCourierCallV1(
    input: CancelFbsPickupCourierCallV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbsPickupCourierCallV1Response> {
    return executeCancelFbsPickupCourierCallV1(this.#transport, input, options);
  }
  listFbsPickupHistoryV1(
    input: ListFbsPickupHistoryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPickupHistoryV1Response> {
    return executeListFbsPickupHistoryV1(this.#transport, input, options);
  }
  listFbsPickupPlanningV1(
    options: OzonRequestOptions = {},
  ): Promise<ListFbsPickupPlanningV1Response> {
    return executeListFbsPickupPlanningV1(this.#transport, options);
  }
  createErfbsAggregatorWarehouseV1(
    input: CreateErfbsAggregatorWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateErfbsAggregatorWarehouseV1Response> {
    return executeCreateErfbsAggregatorWarehouseV1(
      this.#transport,
      input,
      options,
    );
  }
  updateErfbsWarehouseV1(
    input: UpdateErfbsWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateErfbsWarehouseV1Response> {
    return executeUpdateErfbsWarehouseV1(this.#transport, input, options);
  }
  updateErfbsAggregatorDeliveryMethodV1(
    input: UpdateErfbsAggregatorDeliveryMethodV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateErfbsAggregatorDeliveryMethodV1Response> {
    return executeUpdateErfbsAggregatorDeliveryMethodV1(
      this.#transport,
      input,
      options,
    );
  }
  createErfbsNonIntegratedWarehouseV1(
    input: CreateErfbsNonIntegratedWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateErfbsNonIntegratedWarehouseV1Response> {
    return executeCreateErfbsNonIntegratedWarehouseV1(
      this.#transport,
      input,
      options,
    );
  }
  updateErfbsNonIntegratedDeliveryMethodV1(
    input: UpdateErfbsNonIntegratedDeliveryMethodV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateErfbsNonIntegratedDeliveryMethodV1Response> {
    return executeUpdateErfbsNonIntegratedDeliveryMethodV1(
      this.#transport,
      input,
      options,
    );
  }
  pauseRfbsWarehouseV1(
    input: PauseRfbsWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<PauseRfbsWarehouseV1Response> {
    return executePauseRfbsWarehouseV1(this.#transport, input, options);
  }
  unpauseRfbsWarehouseV1(
    input: UnpauseRfbsWarehouseV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UnpauseRfbsWarehouseV1Response> {
    return executeUnpauseRfbsWarehouseV1(this.#transport, input, options);
  }
  bindDeliveryPolygonV2(
    input: BindDeliveryPolygonV2Request,
    options: OzonRequestOptions = {},
  ): Promise<BindDeliveryPolygonV2Response> {
    return executeBindDeliveryPolygonV2(this.#transport, input, options);
  }
  deleteDeliveryPolygonV1(
    input: DeleteDeliveryPolygonV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteDeliveryPolygonV1Response> {
    return executeDeleteDeliveryPolygonV1(this.#transport, input, options);
  }
  listDeliveryPolygonsV1(
    input: ListDeliveryPolygonsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDeliveryPolygonsV1Response> {
    return executeListDeliveryPolygonsV1(this.#transport, input, options);
  }
  updateDeliveryPolygonCoordinatesV1(
    input: UpdateDeliveryPolygonCoordinatesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateDeliveryPolygonCoordinatesV1Response> {
    return executeUpdateDeliveryPolygonCoordinatesV1(
      this.#transport,
      input,
      options,
    );
  }
  setDeliveryPolygonTimeV1(
    input: SetDeliveryPolygonTimeV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SetDeliveryPolygonTimeV1Response> {
    return executeSetDeliveryPolygonTimeV1(this.#transport, input, options);
  }
  createSellerDiscountActionV1(
    input: CreateSellerDiscountActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateSellerDiscountActionV1Response> {
    return executeCreateSellerDiscountActionV1(this.#transport, input, options);
  }
  createSellerDiscountWithConditionActionV1(
    input: CreateSellerDiscountWithConditionActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateSellerDiscountWithConditionActionV1Response> {
    return executeCreateSellerDiscountWithConditionActionV1(
      this.#transport,
      input,
      options,
    );
  }
  createSellerInstallmentActionV1(
    input: CreateSellerInstallmentActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateSellerInstallmentActionV1Response> {
    return executeCreateSellerInstallmentActionV1(
      this.#transport,
      input,
      options,
    );
  }
  createSellerMultiLevelDiscountActionV1(
    input: CreateSellerMultiLevelDiscountActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateSellerMultiLevelDiscountActionV1Response> {
    return executeCreateSellerMultiLevelDiscountActionV1(
      this.#transport,
      input,
      options,
    );
  }
  createSellerVoucherActionV1(
    input: CreateSellerVoucherActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateSellerVoucherActionV1Response> {
    return executeCreateSellerVoucherActionV1(this.#transport, input, options);
  }
  updateSellerDiscountActionV1(
    input: UpdateSellerDiscountActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSellerDiscountActionV1Response> {
    return executeUpdateSellerDiscountActionV1(this.#transport, input, options);
  }
  updateSellerDiscountWithConditionActionV1(
    input: UpdateSellerDiscountWithConditionActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSellerDiscountWithConditionActionV1Response> {
    return executeUpdateSellerDiscountWithConditionActionV1(
      this.#transport,
      input,
      options,
    );
  }
  updateSellerInstallmentActionV1(
    input: UpdateSellerInstallmentActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSellerInstallmentActionV1Response> {
    return executeUpdateSellerInstallmentActionV1(
      this.#transport,
      input,
      options,
    );
  }
  updateSellerMultiLevelDiscountActionV1(
    input: UpdateSellerMultiLevelDiscountActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSellerMultiLevelDiscountActionV1Response> {
    return executeUpdateSellerMultiLevelDiscountActionV1(
      this.#transport,
      input,
      options,
    );
  }
  updateSellerVoucherActionV1(
    input: UpdateSellerVoucherActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateSellerVoucherActionV1Response> {
    return executeUpdateSellerVoucherActionV1(this.#transport, input, options);
  }
  addSellerActionProductsV1(
    input: AddSellerActionProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<AddSellerActionProductsV1Response> {
    return executeAddSellerActionProductsV1(this.#transport, input, options);
  }
  listSellerActionProductCandidatesV1(
    input: ListSellerActionProductCandidatesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSellerActionProductCandidatesV1Response> {
    return executeListSellerActionProductCandidatesV1(
      this.#transport,
      input,
      options,
    );
  }
  deleteSellerActionProductsV1(
    input: DeleteSellerActionProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteSellerActionProductsV1Response> {
    return executeDeleteSellerActionProductsV1(this.#transport, input, options);
  }
  listSellerActionProductsV1(
    input: ListSellerActionProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSellerActionProductsV1Response> {
    return executeListSellerActionProductsV1(this.#transport, input, options);
  }
  archiveSellerActionV1(
    input: ArchiveSellerActionV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ArchiveSellerActionV1Response> {
    return executeArchiveSellerActionV1(this.#transport, input, options);
  }
  changeSellerActionActivityV1(
    input: ChangeSellerActionActivityV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ChangeSellerActionActivityV1Response> {
    return executeChangeSellerActionActivityV1(this.#transport, input, options);
  }
  listSellerActionsV1(
    input: ListSellerActionsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSellerActionsV1Response> {
    return executeListSellerActionsV1(this.#transport, input, options);
  }
  getSellerActionVoucherFileV1(
    input: GetSellerActionVoucherFileV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetSellerActionVoucherFileV1Response> {
    return executeGetSellerActionVoucherFileV1(this.#transport, input, options);
  }
  listAutoAddProductsV1(
    input: ListAutoAddProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListAutoAddProductsV1Response> {
    return executeListAutoAddProductsV1(this.#transport, input, options);
  }
  listAutoAddProductCandidatesV1(
    input: ListAutoAddProductCandidatesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListAutoAddProductCandidatesV1Response> {
    return executeListAutoAddProductCandidatesV1(
      this.#transport,
      input,
      options,
    );
  }
  deleteAutoAddProductsV1(
    input: DeleteAutoAddProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteAutoAddProductsV1Response> {
    return executeDeleteAutoAddProductsV1(this.#transport, input, options);
  }
  updateAutoAddProductsV1(
    input: UpdateAutoAddProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateAutoAddProductsV1Response> {
    return executeUpdateAutoAddProductsV1(this.#transport, input, options);
  }
  setNotificationV1(
    input: SetNotificationV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SetNotificationV1Response> {
    return executeSetNotificationV1(this.#transport, input, options);
  }
  updateNotificationV1(
    input: UpdateNotificationV1Request,
    options: OzonRequestOptions = {},
  ): Promise<UpdateNotificationV1Response> {
    return executeUpdateNotificationV1(this.#transport, input, options);
  }
  deleteNotificationV1(
    input: DeleteNotificationV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteNotificationV1Response> {
    return executeDeleteNotificationV1(this.#transport, input, options);
  }
  checkNotificationV1(
    input: CheckNotificationV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CheckNotificationV1Response> {
    return executeCheckNotificationV1(this.#transport, input, options);
  }
  enableNotificationV1(
    input: EnableNotificationV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EnableNotificationV1Response> {
    return executeEnableNotificationV1(this.#transport, input, options);
  }
  listNotificationsV1(
    options: OzonRequestOptions = {},
  ): Promise<ListNotificationsV1Response> {
    return executeListNotificationsV1(this.#transport, options);
  }
  listNotificationPushTypesV1(
    options: OzonRequestOptions = {},
  ): Promise<ListNotificationPushTypesV1Response> {
    return executeListNotificationPushTypesV1(this.#transport, options);
  }
  getCargoesV2(
    input: GetCargoesV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCargoesV2Response> {
    return executeGetCargoesV2(this.#transport, input, options);
  }
  deleteCargoesV2(
    input: DeleteCargoesV2Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteCargoesV2Response> {
    return executeDeleteCargoesV2(this.#transport, input, options);
  }
  getCargoesDeleteStatusV2(
    input: GetCargoesDeleteStatusV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCargoesDeleteStatusV2Response> {
    return executeGetCargoesDeleteStatusV2(this.#transport, input, options);
  }
  activateTransportCargoesV1(
    input: ActivateTransportCargoesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ActivateTransportCargoesV1Response> {
    return executeActivateTransportCargoesV1(this.#transport, input, options);
  }
  getTransportCargoesActivationStatusV1(
    input: GetTransportCargoesActivationStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetTransportCargoesActivationStatusV1Response> {
    return executeGetTransportCargoesActivationStatusV1(
      this.#transport,
      input,
      options,
    );
  }
  createTransportCargoesV1(
    input: CreateTransportCargoesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateTransportCargoesV1Response> {
    return executeCreateTransportCargoesV1(this.#transport, input, options);
  }
  getTransportCargoesCreateStatusV1(
    input: GetTransportCargoesCreateStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetTransportCargoesCreateStatusV1Response> {
    return executeGetTransportCargoesCreateStatusV1(
      this.#transport,
      input,
      options,
    );
  }
  bindTransportCargoesV1(
    input: BindTransportCargoesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<BindTransportCargoesV1Response> {
    return executeBindTransportCargoesV1(this.#transport, input, options);
  }
  getTransportCargoesBindStatusV1(
    input: GetTransportCargoesBindStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetTransportCargoesBindStatusV1Response> {
    return executeGetTransportCargoesBindStatusV1(
      this.#transport,
      input,
      options,
    );
  }
  getSupplyCargoesV1(
    input: GetSupplyCargoesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetSupplyCargoesV1Response> {
    return executeGetSupplyCargoesV1(this.#transport, input, options);
  }
  createTransportLabelsByOrderV1(
    input: CreateTransportLabelsByOrderV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateTransportLabelsByOrderV1Response> {
    return executeCreateTransportLabelsByOrderV1(
      this.#transport,
      input,
      options,
    );
  }
  getTransportLabelsByOrderStatusV1(
    input: GetTransportLabelsByOrderStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetTransportLabelsByOrderStatusV1Response> {
    return executeGetTransportLabelsByOrderStatusV1(
      this.#transport,
      input,
      options,
    );
  }
  createTransportLabelsV1(
    input: CreateTransportLabelsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateTransportLabelsV1Response> {
    return executeCreateTransportLabelsV1(this.#transport, input, options);
  }
  getTransportLabelsStatusV1(
    input: GetTransportLabelsStatusV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetTransportLabelsStatusV1Response> {
    return executeGetTransportLabelsStatusV1(this.#transport, input, options);
  }
  createFbpDirectSellerDeliveryDraftV1(
    input: CreateFbpDirectSellerDeliveryDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpDirectSellerDeliveryDraftV1Response> {
    return executeCreateFbpDirectSellerDeliveryDraftV1(
      this.#transport,
      input,
      options,
    );
  }
  editFbpDirectSellerDeliveryDraftV1(
    input: EditFbpDirectSellerDeliveryDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDirectSellerDeliveryDraftV1Response> {
    return executeEditFbpDirectSellerDeliveryDraftV1(
      this.#transport,
      input,
      options,
    );
  }
  editFbpDirectTimeslotV1(
    input: EditFbpDirectTimeslotV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDirectTimeslotV1Response> {
    return executeEditFbpDirectTimeslotV1(this.#transport, input, options);
  }
  getFbpDirectTimeslotsV1(
    input: GetFbpDirectTimeslotsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpDirectTimeslotsV1Response> {
    return executeGetFbpDirectTimeslotsV1(this.#transport, input, options);
  }
  createFbpDirectDraftV1(
    input: CreateFbpDirectDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpDirectDraftV1Response> {
    return executeCreateFbpDirectDraftV1(this.#transport, input, options);
  }
  deleteFbpDirectDraftV1(
    input: DeleteFbpDirectDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteFbpDirectDraftV1Response> {
    return executeDeleteFbpDirectDraftV1(this.#transport, input, options);
  }
  validateFbpDirectDraftProductsV1(
    input: ValidateFbpDirectDraftProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ValidateFbpDirectDraftProductsV1Response> {
    return executeValidateFbpDirectDraftProductsV1(
      this.#transport,
      input,
      options,
    );
  }
  registerFbpDirectDraftV1(
    input: RegisterFbpDirectDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<RegisterFbpDirectDraftV1Response> {
    return executeRegisterFbpDirectDraftV1(this.#transport, input, options);
  }
  createFbpDropOffDraftV1(
    input: CreateFbpDropOffDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpDropOffDraftV1Response> {
    return executeCreateFbpDropOffDraftV1(this.#transport, input, options);
  }
  deleteFbpDropOffDraftV1(
    input: DeleteFbpDropOffDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteFbpDropOffDraftV1Response> {
    return executeDeleteFbpDropOffDraftV1(this.#transport, input, options);
  }
  editFbpDropOffDeliveryV1(
    input: EditFbpDropOffDeliveryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDropOffDeliveryV1Response> {
    return executeEditFbpDropOffDeliveryV1(this.#transport, input, options);
  }
  registerFbpDropOffDraftV1(
    input: RegisterFbpDropOffDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<RegisterFbpDropOffDraftV1Response> {
    return executeRegisterFbpDropOffDraftV1(this.#transport, input, options);
  }
  listFbpDropOffProvincesV1(
    input: ListFbpDropOffProvincesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpDropOffProvincesV1Response> {
    return executeListFbpDropOffProvincesV1(this.#transport, input, options);
  }
  listFbpDropOffPointsV1(
    input: ListFbpDropOffPointsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpDropOffPointsV1Response> {
    return executeListFbpDropOffPointsV1(this.#transport, input, options);
  }
  getFbpDropOffPointTimetableV1(
    input: GetFbpDropOffPointTimetableV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpDropOffPointTimetableV1Response> {
    return executeGetFbpDropOffPointTimetableV1(
      this.#transport,
      input,
      options,
    );
  }
  validateFbpDropOffDraftProductsV1(
    input: ValidateFbpDropOffDraftProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ValidateFbpDropOffDraftProductsV1Response> {
    return executeValidateFbpDropOffDraftProductsV1(
      this.#transport,
      input,
      options,
    );
  }
  cancelFbpDirectOrderV1(
    input: CancelFbpDirectOrderV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbpDirectOrderV1Response> {
    return executeCancelFbpDirectOrderV1(this.#transport, input, options);
  }
  editFbpDirectOrderSellerDeliveryV1(
    input: EditFbpDirectOrderSellerDeliveryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDirectOrderSellerDeliveryV1Response> {
    return executeEditFbpDirectOrderSellerDeliveryV1(
      this.#transport,
      input,
      options,
    );
  }
  editFbpDirectOrderTimeslotV1(
    input: EditFbpDirectOrderTimeslotV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDirectOrderTimeslotV1Response> {
    return executeEditFbpDirectOrderTimeslotV1(this.#transport, input, options);
  }
  listFbpDirectOrderTimeslotsV1(
    input: ListFbpDirectOrderTimeslotsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpDirectOrderTimeslotsV1Response> {
    return executeListFbpDirectOrderTimeslotsV1(
      this.#transport,
      input,
      options,
    );
  }
  createFbpAcceptanceActV1(
    input: CreateFbpAcceptanceActV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpAcceptanceActV1Response> {
    return executeCreateFbpAcceptanceActV1(this.#transport, input, options);
  }
  getFbpAcceptanceActV1(
    input: GetFbpAcceptanceActV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpAcceptanceActV1Response> {
    return executeGetFbpAcceptanceActV1(this.#transport, input, options);
  }
  createFbpConsignmentNoteV1(
    input: CreateFbpConsignmentNoteV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpConsignmentNoteV1Response> {
    return executeCreateFbpConsignmentNoteV1(this.#transport, input, options);
  }
  getFbpConsignmentNoteV1(
    input: GetFbpConsignmentNoteV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpConsignmentNoteV1Response> {
    return executeGetFbpConsignmentNoteV1(this.#transport, input, options);
  }
  getFbpArchiveSupplyV1(
    input: GetFbpArchiveSupplyV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpArchiveSupplyV1Response> {
    return executeGetFbpArchiveSupplyV1(this.#transport, input, options);
  }
  listFbpArchiveSuppliesV1(
    input: ListFbpArchiveSuppliesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpArchiveSuppliesV1Response> {
    return executeListFbpArchiveSuppliesV1(this.#transport, input, options);
  }
  createFbpLabelsV1(
    input: CreateFbpLabelsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpLabelsV1Response> {
    return executeCreateFbpLabelsV1(this.#transport, input, options);
  }
  getFbpLabelsV1(
    input: GetFbpLabelsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpLabelsV1Response> {
    return executeGetFbpLabelsV1(this.#transport, input, options);
  }
  createFbpPickupDraftV1(
    input: CreateFbpPickupDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpPickupDraftV1Response> {
    return executeCreateFbpPickupDraftV1(this.#transport, input, options);
  }
  deleteFbpPickupDraftV1(
    input: DeleteFbpPickupDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<DeleteFbpPickupDraftV1Response> {
    return executeDeleteFbpPickupDraftV1(this.#transport, input, options);
  }
  editFbpPickupDraftDeliveryV1(
    input: EditFbpPickupDraftDeliveryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpPickupDraftDeliveryV1Response> {
    return executeEditFbpPickupDraftDeliveryV1(this.#transport, input, options);
  }
  validateFbpPickupDraftProductsV1(
    input: ValidateFbpPickupDraftProductsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ValidateFbpPickupDraftProductsV1Response> {
    return executeValidateFbpPickupDraftProductsV1(
      this.#transport,
      input,
      options,
    );
  }
  listFbpWarehousesV1(
    options: OzonRequestOptions = {},
  ): Promise<ListFbpWarehousesV1Response> {
    return executeListFbpWarehousesV1(this.#transport, options);
  }
  registerFbpPickupDraftV1(
    input: RegisterFbpPickupDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<RegisterFbpPickupDraftV1Response> {
    return executeRegisterFbpPickupDraftV1(this.#transport, input, options);
  }
  getFbpDraftV1(
    input: GetFbpDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpDraftV1Response> {
    return executeGetFbpDraftV1(this.#transport, input, options);
  }
  listFbpDraftsV1(
    input: ListFbpDraftsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpDraftsV1Response> {
    return executeListFbpDraftsV1(this.#transport, input, options);
  }
  createFbpDirectTplDeliveryDraftV1(
    input: CreateFbpDirectTplDeliveryDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateFbpDirectTplDeliveryDraftV1Response> {
    return executeCreateFbpDirectTplDeliveryDraftV1(
      this.#transport,
      input,
      options,
    );
  }
  editFbpDirectTplDeliveryDraftV1(
    input: EditFbpDirectTplDeliveryDraftV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDirectTplDeliveryDraftV1Response> {
    return executeEditFbpDirectTplDeliveryDraftV1(
      this.#transport,
      input,
      options,
    );
  }
  cancelFbpDropOffOrderV1(
    input: CancelFbpDropOffOrderV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbpDropOffOrderV1Response> {
    return executeCancelFbpDropOffOrderV1(this.#transport, input, options);
  }
  editFbpDropOffOrderDeliveryV1(
    input: EditFbpDropOffOrderDeliveryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpDropOffOrderDeliveryV1Response> {
    return executeEditFbpDropOffOrderDeliveryV1(
      this.#transport,
      input,
      options,
    );
  }
  getFbpDropOffOrderTimetableV1(
    input: GetFbpDropOffOrderTimetableV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpDropOffOrderTimetableV1Response> {
    return executeGetFbpDropOffOrderTimetableV1(
      this.#transport,
      input,
      options,
    );
  }
  getFbpOrderV1(
    input: GetFbpOrderV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetFbpOrderV1Response> {
    return executeGetFbpOrderV1(this.#transport, input, options);
  }
  listFbpOrdersV1(
    input: ListFbpOrdersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpOrdersV1Response> {
    return executeListFbpOrdersV1(this.#transport, input, options);
  }
  listFbpPostingsV1(
    input: ListFbpPostingsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListFbpPostingsV1Response> {
    return executeListFbpPostingsV1(this.#transport, input, options);
  }
  cancelFbpPickupOrderV1(
    input: CancelFbpPickupOrderV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelFbpPickupOrderV1Response> {
    return executeCancelFbpPickupOrderV1(this.#transport, input, options);
  }
  editFbpPickupOrderDeliveryV1(
    input: EditFbpPickupOrderDeliveryV1Request,
    options: OzonRequestOptions = {},
  ): Promise<EditFbpPickupOrderDeliveryV1Response> {
    return executeEditFbpPickupOrderDeliveryV1(this.#transport, input, options);
  }
  createCarriageContainersV1(
    input: CreateCarriageContainersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateCarriageContainersV1Response> {
    return executeCreateCarriageContainersV1(this.#transport, input, options);
  }
  fillCarriageContainerV1(
    input: FillCarriageContainerV1Request,
    options: OzonRequestOptions = {},
  ): Promise<FillCarriageContainerV1Response> {
    return executeFillCarriageContainerV1(this.#transport, input, options);
  }
  approveCarriageContainersV1(
    input: ApproveCarriageContainersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ApproveCarriageContainersV1Response> {
    return executeApproveCarriageContainersV1(this.#transport, input, options);
  }
  placeCarriageContainersIntoV1(
    input: PlaceCarriageContainersIntoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<PlaceCarriageContainersIntoV1Response> {
    return executePlaceCarriageContainersIntoV1(
      this.#transport,
      input,
      options,
    );
  }
  removeCarriageContainerPostingsV1(
    input: RemoveCarriageContainerPostingsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<RemoveCarriageContainerPostingsV1Response> {
    return executeRemoveCarriageContainerPostingsV1(
      this.#transport,
      input,
      options,
    );
  }
  removeCarriageContainersFromV1(
    input: RemoveCarriageContainersFromV1Request,
    options: OzonRequestOptions = {},
  ): Promise<RemoveCarriageContainersFromV1Response> {
    return executeRemoveCarriageContainersFromV1(
      this.#transport,
      input,
      options,
    );
  }
  cancelCarriageContainersV1(
    input: CancelCarriageContainersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CancelCarriageContainersV1Response> {
    return executeCancelCarriageContainersV1(this.#transport, input, options);
  }
  listCarriageContainersV1(
    input: ListCarriageContainersV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListCarriageContainersV1Response> {
    return executeListCarriageContainersV1(this.#transport, input, options);
  }
  getCarriageContainerV1(
    input: GetCarriageContainerV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCarriageContainerV1Response> {
    return executeGetCarriageContainerV1(this.#transport, input, options);
  }
  getCarriageContainerStatusesV1(
    input: GetCarriageContainerStatusesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCarriageContainerStatusesV1Response> {
    return executeGetCarriageContainerStatusesV1(
      this.#transport,
      input,
      options,
    );
  }
  getCarriageContainerTaskV1(
    input: GetCarriageContainerTaskV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCarriageContainerTaskV1Response> {
    return executeGetCarriageContainerTaskV1(this.#transport, input, options);
  }
  getCarriageContainerDocumentsV1(
    input: GetCarriageContainerDocumentsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCarriageContainerDocumentsV1Response> {
    return executeGetCarriageContainerDocumentsV1(
      this.#transport,
      input,
      options,
    );
  }
  getCarriageContainerLabelsV1(
    input: GetCarriageContainerLabelsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetCarriageContainerLabelsV1Response> {
    return executeGetCarriageContainerLabelsV1(this.#transport, input, options);
  }
  sendChatMessageV1(
    input: SendChatMessageV1Request,
    options: OzonRequestOptions = {},
  ): Promise<SendChatMessageV1Response> {
    return executeSendChatMessageV1(this.#transport, input, options);
  }
  startChatV1(
    input: StartChatV1Request,
    options: OzonRequestOptions = {},
  ): Promise<StartChatV1Response> {
    return executeStartChatV1(this.#transport, input, options);
  }
  readChatV2(
    input: ReadChatV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ReadChatV2Response> {
    return executeReadChatV2(this.#transport, input, options);
  }
  getAnalyticsDataV1(
    input: GetAnalyticsDataV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsDataV1Response> {
    return executeGetAnalyticsDataV1(this.#transport, input, options);
  }
  listAnalyticsProductQueriesV1(
    input: ListAnalyticsProductQueriesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListAnalyticsProductQueriesV1Response> {
    return executeListAnalyticsProductQueriesV1(
      this.#transport,
      input,
      options,
    );
  }
  getAnalyticsProductQueryDetailsV1(
    input: GetAnalyticsProductQueryDetailsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsProductQueryDetailsV1Response> {
    return executeGetAnalyticsProductQueryDetailsV1(
      this.#transport,
      input,
      options,
    );
  }
  getRealizationReportByDayV1(
    input: GetRealizationReportByDayV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetRealizationReportByDayV1Response> {
    return executeGetRealizationReportByDayV1(this.#transport, input, options);
  }
  listSearchQueriesByTextV1(
    input: ListSearchQueriesByTextV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListSearchQueriesByTextV1Response> {
    return executeListSearchQueriesByTextV1(this.#transport, input, options);
  }
  listTopSearchQueriesV1(
    input: ListTopSearchQueriesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListTopSearchQueriesV1Response> {
    return executeListTopSearchQueriesV1(this.#transport, input, options);
  }
  getProductPriceDetailsV1(
    input: GetProductPriceDetailsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetProductPriceDetailsV1Response> {
    return executeGetProductPriceDetailsV1(this.#transport, input, options);
  }
  checkDeliveryAvailabilityV1(
    input: CheckDeliveryAvailabilityV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CheckDeliveryAvailabilityV1Response> {
    return executeCheckDeliveryAvailabilityV1(this.#transport, input, options);
  }
  checkoutDeliveryV2(
    input: CheckoutDeliveryV2Request,
    options: OzonRequestOptions = {},
  ): Promise<CheckoutDeliveryV2Response> {
    return executeCheckoutDeliveryV2(this.#transport, input, options);
  }
  getDeliveryMapV1(
    input: GetDeliveryMapV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetDeliveryMapV1Response> {
    return executeGetDeliveryMapV1(this.#transport, input, options);
  }
  getDeliveryPointInfoV1(
    input: GetDeliveryPointInfoV1Request,
    options: OzonRequestOptions = {},
  ): Promise<GetDeliveryPointInfoV1Response> {
    return executeGetDeliveryPointInfoV1(this.#transport, input, options);
  }
  listDeliveryPointsV1(
    options: OzonRequestOptions = {},
  ): Promise<ListDeliveryPointsV1Response> {
    return executeListDeliveryPointsV1(this.#transport, options);
  }

  /**
   * Возвращает устаревающий отчёт по остаткам и товарам в перемещении.
   *
   * @deprecated Ozon планирует отключить метод. Используйте
   * `getAnalyticsStocks`.
   * @see https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsGetStockOnWarehousesV2
   */
  getAnalyticsStockOnWarehouses(
    input: GetAnalyticsStockOnWarehousesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsStockOnWarehousesResponse> {
    return executeGetAnalyticsStockOnWarehouses(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает аналитику по остаткам товаров на складах.
   *
   * В запросе можно использовать только один из фильтров `cluster_ids` и
   * `macrolocal_cluster_ids`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsStocks
   */
  getAnalyticsStocks(
    input: GetAnalyticsStocksRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsStocksResponse> {
    return executeGetAnalyticsStocks(this.#transport, input, options);
  }

  /**
   * Возвращает оборачиваемость товаров и прогноз длительности остатка.
   *
   * Ozon ограничивает метод одним запросом в минуту на кабинет.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_StocksTurnover
   */
  getAnalyticsStocksTurnover(
    input: GetAnalyticsStocksTurnoverRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetAnalyticsStocksTurnoverResponse> {
    return executeGetAnalyticsStocksTurnover(this.#transport, input, options);
  }

  /**
   * Возвращает бренды, для которых может потребоваться сертификат.
   *
   * Список зависит от товаров в кабинете продавца и требований брендов.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/BrandAPI_BrandCompanyCertificationList
   */
  listBrandCertifications(
    input: ListBrandCertificationsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListBrandCertificationsResponse> {
    return executeListBrandCertifications(this.#transport, input, options);
  }

  /**
   * Возвращает возможные причины отмены отправлений и заказов.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancelReasonList
   */
  listCancelReasons(
    options: OzonRequestOptions = {},
  ): Promise<ListCancelReasonsResponse> {
    return executeListCancelReasons(this.#transport, options);
  }

  /**
   * Возвращает возможные причины отмены конкретного заказа.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancelReasonListByOrder
   */
  listCancelReasonsByOrder(
    input: ListCancelReasonsByOrderRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListCancelReasonsByOrderResponse> {
    return executeListCancelReasonsByOrder(this.#transport, input, options);
  }

  /**
   * Возвращает возможные причины отмены конкретного отправления.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancelReasonAPI_CancelReasonListByPosting
   */
  listCancelReasonsByPosting(
    input: ListCancelReasonsByPostingRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListCancelReasonsByPostingResponse> {
    return executeListCancelReasonsByPosting(this.#transport, input, options);
  }

  /**
   * Возвращает заявки на отмену rFBS-заказов.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancellationAPI_GetConditionalCancellationListV2
   */
  listConditionalCancellations(
    input: ListConditionalCancellationsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListConditionalCancellationsResponse> {
    return executeListConditionalCancellations(this.#transport, input, options);
  }

  /**
   * Подтверждает заявку на отмену rFBS-заказа.
   *
   * Метод изменяет состояние заказа и не повторяется автоматически.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancellationAPI_ConditionalCancellationApproveV2
   */
  approveConditionalCancellation(
    input: ApproveConditionalCancellationRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeApproveConditionalCancellation(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Отклоняет заявку на отмену rFBS-заказа.
   *
   * Метод изменяет состояние заявки и не повторяется автоматически.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/CancellationAPI_ConditionalCancellationRejectV2
   */
  rejectConditionalCancellation(
    input: RejectConditionalCancellationRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeRejectConditionalCancellation(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает характеристики для указанных категории и типа товара.
   *
   * Ненулевой `dictionary_id` означает, что значения характеристики можно
   * получить через `getDescriptionCategoryAttributeValues`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetAttributes
   */
  getDescriptionCategoryAttributes(
    input: GetDescriptionCategoryAttributesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetDescriptionCategoryAttributesResponse> {
    return executeGetDescriptionCategoryAttributes(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Привязывает существующие штрихкоды к товарам Ozon.
   *
   * Метод изменяет данные и не повторяется автоматически. Ozon ограничивает
   * его двадцатью запросами в минуту на аккаунт.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/add-barcode
   */
  addProductBarcodes(
    input: AddProductBarcodesRequest,
    options: OzonRequestOptions = {},
  ): Promise<AddProductBarcodesResponse> {
    return executeAddProductBarcodes(this.#transport, input, options);
  }

  /**
   * Создаёт штрихкоды для товаров Ozon.
   *
   * Метод изменяет данные и не повторяется автоматически. Ozon ограничивает
   * его двадцатью запросами в минуту на аккаунт.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/generate-barcode
   */
  generateProductBarcodes(
    input: GenerateProductBarcodesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GenerateProductBarcodesResponse> {
    return executeGenerateProductBarcodes(this.#transport, input, options);
  }

  /**
   * Возвращает справочные значения характеристики с пагинацией по
   * `last_value_id`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetAttributeValues
   */
  getDescriptionCategoryAttributeValues(
    input: GetDescriptionCategoryAttributeValuesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetDescriptionCategoryAttributeValuesResponse> {
    return executeGetDescriptionCategoryAttributeValues(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает категории и типы товаров в виде дерева.
   *
   * Создавать товары можно только в категориях последнего уровня.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetTree
   */
  getDescriptionCategoryTree(
    input: GetDescriptionCategoryTreeRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetDescriptionCategoryTreeResponse> {
    return executeGetDescriptionCategoryTree(this.#transport, input, options);
  }

  /**
   * Ищет справочные значения характеристики по строке `value`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_SearchAttributeValues
   */
  searchDescriptionCategoryAttributeValues(
    input: SearchDescriptionCategoryAttributeValuesRequest,
    options: OzonRequestOptions = {},
  ): Promise<SearchDescriptionCategoryAttributeValuesResponse> {
    return executeSearchDescriptionCategoryAttributeValues(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает отправления, для которых нужно загрузить цифровые коды.
   *
   * @deprecated Ozon отключает v1-метод 31 августа 2026 года.
   * @see https://docs.ozon.ru/api/seller/#operation/ListPostingCodes
   */
  listDigitalPostings(
    input: ListDigitalPostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListDigitalPostingsResponse> {
    return executeListDigitalPostings(this.#transport, input, options);
  }

  /**
   * Возвращает отправления, для которых нужно загрузить цифровые коды.
   *
   * Это курсорная v2-замена устаревающего `listDigitalPostings`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/PostingDigitalList
   */
  listDigitalPostingsV2(
    input: ListDigitalPostingsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDigitalPostingsV2Response> {
    return executeListDigitalPostingsV2(this.#transport, input, options);
  }

  /**
   * Загружает коды цифровых товаров для отправления.
   *
   * Метод изменяет данные отправления и не повторяется автоматически.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/UploadPostingCodes
   */
  uploadDigitalPostingCodes(
    input: UploadDigitalPostingCodesRequest,
    options: OzonRequestOptions = {},
  ): Promise<UploadDigitalPostingCodesResponse> {
    return executeUploadDigitalPostingCodes(this.#transport, input, options);
  }

  /**
   * Обновляет остатки цифровых товаров.
   *
   * Метод изменяет данные товаров и не повторяется автоматически.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/DigitalProductAPI_StocksImport
   */
  importDigitalProductStocks(
    input: ImportDigitalProductStocksRequest,
    options: OzonRequestOptions = {},
  ): Promise<ImportDigitalProductStocksResponse> {
    return executeImportDigitalProductStocks(this.#transport, input, options);
  }

  createOrUpdateInvoice(
    input: CreateOrUpdateInvoiceRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateOrUpdateInvoiceResponse> {
    return executeCreateOrUpdateInvoice(this.#transport, input, options);
  }
  uploadInvoiceFile(
    input: UploadInvoiceFileRequest,
    options: OzonRequestOptions = {},
  ): Promise<UploadInvoiceFileResponse> {
    return executeUploadInvoiceFile(this.#transport, input, options);
  }
  getInvoice(
    input: GetInvoiceRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetInvoiceResponse> {
    return executeGetInvoice(this.#transport, input, options);
  }
  deleteInvoice(
    input: DeleteInvoiceRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeleteInvoiceResponse> {
    return executeDeleteInvoice(this.#transport, input, options);
  }

  /** Создаёт заказ. Мутация не повторяется автоматически. */
  createOrder(
    input: CreateOrderRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateOrderResponse> {
    return executeCreateOrder(this.#transport, input, options);
  }

  /** Отменяет заказ со всеми отправлениями без автоматических повторов. */
  cancelOrder(
    input: CancelOrderRequest,
    options: OzonRequestOptions = {},
  ): Promise<CancelOrderResponse> {
    return executeCancelOrder(this.#transport, input, options);
  }

  /** Проверяет возможность отмены заказа. */
  checkOrderCancellation(
    input: CheckOrderCancellationRequest,
    options: OzonRequestOptions = {},
  ): Promise<CheckOrderCancellationResponse> {
    return executeCheckOrderCancellation(this.#transport, input, options);
  }

  /** Возвращает статус отмены заказа. */
  getOrderCancellationStatus(
    input: GetOrderCancellationStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetOrderCancellationStatusResponse> {
    return executeGetOrderCancellationStatus(this.#transport, input, options);
  }

  /**
   * Отменяет FBO-отправление.
   *
   * Метод изменяет состояние отправления и не повторяется автоматически.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingCancel
   */
  cancelFboPosting(
    input: CancelFboPostingRequest,
    options: OzonRequestOptions = {},
  ): Promise<CancelFboPostingResponse> {
    return executeCancelFboPosting(this.#transport, input, options);
  }

  /**
   * Возвращает статус отмены FBO-отправления.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingCancelStatus
   */
  getFboPostingCancellationStatus(
    input: GetFboPostingCancellationStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFboPostingCancellationStatusResponse> {
    return executeGetFboPostingCancellationStatus(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает статусы выдачи и маркировки экземпляров FBO-отправлений.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingMarks
   */
  getFboPostingMarks(
    input: GetFboPostingMarksRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFboPostingMarksResponse> {
    return executeGetFboPostingMarks(this.#transport, input, options);
  }

  /**
   * Возвращает срок действия API-ключа, доступные роли и методы.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/AccessAPI_RolesByToken
   */
  getRoles(options: OzonRequestOptions = {}): Promise<GetRolesResponse> {
    return executeGetRoles(this.#transport, options);
  }

  /**
   * Возвращает информацию о подключении кабинета к Ozon Доставке.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerOzonLogisticsInfo
   */
  getOzonLogisticsInfo(
    options: OzonRequestOptions = {},
  ): Promise<GetOzonLogisticsInfoResponse> {
    return executeGetOzonLogisticsInfo(this.#transport, options);
  }

  /**
   * Возвращает подробные карточки товаров по одному типу идентификаторов.
   *
   * За один запрос можно передать до 1000 значений только одного поля:
   * `offer_id`, `product_id` или `sku`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoList
   */
  getProductInfoList(
    input: GetProductInfoListRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductInfoListResponse> {
    return executeGetProductInfoList(this.#transport, input, options);
  }

  /**
   * Возвращает характеристики товаров с фильтрами и cursor-пагинацией.
   *
   * За один запрос можно получить до 1000 товаров. Формат изображений в
   * Swagger неоднозначен, поэтому SDK принимает обе документированные формы.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductAttributesV4
   */
  getProductAttributes(
    input: GetProductAttributesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductAttributesResponse> {
    return executeGetProductAttributes(this.#transport, input, options);
  }

  /**
   * Возвращает название и описание товара по артикулу или product_id.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoDescription
   */
  getProductDescription(
    input: GetProductDescriptionRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductDescriptionResponse> {
    return executeGetProductDescription(this.#transport, input, options);
  }

  /**
   * Возвращает товары с некорректными объёмно-весовыми характеристиками.
   *
   * Результат использует cursor-пагинацию, до 1000 товаров за страницу.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductInfoWrongVolume
   */
  listProductsWithWrongVolume(
    input: ListProductsWithWrongVolumeRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListProductsWithWrongVolumeResponse> {
    return executeListProductsWithWrongVolume(this.#transport, input, options);
  }

  /**
   * Возвращает доступные и зарезервированные остатки FBS, rFBS и FBP.
   *
   * Результат использует cursor-пагинацию, до 1000 товаров за страницу.
   * Для остатков FBO Ozon рекомендует метод аналитики остатков.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoStocks
   */
  getProductStocks(
    input: GetProductStocksRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductStocksResponse> {
    return executeGetProductStocks(this.#transport, input, options);
  }

  /**
   * Возвращает остатки FBS и rFBS для одного склада.
   *
   * Результат использует cursor-пагинацию, до 1000 товаров за страницу.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductInfoWarehouseStocks
   */
  getProductStocksByWarehouse(
    input: GetProductStocksByWarehouseRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductStocksByWarehouseResponse> {
    return executeGetProductStocksByWarehouse(this.#transport, input, options);
  }

  /**
   * Возвращает остатки FBS и rFBS по артикулам или SKU.
   *
   * @deprecated Ozon отключил v1 7 апреля 2026 года. Используйте заменяющий
   * v2-метод после его добавления в SDK.
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductStocksByWarehouseFbs
   */
  getProductStocksByWarehouseFbs(
    input: GetProductStocksByWarehouseFbsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductStocksByWarehouseFbsResponse> {
    return executeGetProductStocksByWarehouseFbs(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Возвращает актуальные остатки товаров на складах продавца.
   *
   * Результат использует cursor-пагинацию; запрос принимает до 1000 SKU или
   * артикулов продавца и возвращает до 1000 товаров.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2
   */
  getProductStocksByWarehouseFbsV2(
    input: GetProductStocksByWarehouseFbsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<GetProductStocksByWarehouseFbsV2Response> {
    return executeGetProductStocksByWarehouseFbsV2(
      this.#transport,
      input,
      options,
    );
  }

  /**
   * Обновляет остатки максимум для 100 пар товар-склад.
   *
   * Операция не повторяется автоматически при неизвестном результате. Один
   * остаток товар-склад можно обновлять не чаще одного раза в 30 секунд.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductsStocksV2
   */
  updateProductStocks(
    input: UpdateProductStocksRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateProductStocksResponse> {
    return executeUpdateProductStocks(this.#transport, input, options);
  }

  /**
   * Возвращает количество пользователей, ожидающих поступления товаров.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoSubscription
   */
  getProductSubscriptionCounts(
    input: GetProductSubscriptionCountsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductSubscriptionCountsResponse> {
    return executeGetProductSubscriptionCounts(this.#transport, input, options);
  }

  /**
   * Возвращает все SKU, связанные с переданными старыми FBO/FBS SKU.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductGetRelatedSKU
   */
  getRelatedProductSkus(
    input: GetRelatedProductSkusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetRelatedProductSkusResponse> {
    return executeGetRelatedProductSkus(this.#transport, input, options);
  }

  /**
   * Возвращает лимиты на ассортимент, создание и обновление товаров.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetUploadQuota
   */
  getProductUploadQuota(
    options: OzonRequestOptions = {},
  ): Promise<GetProductUploadQuotaResponse> {
    return executeGetProductUploadQuota(this.#transport, options);
  }

  /**
   * Переносит до 100 товаров в архив.
   *
   * Операция изменяет состояние товаров и не повторяется автоматически при
   * неизвестном результате запроса.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductArchive
   */
  archiveProducts(
    input: ArchiveProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ArchiveProductsResponse> {
    return executeArchiveProducts(this.#transport, input, options);
  }

  /**
   * Возвращает до 100 товаров из архива.
   *
   * Операция изменяет состояние товаров и не повторяется автоматически при
   * неизвестном результате запроса.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUnarchive
   */
  unarchiveProducts(
    input: UnarchiveProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<UnarchiveProductsResponse> {
    return executeUnarchiveProducts(this.#transport, input, options);
  }

  /**
   * Удаляет из архива товары, которым Ozon не присвоил SKU.
   *
   * Операция необратима и не повторяется автоматически при неизвестном
   * результате. HTTP 200 может содержать ошибки отдельных товаров.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_DeleteProducts
   */
  deleteProducts(
    input: DeleteProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeleteProductsResponse> {
    return executeDeleteProducts(this.#transport, input, options);
  }

  /**
   * Добавляет или изменяет только перечисленные характеристики товара.
   *
   * Операция не удаляет заполненные характеристики и не повторяется
   * автоматически при неизвестном результате запроса.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUpdateAttributes
   */
  updateProductAttributes(
    input: UpdateProductAttributesRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateProductAttributesResponse> {
    return executeUpdateProductAttributes(this.#transport, input, options);
  }

  /**
   * Изменяет артикулы товаров в системе продавца.
   *
   * Операция изменяет данные и не повторяется автоматически при неизвестном
   * результате. Ошибки отдельных артикулов возвращаются в `errors` при HTTP 200.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUpdateOfferID
   */
  updateProductOfferIds(
    input: UpdateProductOfferIdsRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateProductOfferIdsResponse> {
    return executeUpdateProductOfferIds(this.#transport, input, options);
  }

  /**
   * Создаёт новые товары или полностью обновляет существующие.
   *
   * В одном запросе Ozon принимает до 100 товаров. Операция изменяет данные и
   * не повторяется автоматически при неизвестном результате запроса.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsV3
   */
  importProducts(
    input: ImportProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ImportProductsResponse> {
    return executeImportProducts(this.#transport, input, options);
  }

  /**
   * Создаёт копии карточек других продавцов по SKU.
   *
   * Операция изменяет данные и не повторяется автоматически при неизвестном
   * результате запроса.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsBySKU
   */
  importProductsBySku(
    input: ImportProductsBySkuRequest,
    options: OzonRequestOptions = {},
  ): Promise<ImportProductsBySkuResponse> {
    return executeImportProductsBySku(this.#transport, input, options);
  }

  /**
   * Возвращает результат задания на создание или обновление товаров.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetImportProductsInfo
   */
  getProductImportStatus(
    input: GetProductImportStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductImportStatusResponse> {
    return executeGetProductImportStatus(this.#transport, input, options);
  }

  /**
   * Возвращает зоны размещения товаров по SKU перед поставкой.
   *
   * Ozon ограничивает этот метод десятью запросами в секунду.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductPlacementZoneInfo
   */
  getProductPlacementZoneInfo(
    input: GetProductPlacementZoneInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductPlacementZoneInfoResponse> {
    return executeGetProductPlacementZoneInfo(this.#transport, input, options);
  }

  /**
   * Загружает или заменяет изображения одного товара.
   *
   * Каждый вызов заменяет весь набор изображений карточки: в `images` нужно
   * передавать и новые, и все изображения, которые необходимо сохранить.
   * Операция не повторяется автоматически при неизвестном результате.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductImportPictures
   */
  importProductPictures(
    input: ImportProductPicturesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ImportProductPicturesResponse> {
    return executeImportProductPictures(this.#transport, input, options);
  }

  /**
   * Возвращает изображения и ошибки изображений для товаров Ozon.
   *
   * За один запрос можно получить данные максимум по 1000 `product_id`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductInfoPicturesV2
   */
  getProductPictures(
    input: GetProductPicturesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductPicturesResponse> {
    return executeGetProductPictures(this.#transport, input, options);
  }

  /**
   * Обновляет цены максимум 1000 товаров.
   *
   * Денежные значения передаются строками без преобразования. Операция не
   * повторяется автоматически при неизвестном результате.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsPrices
   */
  updateProductPrices(
    input: UpdateProductPricesRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateProductPricesResponse> {
    return executeUpdateProductPrices(this.#transport, input, options);
  }

  /**
   * Продлевает на 30 дней актуальность минимальной цены товаров.
   *
   * Операция не повторяется автоматически при неизвестном результате.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_ActionTimerUpdate
   */
  updateProductMinPriceTimer(
    input: UpdateProductMinPriceTimerRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeUpdateProductMinPriceTimer(this.#transport, input, options);
  }

  /** Возвращает срок действия таймера минимальной цены товаров. */
  getProductMinPriceTimerStatus(
    input: GetProductMinPriceTimerStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductMinPriceTimerStatusResponse> {
    return executeGetProductMinPriceTimerStatus(
      this.#transport,
      input,
      options,
    );
  }

  /** Возвращает цены товаров с cursor-пагинацией. */
  getProductPrices(
    input: GetProductPricesRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductPricesResponse> {
    return executeGetProductPrices(this.#transport, input, options);
  }

  /** Возвращает сведения об уценённых товарах и их основных SKU. */
  getDiscountedProductInfo(
    input: GetDiscountedProductInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetDiscountedProductInfoResponse> {
    return executeGetDiscountedProductInfo(this.#transport, input, options);
  }

  /** Изменяет размер скидки уценённого товара без автоматических повторов. */
  updateProductDiscount(
    input: UpdateProductDiscountRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdateProductDiscountResponse> {
    return executeUpdateProductDiscount(this.#transport, input, options);
  }

  /** Возвращает доступные продавцу акции. */
  listPromotions(
    options: OzonRequestOptions = {},
  ): Promise<ListPromotionsResponse> {
    return executeListPromotions(this.#transport, options);
  }

  /** Возвращает товары, которые можно добавить в акцию. */
  listPromotionCandidates(
    input: ListPromotionCandidatesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPromotionCandidatesResponse> {
    return executeListPromotionCandidates(this.#transport, input, options);
  }

  /** Возвращает товары, участвующие в акции. */
  listPromotionProducts(
    input: ListPromotionProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPromotionProductsResponse> {
    return executeListPromotionProducts(this.#transport, input, options);
  }

  /** Добавляет товары в акцию без автоматических повторов. */
  activatePromotionProducts(
    input: ActivatePromotionProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ActivatePromotionProductsResponse> {
    return executeActivatePromotionProducts(this.#transport, input, options);
  }

  /** Удаляет товары из акции без автоматических повторов. */
  deactivatePromotionProducts(
    input: DeactivatePromotionProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeactivatePromotionProductsResponse> {
    return executeDeactivatePromotionProducts(this.#transport, input, options);
  }

  /**
   * Возвращает заявки покупателей на скидку.
   *
   * @deprecated Ozon рекомендует v2-метод списка заявок на скидку.
   */
  listDiscountTasks(
    input: ListDiscountTasksRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListDiscountTasksResponse> {
    return executeListDiscountTasks(this.#transport, input, options);
  }

  /** Согласовывает новые или просмотренные заявки покупателей на скидку. */
  approveDiscountTasks(
    input: ApproveDiscountTasksRequest,
    options: OzonRequestOptions = {},
  ): Promise<ApproveDiscountTasksResponse> {
    return executeApproveDiscountTasks(this.#transport, input, options);
  }

  /** Отклоняет новые или просмотренные заявки покупателей на скидку. */
  declineDiscountTasks(
    input: DeclineDiscountTasksRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeclineDiscountTasksResponse> {
    return executeDeclineDiscountTasks(this.#transport, input, options);
  }

  /** Возвращает список конкурентов для ценовых стратегий. */
  listPricingCompetitors(
    input: ListPricingCompetitorsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPricingCompetitorsResponse> {
    return executeListPricingCompetitors(this.#transport, input, options);
  }

  /** Возвращает список ценовых стратегий продавца. */
  listPricingStrategies(
    input: ListPricingStrategiesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPricingStrategiesResponse> {
    return executeListPricingStrategies(this.#transport, input, options);
  }

  /** Создаёт ценовую стратегию без автоматических повторов. */
  createPricingStrategy(
    input: CreatePricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreatePricingStrategyResponse> {
    return executeCreatePricingStrategy(this.#transport, input, options);
  }

  /** Возвращает информацию о ценовой стратегии. */
  getPricingStrategy(
    input: GetPricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetPricingStrategyResponse> {
    return executeGetPricingStrategy(this.#transport, input, options);
  }

  /** Обновляет пользовательскую ценовую стратегию без автоматических повторов. */
  updatePricingStrategy(
    input: UpdatePricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdatePricingStrategyResponse> {
    return executeUpdatePricingStrategy(this.#transport, input, options);
  }

  /** Добавляет товары в ценовую стратегию без автоматических повторов. */
  addProductsToPricingStrategy(
    input: AddProductsToPricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<AddProductsToPricingStrategyResponse> {
    return executeAddProductsToPricingStrategy(this.#transport, input, options);
  }

  /** Возвращает идентификаторы стратегий для товаров. */
  getPricingStrategyIdsByProductIds(
    input: GetPricingStrategyIdsByProductIdsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetPricingStrategyIdsByProductIdsResponse> {
    return executeGetPricingStrategyIdsByProductIds(
      this.#transport,
      input,
      options,
    );
  }

  /** Возвращает товары, добавленные в ценовую стратегию. */
  listPricingStrategyProducts(
    input: ListPricingStrategyProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPricingStrategyProductsResponse> {
    return executeListPricingStrategyProducts(this.#transport, input, options);
  }

  /** Возвращает цену товара и ссылку на товар конкурента. */
  getPricingStrategyProductInfo(
    input: GetPricingStrategyProductInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetPricingStrategyProductInfoResponse> {
    return executeGetPricingStrategyProductInfo(
      this.#transport,
      input,
      options,
    );
  }

  /** Удаляет товары из ценовой стратегии без автоматических повторов. */
  deleteProductsFromPricingStrategy(
    input: DeleteProductsFromPricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeleteProductsFromPricingStrategyResponse> {
    return executeDeleteProductsFromPricingStrategy(
      this.#transport,
      input,
      options,
    );
  }

  /** Включает или выключает ценовую стратегию без автоматических повторов. */
  updatePricingStrategyStatus(
    input: UpdatePricingStrategyStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<UpdatePricingStrategyStatusResponse> {
    return executeUpdatePricingStrategyStatus(this.#transport, input, options);
  }

  /** Удаляет пользовательскую ценовую стратегию без автоматических повторов. */
  deletePricingStrategy(
    input: DeletePricingStrategyRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeletePricingStrategyResponse> {
    return executeDeletePricingStrategy(this.#transport, input, options);
  }

  /** Возвращает пропуска с cursor-пагинацией. */
  listPasses(
    input: ListPassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListPassesResponse> {
    return executeListPasses(this.#transport, input, options);
  }

  /** Создаёт пропуска для перевозки без автоматических повторов. */
  createCarriagePasses(
    input: CreateCarriagePassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateCarriagePassesResponse> {
    return executeCreateCarriagePasses(this.#transport, input, options);
  }

  /** Обновляет пропуска перевозки без автоматических повторов. */
  updateCarriagePasses(
    input: UpdateCarriagePassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeUpdateCarriagePasses(this.#transport, input, options);
  }

  /** Удаляет пропуска перевозки без автоматических повторов. */
  deleteCarriagePasses(
    input: DeleteCarriagePassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeDeleteCarriagePasses(this.#transport, input, options);
  }

  /** Создаёт пропуска для возврата без автоматических повторов. */
  createReturnPasses(
    input: CreateReturnPassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<CreateReturnPassesResponse> {
    return executeCreateReturnPasses(this.#transport, input, options);
  }

  /** Обновляет пропуска для возврата без автоматических повторов. */
  updateReturnPasses(
    input: UpdateReturnPassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeUpdateReturnPasses(this.#transport, input, options);
  }

  deleteReturnPasses(
    input: DeleteReturnPassesRequest,
    options: OzonRequestOptions = {},
  ): Promise<void> {
    return executeDeleteReturnPasses(this.#transport, input, options);
  }
  listCertificateAccordanceTypesV1(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateAccordanceTypesV1Response> {
    return executeListCertificateAccordanceTypesV1(this.#transport, options);
  }
  listCertificateAccordanceTypesV2(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateAccordanceTypesV2Response> {
    return executeListCertificateAccordanceTypesV2(this.#transport, options);
  }
  listCertificateTypes(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateTypesResponse> {
    return executeListCertificateTypes(this.#transport, options);
  }
  listCertificationCategoriesV2(
    input: ListCertificationCategoriesV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListCertificationCategoriesV2Response> {
    return executeListCertificationCategoriesV2(
      this.#transport,
      input,
      options,
    );
  }
  /** @deprecated Ozon отключил v1 14 апреля 2025 года. */
  listCertificationCategoriesV1(
    input: ListCertificationCategoriesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListCertificationCategoriesV1Response> {
    return executeListCertificationCategoriesV1(
      this.#transport,
      input,
      options,
    );
  }
  /** @deprecated Ozon отключает v1 31 августа 2026 года. */
  createProductCertificateV1(
    input: CreateProductCertificateV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateProductCertificateV1Response> {
    return executeCreateProductCertificateV1(this.#transport, input, options);
  }
  bindProductCertificate(
    input: BindProductCertificateRequest,
    options: OzonRequestOptions = {},
  ): Promise<BindProductCertificateResponse> {
    return executeBindProductCertificate(this.#transport, input, options);
  }
  deleteProductCertificate(
    input: DeleteProductCertificateRequest,
    options: OzonRequestOptions = {},
  ): Promise<DeleteProductCertificateResponse> {
    return executeDeleteProductCertificate(this.#transport, input, options);
  }
  getProductCertificateInfo(
    input: GetProductCertificateInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductCertificateInfoResponse> {
    return executeGetProductCertificateInfo(this.#transport, input, options);
  }
  listProductCertificates(
    input: ListProductCertificatesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListProductCertificatesResponse> {
    return executeListProductCertificates(this.#transport, input, options);
  }
  listCertificateProductStatuses(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateProductStatusesResponse> {
    return executeListCertificateProductStatuses(this.#transport, options);
  }
  listCertificateProducts(
    input: ListCertificateProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateProductsResponse> {
    return executeListCertificateProducts(this.#transport, input, options);
  }
  unbindProductCertificate(
    input: UnbindProductCertificateRequest,
    options: OzonRequestOptions = {},
  ): Promise<UnbindProductCertificateResponse> {
    return executeUnbindProductCertificate(this.#transport, input, options);
  }
  listCertificateRejectionReasons(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateRejectionReasonsResponse> {
    return executeListCertificateRejectionReasons(this.#transport, options);
  }
  listCertificateStatuses(
    options: OzonRequestOptions = {},
  ): Promise<ListCertificateStatusesResponse> {
    return executeListCertificateStatuses(this.#transport, options);
  }

  /** @deprecated Ozon announced shutdown of this API version on 7 April 2026. */
  listWarehousesV1(
    input: ListWarehousesV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListWarehousesV1Response> {
    return executeListWarehousesV1(this.#transport, input, options);
  }

  /** @deprecated Ozon announced shutdown of this API version on 7 April 2026. */
  listDeliveryMethodsV1(
    input: ListDeliveryMethodsV1Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDeliveryMethodsV1Response> {
    return executeListDeliveryMethodsV1(this.#transport, input, options);
  }

  listDeliveryMethodsV2(
    input: ListDeliveryMethodsV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListDeliveryMethodsV2Response> {
    return executeListDeliveryMethodsV2(this.#transport, input, options);
  }

  getDeliveryMethodReturnSettings(
    input: GetDeliveryMethodReturnSettingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetDeliveryMethodReturnSettingsResponse> {
    return executeGetDeliveryMethodReturnSettings(
      this.#transport,
      input,
      options,
    );
  }

  listWarehousesV2(
    input: ListWarehousesV2Request,
    options: OzonRequestOptions = {},
  ): Promise<ListWarehousesV2Response> {
    return executeListWarehousesV2(this.#transport, input, options);
  }

  getFbsWarehouseOperationStatus(
    input: GetFbsWarehouseOperationStatusRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetFbsWarehouseOperationStatusResponse> {
    return executeGetFbsWarehouseOperationStatus(
      this.#transport,
      input,
      options,
    );
  }

  archiveFbsWarehouse(
    input: ArchiveFbsWarehouseRequest,
    options: OzonRequestOptions = {},
  ): Promise<ArchiveFbsWarehouseResponse> {
    return executeArchiveFbsWarehouse(this.#transport, input, options);
  }

  unarchiveFbsWarehouse(
    input: UnarchiveFbsWarehouseRequest,
    options: OzonRequestOptions = {},
  ): Promise<UnarchiveFbsWarehouseResponse> {
    return executeUnarchiveFbsWarehouse(this.#transport, input, options);
  }

  getWarehouseInvalidProducts(
    input: GetWarehouseInvalidProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetWarehouseInvalidProductsResponse> {
    return executeGetWarehouseInvalidProducts(this.#transport, input, options);
  }

  listWarehousesWithInvalidProducts(
    options: OzonRequestOptions = {},
  ): Promise<ListWarehousesWithInvalidProductsResponse> {
    return executeListWarehousesWithInvalidProducts(this.#transport, options);
  }

  createDeliveryPolygonV1(
    input: CreateDeliveryPolygonV1Request,
    options: OzonRequestOptions = {},
  ): Promise<CreateDeliveryPolygonV1Response> {
    return executeCreateDeliveryPolygonV1(this.#transport, input, options);
  }

  /** @deprecated Ozon directs callers to POST /v2/polygon/bind. */
  bindDeliveryPolygonV1(
    input: BindDeliveryPolygonV1Request,
    options: OzonRequestOptions = {},
  ): Promise<BindDeliveryPolygonV1Response> {
    return executeBindDeliveryPolygonV1(this.#transport, input, options);
  }

  listSupplierAvailableWarehouses(
    options: OzonRequestOptions = {},
  ): Promise<ListSupplierAvailableWarehousesResponse> {
    return executeListSupplierAvailableWarehouses(this.#transport, options);
  }

  listFboSupplyWarehouses(
    input: ListFboSupplyWarehousesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFboSupplyWarehousesResponse> {
    return executeListFboSupplyWarehouses(this.#transport, input, options);
  }

  /**
   * Возвращает список товаров с фильтрами и cursor-пагинацией.
   *
   * В одном запросе можно использовать только одну группу идентификаторов:
   * `offer_id`, `product_id` или `skus`.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductList
   */
  listProducts(
    input: ListProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListProductsResponse> {
    return executeListProducts(this.#transport, input, options);
  }

  /**
   * Возвращает контент-рейтинг товаров и рекомендации по его увеличению.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductRatingBySku
   */
  getProductRatingBySku(
    input: GetProductRatingBySkuRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetProductRatingBySkuResponse> {
    return executeGetProductRatingBySku(this.#transport, input, options);
  }

  /**
   * Возвращает подробную информацию об эконом-товарах по кодам квантов.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/QuantGetInfo
   */
  getQuantProductsInfo(
    input: GetQuantProductsInfoRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetQuantProductsInfoResponse> {
    return executeGetQuantProductsInfo(this.#transport, input, options);
  }

  /**
   * Возвращает список эконом-товаров с курсорной пагинацией.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/QuantProductList
   */
  listQuantProducts(
    input: ListQuantProductsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListQuantProductsResponse> {
    return executeListQuantProducts(this.#transport, input, options);
  }

  /**
   * Возвращает текущий индекс ошибок FBS и rFBS.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/RatingAPI_GetFBSRatingIndexInfoV1
   */
  getFbsRatingIndexInfo(
    options: OzonRequestOptions = {},
  ): Promise<GetFbsRatingIndexInfoResponse> {
    return executeGetFbsRatingIndexInfo(this.#transport, options);
  }

  /**
   * Возвращает рейтинги продавца за указанный период.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/RatingAPI_RatingHistoryV1
   */
  getRatingHistory(
    input: GetRatingHistoryRequest,
    options: OzonRequestOptions = {},
  ): Promise<GetRatingHistoryResponse> {
    return executeGetRatingHistory(this.#transport, input, options);
  }

  /**
   * Возвращает текущие рейтинги продавца.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/RatingAPI_RatingSummaryV1
   */
  getRatingSummary(
    options: OzonRequestOptions = {},
  ): Promise<GetRatingSummaryResponse> {
    return executeGetRatingSummary(this.#transport, options);
  }

  /**
   * Возвращает отправления, повлиявшие на индекс ошибок FBS и rFBS.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/RatingAPI_ListFBSRatingIndexPostingsV1
   */
  listFbsRatingIndexPostings(
    input: ListFbsRatingIndexPostingsRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListFbsRatingIndexPostingsResponse> {
    return executeListFbsRatingIndexPostings(this.#transport, input, options);
  }

  /**
   * Возвращает информацию о кабинете продавца, компании, рейтингах и подписке.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerInfo
   */
  getSellerInfo(
    options: OzonRequestOptions = {},
  ): Promise<GetSellerInfoResponse> {
    return executeGetSellerInfo(this.#transport, options);
  }

  /**
   * Возвращает склады Ozon для FBO, FBO Fresh и возвратов.
   *
   * @see https://docs.ozon.ru/api/seller/#operation/WarehouseOZONList
   */
  listOzonWarehouses(
    input: ListOzonWarehousesRequest,
    options: OzonRequestOptions = {},
  ): Promise<ListOzonWarehousesResponse> {
    return executeListOzonWarehouses(this.#transport, input, options);
  }
}
