// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить номер ДТ за сборочным заданием».
 *
 * Метод обновляет номер ДТ — декларации на товары — в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post). У одного сборочного задания может быть только один номер ДТ.
 *
 * Закрепить номер ДТ можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `customsDeclaration`.
 *
 * Продавцам из Армении необходимо обязательно указывать номер декларации на товары (ДТ), произведённые вне ЕАЭС, если заказ из Армении доставляется в РФ.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput = {
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
     * Номер ДТ
     *
     * Пример: `"10704010/010624/0000302"`.
     *
     * Минимальная длина: 17.
     *
     * Максимальная длина: 29.
     */
    readonly customsDeclaration: string;
  };
};
/**
 * Успешный ответ метода «Закрепить номер ДТ за сборочным заданием».
 *
 * 204: Обновлено.
 */
export type PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse =
  undefined;
