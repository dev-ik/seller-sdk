// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Завершение кампании».
 *
 * Метод завершает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах:
 *  - `9` — активна
 *  - `11` — пауза
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /adv/v0/stop
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV0StopInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID кампании
     *
     * Пример: `1234`.
     */
    readonly id: number;
  };
};
/**
 * Успешный ответ метода «Завершение кампании».
 *
 * 200: Успешно.
 */
export type GetV0StopResponse = undefined;
