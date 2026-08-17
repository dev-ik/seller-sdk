// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить за сборочным заданием срок годности товара».
 *
 * Метод закрепляет за [сборочным заданием](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) срок годности товара. Товар годен до указанной даты.
 *
 * Закрепить срок годности можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `expiration`.
 *
 * Получить загруженные данные можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
 *
 * Чтобы изменить срок годности, отправьте запрос с новой датой. Удалить срок годности сборочного задания невозможно.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/orders/{orderId}/meta/expiration
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiV3OrdersOrderIdMetaExpirationInput = {
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
     * Дата, до которой годен товар. Не менее 30 дней с текущей даты
     *
     * Формат: `date (dd.mm.yyyy)`.
     *
     * Пример: `"12.09.2030"`.
     */
    readonly expiration: string;
  };
};
/**
 * Успешный ответ метода «Закрепить за сборочным заданием срок годности товара».
 *
 * 204: Отправлено.
 */
export type PutApiV3OrdersOrderIdMetaExpirationResponse = undefined;
