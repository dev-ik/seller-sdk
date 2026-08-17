// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Изменение списка карточек товаров в кампаниях».
 *
 * Метод добавляет и удаляет карточки товаров в кампаниях.
 *
 * Для кампаний в статусах `4`, `9` и `11`.
 *
 * Для добавляемых товаров устанавливается текущая минимальная ставка.
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
 * PATCH /adv/v0/auction/nms
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PatchV0AuctionNmsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Карточки товаров в кампаниях
     *
     * Максимальное количество элементов: 20.
     */
    readonly nms: readonly {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advert_id: number;

      /**
       * Карточки товаров. Максимум 50 товаров для одной кампании
       */
      readonly nms: {
        /**
         * Карточки товаров, которые необходимо добавить
         */
        readonly add?: readonly number[];

        /**
         * Карточки товаров, которые необходимо удалить
         */
        readonly delete?: readonly number[];
      };
    }[];
  };
};
/**
 * Успешный ответ метода «Изменение списка карточек товаров в кампаниях».
 *
 * 200: Успешно.
 */
export type PatchV0AuctionNmsResponse = {
  /**
   * Результат отработки запроса
   */
  readonly nms: readonly {
    /**
     * ID кампании
     *
     * Формат: `int64`.
     */
    readonly advert_id: number;

    /**
     * Карточки товаров
     */
    readonly nms: {
      /**
       * Добавленные карточки товаров
       */
      readonly added: readonly number[];

      /**
       * Удалённые карточки товаров
       */
      readonly deleted: readonly number[];
    };
  }[];
};
