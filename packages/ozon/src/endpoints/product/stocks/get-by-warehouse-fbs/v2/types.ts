interface GetProductStocksByWarehouseFbsV2BaseRequest {
  /** Cursor из предыдущего ответа; для первой страницы можно не передавать. */
  readonly cursor?: string;
  /** Количество товаров в ответе, максимум 1000. */
  readonly limit: number;
}

export type GetProductStocksByWarehouseFbsV2Request =
  GetProductStocksByWarehouseFbsV2BaseRequest &
    (
      | {
          /**
           * Идентификаторы товаров в системе продавца — артикул.
           *
           * Максимум элементов: `1000`.
           *
           * <!-- seller-sdk:ozon-openapi -->
           */
          readonly offer_id?: never;
          /** Не более 1000 SKU. */
          readonly sku: readonly string[];
        }
      | {
          /** Не более 1000 артикулов продавца. */
          readonly offer_id: readonly string[];
          /**
           * Идентификаторы товаров в системе Ozon — SKU.
           *
           * Максимум элементов: `1000`.
           *
           * <!-- seller-sdk:ozon-openapi -->
           */
          readonly sku?: never;
        }
    );

export interface OzonFbsWarehouseProductStockV2 {
  readonly free_stock?: number;
  readonly offer_id?: string;
  readonly present?: number;
  readonly product_id?: number;
  readonly reserved?: number;
  readonly sku?: number;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}

export interface GetProductStocksByWarehouseFbsV2Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly products?: readonly OzonFbsWarehouseProductStockV2[];
}
