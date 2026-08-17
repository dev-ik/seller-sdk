// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Конфигурационные значения продвижения».
 *
 * Метод возвращает валюту, код валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) и допустимые шаги ставок для метода [POST /api/advert/v1/normquery/bids](/openapi/promotion#tag/searchClusters/operation/postV1NormqueryBids)
 *
 *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 10 запросов |
 *
 * GET /api/advert/v1/config
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1ConfigInput = undefined;
/**
 * Успешный ответ метода «Конфигурационные значения продвижения».
 *
 * 200: Успешно.
 */
export type GetV1ConfigResponse = {
  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency: string;

  /**
   * Код валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly currencyCode: number;

  /**
   * Шаг ставки в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) для CPM-кампаний
   *
   * Формат: `int64`.
   */
  readonly cpmStep: number;

  /**
   * Шаг ставки в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) для кампаний CPC
   *
   * Формат: `int64`.
   */
  readonly cpcStep: number;

  /**
   * Минимальная сумма пополнения бюджета кампании в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
   *  Например, минимальная сумма пополнения бюджета при `"minTopUp": 10000` и `"currency": "UZS"` — 100 узбекских сум
   *
   * Формат: `int64`.
   */
  readonly minTopUp: number;
};
