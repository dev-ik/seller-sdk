// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Родительские категории бренда».
 *
 * Метод возвращает родительские категории бренда продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
 *
 * Можно получить отчёт максимум за 365 дней. Данные доступны с 1 ноября 2022.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 5 сек | 1 запрос | 5 сек | 20 запросов |
 * | Сервисный | 5 сек | 1 запрос | 5 сек | 20 запросов |
 * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 20 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/analytics/brand-share/parent-subjects
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsBrandShareParentSubjectsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Язык поля ответа `parentName`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Пример: `"ru"`.
     *
     * Значение по умолчанию: `"ru"`.
     */
    readonly locale?: string;

    /**
     * Бренд
     *
     * Пример: `"H%26M"`.
     */
    readonly brand: string;

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
 * Успешный ответ метода «Родительские категории бренда».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsBrandShareParentSubjectsResponse = {
  /**
   * Категории бренда
   */
  readonly data?: readonly {
    /**
     * ID родительской категории
     */
    readonly parentId?: number;

    /**
     * Название родительской категории
     */
    readonly parentName?: string;
  }[];
};
