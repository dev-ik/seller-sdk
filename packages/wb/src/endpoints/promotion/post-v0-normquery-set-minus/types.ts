// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установка и удаление минус-фраз».
 *
 * Метод устанавливает и удаляет минус-фразы в кампаниях c единой и ручной ставкой.
 *
 *  Отправка пустого массива удаляет все минус-фразы
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
 * POST /adv/v0/normquery/set-minus
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormquerySetMinusInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * ID кампании
     */
    readonly advert_id: number;

    /**
     * Артикул WB
     */
    readonly nm_id: number;

    /**
     * Максимальное количество элементов: 1000.
     */
    readonly norm_queries: readonly string[];
  };
};
/**
 * Успешный ответ метода «Установка и удаление минус-фраз».
 *
 * 200: Успешно.
 */
export type PostV0NormquerySetMinusResponse = undefined;
