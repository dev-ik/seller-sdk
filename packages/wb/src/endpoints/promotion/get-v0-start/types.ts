// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Запуск кампании».
 *
 * Метод запускает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах `4` — готово к запуску — или `11` — пауза.
 * Чтобы запустить кампанию, проверьте ее бюджет. Если бюджета недостаточно, [пополните его](/openapi/promotion#tag/finances/operation/postV1BudgetDeposit).
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
 * GET /adv/v0/start
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV0StartInput = {
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
 * Успешный ответ метода «Запуск кампании».
 *
 * 200: Успешно.
 */
export type GetV0StartResponse = undefined;
