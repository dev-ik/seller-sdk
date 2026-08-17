// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить ID сборочных заданий поставки».
 *
 * Метод возвращает список ID сборочных заданий, закреплённых за поставкой.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/marketplace/v3/supplies/{supplyId}/order-ids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки
     */
    readonly supplyId: string;
  };
};
/**
 * Успешный ответ метода «Получить ID сборочных заданий поставки».
 *
 * 200: Успешно.
 */
export type GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse = {
  /**
   * ID сборочных заданий
   *
   * Пример: `[132334,203984,403543,598349]`.
   */
  readonly orderIds?: readonly number[];
};
