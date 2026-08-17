// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить стикеры сборочных заданий».
 *
 * Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS) в [статусах](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` — на сборке и `complete` — в доставке.
 *
 * Если за сборочным заданием не закреплён обязательный [номер декларации на товары (ДТ)](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put), получить стикеры для этого сборочного задания невозможно.
 *
 * За один запрос можно получить максимум 100 стикеров.
 *
 * Можно получить стикер в форматах:
 *  - SVG
 *  - ZPLV (вертикальный)
 *  - ZPLH (горизонтальный)
 *  - PNG
 *
 * Доступны размеры:
 *  - 580x400 px при `width=58&height=40` в запросе
 *  - 400x300 px при `width=40&height=30` в запросе
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/orders/stickers
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3OrdersStickersInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Тип стикера
     */
    readonly type: "svg" | "zplv" | "zplh" | "png";

    /**
     * Ширина стикера
     */
    readonly width: 58 | 40;

    /**
     * Высота стикера
     */
    readonly height: 40 | 30;
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
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить стикеры сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostApiV3OrdersStickersResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly stickers?: readonly {
    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `5346346`.
     */
    readonly orderId?: number;

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

    /**
     * Полное представление стикера в заданном формате (кодировка base64)
     *
     * Формат: `byte`.
     *
     * Пример: `"iVBORw0KGgoAAAANSUhEUgAAASIAAAEiAQAAAAB1xeIbAAABiElEQVR4nO2YUW6DMAyGbUDaI0g9wI4Sjg5H2Q3IeyZPthNKV03tNiVdtf9/cFvXAvRhkh+z0G2t3R1FRKgqAokikCgCiSKQeDQJzho8yXMsmfmh1/UvqoKoNrsLdgN6S8hzXP2TV8Xc47KMyTPnx+DvX/1zVg1Xmch1z9ih6gv2HLZTuqIPXjX7ftSlPRLJ+prXnONLF9hXZL96q/fE4W1Q+O8XvQ/29djL/lvWiTg/Bt89Voeqn/j7OQ4eTLJY7tz8oEoVSFC28aN9JqKwqbX3kP+VBewrsg/KedE3qmXUn3IMYF/d3zONm38TiqckFKeyEaDv6/W96Nus9b2tPrbw2LOAvq/Pfpfn/Fb4HoA1p9UcU3SHJTLHExk+p8VeK3JwN0Q2UNPmR9+3m2OyDzPjoOFFML9vOMcUin0iHahR2CaGz/mkmo6P5zHtQdD3TeeY5NY++/sKZ+xQdUliNZszqePRkFd+tfvHqhtC1S/nmOQh7eH+Y3WoygKJIpAoAokikChqT+IDIkbb8/8OLskAAAAASUVORK5CYII="`.
     */
    readonly file?: string;
  }[];
};
