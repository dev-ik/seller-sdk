// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт с расширенной аналитикой продавца по ID [задания на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads).
 *
 * Можно получить отчёт, который сгенерирован за последние 48 часов.
 * Отчёт будет загружен внутри архива ZIP в формате CSV.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v2/nm-report/downloads/file/{downloadId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type GetV2NmReportDownloadsFileDownloadIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID отчёта
     *
     * Формат: `uuid`.
     */
    readonly downloadId: string;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type GetV2NmReportDownloadsFileDownloadIdResponse = ArrayBuffer;
