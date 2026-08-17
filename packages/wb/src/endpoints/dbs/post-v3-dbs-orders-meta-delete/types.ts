// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить идентификаторы маркировки сборочных заданий».
 *
 * Метод удаляет значение указанных [идентификаторов маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
 *
 * В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
 *  - `imei` — [IMEI](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
 *  - `uin` — [УИН](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
 *  - `gtin` — [GTIN](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
 *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
 *  - `customsDeclaration` — [номер ДТ](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration). При удалении номера ДТ также удаляется код страны происхождения товара — `originCountryCode`
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 150 запросов | 400 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/meta/delete
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersMetaDeleteInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Название идентификатора маркировки для удаления. Передаётся только одно значение
     *
     * Пример: `"imei"`.
     */
    readonly key: "imei" | "uin" | "gtin" | "sgtin" | "customsDeclaration";

    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly orderIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Удалить идентификаторы маркировки сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersMetaDeleteResponse = {
  /**
   * Уникальный ID запроса
   *
   * Пример: `"f1787bd2d1fdс35d6f537316514у4a05"`.
   */
  readonly requestId?: string;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results?: readonly {
    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       *  - `400`
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       * - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       *
       * Пример: `"NotFound"`.
       */
      readonly detail?: string;
    }[];

    /**
     * Есть ли ошибки
     *
     * Пример: `true`.
     */
    readonly isError?: boolean;

    /**
     * ID сборочного задания с успешно обновлёнными данными
     *
     * Пример: `123456`.
     */
    readonly orderId?: number;
  }[];
};
