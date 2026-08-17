// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать отчёт».
 *
 * Метод создаёт [задание на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdStatus) отчёта об [операциях при приёмке](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdDownload).
 *
 * Можно получить отчёт максимум за 31 день.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
 *
 * GET /api/v1/acceptance_report
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AcceptanceReportInput = {
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
 * Успешный ответ метода «Создать отчёт».
 *
 * 200: Успешно.
 */
export type GetV1AcceptanceReportResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID задания на генерацию
     */
    readonly taskId?: string;
  };
};
