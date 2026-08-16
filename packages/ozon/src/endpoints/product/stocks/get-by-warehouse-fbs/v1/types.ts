export type GetProductStocksByWarehouseFbsRequest =
  | {
      readonly offer_id?: never;

      /**
       * Идентификатор товара в системе Ozon — SKU.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly sku: readonly string[];
    }
  | {
      /**
       * Идентификатор товара в системе продавца — артикул.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly offer_id: readonly string[];
      readonly sku?: never;
    };

export interface OzonFbsWarehouseProductStock {
  readonly offer_id?: string;
  readonly present?: number;
  readonly product_id?: number;
  readonly reserved?: number;
  readonly sku?: number;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}

export interface GetProductStocksByWarehouseFbsResponse {
  readonly result?: readonly OzonFbsWarehouseProductStock[];
}
