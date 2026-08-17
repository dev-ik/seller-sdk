// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Маркировка товара».
 *
 * Метод возвращает отчёт о штрафах за отсутствие обязательной маркировки товаров.
 *
 * В отчёте представлены фотографии товаров, на которых маркировка отсутствует либо не считывается.
 *
 * Можно получить данные максимум за 31 день. Данные доступны с марта 2024.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/analytics/goods-labeling
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsGoodsLabelingInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Формат: `date`.
     *
     * Пример: `"2024-04-01"`.
     */
    readonly dateFrom: string;

    /**
     * Конец отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Формат: `date`.
     *
     * Пример: `"2024-04-30"`.
     */
    readonly dateTo: string;
  };
};
/**
 * Успешный ответ метода «Маркировка товара».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsGoodsLabelingResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly report?: readonly {
    /**
     * Сумма штрафа, руб
     */
    readonly amount?: number;

    /**
     * Дата
     *
     * Формат: `date-time`.
     */
    readonly date?: string;

    /**
     * Номер поставки
     */
    readonly incomeId?: number;

    /**
     * Артикул WB
     */
    readonly nmID?: number;

    /**
     * URL фото товара
     */
    readonly photoUrls?: readonly string[];

    /**
     * Штрихкод товара в WB
     */
    readonly shkID?: number;

    /**
     * Баркод из карточки товара
     */
    readonly sku?: string;
  }[];
};
