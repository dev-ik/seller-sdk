// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт с [данными продаж, сгруппированных по регионам стран](https://seller.wildberries.ru/analytics-reports/region-sale).
 *
 * Можно получить отчёт максимум за 31 день.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/analytics/region-sale
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsRegionSaleInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Пример: `"2025-02-28"`.
     */
    readonly dateFrom: string;

    /**
     * Конец отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Пример: `"2025-03-21"`.
     */
    readonly dateTo: string;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsRegionSaleResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly report?: readonly {
    /**
     * Населённый пункт
     *
     * Пример: `"деревня Суханово"`.
     */
    readonly cityName?: string;

    /**
     * Страна
     *
     * Пример: `"Россия"`.
     */
    readonly countryName?: string;

    /**
     * Федеральный округ
     *
     * Пример: `"Центральный федеральный округ"`.
     */
    readonly foName?: string;

    /**
     * Артикул WB
     *
     * Пример: `177974431`.
     */
    readonly nmID?: number;

    /**
     * Регион
     *
     * Пример: `"Московская область"`.
     */
    readonly regionName?: string;

    /**
     * Артикул продавца
     *
     * Пример: `"112233445566778899"`.
     */
    readonly sa?: string;

    /**
     * К перечислению за товар, ₽
     *
     * Формат: `float`.
     *
     * Пример: `592.11`.
     */
    readonly saleInvoiceCostPrice?: number;

    /**
     * Доля, %
     *
     * Формат: `float`.
     *
     * Пример: `43.0547333297454`.
     */
    readonly saleInvoiceCostPricePerc?: number;

    /**
     * Выкупили, шт.
     *
     * Пример: `4`.
     */
    readonly saleItemInvoiceQty?: number;
  }[];
};
