// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Товары поставки».
 *
 * Метод возвращает информацию о товарах в поставке.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/supplies/{ID}/goods
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type GetV1SuppliesIdGoodsInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки или заказа
     */
    readonly ID: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Количество записей в ответе
     *
     * Значение по умолчанию: `100`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * После какого элемента выдавать данные
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;

    /**
     * Поиск по:
     *  - `true` — ID заказа, если в `ID` передаёте ID заказа
     *  - `false` — ID поставки, если в `ID` передаёте ID поставки
     *
     * Значение по умолчанию: `false`.
     */
    readonly isPreorderID?: boolean;
  };
};
/**
 * Успешный ответ метода «Товары поставки».
 *
 * 200: Успешно.
 */
export type GetV1SuppliesIdGoodsResponse = readonly {
  /**
   * Баркод товара
   */
  readonly barcode?: string;

  /**
   * Артикул продавца
   */
  readonly vendorCode?: string;

  /**
   * Артикул WB
   */
  readonly nmID?: number;

  /**
   * Нужен ли [код маркировки Честного знака](https://честныйзнак.рф/) для этого товара:
   *  - `false` — не нужен
   *  - `true` — нужен
   */
  readonly needKiz?: boolean;

  /**
   * Код ТНВЭД.
   *
   * Если `"needKiz":true`, а `"tnved":null`, нужно заполнить характеристику товара **ТН ВЭД** в [личном кабинете](https://seller.wildberries.ru/new-goods) или по [API](./work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post)
   */
  readonly tnved?: string | null;

  /**
   * Размер товара, указанный продавцом
   */
  readonly techSize?: string;

  /**
   * Цвет товара
   */
  readonly color?: string | null;

  /**
   * Указано в упаковке, шт
   */
  readonly supplierBoxAmount?: number | null;

  /**
   * Указано в поставке/заказе, шт
   */
  readonly quantity?: number;

  /**
   * Поступило в продажу, шт
   */
  readonly readyForSaleQuantity?: number | null;

  /**
   * Принято, шт
   */
  readonly acceptedQuantity?: number | null;

  /**
   * Количество товара на раскладке, шт
   */
  readonly unloadingQuantity?: number | null;
}[];
