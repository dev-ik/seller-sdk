// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить стикеры сборочных заданий».
 *
 * Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew) в [статусах](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus):
 *  - `confirm` — на сборке
 *  - `complete` — в доставке
 *
 * За один запрос можно получить максимум 100 стикеров.
 *
 * Доступные форматы стикеров:
 *  - SVG
 *  - ZPLV (вертикальный)
 *  - ZPLH (горизонтальный)
 *  - PNG
 *
 * Доступны размеры:
 *  - 580x400 px при `width=58&height=40` в запросе
 *  - 400x300 px при `width=40&height=30` в запросе
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/dbw/orders/stickers
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersStickersInput = {
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
export type PostV3DbwOrdersStickersResponse = {
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
     * Пример: `"97523"`.
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
     * Пример: `"PD94bWwgdmVyc2lvbj0iMS4wIj8+CjwhLS0gR2VuZXJhdGVkIGJ5IFNWR28gLS0+Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzE4IiB5PSIyMCIgd2lkdGg9IjYiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzI2IiB5PSIyMCIgd2lkdGg9IjIiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzMwIiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMjAiIHk9IjIwMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI5MCIgc3R5bGU9ImZpbGw6YmxhY2siIC8+Cjx0ZXh0IHg9IjMwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOndoaXRlO2ZvbnQtc2l6ZTozMHB0O3RleHQtYW5jaG9yOnN0YXJ0IiA+MjMxNjQ4PC90ZXh0Pgo8dGV4dCB4PSIzNTAiIHk9IjI3MCIgc3R5bGU9ImZpbGw6d2hpdGU7Zm9udC1zaXplOjUwcHQ7dGV4dC1hbmNob3I6ZW5kIiA+OTc1MzwvdGV4dD4KPC9zdmc+Cg=="`.
     */
    readonly file?: string;
  }[];
};
