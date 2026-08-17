// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Обновить склад продавца».
 *
 * Метод обновляет данные [склада продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get), кроме складов для сверхгабаритных товаров (СГТ, `"cargoType":2`).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/warehouses/{warehouseId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PutApiV3WarehousesWarehouseIdInput = {
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
     * Имя склада продавца
     *
     * Пример: `"Склад Коледино"`.
     *
     * Минимальная длина: 1.
     *
     * Максимальная длина: 200.
     */
    readonly name: string;

    /**
     * ID [склада WB](./work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1offices/get).
     * Нельзя привязывать склад WB, который уже используется.
     * Можно менять не чаще одного раза в сутки
     *
     * Пример: `15`.
     *
     * Минимальное значение: 1.
     */
    readonly officeId: number;
  };
};
/**
 * Успешный ответ метода «Обновить склад продавца».
 *
 * 204: Обновлено.
 */
export type PutApiV3WarehousesWarehouseIdResponse = undefined;
