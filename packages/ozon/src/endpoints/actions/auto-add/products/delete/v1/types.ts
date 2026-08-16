export interface DeleteAutoAddProductsV1Request {
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
   * Идентификаторы товаров в системе Ozon — `product_id`.
   *
   * Минимум элементов: `1`. Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_ids?: readonly string[];
}
export interface DeleteAutoAddProductsV1Response {
  readonly product_ids?: readonly string[];
}
