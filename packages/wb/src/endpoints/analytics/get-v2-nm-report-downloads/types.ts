// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список отчётов».
 *
 * Метод возвращает список отчётов с расширенной аналитикой продавца. Ответ содержит ID [созданных отчётов](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) и статусы генерации.
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
 * GET /api/v2/nm-report/downloads
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type GetV2NmReportDownloadsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * ID отчёта
     */
    readonly "filter[downloadIds]"?: readonly string[];
  };
};
/**
 * Успешный ответ метода «Получить список отчётов».
 *
 * 200: Успешно.
 */
export type GetV2NmReportDownloadsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: readonly {
    /**
     * ID отчёта
     *
     * Формат: `uuid`.
     *
     * Пример: `"06eae887-9d9f-491f-b16a-bb1766fcb8d2"`.
     */
    readonly id: string;

    /**
     * Дата и время завершения генерации
     *
     * Пример: `"2024-06-26 20:05:32"`.
     */
    readonly createdAt: string;

    /**
     * Статус отчёта:
     *
     * * `WAITING` — в очереди на обработку
     * * `PROCESSING` — генерируется
     * * `SUCCESS —` готов
     * * `RETRY` — ожидает повторной обработки
     * * `FAILED` — не получилось сгенерировать, сгенерируйте повторно
     *
     * Пример: `"SUCCESS"`.
     */
    readonly status: string;

    /**
     * Название отчёта
     *
     * Пример: `"Card report"`.
     */
    readonly name: string;

    /**
     * Размер отчёта, Б
     *
     * Пример: `123`.
     */
    readonly size: number;

    /**
     * Начало периода
     *
     * Формат: `date`.
     *
     * Пример: `"2024-06-21"`.
     */
    readonly startDate: string;

    /**
     * Конец периода
     *
     * Формат: `date`.
     *
     * Пример: `"2024-06-23"`.
     */
    readonly endDate: string;
  }[];
};
