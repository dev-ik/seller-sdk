export interface GetProductStocksByWarehouseRequest {
  /** Cursor из предыдущего ответа; для первой страницы можно не передавать. */
  readonly cursor?: string;
  /** Количество товаров на странице, от 1 до 1000. */
  readonly limit: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface OzonWarehouseProductStock {
  readonly free_stock?: number;
  readonly offer_id?: string;
  readonly present?: number;
  readonly product_id?: number;
  readonly reserved?: number;
  readonly sku?: number;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
}

export interface GetProductStocksByWarehouseResponse {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly stocks?: readonly OzonWarehouseProductStock[];
}
