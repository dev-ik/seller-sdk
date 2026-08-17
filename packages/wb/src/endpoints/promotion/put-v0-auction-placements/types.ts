// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Изменение мест размещения в кампаниях с ручной ставкой».
 *
 * Метод меняет места размещения в кампаниях с ручной ставкой и моделью оплаты за показы — `cpm`.
 *
 * Для кампаний в статусах `4`, `9` и `11`.
 *
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 1 запрос | 1 сек | 1 запрос |
 * | Сервисный | 1 сек | 1 запрос | 1 сек | 1 запрос |
 * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 1 запрос |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * PUT /adv/v0/auction/placements
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PutV0AuctionPlacementsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Места размещения в кампаниях
     *
     * Максимальное количество элементов: 50.
     */
    readonly placements: readonly {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advert_id: number;

      /**
       * Места размещения
       */
      readonly placements: {
        /**
         * Размещение в поиске:
         *  - `false` — отключено
         *  - `true` — включено
         */
        readonly search: boolean;

        /**
         * Размещение в рекомендациях:
         *  - `false` — отключено
         *  - `true` — включено
         */
        readonly recommendations: boolean;
      };
    }[];
  };
};
/**
 * Успешный ответ метода «Изменение мест размещения в кампаниях с ручной ставкой».
 *
 * 204: Успешно.
 */
export type PutV0AuctionPlacementsResponse = undefined;
