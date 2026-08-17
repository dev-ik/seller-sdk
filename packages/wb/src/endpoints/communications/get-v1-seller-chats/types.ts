// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список чатов».
 *
 * Метод возвращает список всех чатов продавца. По этим данным можно получить [события чатов](/openapi/user-communication#tag/buyersChat/operation/getV1SellerEvents) или [отправить сообщение покупателю](/openapi/user-communication#tag/buyersChat/operation/postV1SellerMessage).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/seller/chats
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1SellerChatsInput = undefined;
/**
 * Успешный ответ метода «Список чатов».
 *
 * 200: Успешно.
 */
export type GetV1SellerChatsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly result?: readonly {
    /**
     * ID чата
     *
     * Пример: `"1:4019cd7d-cca8-4e90-8b11-f78afbea42e3"`.
     */
    readonly chatID?: string;

    /**
     * Подпись чата. Требуется при [отправке сообщения](./user-communication#tag/buyersChat/operation/postV1SellerMessage)
     *
     * Пример: `"1:4019cd7d-cca8-4e90-8b11-f78afbea42e3:54828159:bc3a4c04079f5956cff170b25e73523aa1208b5c0bd7aea1e520a64ae3e212b1ebae6712661f3afd27520fa785fa3042254e8a3100ce00644322054ae7cfcd0e"`.
     */
    readonly replySign?: string;

    /**
     * Имя покупателя
     *
     * Пример: `"Иван"`.
     */
    readonly clientName?: string;

    /** Описание отсутствует в OpenAPI WB. */
    readonly goodCard?: {
      /**
       * Артикул WB
       */
      readonly nmID?: number;

      /**
       * Фактическая цена с учетом всех скидок. Взимается с покупателя
       */
      readonly price?: number;

      /**
       * Валюта
       */
      readonly priceCurrency?: string;

      /**
       * Уникальный ID заказа.
       *
       * Примечание: `rid` — это `srid` в ответах методов:
       *  - [Заявки покупателей на возврат](./user-communication#tag/buyersReturns/operation/getV1Claims)
       *  - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
       *  - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
       *  - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
       *  - [Отчёт о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *  - [Детализации к отчётам реализации по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *  - [Детализации к отчётам реализации за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *  - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *  - [Детализации к отчётам об издержках на приём платежей за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       */
      readonly rid?: string;

      /**
       * Размер товара, соответствует `wbSize` в [карточке товара](./work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post)
       */
      readonly size?: string;
    };

    /**
     * Пример: `{"text":"Можно заказать 100 штук?","addTimestamp":1766138234889}`.
     */
    readonly lastMessage?: {
      /**
       * Текст сообщения
       */
      readonly text?: string;

      /**
       * Время сообщения
       */
      readonly addTimestamp?: number;
    };
  }[];

  /**
   * Ошибки, если есть
   *
   * Пример: `null`.
   */
  readonly errors?: readonly string[] | null;
};
