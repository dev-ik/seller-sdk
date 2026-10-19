export type UpdatePromotionProductsV1Request = {
  /**
   * Идентификатор акции. Получите методом [/v1/actions](#operation/Promos).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;
  /**
   * Список товаров.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: ReadonlyArray<{
    /**
     * Предельная цена товара. Если добавляете товар вне акции «Промокоды», изменим предельную цену в
     * карточке товара, даже если она была установлена ранее. Если значение меньше или равно лимиту
     * акции «Эластичный бустинг» или «Максимальный бустинг» — добавим товар в акцию, если больше —
     * удалим товар из акции.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly action_price: {
      /**
       * Сумма.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly amount?: string;
      /**
       * Валюта.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly currency?: string;
    };
    /**
     * Идентификатор товара в системе Ozon — `product_id`.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly product_id: number;
    /**
     * Количество единиц товара в акции «Промокоды». Не передавайте параметр для акций «Эластичный
     * бустинг» и «Максимальный бустинг».
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly stock?: number;
  }>;
};

export type UpdatePromotionProductsV1Response = {
  readonly active_product_ids?: ReadonlyArray<string>;
  readonly deactivated_product_ids?: ReadonlyArray<string>;
  readonly rejected?: ReadonlyArray<{
    readonly product_id?: number;
    readonly reason?: string;
  }>;
  readonly warnings?: ReadonlyArray<{
    readonly product_id?: number;
    readonly reason?: string;
  }>;
};
