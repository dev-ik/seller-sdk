/** Остаток цифрового товара. */
export interface OzonDigitalProductStockInput {
  /** Артикул продавца. */
  readonly offer_id: string;
  /** Количество товара в наличии. */
  readonly stock: number;
}

/** Параметры обновления остатков цифровых товаров. */
export interface ImportDigitalProductStocksRequest {
  /**
   * Данные об остатках.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly stocks?: readonly OzonDigitalProductStockInput[];
}

/** Ошибка обновления остатка цифрового товара. */
export interface OzonDigitalProductStockError {
  readonly code?: string;
  readonly message?: string;
}

/** Результат обновления остатка цифрового товара. */
export interface OzonDigitalProductStockStatus {
  readonly errors?: readonly OzonDigitalProductStockError[];
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly sku?: number;
  readonly updated?: boolean;
}

/** Ответ на обновление остатков цифровых товаров. */
export interface ImportDigitalProductStocksResponse {
  readonly status?: readonly OzonDigitalProductStockStatus[];
}
