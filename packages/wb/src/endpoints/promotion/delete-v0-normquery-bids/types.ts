// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить ставки поисковых кластеров».
 *
 * Метод удаляет ставки с поисковых кластеров.
 *
 * Можно использовать только для кампаний с:
 *  - ручной ставкой
 *  - моделью оплаты `cpm` — за показы
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
 * DELETE /adv/v0/normquery/bids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type DeleteV0NormqueryBidsInput = {
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
    }[];
  };
};
/**
 * Успешный ответ метода «Удалить ставки поисковых кластеров».
 *
 * 200: Успешно.
 */
export type DeleteV0NormqueryBidsResponse = undefined;
