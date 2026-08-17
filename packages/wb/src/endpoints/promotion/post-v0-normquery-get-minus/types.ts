// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список минус-фраз кампаний».
 *
 * Метод возвращает список минус-фраз по:
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
 * POST /adv/v0/normquery/get-minus
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormqueryGetMinusInput = {
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
 * Успешный ответ метода «Список минус-фраз кампаний».
 *
 * 200: Успешно.
 */
export type PostV0NormqueryGetMinusResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly items?: readonly {
    /**
     * ID кампании
     */
    readonly advert_id?: number;

    /**
     * Артикул WB
     */
    readonly nm_id?: number;

    /**
     * Список минус-фраз
     */
    readonly norm_queries?: readonly string[];
  }[];
};
