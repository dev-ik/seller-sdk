export type UpdateAutoAddProductsV2Request = {
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
   * Список товаров, которые нужно добавить или обновить в автодобавлении.
   *
   * Минимум элементов: `1`. Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: ReadonlyArray<{
    /**
     * Предельная цена товара. Изменим предельную цену в карточке товара в дату `auto_add_date`, даже
     * если предельная цена была установлена ранее. Если значение меньше или равно лимиту акции
     * «Эластичный бустинг» или «Максимальный бустинг» — добавим товар в акцию, если больше — удалим
     * товар из акции. Если передаёте нецелое число, цена округлится в большую сторону.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly action_price?: {
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
     * Идентификатор товара.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly id?: number;
    /**
     * Количество единиц товара в акции для акции «Промокоды». Не указывайте для акций «Эластичный
     * бустинг» и «Максимальный бустинг».
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly stock?: number;
  }>;
};

export type UpdateAutoAddProductsV2Response = {
  readonly below_min_price?: ReadonlyArray<{
    readonly key?: number;
    readonly value?: number;
  }>;
  readonly deactivated_ids?: ReadonlyArray<string>;
  readonly extremely_low_price?: ReadonlyArray<{
    readonly key?: number;
    readonly value?: number;
  }>;
  readonly failed_price?: ReadonlyArray<{
    readonly key?: number;
    readonly value?: number;
  }>;
  readonly product_ids?: ReadonlyArray<string>;
  readonly rejected?: ReadonlyArray<{
    readonly product_id?: number;
    readonly reason?: string;
  }>;
  readonly warnings?: ReadonlyArray<{
    readonly product_id?: number;
    readonly reason?: string;
  }>;
};
