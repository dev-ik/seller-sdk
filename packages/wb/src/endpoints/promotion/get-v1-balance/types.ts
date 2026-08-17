// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Баланс».
 *
 * Метод возвращает информацию о:
 *  - счёте кабинета Продвижения WB. Его пополняет продавец.
 *  - балансе — максимальной сумме для оплаты кампании по взаиморасчету: удержании средств из будущих продаж. Баланс пополнить нельзя, он рассчитывается автоматически на основе отчётов по продвижению.
 *  - бонусных начислениях WB.
 *
 * Информацию о бюджете кампаний можно получить в [отдельном методе](/openapi/promotion#tag/finances/operation/getV1Budget).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /adv/v1/balance
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1BalanceInput = undefined;
/**
 * Успешный ответ метода «Баланс».
 *
 * 200: Успешно.
 */
export type GetV1BalanceResponse = {
  /**
   * Счёт в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly balance?: number;

  /**
   * Баланс в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly net?: number;

  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency?: string;

  /**
   * Бонусы в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly bonus?: number;

  /**
   * Промо-бонусы
   */
  readonly cashbacks?: readonly {
    /**
     * Промо-бонусы в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     */
    readonly sum?: number;

    /**
     * Процент от суммы пополнения бюджета кампании, который можно оплатить промо-бонусами за один раз
     */
    readonly percent?: number;

    /**
     * Дата окончания действия промо-бонусов
     *
     * Формат: `ISO 8601`.
     */
    readonly expiration_date?: string;
  }[];
};
