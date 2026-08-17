// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить IMEI за сборочными заданиями».
 *
 * Метод обновляет IMEI в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
 *
 * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
 *
 * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `imei`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 500 запросов | 120 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/meta/imei
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersMetaImeiInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * ID сборочного задания
       *
       * Пример: `123456`.
       */
      readonly orderId: number;

      /**
       * IMEI
       *
       * Пример: `"654321741987258"`.
       *
       * Минимальная длина: 15.
       *
       * Максимальная длина: 15.
       */
      readonly imei: string;
    }[];
  };
};
/**
 * Успешный ответ метода «Закрепить IMEI за сборочными заданиями».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersMetaImeiResponse = {
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
