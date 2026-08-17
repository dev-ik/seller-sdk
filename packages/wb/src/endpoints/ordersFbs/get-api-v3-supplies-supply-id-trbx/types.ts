// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список грузомест поставки».
 *
 * Возвращает список грузомест поставки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/supplies/{supplyId}/trbx
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3SuppliesSupplyIdTrbxInput = {
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
 * Успешный ответ метода «Получить список грузомест поставки».
 *
 * 200: Успешно.
 */
export type GetApiV3SuppliesSupplyIdTrbxResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly trbxes?: readonly {
    /**
     * ID грузоместа
     *
     * Пример: `"WB-TRBX-1234567"`.
     */
    readonly id?: string;
  }[];
};
