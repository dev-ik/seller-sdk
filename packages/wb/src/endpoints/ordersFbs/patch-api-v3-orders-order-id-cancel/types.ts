// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Отменить сборочное задание».
 *
 * Метод отменяет [сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) и переводит в [статус](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `cancel` — отменено продавцом.
 *
 * Сборочное задание можно отменить до его передачи Wildberries.
 * Чтобы проверить, можно ли отменить сборочное задание, используйте метод POST /api/v3/orders/status, поле isCancellable.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PATCH /api/v3/orders/{orderId}/cancel
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PatchApiV3OrdersOrderIdCancelInput = {
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
export type PatchApiV3OrdersOrderIdCancelResponse = undefined;
