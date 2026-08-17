// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить стикеры для сборочных заданий с доставкой в ПВЗ».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену,
 *  Базовому токену с секретом
 *
 * Метод возвращает стикеры для сборочных заданий с доставкой в ПВЗ в [статусах](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo):
 *  - `confirm` — на сборке
 *  - `deliver` — в доставке
 *
 * Получить стикеры можно только в размере 580x400 px в формате PDF.
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/stickers
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersStickersInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Формат стикера
     */
    readonly type: "pdf";

    /**
     * Ширина стикера
     */
    readonly width: 58;

    /**
     * Высота стикера
     */
    readonly height: 40;
  } /**
   * Тело запроса.
   */;
  readonly body?: {
    /**
     * Список ID сборочных заданий
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 100.
     */
    readonly orders: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить стикеры для сборочных заданий с доставкой в ПВЗ».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersStickersResponse = {
  /**
   * Стикеры
   */
  readonly stickers?: readonly {
    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `5346346`.
     */
    readonly orderId: number;

    /**
     * Первая часть ID стикера
     *
     * Пример: `"231648"`.
     */
    readonly partA: string;

    /**
     * Вторая часть ID стикера
     *
     * Пример: `"9753"`.
     */
    readonly partB: string;

    /**
     * Закодированное значение стикера
     *
     * Пример: `"!uKEtQZVx"`.
     */
    readonly barcode: string;

    /**
     * Полное представление стикера, кодировка base64
     *
     * Пример: `"JVBER...ZWYKMTM5MQolJUVPRg=="`.
     */
    readonly file: string;
  }[];
};
