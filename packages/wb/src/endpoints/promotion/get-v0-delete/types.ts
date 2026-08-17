// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удаление кампании».
 *
 * Метод удаляет [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусе `4` — готова к запуску.
 *
 * После удаления кампания некоторое время будет находиться в статусе `-1` — кампания в процессе удаления. Полное удаление кампании занимает от 3 до 10 минут.
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
 * GET /adv/v0/delete
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV0DeleteInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID кампании
     */
    readonly id: number;
  };
};
/**
 * Успешный ответ метода «Удаление кампании».
 *
 * 200: Успешно.
 */
export type GetV0DeleteResponse = undefined;
