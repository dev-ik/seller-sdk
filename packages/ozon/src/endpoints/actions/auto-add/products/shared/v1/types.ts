export interface OzonAutoAddProductsPageRequest {
  /**
   * Идентификатор акции.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Дата и время автодобавления товаров в акцию из параметра `result.auto_add_dates` в ответе метода
   * [/v1/actions](#operation/Promos).
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly auto_add_date: string;

  /**
   * Количество значений в ответе.
   *
   * Формат: `uint64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `uint64`. Пример: `0`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;
}
export interface OzonAutoAddProduct {
  readonly action_price_to_auto_add?: number;
  readonly add_mode?: string;
  readonly base_price?: number;
  readonly currency?: string;
  readonly marketplace_seller_price?: number;
  readonly max_discount_price?: number;
  readonly min_action_quantity?: number;
  readonly min_seller_price?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: number;
  readonly product_id?: number;
  readonly quantity_to_auto_add?: number;
  readonly sku?: number;
}
export interface OzonAutoAddProductsPageResponse {
  readonly products?: readonly OzonAutoAddProduct[];
  readonly total?: number;
}
