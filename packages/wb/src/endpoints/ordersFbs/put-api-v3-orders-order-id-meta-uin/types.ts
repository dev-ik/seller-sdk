// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить УИН за сборочным заданием».
 *
 * Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
 * У одного сборочного задания может быть только один УИН.
 *
 * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `uin`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/orders/{orderId}/meta/uin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiV3OrdersOrderIdMetaUinInput = {
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
export type PutApiV3OrdersOrderIdMetaUinResponse = undefined;
