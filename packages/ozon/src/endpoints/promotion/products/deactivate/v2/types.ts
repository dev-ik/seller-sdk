export type DeactivatePromotionProductsV2Request = {
  /**
   * Идентификатор акции. Получите методом [/v1/actions](#operation/Promos).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;
  /**
   * Список идентификаторов товаров в системе Ozon — `product_id`.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_ids: ReadonlyArray<string>;
};

export type DeactivatePromotionProductsV2Response = {
  readonly product_ids?: ReadonlyArray<string>;
};
