import type {
  OzonFbpValidatedProduct,
  ValidateFbpDirectDraftProductsV1Response,
} from "../../../../direct/product/validate/v1/types.js";

export interface ValidateFbpDropOffDraftProductsV1Request {
  /**
   * Идентификаторы товаров в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly {
    /**
     * Количество.
     *
     * Формат: `int32`.
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

export type OzonFbpDropOffValidatedProduct = OzonFbpValidatedProduct;
export type ValidateFbpDropOffDraftProductsV1Response =
  ValidateFbpDirectDraftProductsV1Response;
