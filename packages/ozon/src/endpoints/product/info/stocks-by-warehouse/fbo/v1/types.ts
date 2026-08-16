export interface ListFboProductStocksByWarehouseV1Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Количество значений в ответе.
   *
   * Формат: `uint64`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Идентификатор товаров в системе продавца — артикул.
   *
   * Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_ids?: readonly string[];

  /**
   * Идентификатор товаров в системе Ozon — SKU.
   *
   * Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus?: readonly string[];
}
export interface OzonFboProductStockByWarehouseV1 {
  readonly offer_id?: string;
  readonly present?: number;
  readonly product_id?: number;
  readonly reserved?: number;
  readonly sku?: number;
  readonly warehouse_id?: number;
}
export interface ListFboProductStocksByWarehouseV1Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly products?: readonly OzonFboProductStockByWarehouseV1[];
}
