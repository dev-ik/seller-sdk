// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список новых сборочных заданий».
 *
 * Метод возвращает список всех новых [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders), которые есть у продавца на момент запроса.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/click-collect/orders/new
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type GetV3ClickCollectOrdersNewInput = undefined;
/**
 * Успешный ответ метода «Получить список новых сборочных заданий».
 *
 * 200: Успешно.
 */
export type GetV3ClickCollectOrdersNewResponse = {
  /**
   * Список сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * Планируемая дата доставки
     */
    readonly ddate?: string;

    /**
     * Цена продавца в валюте продажи с учётом скидки продавца, без учёта скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `504600`.
     */
    readonly salePrice?: number | null;

    /**
     * Список идентификаторов маркировки, доступных для сборочного задания
     */
    readonly requiredMeta?: readonly string[] | null;

    /**
     * Артикул продавца
     */
    readonly article?: string;

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
     */
    readonly rid?: string;

    /**
     * Дата и время создания сборочного задания
     *
     * Формат: `date-time`.
     */
    readonly createdAt?: string;

    /**
     * Адрес магазина (склада продавца), на который поступило сборочное
     * задание
     */
    readonly warehouseAddress?: string;

    /**
     * Уникальный ID заказа покупателя
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
     * Массив баркодов товара
     */
    readonly skus?: readonly string[];

    /**
     * ID сборочного задания
     */
    readonly id?: number;

    /**
     * ID склада продавца, на который поступило сборочное
     * задание
     */
    readonly warehouseId?: number;

    /**
     * Артикул WB
     */
    readonly nmId?: number;

    /**
     * ID размера товара в системе WB
     */
    readonly chrtId?: number;

    /**
     * Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100.
     * Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
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
     * Тип товара:
     *  - `1` — малогабаритный товар (МГТ)
     *  - `2` — сверхгабаритный товар (СГТ)
     *  - `3` — крупногабаритный товар (КГТ+)
     */
    readonly cargoType?: 1 | 2 | 3;

    /**
     * Признак заказа товара с нулевым остатком:
     *  - `false` — заказ сделан на товар с ненулевым остатком
     *  - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
     */
    readonly isZeroOrder?: boolean;

    /**
     * Опции заказа
     */
    readonly options?: {
      /**
       * Признак B2B-продажи:
       *  - `false` — не B2B-продажа
       *  - `true` — B2B-продажа
       */
      readonly isB2b?: boolean;
    };
  }[];
};
