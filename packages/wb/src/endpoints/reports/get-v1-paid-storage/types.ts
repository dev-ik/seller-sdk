// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать отчёт».
 *
 * Метод создаёт [задание на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdStatus) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).
 *
 * Можно получить отчёт максимум за 8 дней.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/paid_storage
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1PaidStorageInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
     *
     *  * `2019-06-20`
     *  * `2019-06-20T23:59:59`
     *  * `2019-06-20T00:00:00.12345`
     *  * `2017-03-25T00:00:00`
     *
     * Пример: `"2022-01-01"`.
     */
    readonly dateFrom: string;

    /**
     * Конец отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
     *
     *  * `2019-06-20`
     *  * `2019-06-20T23:59:59`
     *  * `2019-06-20T00:00:00.12345`
     *  * `2017-03-25T00:00:00`
     *
     * Пример: `"2022-01-09"`.
     */
    readonly dateTo: string;
  };
};
/**
 * Успешный ответ метода «Создать отчёт».
 *
 * 200: Успешно.
 */
export type GetV1PaidStorageResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID задания на генерацию
     */
    readonly taskId?: string;
  };
};
