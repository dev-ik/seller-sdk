// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Проверить, что заказ принадлежит покупателю».
 *
 * Метод сообщает, принадлежит ли проверяемый заказ покупателю или нет по переданному коду.
 *
 * Доступно, если хотя бы одно сборочное задание из заказа находится в статусе prepare - готов к выдаче.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 30 запросов | 2 сек | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/click-collect/orders/client/identity
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersClientIdentityInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Уникальный ID заказа покупателя
     */
    readonly orderCode?: string;

    /**
     * Код подтверждения
     */
    readonly passcode?: string;
  };
};
/**
 * Успешный ответ метода «Проверить, что заказ принадлежит покупателю».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersClientIdentityResponse = {
  /**
   * Принадлежит ли заказ покупателю:
   *  - `true` — принадлежит
   *  - `false` — значение не применяется. Если заказ не принадлежит покупателю, вы получите ответ со статус-кодом `409`
   */
  readonly ok?: boolean;
};
