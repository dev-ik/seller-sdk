export type DeleteAutoAddProductsV2Request = {
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
   * Идентификаторы товаров в системе Ozon — `product_id`.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_ids: ReadonlyArray<string>;
};

export type DeleteAutoAddProductsV2Response = {
  readonly product_ids?: ReadonlyArray<string>;
};
