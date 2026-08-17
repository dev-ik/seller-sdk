// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать отчёт».
 *
 * Метод создаёт [задание на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdStatus) отчёта об [остатках на складах WB](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdDownload).
 *
 * Параметры `groupBy` и `filter` (группировки и фильтры) можно задать в любой комбинации — аналогично [версии](https://seller.wildberries.ru/analytics-reports/warehouse-remains) в личном кабинете.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /api/v1/warehouse_remains
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1WarehouseRemainsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа `subjectName` и `warehouseName`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский. Значения `warehouseName` на английском
     *
     * Пример: `"ru"`.
     *
     * Значение по умолчанию: `"ru"`.
     */
    readonly locale?: string;

    /**
     * Разбивка по брендам
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupByBrand?: boolean;

    /**
     * Разбивка по предметам
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupBySubject?: boolean;

    /**
     * Разбивка по артикулам продавца
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupBySa?: boolean;

    /**
     * Разбивка по артикулам WB. Если `groupByNm=true`, в ответе будет поле `volume`
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupByNm?: boolean;

    /**
     * Разбивка по баркодам
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupByBarcode?: boolean;

    /**
     * Разбивка по размерам
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly groupBySize?: boolean;

    /**
     * Фильтр по фото:
     *  - `-1` — без фото
     *  - `0` — не применять фильтр
     *  - `1` — с фото
     *
     * Пример: `1`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly filterPics?: number;

    /**
     * Фильтр по объёму:
     *  - `-1` — без габаритов
     *  - `0` — не применять фильтр
     *  - `3` — свыше трёх литров
     *
     * Пример: `3`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly filterVolume?: number;
  };
};
/**
 * Успешный ответ метода «Создать отчёт».
 *
 * 200: Успешно.
 */
export type GetV1WarehouseRemainsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID задания на генерацию
     */
    readonly taskId?: string;
  };
};
