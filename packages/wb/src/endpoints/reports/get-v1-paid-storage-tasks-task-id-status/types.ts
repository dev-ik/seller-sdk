// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Проверить статус».
 *
 * Метод возвращает статус [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 5 сек | 1 запрос | 5 сек | 5 запросов |
 * | Сервисный | 5 сек | 1 запрос | 5 сек | 5 запросов |
 * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 2 запроса |
 *
 * GET /api/v1/paid_storage/tasks/{task_id}/status
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1PaidStorageTasksTaskIdStatusInput = {
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
 * Успешный ответ метода «Проверить статус».
 *
 * 200: Успешно.
 */
export type GetV1PaidStorageTasksTaskIdStatusResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID задания
     */
    readonly id?: string;

    /**
     * Статус задания:
     *  * `new` — новое
     *  * `processing` — обрабатывается
     *  * `done` — отчёт готов
     *  * `purged` — отчёт удалён
     *  * `canceled` — отклонено
     */
    readonly status?: string;
  };
};
