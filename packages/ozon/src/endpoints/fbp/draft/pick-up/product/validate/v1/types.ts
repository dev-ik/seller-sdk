import type {
  OzonFbpValidatedProduct,
  ValidateFbpDirectDraftProductsV1Response,
} from "../../../../direct/product/validate/v1/types.js";

export interface ValidateFbpPickupDraftProductsV1Request {
  /**
   * Список идентификаторов товаров — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly {
    /**
     * Количество единиц товара в поставке.
     *
     * Формат: `int32`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly count: number;

    /**
     * Идентификатор товара — SKU.
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

export type OzonFbpPickupValidatedProduct = OzonFbpValidatedProduct;
export type ValidateFbpPickupDraftProductsV1Response =
  ValidateFbpDirectDraftProductsV1Response;
