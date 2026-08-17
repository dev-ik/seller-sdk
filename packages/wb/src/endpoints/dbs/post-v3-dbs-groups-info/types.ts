// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию о платной доставке».
 *
 * Метод возвращает информацию о платной доставке сборочных заданий, которые поступили на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`).
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/dbs/groups/info
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsGroupsInfoInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список значений `groupId`. Можно получить из [новых](./orders-dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew) и [завершенных](./orders-dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrders) сборочных заданий
     *
     * Максимальное количество элементов: 1000.
     */
    readonly groups?: readonly string[];
  };
};
/**
 * Успешный ответ метода «Получить информацию о платной доставке».
 *
 * 200: Успешно.
 */
export type PostV3DbsGroupsInfoResponse =
  | readonly {
      /**
       * ID группы сборочных заданий
       *
       * Формат: `UUID`.
       *
       * Пример: `"0596a30a-d11c-4210-a231-ee1c39d61fe4"`.
       */
      readonly groupID?: string;

      /**
       * Стоимость платной доставки в валюте продажи, умноженная на 100
       *
       * Пример: `1108`.
       */
      readonly deliveryCost?: number;

      /**
       * Стоимость платной доставки в валюте страны продавца, умноженная на 100. Предоставляется в информационных целях.
       *
       * Пример: `29803`.
       */
      readonly convertedDeliveryCost?: number;

      /**
       * Код валюты продажи
       *
       * Формат: `ISO 4217`.
       *
       * Пример: `933`.
       */
      readonly currencyCode?: number;

      /**
       * Код валюты страны продавца
       *
       * Пример: `643`.
       */
      readonly convertedCurrencyCode?: number;
    }[]
  | null;
