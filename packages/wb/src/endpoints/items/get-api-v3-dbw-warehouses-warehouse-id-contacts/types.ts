// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список контактов».
 *
 * Метод возвращает список контактов, привязанных к [складу продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get).
 *
 * Только для складов с типом доставки `3` — доставка курьером WB ([DBW](/openapi/orders-dbw)).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/dbw/warehouses/{warehouseId}/contacts
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV3DbwWarehousesWarehouseIdContactsInput = {
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
 * Успешный ответ метода «Список контактов».
 *
 * 200: Успешно.
 */
export type GetApiV3DbwWarehousesWarehouseIdContactsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly contacts?: readonly {
    /**
     * Комментарий
     *
     * Пример: `"Иванов Иван Иванович. Звонить с 10 до 21 часа."`.
     *
     * Максимальная длина: 1000.
     */
    readonly comment?: string;

    /**
     * Номер телефона
     *
     * Пример: `"+79998887766"`.
     */
    readonly phone?: string;
  }[];
};
