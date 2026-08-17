// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Сообщить о получении заказов».
 *
 * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `deliver` в статус `receive` — получено покупателем.
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/status/receive
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersStatusReceiveInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * Код подтверждения.
       *  Отображается у покупателя на сайте и в приложении Wildberries
       *
       * Пример: `"741852"`.
       */
      readonly code?: string;

      /**
       * ID сборочного задания
       *
       * Пример: `123456`.
       */
      readonly orderId?: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Сообщить о получении заказов».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersStatusReceiveResponse = {
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
       * Код ошибки
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `SGTINIsNotFilled` — обязательный [код маркировки](./orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin) не указан
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
