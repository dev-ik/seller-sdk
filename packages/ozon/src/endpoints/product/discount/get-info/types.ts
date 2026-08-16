export interface GetDiscountedProductInfoRequest {
  /**
   * Список SKU уценённых товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discounted_skus: readonly string[];
}

export interface OzonDiscountedProductInfo {
  readonly comment_reason_damaged?: string;
  readonly condition?: string;
  readonly condition_estimation?: string;
  readonly defects?: string;
  readonly discounted_sku?: number;
  readonly mechanical_damage?: string;
  readonly package_damage?: string;
  readonly packaging_violation?: string;
  readonly reason_damaged?: string;
  readonly repair?: string;
  readonly shortage?: string;
  readonly sku?: number;
  readonly warranty_type?: string;
}

export interface GetDiscountedProductInfoResponse {
  readonly items?: readonly OzonDiscountedProductInfo[];
}
