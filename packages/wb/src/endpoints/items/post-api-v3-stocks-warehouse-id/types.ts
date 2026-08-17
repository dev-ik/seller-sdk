// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить остатки товаров».
 *
 * Метод возвращает данные об остатках товаров на [складах продавца](/openapi/work-with-products#tag/Sklady-prodavca).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов остатков на складах продавца кроме метода удаления остатков (/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/delete):
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/stocks/{warehouseId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostApiV3StocksWarehouseIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID склада продавца
     *
     * Формат: `int64`.
     *
     * Пример: `1`.
     */
    readonly warehouseId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /**
     * Массив ID размеров товаров
     *
     * Максимальное количество элементов: 1000.
     */
    readonly chrtIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить остатки товаров».
 *
 * 200: Успешно.
 */
export type PostApiV3StocksWarehouseIdResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly stocks?: readonly {
    /**
     * ID размера товара
     *
     * Пример: `12345678`.
     */
    readonly chrtId?: number;

    /**
     * Остаток
     *
     * Пример: `10`.
     */
    readonly amount?: number;
  }[];
};
