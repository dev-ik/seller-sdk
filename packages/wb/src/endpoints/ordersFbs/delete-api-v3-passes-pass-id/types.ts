// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить пропуск».
 *
 * Метод удаляет пропуск продавца [из списка](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * DELETE /api/v3/passes/{passId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type DeleteApiV3PassesPassIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID пропуска
     *
     * Формат: `int64`.
     *
     * Пример: `45`.
     */
    readonly passId: number;
  };
};
/**
 * Успешный ответ метода «Удалить пропуск».
 *
 * 204: Удалено.
 */
export type DeleteApiV3PassesPassIdResponse = undefined;
