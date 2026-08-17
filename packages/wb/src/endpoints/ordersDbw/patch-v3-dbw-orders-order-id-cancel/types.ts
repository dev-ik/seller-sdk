// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Отменить сборочное задание».
 *
 * Метод отменяет [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) и переводит в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `cancel` — отменено продавцом.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  управление сборочными заданиями
 *
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 300 запросов | 200 мс | 20 запросов |
 * | Сервисный | 1 мин | 300 запросов | 200 мс | 20 запросов |
 * | Базовый с секретом | 1 мин | 300 запросов | 200 мс | 20 запросов |
 * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PATCH /api/v3/dbw/orders/{orderId}/cancel
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PatchV3DbwOrdersOrderIdCancelInput = {
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
 * Успешный ответ метода «Отменить сборочное задание».
 *
 * 204: Отменено.
 */
export type PatchV3DbwOrdersOrderIdCancelResponse = undefined;
