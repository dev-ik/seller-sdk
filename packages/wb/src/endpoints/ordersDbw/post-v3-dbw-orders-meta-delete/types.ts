// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить идентификаторы маркировки сборочных заданий».
 *
 * Метод удаляет значение указанных [идентификаторов маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) для переданного ключа.
 *
 * В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
 *  - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
 *  - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
 *  - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
 *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
 *
 * Можно передать только один ключ.
 *
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
 * POST /api/marketplace/v3/dbw/orders/meta/delete
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersMetaDeleteInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Название идентификатора маркировки для удаления. Передаётся только одно значение
     *
     * Пример: `"sgtin"`.
     */
    readonly key: "imei" | "uin" | "gtin" | "sgtin";

    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456789]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly ordersIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Удалить идентификаторы маркировки сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3DbwOrdersMetaDeleteResponse = {
  /**
   * Уникальный ID запроса. Отображается для ответов с ошибками
   */
  readonly requestId?: string;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results: readonly {
    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       */
      readonly detail: string;
    }[];

    /**
     * Есть ли ошибки
     */
    readonly isError: boolean;

    /**
     * ID сборочного задания с успешно обновлёнными данными
     */
    readonly orderId: number;
  }[];
};
