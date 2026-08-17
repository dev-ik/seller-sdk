// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт об [операциях при приёмке](https://seller.wildberries.ru/analytics-reports/acceptance-report) по ID [задания на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReport).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/acceptance_report/tasks/{task_id}/download
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AcceptanceReportTasksTaskIdDownloadInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID задания на генерацию
     *
     * Пример: `"06e06887-9d9f-491f-b16a-bb1766fcb8d2"`.
     */
    readonly task_id: string;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type GetV1AcceptanceReportTasksTaskIdDownloadResponse =
  | readonly {
      /**
       * Количество товаров, шт.
       *
       * Пример: `40`.
       */
      readonly count?: number;

      /**
       * Дата создания поставки
       *
       * Формат: `date`.
       *
       * Пример: `"2025-03-04"`.
       */
      readonly giCreateDate?: string;

      /**
       * Номер поставки
       *
       * Пример: `11834106`.
       */
      readonly incomeId?: number;

      /**
       * Артикул WB
       *
       * Пример: `123456789`.
       */
      readonly nmID?: number;

      /**
       * Дата приёмки
       *
       * Формат: `date`.
       *
       * Пример: `"2025-03-14"`.
       */
      readonly shkCreateDate?: string;

      /**
       * Предмет
       *
       * Пример: `"Добавки пищевые"`.
       */
      readonly subjectName?: string;

      /**
       * Суммарная стоимость приёмки, ₽ с копейками
       *
       * Пример: `873.04`.
       */
      readonly total?: number;
    }[]
  | undefined;
