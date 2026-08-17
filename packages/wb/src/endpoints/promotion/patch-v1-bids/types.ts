// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Изменение ставок в кампаниях».
 *
 * Метод меняет ставки карточек товаров по артикулам WB в кампаниях:
 *  - с единой ставкой
 *  - с ручной ставкой
 *  - с моделью оплаты `cpc` — за клики
 *
 * Для кампаний в статусах `4`, `9` и `11`.
 *
 * В запросе укажите место размещения в параметре `placement`:
 *  - `combined` — в поиске и рекомендациях для кампаний с единой ставкой
 *  - `search `или `recommendations` — в поиске или рекомендациях для кампаний с ручной ставкой
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * PATCH /api/advert/v1/bids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PatchV1BidsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Ставки в кампаниях
     *
     * Максимальное количество элементов: 50.
     */
    readonly bids: readonly {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advert_id: number;

      /**
       * Ставки
       *
       * Максимальное количество элементов: 50.
       */
      readonly nm_bids: readonly {
        /**
         * Артикул WB
         *
         * Формат: `int64`.
         */
        readonly nm_id: number;

        /**
         * Ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
         *
         * Формат: `int64`.
         */
        readonly bid_kopecks: number;

        /**
         * Место размещения:
         *  - `search` — в поиске (для кампаний с ручной ставкой)
         *  - `recommendations`— в рекомендациях (для кампаний с ручной ставкой)
         *  - `combined` — в поиске и рекомендациях (для кампаний с единой ставкой)
         */
        readonly placement: "search" | "recommendations" | "combined";
      }[];
    }[];
  };
};
/**
 * Успешный ответ метода «Изменение ставок в кампаниях».
 *
 * 200: Успешно.
 */
export type PatchV1BidsResponse = {
  /**
   * Результат отработки запроса
   */
  readonly bids: readonly {
    /**
     * ID кампании
     *
     * Формат: `int64`.
     */
    readonly advert_id: number;

    /**
     * Ставки
     */
    readonly nm_bids: readonly {
      /**
       * Артикул WB
       *
       * Формат: `int64`.
       */
      readonly nm_id: number;

      /**
       * Ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       *
       * Формат: `int64`.
       */
      readonly bid_kopecks: number;

      /**
       * Место размещения:
       *  - `search` — в поиске
       *  - `recommendations`— в рекомендациях
       */
      readonly placement: string;
    }[];
  }[];

  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency: string;
};
