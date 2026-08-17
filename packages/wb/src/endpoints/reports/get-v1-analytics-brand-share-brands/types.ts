// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Бренды продавца».
 *
 * Метод возвращает список брендов продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
 *
 * Можно получить только бренды, которые:
 * - Продавались за последние 90 дней.
 * - Есть на складе WB.
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
 * GET /api/v1/analytics/brand-share/brands
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsBrandShareBrandsInput = undefined;
/**
 * Успешный ответ метода «Бренды продавца».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsBrandShareBrandsResponse = {
  /**
   * Список брендов
   *
   * Пример: `["1000 | Каталог","1000 Каталог","AndBerries","H&M","Mirtex","PlayToday","Test1","WOW","[\"Colambetta\"]","dubs","test","Бест Трикотаж","Тест"]`.
   */
  readonly data?: readonly string[];
};
