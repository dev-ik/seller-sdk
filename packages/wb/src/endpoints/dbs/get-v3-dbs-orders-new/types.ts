// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Получить список новых сборочных заданий».
 *
 * Метод возвращает список всех новых [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders), которые есть у продавца на момент запроса.
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/dbs/orders/new
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type GetV3DbsOrdersNewInput = undefined;
/**
 * Успешный ответ метода «Получить список новых сборочных заданий».
 *
 * 200: Успешно.
 */
export type GetV3DbsOrdersNewResponse = {
  /**
   * Список новых сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * Цена в валюте продажи с учетом скидки продавца, без учета скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `504658`.
     */
    readonly salePrice?: number | null;

    /**
     * Список идентификаторов маркировки, доступных для сборочного задания. [Указывать IMEI](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei) обязательно для [предмета](./work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get) `Смартфоны`, `"subjectId":515`
     *
     * Пример: `["uin"]`.
     */
    readonly requiredMeta?: readonly string[] | null;

    /**
     * Комментарий покупателя
     *
     * Пример: `"Упакуйте в пленку, пожалуйста"`.
     *
     * Максимальная длина: 300.
     */
    readonly comment?: string;

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

    /**
     * Адрес покупателя для доставки. При доставке заказов в ПВЗ указан адрес ПВЗ
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
    };

    /**
     * ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUID`
     *
     * Пример: `"165918930_629fbc924b984618a44354475ca58675"`.
     */
    readonly orderUid?: string;

    /**
     * ID группы сборочных заданий.
     *  Объединяет сборочные задания, поступившие на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`)
     *
     * Формат: `UUID`.
     *
     * Пример: `"7a2c8810-1db2-4011-9682-5c7fa33afd83"`.
     */
    readonly groupId?: string;

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
    readonly rid?: WbJsonValue;

    /**
     * Дата создания сборочного задания
     *
     * Формат: `date-time`.
     *
     * Пример: `"2022-05-04T07:56:29Z"`.
     */
    readonly createdAt?: string;

    /**
     * Тип доставки:
     *  - `dbs` — доставка силами продавца
     *  - `dbsPickupPoint` — доставка силами продавца в ПВЗ
     *  - `edbs` — экспресс-доставка силами продавца
     */
    readonly deliveryType?: "dbs" | "edbs" | "dbsPickupPoint";

    /**
     * Массив баркодов товара
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
     * Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
     *
     * Пример: `1014`.
     */
    readonly price?: number;

    /**
     * Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
     *
     * Код валюты продажи указан в поле `currencyCode`.
     *
     * Предоставляется в информационных целях.
     *
     * Используйте значение поля `finalPrice`, только если в ответе метода [POST /api/marketplace/v3/dbs/orders/final-price](./docs/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа того же метода
     *
     * Пример: `1014`.
     */
    readonly finalPrice?: number;

    /**
     * Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
     *
     * Предоставляется в информационных целях.
     *
     * Используйте значение поля `convertedFinalPrice`, только если в ответе метода [POST /api/marketplace/v3/dbs/orders/final-price](./docs/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
     *
     * Пример: `1014`.
     */
    readonly convertedFinalPrice?: number;

    /**
     * Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
     *
     * Пример: `1014`.
     */
    readonly convertedPrice?: number;

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
     *
     * Пример: `false`.
     */
    readonly isZeroOrder?: boolean;

    /**
     * ID стикера. Отображается только для заказов в ПВЗ
     *
     * Пример: `123456`.
     */
    readonly wbStickerId?: number;
  }[];
};
