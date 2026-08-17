// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить склад продавца».
 *
 * Метод удаляет [склад продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * DELETE /api/v3/warehouses/{warehouseId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type DeleteApiV3WarehousesWarehouseIdInput = {
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
  };
};
/**
 * Успешный ответ метода «Удалить склад продавца».
 *
 * 204: Удалено.
 */
export type DeleteApiV3WarehousesWarehouseIdResponse = undefined;
