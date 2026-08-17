// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Подмены и неверные вложения».
 *
 * Метод возвращает отчёт об удержаниях за [подмены и неверные вложения](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/retentions)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /api/analytics/v1/deductions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1DeductionsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода. По умолчанию используются дата и время, когда были впервые получены данные для отчёта
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
     * Сортировка:
     * - `nmId` — по артикулу WB
     * - `dtBonus` — по дате и времени удержания
     * - `bonusSumm` — по сумме удержания
     *
     * Пример: `"nmId"`.
     *
     * Значение по умолчанию: `"dtBonus"`.
     */
    readonly sort?: "nmId" | "dtBonus" | "bonusSumm";

    /**
     * Порядок выдачи:
     * - `desc` — по убыванию
     * - `asc` — по возрастанию
     *
     * Пример: `"asc"`.
     *
     * Значение по умолчанию: `"desc"`.
     */
    readonly order?: "desc" | "asc";

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
 * Успешный ответ метода «Подмены и неверные вложения».
 *
 * 200: Успешно.
 */
export type GetV1DeductionsResponse = {
  /**
   * Данные ответа
   */
  readonly data: {
    /**
     * Удержания
     */
    readonly reports: readonly {
      /**
       * Дата и время удержания
       *
       * Формат: `date-time`.
       *
       * Пример: `"2025-06-02T00:00:00Z"`.
       */
      readonly dtBonus?: string;

      /**
       * Артикул WB
       *
       * Пример: `544454`.
       */
      readonly nmId?: number;

      /**
       * Старый штрихкод
       *
       * Пример: `26624352356`.
       */
      readonly oldShkId?: number;

      /**
       * Старый цвет
       *
       * Пример: `"темно-синий,голубой"`.
       */
      readonly oldColor?: string;

      /**
       * Старый размер
       *
       * Пример: `"A"`.
       */
      readonly oldSize?: string;

      /**
       * Старый баркод
       *
       * Пример: `"54532562"`.
       */
      readonly oldSku?: string;

      /**
       * Старый артикул продавца
       *
       * Пример: `"23535 Стемпинг 500"`.
       */
      readonly oldVendorCode?: string;

      /**
       * Новый штрихкод
       *
       * Пример: `123333223`.
       */
      readonly newShkId?: number;

      /**
       * Новый цвет
       *
       * Пример: `"темно-синий,голубой"`.
       */
      readonly newColor?: string;

      /**
       * Новый размер
       *
       * Пример: `"A"`.
       */
      readonly newSize?: string;

      /**
       * Новый баркод
       *
       * Пример: `"12323332223"`.
       */
      readonly newSku?: string;

      /**
       * Новый артикул продавца
       *
       * Пример: `"wh-service-podmena"`.
       */
      readonly newVendorCode?: string;

      /**
       * Сумма удержания
       *
       * Пример: `247.5`.
       */
      readonly bonusSumm?: number;

      /**
       * Причина удержания
       *
       * Пример: `"Подмена FBW"`.
       */
      readonly bonusType?: string;

      /**
       * Фото замеров
       *
       * Пример: `["https://static-basket-03.wb.ru/vol49/change_characteristics/19189882946-2023-12-15T10:18:21.125Z-1.webp","https://static-basket-03.wb.ru/vol49/change_characteristics/19189052946-2023-12-15T10:18:35.249Z-2.webp"]`.
       */
      readonly photoUrls?: readonly string[];
    }[];

    /**
     * Количество удержаний в отчёте. Без учёта `limit` и `offset`
     *
     * Пример: `11`.
     */
    readonly total: number;
  };
};
