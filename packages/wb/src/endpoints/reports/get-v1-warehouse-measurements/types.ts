// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Замеры склада».
 *
 * Метод возвращает отчёт о [замерах склада](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/warehouse-measurements)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 6 ч | 1 запрос | 6 ч | 1 запрос |
 *
 * GET /api/analytics/v1/warehouse-measurements
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1WarehouseMeasurementsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода. По умолчанию используется дата, когда были впервые получены данные для отчёта
     *
     * Формат: `date-time`.
     *
     * Пример: `"2025-02-01T15:00:00Z"`.
     */
    readonly dateFrom?: string;

    /**
     * Конец отчётного периода
     *
     * Формат: `date-time`.
     *
     * Пример: `"2025-10-11T18:00:00Z"`.
     */
    readonly dateTo: string;

    /**
     * Количество замеров в ответе
     *
     * Пример: `330`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Пример: `220`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Замеры склада».
 *
 * 200: Успешно.
 */
export type GetV1WarehouseMeasurementsResponse = {
  /**
   * Данные ответа
   */
  readonly data: {
    /**
     * Замеры
     */
    readonly reports: readonly {
      /**
       * Артикул WB
       *
       * Пример: `123456789`.
       */
      readonly nmId?: number;

      /**
       * Предмет
       *
       * Пример: `""`.
       */
      readonly subjectName?: string;

      /**
       * ID замера
       *
       * Пример: `123456789`.
       */
      readonly dimId?: number;

      /**
       * Объём, л
       */
      readonly volume?: number;

      /**
       * Ширина, см
       *
       * Пример: `66`.
       */
      readonly width?: number;

      /**
       * Длина, см
       *
       * Пример: `54`.
       */
      readonly length?: number;

      /**
       * Высота, см
       *
       * Пример: `11`.
       */
      readonly height?: number;

      /**
       * Фото замеров
       *
       * Пример: `["https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_a9f839da-c3b7-4ed6-737c-a9e731250fb0.jpg","https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_2aac23b7-c8f9-42db-74e9-b4a9c916017c.jpg","https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_ff93b7c4-19d6-e0a2-4dba-7c2f09f06b3.jpg"]`.
       */
      readonly photoUrls?: readonly string[];

      /**
       * Дата и время
       *
       * Формат: `date-time`.
       *
       * Пример: `"2025-04-01T00:06:00Z"`.
       */
      readonly dt?: string;
    }[];

    /**
     * Количество замеров в отчёте. Без учёта `limit` и `offset`
     *
     * Пример: `11`.
     */
    readonly total: number;
  };
};
