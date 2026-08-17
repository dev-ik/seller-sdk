// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Перевести на сборку».
 *
 * Метод переводит [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` — на сборке.
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
 * PATCH /api/v3/dbw/orders/{orderId}/confirm
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PatchV3DbwOrdersOrderIdConfirmInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `5632423`.
     */
    readonly orderId: number;
  };
};
/**
 * Успешный ответ метода «Перевести на сборку».
 *
 * 204: Подтверждено.
 */
export type PatchV3DbwOrdersOrderIdConfirmResponse = undefined;
