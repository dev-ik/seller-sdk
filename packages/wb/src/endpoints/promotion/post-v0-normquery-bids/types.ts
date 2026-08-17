// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить ставки для поисковых кластеров».
 *
 * Метод устанавливает ставки в рублях на поисковые кластеры.
 *
 * Можно использовать только для кампаний с:
 *  - ручной ставкой
 *  - моделью оплаты `cpm` — за показы
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
 * | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
 * | Базовый с секретом | 1 сек | 2 запроса | 500 мс | 4 запроса |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /adv/v0/normquery/bids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormqueryBidsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 100.
     */
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
       * Ставка за тысячу показов в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      readonly bid: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Установить ставки для поисковых кластеров».
 *
 * 200: Успешно.
 */
export type PostV0NormqueryBidsResponse = undefined;
