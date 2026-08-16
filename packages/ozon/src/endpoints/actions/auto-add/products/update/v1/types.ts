export interface UpdateAutoAddProductsV1Request {
  /**
   * Идентификатор акции.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id?: number;

  /**
   * Дата и время автодобавления товаров в акцию из параметра `result.auto_add_dates` в ответе метода
   * [/v1/actions](#operation/Promos).
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly auto_add_date?: string;

  /**
   * Список товаров, которые нужно добавить или обновить в автодобавлении.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to_update?: readonly {
    /**
     * Цена товара по акции.
     *
     * Формат: `double`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly action_price?: number;

    /**
     * Валюта цены.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly currency?: string;

    /**
     * Идентификатор товара, который нужно добавить или обновить.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly product_id?: number;

    /**
     * Количество товаров в акции.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly quantity?: number;
  }[];
}
export type OzonAutoAddPriceIssue = {
  readonly key?: number;
  readonly value?: number;
};
export interface UpdateAutoAddProductsV1Response {
  readonly below_min_price?: readonly OzonAutoAddPriceIssue[];
  readonly extremely_low_price?: readonly OzonAutoAddPriceIssue[];
  readonly failed_price?: readonly OzonAutoAddPriceIssue[];
  readonly rejected?: readonly {
    readonly code?:
      | "NOT_FOUND"
      | "NO_CHANGES"
      | "STOCK_REQUIRED"
      | "INVALID_ACTION_PRICE"
      | "MAX_ACTION_PRICE"
      | "REJECTED_LOW_PRICE"
      | "INVALID_CURRENCY";
    readonly product_id?: number;
    readonly reason?: string;
  }[];
  readonly updated_ids?: readonly string[];
}
