// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить поставку».
 *
 * Метод удаляет [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get), если она активна и за ней не закреплено ни одно [сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * DELETE /api/v3/supplies/{supplyId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type DeleteApiV3SuppliesSupplyIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки
     *
     * Пример: `"WB-GI-1234567"`.
     */
    readonly supplyId: string;
  };
};
/**
 * Успешный ответ метода «Удалить поставку».
 *
 * 204: Удалено.
 */
export type DeleteApiV3SuppliesSupplyIdResponse = undefined;
