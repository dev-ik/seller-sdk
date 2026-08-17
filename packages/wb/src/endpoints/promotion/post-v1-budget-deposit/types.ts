// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Пополнение бюджета кампании».
 *
 * Метод пополняет [бюджет](/openapi/promotion#tag/finances/operation/getV1Budget) кампании.
 *
 * Чтобы запустить кампанию после пополнения бюджета, используйте метод [Запуск кампании](/openapi/promotion#tag/campaignManagement/operation/getV0Start).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /adv/v1/budget/deposit
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1BudgetDepositInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID кампании
     *
     * Пример: `1234567`.
     */
    readonly id: number;
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /**
     * Общая сумма пополнения бюджета в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     *
     * Пример: `5000`.
     */
    readonly sum?: number;

    /**
     * Сумма пополнения бюджета промо-бонусами.
     *
     * Пополнить можно только определённый процент от общей суммы, указанный в поле `percent` ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance).
     *
     * Оставшаяся часть общей суммы спишется с указанного источника пополнения.
     * Пополнить можно только определённый процент от общей суммы, указанный в поле `percent` ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance).
     *
     * Оставшаяся часть общей суммы спишется с указанного источника пополнения.
     *
     * Списать промо-бонусы можно только для источников пополнения:
     *  - `0` — счёт
     *  - `1` — баланс
     *
     * Пример: `1000`.
     */
    readonly cashback_sum?: number;

    /**
     * Процент от суммы пополнения, который можно пополнить промо-бонусами. Нужно указать значение поля percent из ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance)
     *
     * Если вы указали `cashback_sum`, параметр `cashback_percent` становится обязательным
     *
     * Пример: `50`.
     */
    readonly cashback_percent?: number;

    /**
     * Тип источника пополнения:
     * - `0` — Счёт
     * - `1` — Баланс
     * - `3` — Бонусы
     *
     * Пример: `1`.
     */
    readonly type?: number;

    /**
     * Флаг возврата ответа (`true` — в ответе вернется обновлённый размер бюджета кампании, `false` или не указать параметр вообще — не вернётся.)
     */
    readonly return?: boolean;
  };
};
/**
 * Успешный ответ метода «Пополнение бюджета кампании».
 *
 * 200: Успешно.
 */
export type PostV1BudgetDepositResponse = {
  /**
   * Размер обновлённого бюджета
   */
  readonly total?: number;

  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency?: string;
};
