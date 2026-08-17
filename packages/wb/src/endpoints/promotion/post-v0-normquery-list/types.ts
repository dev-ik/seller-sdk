// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Списки активных и неактивных поисковых кластеров».
 *
 * Метод возвращает списки активных и неактивных поисковых кластеров, по которым было не меньше 100 показов.
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
 * POST /adv/v0/normquery/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormqueryListInput = {
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
       *
       * Формат: `int64`.
       */
      readonly advertId: number;

      /**
       * Артикул WB
       *
       * Формат: `int64`.
       */
      readonly nmId: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Списки активных и неактивных поисковых кластеров».
 *
 * 200: Успешно.
 */
export type PostV0NormqueryListResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly items:
    | readonly {
        /**
         * ID кампании
         *
         * Формат: `int64`.
         */
        readonly advertId?: number;

        /**
         * Артикул WB
         *
         * Формат: `int64`.
         */
        readonly nmId?: number;

        /** Описание отсутствует в OpenAPI WB. */
        readonly normQueries?: {
          /**
           * Активные поисковые кластеры
           */
          readonly active?: readonly string[] | null;

          /**
           * Неактивные поисковые кластеры
           */
          readonly excluded?: readonly string[] | null;

          /**
           * Архивные поисковые кластеры
           */
          readonly archived?: readonly string[] | null;
        };
      }[]
    | null;
};
