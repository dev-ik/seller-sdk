// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Добавить грузоместа к поставке».
 *
 * Метод добавляет требуемое количество [грузомест](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1trbx/get) в [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get).
 *
 * Грузоместа необходимо добавлять только в поставки, отгружаемые на ПВЗ.
 *
 * Грузоместа можно добавить только в открытую поставку. Вы можете добавить столько же грузомест, сколько всего товаров в поставке, плюс ещё один.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/supplies/{supplyId}/trbx
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3SuppliesSupplyIdTrbxInput = {
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
     * Количество грузомест, которые необходимо добавить к поставке
     *
     * Пример: `4`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 1000.
     */
    readonly amount: number;
  };
};
/**
 * Успешный ответ метода «Добавить грузоместа к поставке».
 *
 * 201: Создано.
 */
export type PostApiV3SuppliesSupplyIdTrbxResponse = {
  /**
   * Список ID грузомест, которые были созданы
   *
   * Минимальное количество элементов: 1.
   */
  readonly trbxIds?: readonly string[];
};
