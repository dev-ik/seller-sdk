// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Бюджет кампании».
 *
 * Метод возвращает информацию о бюджете [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) — максимальной сумме затрат на кампанию. Бюджет кампании можно [пополнить](/openapi/promotion#tag/finances/operation/postV1BudgetDeposit).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 4 запроса | 250 мс | 4 запроса |
 * | Сервисный | 1 сек | 4 запроса | 250 мс | 4 запроса |
 * | Базовый с секретом | 1 сек | 4 запроса | 250 мс | 4 запроса |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /adv/v1/budget
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1BudgetInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID кампании
     *
     * Пример: `1`.
     */
    readonly id: number;
  };
};
/**
 * Успешный ответ метода «Бюджет кампании».
 *
 * 200: Успешно.
 */
export type GetV1BudgetResponse = {
  /**
   * Поле не используется. Значение всегда 0.
   */
  readonly cash?: number;

  /**
   * Поле не используется. Значение всегда 0.
   */
  readonly netting?: number;

  /**
   * Бюджет кампании в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly total?: number;

  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency?: string;
};
