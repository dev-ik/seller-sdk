// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список акций».
 *
 * Метод возвращает список [акций](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) в WB с датами и временем проведения.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/calendar/promotions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1CalendarPromotionsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало периода, формат `YYYY-MM-DDTHH:MM:SSZ`
     *
     * Формат: `date-time`.
     *
     * Пример: `"2023-09-01T00:00:00Z"`.
     */
    readonly startDateTime: string;

    /**
     * Конец периода, формат `YYYY-MM-DDTHH:MM:SSZ`
     *
     * Формат: `date-time`.
     *
     * Пример: `"2024-08-01T23:59:59Z"`.
     */
    readonly endDateTime: string;

    /**
     * Показать акции:
     *  - `false` — доступные для участия
     *  - `true` — все акции
     *
     * Значение по умолчанию: `false`.
     */
    readonly allPromo: boolean;

    /**
     * Количество запрашиваемых акций
     *
     * Формат: `uint`.
     *
     * Пример: `10`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * После какого элемента выдавать данные
     *
     * Формат: `uint`.
     *
     * Пример: `0`.
     *
     * Минимальное значение: 0.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Список акций».
 *
 * 200: Успешно.
 */
export type GetV1CalendarPromotionsResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Список акций
     */
    readonly promotions?: readonly {
      /**
       * ID акции
       *
       * Пример: `123`.
       */
      readonly id?: number;

      /**
       * Название акции
       *
       * Пример: `"скидки"`.
       */
      readonly name?: string;

      /**
       * Начало акции
       *
       * Формат: `date-time`.
       *
       * Пример: `"2023-06-05T21:00:00Z"`.
       */
      readonly startDateTime?: string;

      /**
       * Конец акции
       *
       * Формат: `date-time`.
       *
       * Пример: `"2023-06-05T21:00:00Z"`.
       */
      readonly endDateTime?: string;

      /**
       * Тип акции:
       *  - `regular` — акция
       *  - `auto` — автоакция
       */
      readonly type?: "regular" | "auto";
    }[];
  };
};
