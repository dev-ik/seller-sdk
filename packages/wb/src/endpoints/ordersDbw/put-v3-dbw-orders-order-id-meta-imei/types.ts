// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить IMEI за сборочным заданием».
 *
 * Метод обновляет IMEI в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
 *
 * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
 *
 * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `imei`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBW:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/dbw/orders/{orderId}/meta/imei
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PutV3DbwOrdersOrderIdMetaImeiInput = {
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
     * IMEI
     *
     * Пример: `"123456789012345"`.
     *
     * Минимальная длина: 15.
     *
     * Максимальная длина: 15.
     */
    readonly imei: string;
  };
};
/**
 * Успешный ответ метода «Закрепить IMEI за сборочным заданием».
 *
 * 204: Обновлено.
 */
export type PutV3DbwOrdersOrderIdMetaImeiResponse = undefined;
