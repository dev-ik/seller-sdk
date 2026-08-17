// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить код маркировки Честного знака за сборочным заданием».
 *
 * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в идентификаторах маркировки [сборочного задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get).
 *
 * Закрепить код маркировки Честного знака можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `sgtin`.
 *
 * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/orders/{orderId}/meta/sgtin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiV3OrdersOrderIdMetaSgtinInput = {
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
     * Массив кодов маркировки [Честного знака](https://честныйзнак.рф/).
     *
     * Вы [можете передать](https://seller.wildberries.ru/instructions/ru/ru/material/kiz-common-errors#bfd5fce8-e0fd-4f15-9d8b-e616fac02c2e) коды маркировки:
     *  - полностью — с GS-разделителями и кодом проверки подлинности (криптохвостом)
     *  - в коротком формате — с GS-разделителями без кода проверки подлинности (криптохвоста)
     *
     *  GS-разделители необходимо передавать в кодировке Unicode с экранированием — `\u001D`
     *
     * Пример: `["0104630568317423215EirD_orEif7X\u001d91EE12\u001d92VygELprJ87wrc/qF/Vq/KEFUVpZm4vDPQt2kqUw308Y="]`.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 100.
     */
    readonly sgtins: readonly string[];
  };
};
/**
 * Успешный ответ метода «Закрепить код маркировки Честного знака за сборочным заданием».
 *
 * 204: Отправлено.
 */
export type PutApiV3OrdersOrderIdMetaSgtinResponse = undefined;
