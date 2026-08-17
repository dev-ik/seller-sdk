// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список отчётов об издержках на приём платежей».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод возвращает список отчётов об издержках на приём платежей по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 1 запрос |
 *
 * POST /api/finance/v1/acquiring/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type PostV1AcquiringListInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Начальная дата отчёта.
     * Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-17"`.
     */
    readonly dateFrom: string;

    /**
     * Конечная дата отчёта.
     * Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Время передаётся в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-20"`.
     */
    readonly dateTo: string;

    /**
     * Количество отчётов в ответе
     *
     * Пример: `211`.
     *
     * Значение по умолчанию: `1000`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Пример: `345`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Список отчётов об издержках на приём платежей».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type PostV1AcquiringListResponse =
  | readonly {
      /**
       * ID отчёта
       *
       * Формат: `int64`.
       *
       * Пример: `307401554`.
       */
      readonly reportId: number;

      /**
       * Наименование продавца
       *
       * Пример: `"ИП Кружинин В. Р."`.
       */
      readonly sellerFinanceName: string;

      /**
       * Дата начала отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-16"`.
       */
      readonly dateFrom: string;

      /**
       * Дата конца отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-22"`.
       */
      readonly dateTo: string;

      /**
       * Дата формирования отчёта
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-31"`.
       */
      readonly createDate: string;

      /**
       * Валюта отчёта
       *
       * Пример: `"RUB"`.
       */
      readonly currency: string;

      /**
       * Сумма издержек по эквайрингу
       *
       * Пример: `"258"`.
       */
      readonly acquiringFeeSum: string;

      /**
       * В том числе НДС
       *
       * Пример: `"83.79"`.
       */
      readonly acquiringFeeVatSum: string;
    }[]
  | undefined;
