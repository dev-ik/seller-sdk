// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Заказы с информацией по клиенту».
 *
 * Метод позволяет получать информацию о покупателе по ID сборочного задания.
 *
 * Только для трансграничных поставок из **Турции**.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/orders/client
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3OrdersClientInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список заказов
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Заказы с информацией по клиенту».
 *
 * 200: Успешно.
 */
export type PostApiV3OrdersClientResponse = {
  /**
   * Информация по клиенту для трансграничных поставок из Турции
   */
  readonly orders?: readonly {
    /**
     * Имя клиента
     *
     * Пример: `"Иван"`.
     */
    readonly firstName?: string;

    /**
     * Фамилия, Имя, Отчество
     *
     * Пример: `"Андреев Иван Васильевич"`.
     */
    readonly fullName?: string;

    /**
     * Фамилия клиента
     *
     * Пример: `"Андреев"`.
     */
    readonly lastName?: string;

    /**
     * Отчество клиента
     *
     * Пример: `"Васильевич"`.
     */
    readonly middleName?: string;

    /**
     * Номер заказа
     *
     * Пример: `134567`.
     */
    readonly orderID?: number;

    /**
     * Телефон для связи с клиентом
     *
     * Пример: `"79871234567"`.
     */
    readonly phone?: string;

    /**
     * Не используется
     *
     * Пример: `"0"`.
     */
    readonly phoneCode?: string;
  }[];
};
