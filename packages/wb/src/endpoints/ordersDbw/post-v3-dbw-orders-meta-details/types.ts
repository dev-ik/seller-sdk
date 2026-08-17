// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить идентификаторы маркировки сборочных заданий».
 *
 * Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrders) и статусы их проверки.
 *
 * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
 *
 * Возможные идентификаторы маркировки:
 *  - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
 *  - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
 *  - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaGtin)
 *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbw/orders/meta/details
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersMetaDetailsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[1234678898]`.
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
export type PostV3DbwOrdersMetaDetailsResponse = {
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
       * Идентификатор маркировки
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
