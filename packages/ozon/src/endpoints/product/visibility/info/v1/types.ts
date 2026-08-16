import type { OzonProductPlacement } from "../../shared/types.js";

export interface GetProductVisibilityInfoV1Request {
  /**
   * Идентификаторы товаров в системе Ozon — SKU.
   *
   * Минимум элементов: `1`. Максимум элементов: `350`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus?: readonly string[];
}

export interface OzonProductVisibilityInfo {
  readonly showcases_visibility?: OzonProductPlacement;
  readonly sku?: number;
}

export interface GetProductVisibilityInfoV1Response {
  readonly items?: readonly OzonProductVisibilityInfo[];
}
