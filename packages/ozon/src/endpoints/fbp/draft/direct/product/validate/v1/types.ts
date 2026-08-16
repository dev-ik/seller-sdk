import type { OzonFbpBundleItemError } from "../../../../shared/v1/types.js";
export interface ValidateFbpDirectDraftProductsV1Request {
  /**
   * Идентификаторы товаров в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly {
    /**
     * Количество единиц товара в поставке.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly count: number;

    /**
     * Идентификатор товара в системе Ozon — SKU.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sku: number;
  }[];

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}
export interface OzonFbpValidatedProduct {
  readonly barcode?: string;
  readonly icon_name?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly quantity?: number;
  readonly sku?: number;
  readonly volume?: number;
}
export interface ValidateFbpDirectDraftProductsV1Response {
  readonly approved_items?: readonly OzonFbpValidatedProduct[];
  readonly bundle_generated?: boolean;
  readonly bundle_id?: string;
  readonly rejected_items?: readonly (OzonFbpValidatedProduct & {
    readonly rejection_reasons?: readonly OzonFbpBundleItemError[];
  })[];
}
