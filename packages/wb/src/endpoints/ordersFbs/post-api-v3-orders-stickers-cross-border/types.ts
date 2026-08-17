// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить стикеры сборочных заданий трансграничных поставок».
 *
 * Метод возвращает список стикеров [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) трансграничных поставок в формате PDF.
 *
 * Для каждого сборочного задания в ответе указывается статус генерации стикера:
 *  - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
 *  - `ready` — стикер готов
 *
 *  Стикер может генерироваться с задержкой. Повторяйте запрос, пока не получите статус ready.
 *
 * Ограничения:
 *  - За один запрос можно получить максимум 100 стикеров.
 *  - Можно получить стикеры только для сборочных заданий, находящихся на сборке или в доставке — [статусы](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm`, `complete`.
 *
 * В песочнице этот метод всегда возвращает ответ 200.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/orders/stickers/cross-border
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3OrdersStickersCrossBorderInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID сборочных заданий
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 100.
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить стикеры сборочных заданий трансграничных поставок».
 *
 * 200: Успешно.
 */
export type PostApiV3OrdersStickersCrossBorderResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly stickers?: readonly {
    /**
     * ID сборочного задания
     *
     * Пример: `3869227998`.
     */
    readonly orderId?: number;

    /**
     * Статус генерации стикера:
     *  - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
     *  - `ready` — стикер готов
     *
     * Пример: `"ready"`.
     */
    readonly status?: "awaitingTrackNumber" | "ready";

    /**
     * Трек-номер в стикере для отслеживания сборочного задания
     *
     * Пример: `"WB0000000001"`.
     */
    readonly parcelId?: string;

    /**
     * Стикер в формате PDF, кодировка base64
     *
     * Формат: `byte`.
     *
     * Пример: `"JVBERi0xLjQKJSBjcmVhdGVkIGJ5IFBpbGxvdyBQREYgZHJpdmVyCjQgMCBvYmo8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgNSAwIFIKPj5lbmRvYmoKNSAwIG9iajw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDIgMCBSIF0KPj5lbmRvYmoKMSAwIG9iajw8Ci9UeXBlIC9YT2JqZWN0Ci9TdWJ0eXBlIC9JbWFnZQovV2lkdGggMjkwCi9IZWlnaHQgMjkwCi9GaWx0ZXIgWyAvQ0NJVFRGYXhEZWNvZGUgXQovRGVjb2RlUGFybXMgWyA8PAovSyAtMQovQmxhY2tJczEgdHJ1ZQovQ29sdW1ucyAyOTAKL1Jvd3MgMjkwCj4+IF0KL0JpdHNQZXJDb21wb25lbnQgMQovQ29sb3JTcGFjZSAvRGV2aWNlR3JheQovTGVuZ3RoIDY2Ngo+PnN0cmVhbQomoLYaX////////////8g2b4gpHITff///////////8nBSkIB8nBS/////////////////////+QgHkNB/IQD////////////////////////////+P//////////////////////////IQ5CHIQ////////////////////////////////jkNB/H/////////////////////4yEOQh+P//////////////////EhoKR//////yDYchDkIchDyBg2E4aCcFL////////////////////////IgFIiAhODQTg0f/////////////////+ThCICEQGgnDQTg0E4NBODZ////////////////////////4k4NESEOJCCP/////////////////8gpHIQ5CCCEEENB8hDyBg2f//////////////////////////xEZKQhOEJwhOB5f//////////////yDZviDQIjkDBS///////////////ycFLEnCCThP//////////////////kIB5CHkQEEnCEQEJwbP///////////////////////////4ycGgnBoIgFL/////////////////////+QhxIQ4kIcg0H////////////////////////8cSEOJCHEhAP//////////////////jIQDIQ+Qh5OE////////////////////////4iIiI/////////////wAQAQJAAABAwABAAAAIgEAAAEBAwABAAAAIgEAAAIBAwABAAAAAQAAAAMBAwABAAAABAAAAAYBAwABAAAAAQAAABEBBAABAAAACAAAABYBAwABAAAAIgEAABcBBAABAAAAKAIAABwBAwABAAAAAQAAAAAAAAAKZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqPDwKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbIC9QREYgL0ltYWdlQiBdCi9YT2JqZWN0IDw8Ci9pbWFnZSAxIDAgUgo+Pgo+PgovTWVkaWFCb3ggWyAwIDAgMjkwLjAgMjkwLjAgXQovQ29udGVudHMgMyAwIFIKL1R5cGUgL1BhZ2UKL1BhcmVudCA1IDAgUgo+PmVuZG9iagozIDAgb2JqPDwKL0xlbmd0aCA0Nwo+PnN0cmVhbQpxIDI5MC4wMDAwMDAgMCAwIDI5MC4wMDAwMDAgMCAwIGNtIC9pbWFnZSBEbyBRCgplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmo8PAovQ3JlYXRpb25EYXRlIChEOjIwMjUxMTA3MTMzNTE1WikKL01vZERhdGUgKEQ6MjAyNTExMDcxMzM1MTVaKQo+PmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM2IGYgCjAwMDAwMDAxNDQgMDAwMDAgbiAKMDAwMDAwMTA1MiAwMDAwMCBuIAowMDAwMDAxMjE0IDAwMDAwIG4gCjAwMDAwMDAwNDAgMDAwMDAgbiAKMDAwMDAwMDA4NyAwMDAwMCBuIAowMDAwMDAxMzA5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1Jvb3QgNCAwIFIKL1NpemUgNwovSW5mbyA2IDAgUgo+PgpzdGFydHhyZWYKMTM5MQolJUVPRg=="`.
     */
    readonly file?: string;

    /**
     * Первая часть ID стикера для печати подписи
     *
     * Пример: `"231648"`.
     */
    readonly partA?: string;

    /**
     * Вторая часть ID стикера для печати подписи
     *
     * Пример: `"9753"`.
     */
    readonly partB?: string;

    /**
     * Закодированное значение стикера
     *
     * Пример: `"!uKEtQZVx"`.
     */
    readonly barcode?: string;
  }[];
};
