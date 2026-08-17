// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт о [доле бренда продавца в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
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
 * GET /api/v1/analytics/brand-share
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsBrandShareInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID родительской категории
     *
     * Пример: `1`.
     */
    readonly parentId: number;

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
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsBrandShareResponse = {
  /**
   * Отчёт
   */
  readonly report?: readonly {
    /**
     * Дата
     *
     * Формат: `ГГГГ-ММ-ДД`.
     */
    readonly applyDate?: string;

    /**
     * Рейтинг бренда в родительской категории
     */
    readonly brandRating?: number;

    /**
     * Доля от продаж в родительской категории — цена, %
     *
     * Формат: `float`.
     */
    readonly pricePercent?: number;

    /**
     * Доля от продаж в родительской категории — количество, %
     *
     * Формат: `float`.
     */
    readonly qtyPercent?: number;
  }[];
};
