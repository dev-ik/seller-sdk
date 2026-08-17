// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию о завершённых сборочных заданиях».
 *
 * Метод возвращает информацию о завершённых сборочных заданиях после продажи или отмены заказа.
 *
 * Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/click-collect/orders
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type GetV3ClickCollectOrdersInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Количество элементов в ответе
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 1000.
     */
    readonly limit: number;

    /**
     * Параметр пагинации. Чтобы получить полный список данных, укажите `0` в первом запросе. Чтобы получить следующий пакет данных, используйте значение `next` из ответа
     */
    readonly next: number;

    /**
     * Дата начала периода в формате Unix timestamp
     */
    readonly dateFrom: number;

    /**
     * Дата конца периода в формате Unix timestamp
     */
    readonly dateTo: number;
  };
};
/**
 * Успешный ответ метода «Получить информацию о завершённых сборочных заданиях».
 *
 * 200: Успешно.
 */
export type GetV3ClickCollectOrdersResponse = {
  /**
   * Параметр пагинации. Содержит значение, которое необходимо указать в
   * запросе для получения следующего пакета данных
   *
   * Пример: `12345566`.
   */
  readonly next?: number;

  /**
   * Список сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * Артикул продавца
     *
     * Пример: `"wb6scpbwvp"`.
     */
    readonly article?: string;

    /**
     * Тип товара:
     *  - `1` — малогабаритный товар (МГТ)
     *  - `2` — сверхгабаритный товар (СГТ)
     *  - `3` — крупногабаритный товар (КГТ+)
     *
     * Пример: `1`.
     */
    readonly cargoType?: 1 | 2 | 3;

    /**
     * ID размера товара в системе WB
     *
     * Пример: `12345676`.
     */
    readonly chrtId?: number;

    /**
     * Дата и время создания сборочного задания
     *
     * Формат: `date-time`.
     *
     * Пример: `"2025-03-21T09:53:31Z"`.
     */
    readonly createdAt?: string;

    /**
     * Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100.
     * Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
     *
     * Пример: `5000`.
     */
    readonly price?: number;

    /**
     * Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
     *
     * Код валюты продажи указан в поле `currencyCode`.
     *
     * Предоставляется в информационных целях.
     *
     * Используйте значение поля `finalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа указанного метода
     *
     * Пример: `5000`.
     */
    readonly finalPrice?: number;

    /**
     * Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
     *
     * Пример: `5000`.
     */
    readonly convertedPrice?: number;

    /**
     * Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
     *
     * Предоставляется в информационных целях.
     *
     *  Используйте значение поля `convertedFinalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
     *
     * Пример: `5000`.
     */
    readonly convertedFinalPrice?: number;

    /**
     * Код валюты продажи
     *
     * Формат: `ISO 4217`.
     *
     * Пример: `643`.
     */
    readonly currencyCode?: number;

    /**
     * Код валюты страны продавца
     *
     * Формат: `ISO 4217`.
     *
     * Пример: `643`.
     */
    readonly convertedCurrencyCode?: number;

    /**
     * ID сборочного задания
     *
     * Пример: `123456789`.
     */
    readonly id?: number;

    /**
     * Признак заказа товара с нулевым остатком:
     *  - `false` — заказ сделан на товар с ненулевым остатком
     *  - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
     *
     * Пример: `false`.
     */
    readonly isZeroOrder?: boolean;

    /**
     * Артикул WB
     *
     * Пример: `1234567898765`.
     */
    readonly nmId?: number;

    /**
     * Уникальный ID заказа покупателя
     *
     * Пример: `"21117866-0006"`.
     */
    readonly orderCode?: string;

    /**
     * Режим оплаты:
     *  - `prepaid` — предоплатный
     *  - `postpaid` — постоплатный
     *  - `unknown` — неизвестный
     *
     * Пример: `"prepaid"`.
     */
    readonly payMode?: string;

    /**
     * Уникальный ID заказа.
     *
     * Примечание: `rid` — это `srid` в ответах методов:
     *  - [Заявки покупателей на возврат](./user-communication#tag/buyersReturns/operation/getV1Claims)
     *  - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
     *  - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
     *  - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
     *  - [Отчет о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
     *  - [Детализации к отчётам реализации по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
     *  - [Детализации к отчётам реализации за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
     *  - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
     *  - [Детализации к отчётам об издержках на приём платежей за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
     *
     * Пример: `"5044304527347733263.0.0"`.
     */
    readonly rid?: string;

    /**
     * Массив баркодов товара
     *
     * Пример: `["2043227963145"]`.
     */
    readonly skus?: readonly string[];

    /**
     * Адрес магазина (склада продавца), на который поступило сборочное задание
     *
     * Пример: `"Москва, район Якиманка, Софийская набережная, 4 с1"`.
     */
    readonly warehouseAddress?: string;

    /**
     * ID склада продавца, на который поступило сборочное задание
     *
     * Пример: `1162157`.
     */
    readonly warehouseId?: number;

    /**
     * Опции заказа
     */
    readonly options?: {
      /**
       * Признак B2B-продажи:
       *  - `false` — не B2B-продажа
       *  - `true` — B2B-продажа
       *
       * Пример: `false`.
       */
      readonly isB2b?: boolean;
    };
  }[];
};
