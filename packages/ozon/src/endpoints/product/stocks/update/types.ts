interface OzonProductStockUpdateBase {
  /** Количество товара в наличии без учёта зарезервированных товаров. */
  readonly stock: number;
  /** Идентификатор склада Ozon. */
  readonly warehouse_id: number;
}

/** Остаток одной пары товар-склад, идентифицированной артикулом или product_id. */
export type OzonProductStockUpdateInput = OzonProductStockUpdateBase &
  (
    | {
        /**
         * Идентификатор товара в системе продавца — артикул.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly offer_id: string;
        readonly product_id?: never;
      }
    | {
        readonly offer_id?: never;

        /**
         * Идентификатор товара в системе Ozon — `product_id`.
         *
         * Формат: `int64`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly product_id: number;
      }
  );

export interface UpdateProductStocksRequest {
  /** Не более 100 пар товар-склад за запрос. */
  readonly stocks: readonly OzonProductStockUpdateInput[];
}

export interface OzonProductStockUpdateError {
  readonly code?: string;
  readonly message?: string;
}

export interface OzonProductStockUpdateResult {
  readonly errors?: readonly OzonProductStockUpdateError[];
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly updated?: boolean;
  readonly warehouse_id?: number;
}

export interface UpdateProductStocksResponse {
  readonly result?: readonly OzonProductStockUpdateResult[];
}
