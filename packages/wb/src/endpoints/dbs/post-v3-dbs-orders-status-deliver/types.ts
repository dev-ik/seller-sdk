// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Перевести сборочные задания в доставку».
 *
 * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` в статус `deliver` — в доставке.
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/status/deliver
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersStatusDeliverInput = {
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
 * Успешный ответ метода «Перевести сборочные задания в доставку».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersStatusDeliverResponse = {
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
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `MetaValidationFail` — ошибки валидации идентификатора маркировки
       *
       * Пример: `"MetaValidationFail"`.
       */
      readonly detail?: string;

      /**
       * Детали ошибки валидации идентификаторов маркировки
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
         * Пример: `"1234567890"`.
         */
        readonly value?: string;

        /**
         * Статус проверки:
         * - `sgtin`
         *  - `sgtinInvalidFormat` — Неверный формат маркировки
         *  - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
         *  - `sgtinEmitted` — Маркировка эмитирована
         *  - `sgtinApplied` — Не пройдена процедура Ввод в оборот
         *  - `sgtinWrittenOff` — Списан
         *  - `sgtinRetired` — Выбыл
         *  - `sgtinWithdrawn` — Выбыл
         *  - `sgtinDisaggregation` — Расформирован
         *  - `sgtinDisaggregated` — Расформирован
         *  - `sgtinAppliedNotPaid` — Не оплачен
         *  - `pending` — Маркировка на проверке
         *
         * Пример: `"sgtinEmitted"`.
         */
        readonly decision?: string;
      }[];
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
