// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию о сборочных заданиях».
 *
 * Метод возвращает информацию о сборочных заданиях, созданных не более 3 месяцев назад, без их актуального [статуса](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post).
 *
 * Чтобы получить данные за период, укажите в запросе даты начала и окончания периода. Максимум 30 календарных дней одним запросом.
 * В ответе метода будут сборочные задания, созданные в указанный период.
 *
 * Чтобы получить сборочные задания, созданные более 3 месяцев назад, используйте метод получения [списка архивных заказов](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1marketplace~1v3~1fbs~1orders~1archive/get).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/orders
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3OrdersInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Параметр пагинации. Устанавливает предельное количество возвращаемых данных.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 1000.
     */
    readonly limit: number;

    /**
     * Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
     *
     * Формат: `int64`.
     */
    readonly next: number;

    /**
     * Дата начала периода в формате Unix timestamp. По умолчанию — дата за 30 дней до запроса. Часовой пояс — UTC
     */
    readonly dateFrom?: number;

    /**
     * Дата конца периода в формате Unix timestamp. Часовой пояс — UTC
     */
    readonly dateTo?: number;
  };
};
/**
 * Успешный ответ метода «Получить информацию о сборочных заданиях».
 *
 * 200: Успешно.
 */
export type GetApiV3OrdersResponse = {
  /** Описание отсутствует в OpenAPI WB. */ readonly next?: number;

  /** Описание отсутствует в OpenAPI WB. */
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
     * Цена приёмки в копейках. Отображается после фактической приёмки заказа
     *
     * Формат: `uint32`.
     *
     * Пример: `1500`.
     */
    readonly scanPrice?: number | null;

    /**
     * Тип доставки:
     * - `fbs` — доставка на склад Wildberries (FBS)
     */
    readonly deliveryType?: "fbs";

    /**
     * ID поставки. Возвращается, если заказ закреплён за поставкой
     *
     * Пример: `"WB-GI-92937123"`.
     */
    readonly supplyId?: string;

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
     *  - [Отчет о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
     *  - [Детализации к отчётам реализации по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
     *  - [Детализации к отчётам реализации за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
     *  - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
     *  - [Детализации к отчётам об издержках на приём платежей за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
     *
     * Пример: `"f884001e44e511edb8780242ac120002"`.
     */
    readonly rid?: string;

    /**
     * Дата создания сборочного задания (RFC3339). Часовой пояс — UTC
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
     * Пример: `12345678`.
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
     * Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `28322`.
     */
    readonly convertedPrice?: number;

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
     * Комментарий покупателя
     *
     * Пример: `"Упакуйте в плёнку, пожалуйста"`.
     *
     * Максимальная длина: 300.
     */
    readonly comment?: string;

    /**
     * Признак заказа товара с нулевым остатком:
     *  - `false` — заказ сделан на товар с ненулевым остатком
     *  - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
     *
     * Пример: `false`.
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
      readonly isB2B?: boolean;
    };
  }[];
};
