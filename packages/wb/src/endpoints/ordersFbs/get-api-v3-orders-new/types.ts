// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список новых сборочных заданий».
 *
 * Метод возвращает список всех новых [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get), которые есть у продавца на момент запроса.
 *
 * Наличие в сборочных заданиях идентификаторов маркировки, указанных в полях requiredMeta и optionalMeta, влияет только на возможность перевести поставку в доставку. Если ваш товар подлежит обязательной маркировке средствами
 * идентификации, необходимо указывать идентификаторы маркировки независимо от того, в каком поле они были получены (п. 4.6 Оферты).
 *
 * Рекомендуем добавлять в сборочные задания все идентификаторы маркировки, полученные в полях requiredMeta и optionalMeta
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/orders/new
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3OrdersNewInput = undefined;
/**
 * Успешный ответ метода «Получить список новых сборочных заданий».
 *
 * 200: Успешно.
 */
export type GetApiV3OrdersNewResponse = {
  /**
   * Список новых сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * Точный адрес покупателя для доставки, если применимо. Из-за особенностей адреса некоторые поля могут быть пустыми
     */
    readonly address?: {
      /**
       * Адрес доставки
       *
       * Пример: `"Челябинская область, г. Челябинск, 51-я улица Арабкира, д. 10А, кв. 42"`.
       */
      readonly fullAddress?: string;

      /**
       * Долгота
       *
       * Формат: `float64`.
       *
       * Пример: `44.519068`.
       */
      readonly longitude?: number;

      /**
       * Широта
       *
       * Формат: `float64`.
       *
       * Пример: `40.20192`.
       */
      readonly latitude?: number;
    } | null;

    /**
     * Планируемая дата доставки заказа покупателю.
     *
     * Поле отображается для сборочных заданий со сверхгабаритными товарами `СГТ`, `cargoType: 2`
     *
     * Пример: `"17.05.2024"`.
     */
    readonly ddate?: string;

    /**
     * Рекомендуемая дата доставки СГТ в сортировочный центр или на склад.
     *
     * Поле отображается для сборочных заданий со сверхгабаритными товарами `СГТ`, `cargoType: 2`
     *
     * Пример: `"02.06.2025"`.
     */
    readonly sellerDate?: string | null;

    /**
     * Цена продавца в валюте продажи с учётом скидки продавца, без учёта скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `504600`.
     */
    readonly salePrice?: number | null;

    /**
     * Список идентификаторов маркировки, которые [необходимо добавить](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs) в сборочное задание, чтобы поставку с этим сборочным заданием можно было перевести в доставку
     *
     * Пример: `["uin"]`.
     */
    readonly requiredMeta?: readonly string[] | null;

    /**
     * Список идентификаторов маркировки, которые [можно добавить](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs) в сборочное задание.
     *
     * Поставку со сборочным заданием без этих идентификаторов маркировки можно перевести в доставку, но они могут потребоваться, например, при возврате товара покупателем
     *
     * Пример: `["sgtin"]`.
     */
    readonly optionalMeta?: readonly string[] | null;

    /**
     * Тип доставки:
     * - `fbs` — доставка на склад Wildberries (FBS)
     */
    readonly deliveryType?: "fbs";

    /**
     * Комментарий покупателя
     *
     * Пример: `"Упакуйте в плёнку, пожалуйста"`.
     *
     * Максимальная длина: 300.
     */
    readonly comment?: string;

    /**
     * Цена приёмки в копейках. Отображается после фактической приёмки заказа. Для данного метода всегда будет возвращаться `null`. Предоставляется в информационных целях
     *
     * Формат: `uint32`.
     *
     * Пример: `null`.
     */
    readonly scanPrice?: number | null;

    /**
     * ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
     *
     * Пример: `"165918930_629fbc924b984618a44354475ca58675"`.
     */
    readonly orderUid?: string;

    /**
     * Артикул продавца
     *
     * Пример: `"one-ring-7548"`.
     */
    readonly article?: string;

    /**
     * Код цвета (только для колеруемых товаров)
     *
     * Пример: `"RAL 3017"`.
     */
    readonly colorCode?: string;

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
     *
     * Пример: `"f884001e44e511edb8780242ac120002"`.
     */
    readonly rid?: string;

    /**
     * Дата создания сборочного задания (RFC3339)
     *
     * Формат: `date-time`.
     *
     * Пример: `"2022-05-04T07:56:29Z"`.
     */
    readonly createdAt?: string;

    /**
     * Список офисов, куда следует привезти товар
     */
    readonly offices?: readonly string[] | null;

    /**
     * Список баркодов
     */
    readonly skus?: readonly string[];

    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `13833711`.
     */
    readonly id?: number;

    /**
     * ID склада продавца, на который поступило сборочное задание
     *
     * Пример: `658434`.
     */
    readonly warehouseId?: number;

    /**
     * ID склада WB, к которому привязан склад продавца
     *
     * Формат: `int64`.
     *
     * Пример: `123`.
     */
    readonly officeId?: number;

    /**
     * Артикул WB
     *
     * Пример: `123456789`.
     */
    readonly nmId?: number;

    /**
     * ID размера товара в системе WB
     *
     * Пример: `987654321`.
     */
    readonly chrtId?: number;

    /**
     * Цена в валюте продажи с учётом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи — в поле `currencyCode`. Предоставляется в информационных целях
     *
     * Пример: `1014`.
     */
    readonly price?: number;

    /**
     * Сумма к оплате покупателем в валюте продажи с учетом всех скидок, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
     *
     * Пример: `1014`.
     */
    readonly finalPrice?: number;

    /**
     * Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `28322`.
     */
    readonly convertedPrice?: number;

    /**
     * Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `1014`.
     */
    readonly convertedFinalPrice?: number;

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
     * Тип сборочного задания:
     *  - `0` — внутренняя поставка
     *  - `1` — трансграничная поставка
     *
     * Формат: `int32`.
     *
     * Пример: `1`.
     */
    readonly crossBorderType?: 0 | 1;

    /**
     * Признак заказа товара с нулевым остатком:
     *  - `false` — заказ сделан на товар с ненулевым остатком
     *  - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
     *
     * Пример: `false`.
     */
    readonly isZeroOrder?: boolean;

    /**
     * Можно ли отгрузить заказ на ПВЗ:
     *  - `false` — нет
     *  - `true` — да
     *
     * Пример: `true`.
     */
    readonly isPickupPointShipmentAllowed?: boolean;

    /**
     * Опции заказа
     */
    readonly options?: {
      /**
       * Признак B2B-продажи:
       *  - `false` — не B2B-продажа
       *  - `true` — B2B-продажа
       */
      readonly isB2B?: boolean;
    };
  }[];
};
