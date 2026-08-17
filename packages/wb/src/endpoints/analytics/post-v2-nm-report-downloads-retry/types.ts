// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Сгенерировать отчёт повторно».
 *
 * Метод создает повторное [задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) отчёта с расширенной аналитикой продавца. Необходимо, если при генерации отчёта вы [получили статус](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) `FAILED`.
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
 * POST /api/v2/nm-report/downloads/retry
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2NmReportDownloadsRetryInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * ID отчёта
     *
     * Формат: `uuid`.
     *
     * Пример: `"06eea887-9d9f-491f-b16a-bb1766fcb8d2"`.
     */
    readonly downloadId?: string;
  };
};
/**
 * Успешный ответ метода «Сгенерировать отчёт повторно».
 *
 * 200: Успешно.
 */
export type PostV2NmReportDownloadsRetryResponse = {
  /**
   * Уведомление, что началась повторная генерация отчёта
   *
   * Пример: `"Retry"`.
   */
  readonly data: string;
};
