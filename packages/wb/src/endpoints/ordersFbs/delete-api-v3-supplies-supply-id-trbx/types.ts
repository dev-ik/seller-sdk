// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить грузоместа из поставки».
 *
 * Метод удаляет грузоместа из поставки.
 *
 * Можно удалить только пока поставка на сборке.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * DELETE /api/v3/supplies/{supplyId}/trbx
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type DeleteApiV3SuppliesSupplyIdTrbxInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body?: {
    /**
     * Список ID грузомест, которые необходимо удалить
     */
    readonly trbxIds: readonly string[];
  };
};
/**
 * Успешный ответ метода «Удалить грузоместа из поставки».
 *
 * 204: Удалено.
 */
export type DeleteApiV3SuppliesSupplyIdTrbxResponse = undefined;
