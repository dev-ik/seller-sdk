// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Обновить остатки товаров».
 *
 * Метод обновляет количество остатков товаров продавца [в списке](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/post).
 *
 *  Названия параметров запроса не валидируются. При отправке некорректных названий вы получите успешный ответ (204), но остатки не обновятся.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов остатков на складах продавца кроме метода удаления остатков (/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/delete):
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/stocks/{warehouseId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PutApiV3StocksWarehouseIdInput = {
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
  readonly body?: {
    /**
     * Массив ID размеров товаров и их остатков
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly stocks: readonly {
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
       *
       * Максимальное значение: 100000.
       */
      readonly amount?: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Обновить остатки товаров».
 *
 * 204: Обновлено.
 */
export type PutApiV3StocksWarehouseIdResponse = undefined;
