// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Информация о покупателе».
 *
 * Метод возвращает информацию о покупателе по ID сборочного задания.
 *
 * Доступно только для сборочных заданий в статусах:
 *  - `confirm` — на сборке
 *  - `prepare` — готов к выдаче
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/click-collect/orders/client
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersClientInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Информация о покупателе».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersClientResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly orders?: readonly {
    /**
     * Телефон для связи с покупателем. Чтобы связаться с покупателем наберите
     * этот номер и введите добавочный код. Данный номер не является прямым
     * номером покупателя
     *
     * Пример: `"+7111111111"`.
     */
    readonly phone?: string;

    /**
     * Имя покупателя
     *
     * Пример: `"Ольга"`.
     */
    readonly firstName?: string;

    /**
     * ID сборочного задания
     *
     * Пример: `4564152`.
     */
    readonly orderID?: number;

    /**
     * Добавочный код
     *
     * Пример: `3535`.
     */
    readonly phoneCode?: number;
  }[];
};
