// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить идентификаторы маркировки сборочного задания».
 *
 * Метод удаляет значение [идентификаторов маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) для переданного ключа.
 *
 * Возможные идентификаторы маркировки:
 *  - `imei` — [IMEI](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1imei/put)
 *  - `uin` — [УИН](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1uin/put)
 *  - `gtin` — [GTIN](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1gtin/put)
 *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1sgtin/put)
 *  - `customsDeclaration` — [номер ДТ](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put)
 *
 * Можно передать только один ключ.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * DELETE /api/v3/orders/{orderId}/meta
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type DeleteApiV3OrdersOrderIdMetaInput = {
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
   * Параметры строки запроса.
   */;
  readonly query: {
    /**
     * Название идентификаторов маркировки для удаления. Передаётся только одно значение.
     */
    readonly key: "imei" | "uin" | "gtin" | "sgtin" | "customsDeclaration";
  };
};
/**
 * Успешный ответ метода «Удалить идентификаторы маркировки сборочного задания».
 *
 * 204: Удалено.
 */
export type DeleteApiV3OrdersOrderIdMetaResponse = undefined;
