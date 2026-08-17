// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удержания за занижение габаритов упаковки».
 *
 * Метод возвращает отчёт об [удержаниях за занижение габаритов упаковки](https://seller.wildberries.ru/analytics-reports/dimensions-penalties)
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
 * GET /api/analytics/v1/measurement-penalties
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1MeasurementPenaltiesInput = {
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
     * Количество удержаний в ответе
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
 * Успешный ответ метода «Удержания за занижение габаритов упаковки».
 *
 * 200: Успешно.
 */
export type GetV1MeasurementPenaltiesResponse = {
  /**
   * Данные ответа
   */
  readonly data: {
    /**
     * Удержания
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
       * Пример: `"Костюмы спортивные"`.
       */
      readonly subjectName?: string;

      /**
       * ID замера
       *
       * Пример: `123456789`.
       */
      readonly dimId?: number;

      /**
       * Разница в габаритах, %
       *
       * Пример: `130.71`.
       */
      readonly prcOver?: number;

      /**
       * Объём, л (фактические габариты по замеру на складе)
       *
       * Пример: `6.47`.
       */
      readonly volume?: number;

      /**
       * Ширина, см (фактические габариты по замеру на складе)
       *
       * Пример: `7`.
       */
      readonly width?: number;

      /**
       * Длина, см (фактические габариты по замеру на складе)
       *
       * Пример: `28`.
       */
      readonly length?: number;

      /**
       * Высота, см (фактические габариты по замеру на складе)
       *
       * Пример: `33`.
       */
      readonly height?: number;

      /**
       * Объём, л (габариты карточки товара)
       *
       * Пример: `4.95`.
       */
      readonly volumeSup?: number;

      /**
       * Ширина, см (габариты карточки товара)
       *
       * Пример: `8`.
       */
      readonly widthSup?: number;

      /**
       * Длина, см (габариты карточки товара)
       *
       * Пример: `33`.
       */
      readonly lengthSup?: number;

      /**
       * Высота, см (габариты карточки товара)
       *
       * Пример: `33`.
       */
      readonly heightSup?: number;

      /**
       * Фото замеров
       *
       * Пример: `["https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35154094220_em907759_n1_b2eaa5ed-bf21-4c58-b419-b5b5ec6f29ee.webp","https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35159094420_em907759_n2_040407b0-7752-4ae7-a4a4-7ec016e86511.webp","https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35189094220_em904757_n3_9f502e24-3b3e-4efd-9hac-802813046ac3.webp"]`.
       */
      readonly photoUrls?: readonly string[];

      /**
       * Дата штрафа
       *
       * Формат: `date-time`.
       *
       * Пример: `"2025-06-02T00:00:00Z"`.
       */
      readonly dtBonus?: string;

      /**
       * Статус обмера:
       *  - `false` — отменён
       *  - `true` — подтверждён
       *
       * Пример: `true`.
       */
      readonly isValid?: boolean;

      /**
       * Дата и время подтверждения или отмены обмера
       *
       * Формат: `date-time`.
       *
       * Пример: `"2025-05-29T13:35:57Z"`.
       */
      readonly isValidDt?: string;

      /**
       * Сумма сторно
       *
       * Пример: `0`.
       */
      readonly reversalAmount?: number;

      /**
       * Сумма штрафа
       *
       * Пример: `449.83`.
       */
      readonly penaltyAmount?: number;
    }[];

    /**
     * Количество удержаний в отчёте. Без учёта `limit` и `offset`
     *
     * Пример: `11`.
     */
    readonly total: number;
  };
};
