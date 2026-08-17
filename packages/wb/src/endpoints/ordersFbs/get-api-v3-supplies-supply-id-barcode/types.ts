// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить QR-код поставки».
 *
 * Метод возвращает QR-код [поставки](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get) в форматах:
 *  - SVG
 *  - ZPLV (вертикальный)
 *  - ZPLH (горизонтальный)
 *  - PNG
 *
 * QR-код поставки можно получить, только если поставка [передана в доставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1deliver/patch).
 *
 * Размер — 580x400 px.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/supplies/{supplyId}/barcode
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3SuppliesSupplyIdBarcodeInput = {
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
  };
};
/**
 * Успешный ответ метода «Получить QR-код поставки».
 *
 * 200: Успешно.
 */
export type GetApiV3SuppliesSupplyIdBarcodeResponse = {
  /**
   * Закодированное значение стикера (ID поставки)
   *
   * Пример: `"WB-GI-12345678"`.
   */
  readonly barcode?: string;

  /**
   * Полное представление стикера в заданном формате (кодировка base64)
   *
   * Формат: `byte`.
   *
   * Пример: `"U3dhZ2dlciByb2Nrcw=="`.
   */
  readonly file?: string;
};
