// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить идентификаторы маркировки сборочных заданий».
 *
 * Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders) и статусы их проверки.
 *
 * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
 *
 * Возможные идентификаторы маркировки:
 *  - `imei` — [IMEI](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
 *  - `uin` — [УИН](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
 *  - `gtin` — [GTIN](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
 *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
 *  - `customsDeclaration` — [номер ДТ](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration)
 *  - `originCountryCode` — [числовой код страны происхождения товара](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/meta/details
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersMetaDetailsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly ordersIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить идентификаторы маркировки сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersMetaDetailsResponse = {
  /**
   * Уникальный ID запроса
   *
   * Пример: `"f1787bd2d1fdс35d6f537316514у4a05"`.
   */
  readonly requestId: string;

  /**
   * Идентификаторы маркировки сборочных заданий и статусы их валидации
   */
  readonly orders?: readonly {
    /**
     * ID сборочного задания
     *
     * Пример: `123456`.
     */
    readonly orderId?: number;

    /**
     * Есть ли ошибки
     *
     * Пример: `false`.
     */
    readonly isError: boolean;

    /**
     * Информация об ошибке
     *
     * Пример: `[]`.
     */
    readonly errors?: readonly {
      /**
       * Код ошибки
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * Дополнительная информация об ошибке
       *
       * Пример: `"NotFound"`.
       */
      readonly detail?: string;
    }[];

    /**
     * Идентификаторы маркировки и статусы их валидации
     */
    readonly metaDetails?: readonly {
      /**
       * Идентификатор маркировки:
       *  - `imei` — [IMEI](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
       *  - `uin` — [УИН](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
       *  - `gtin` — [GTIN](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
       *  - `sgtin` — [код маркировки](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
       *  - `customsDeclaration` — [номер ДТ](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration)
       *  - `originCountryCode` — [числовой код страны происхождения](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269) post)
       *
       * Пример: `"sgtin"`.
       */
      readonly key?: string;

      /**
       * Значение идентификатора маркировки
       *
       * Пример: `"123456789012345"`.
       */
      readonly value?: string | null;

      /**
       * Статус проверки:
       * - `imei`
       *  - `pending` — Маркировка на проверке
       *  - `optional` — Маркировка не обязательна
       *  - `filled` — Валидация пройдена
       *  - `deadlineExceeded` — Валидация пройдена
       *  - `imeiMaySell` — Товар допущен к продаже. Валидация пройдена
       *  - `imeiSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Валидация пройдена
       *  - `required` — Обязательная маркировка не заполнена. Валидация не пройдена
       *  - `imeiInvalidFormat` — Неверный формат маркировки. Валидация не пройдена
       *  - `imeiAlreadySold` — Товар с этим IMEI уже продан. Валидация не пройдена
       * - `uin`
       *  - `optional` — Маркировка не обязательна
       *  - `filled` — Валидация пройдена
       * - `sgtin`
       *  - `pending` — Маркировка на проверке
       *  - `optional` — Маркировка не обязательна
       *  - `filled` — Валидация пройдена
       *  - `deadlineExceeded` — Валидация пройдена
       *  - `sgtinIntroduced` — Товар допущен к продаже. Валидация пройдена
       *  - `sgtinSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Валидация пройдена
       *  - `required` — Обязательная маркировка не заполнена. Валидация не пройдена
       *  - `sgtinInvalidFormat` — Неверный формат маркировки. Валидация не пройдена
       *  - `sgtinNotFound` — Маркировка не найдена в [Честном Знаке](https://chestnyznak.ru). Валидация не пройдена
       *  - `sgtinEmitted` — Маркировка эмитирована. Валидация не пройдена
       *  - `sgtinApplied` — Не пройдена процедура Ввод в оборот. Валидация не пройдена
       *  - `sgtinWrittenOff` — Списан. Валидация не пройдена
       *  - `sgtinRetired` — Выбыл. Валидация не пройдена
       *  - `sgtinWithdrawn` — Выбыл. Валидация не пройдена
       *  - `sgtinDisaggregation` — Расформирован. Валидация не пройдена
       *  - `sgtinDisaggregated` — Расформирован. Валидация не пройдена
       *  - `sgtinAppliedNotPaid` — Не оплачен. Валидация не пройдена
       * - `gtin`
       *  - `optional` — Маркировка не обязательна
       *  - `filled` — Валидация пройдена
       * - `customsDeclaration`
       *  - `optional` — Маркировка не обязательна
       *  - `filled` — Валидация пройдена
       *
       * Пример: `"sgtinIntroduced"`.
       */
      readonly decision?: string;
    }[];
  }[];
};
