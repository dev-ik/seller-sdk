// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить УИН за сборочным заданием».
 *
 * Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). У одного сборочного задания может быть только один УИН.
 *
 * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `uin`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBW:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/dbw/orders/{orderId}/meta/uin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PutV3DbwOrdersOrderIdMetaUinInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `5632423`.
     */
    readonly orderId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /**
     * УИН
     *
     * Пример: `"1234567890123456"`.
     *
     * Минимальная длина: 16.
     *
     * Максимальная длина: 16.
     */
    readonly uin: string;
  };
};
/**
 * Успешный ответ метода «Закрепить УИН за сборочным заданием».
 *
 * 204: Обновлено.
 */
export type PutV3DbwOrdersOrderIdMetaUinResponse = undefined;
