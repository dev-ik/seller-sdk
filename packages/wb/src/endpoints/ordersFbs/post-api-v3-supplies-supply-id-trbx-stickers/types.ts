// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить стикеры грузомест поставки».
 *
 * Метод возвращает QR-стикеры в форматах:
 *  - SVG
 *  - ZPLV (вертикальный)
 *  - ZPLH (горизонтальный)
 *  - PNG
 *
 * Размер стикеров — 580x400 px.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/supplies/{supplyId}/trbx/stickers
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3SuppliesSupplyIdTrbxStickersInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки
     *
     * Пример: `"WB-GI-1234567"`.
     */
    readonly supplyId: string;
  } /**
   * Параметры строки запроса.
   */;
  readonly query: {
    /**
     * Тип стикера
     */
    readonly type: "svg" | "zplv" | "zplh" | "png";
  } /**
   * Тело запроса.
   */;
  readonly body?: {
    /**
     * Список ID грузомест, по которым необходимо вернуть стикеры
     */
    readonly trbxIds: readonly string[];
  };
};
/**
 * Успешный ответ метода «Получить стикеры грузомест поставки».
 *
 * 200: Успешно.
 */
export type PostApiV3SuppliesSupplyIdTrbxStickersResponse = {
  /**
   * Минимальное количество элементов: 1.
   */
  readonly stickers?: readonly {
    /**
     * Закодированное значение стикера
     *
     * Пример: `"$WBMP:1:123:1234567"`.
     *
     * Минимальная длина: 1.
     */
    readonly barcode?: string;

    /**
     * Полное представление стикера в заданном формате (кодировка base64)
     *
     * Формат: `byte`.
     *
     * Пример: `"U3dhZ2dlciByb2Nrcw=="`.
     *
     * Минимальная длина: 1.
     */
    readonly file?: string;
  }[];
};
