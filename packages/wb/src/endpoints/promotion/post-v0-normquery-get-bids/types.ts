// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список ставок поисковых кластеров».
 *
 * Метод возвращает список поисковых кластеров со ставками по:
 *  - ID кампаний
 *  - артикулам WB
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /adv/v0/normquery/get-bids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormqueryGetBidsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 100.
     */
    readonly items: readonly {
      /**
       * ID кампании
       */
      readonly advert_id: number;

      /**
       * Артикул WB
       */
      readonly nm_id: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Список ставок поисковых кластеров».
 *
 * 200: Успешно.
 */
export type PostV0NormqueryGetBidsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly bids: readonly {
    /**
     * ID кампании
     */
    readonly advert_id: number;

    /**
     * Артикул WB
     */
    readonly nm_id: number;

    /**
     * Поисковый кластер
     */
    readonly norm_query: string;

    /**
     * Текущая ставка в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) за тысячу показов
     */
    readonly bid: number;

    /**
     * Текущая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) за тысячу показов
     */
    readonly bid_kopecks: number;

    /**
     * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     *
     * Формат: `ISO 4217`.
     */
    readonly currency: string;
  }[];
};
