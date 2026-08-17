// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить GTIN за сборочным заданием».
 *
 * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
 * У одного сборочного задания может быть только один GTIN.
 *
 *  Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `gtin`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/orders/{orderId}/meta/gtin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiV3OrdersOrderIdMetaGtinInput = {
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
     * GTIN
     *
     * Пример: `"1234567890123"`.
     *
     * Минимальная длина: 13.
     *
     * Максимальная длина: 13.
     */
    readonly gtin: string;
  };
};
/**
 * Успешный ответ метода «Закрепить GTIN за сборочным заданием».
 *
 * 204: Обновлено.
 */
export type PutApiV3OrdersOrderIdMetaGtinResponse = undefined;
