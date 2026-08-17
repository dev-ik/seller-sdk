// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить остатки товаров».
 *
 * Метод удаляет запись об остатках товаров продавца из [списка остатков](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/post).
 *
 *  Действие необратимо. Удаленный остаток будет необходимо загрузить повторно для возобновления продаж.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 10 запросов | 6 сек | 2 запроса |
 *
 * DELETE /api/v3/stocks/{warehouseId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type DeleteApiV3StocksWarehouseIdInput = {
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
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly chrtIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Удалить остатки товаров».
 *
 * 204: Удалено.
 */
export type DeleteApiV3StocksWarehouseIdResponse = undefined;
