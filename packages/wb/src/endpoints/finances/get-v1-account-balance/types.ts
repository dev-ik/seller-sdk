// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить баланс продавца».
 *
 * Метод возвращает данные виджета баланса на [главной странице](https://seller.wildberries.ru) портала продавцов.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
 *
 * GET /api/v1/account/balance
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type GetV1AccountBalanceInput = undefined;
/**
 * Успешный ответ метода «Получить баланс продавца».
 *
 * 200: Успешно.
 */
export type GetV1AccountBalanceResponse = {
  /**
   * Валюта
   *
   * Пример: `"RUB"`.
   */
  readonly currency?: string;

  /**
   * Текущий баланс продавца
   *
   * Пример: `10196.21`.
   */
  readonly current?: number;

  /**
   * Сумма, доступная к выводу
   *
   * Пример: `6395.8`.
   */
  readonly for_withdraw?: number;
};
