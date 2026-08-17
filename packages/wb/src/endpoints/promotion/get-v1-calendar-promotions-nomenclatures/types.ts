// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список товаров для участия в акции».
 *
 * Метод формирует список товаров, подходящих для участия в [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails). Эти товары можно добавить в акцию с помощью [отдельного метода](/openapi/promotion#tag/promoCalendar/operation/postV1CalendarPromotionsUpload).
 *
 *  Данный метод неприменим для автоакций.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 6 сек | 10 запросов | 600 мс | 5 запросов |
 *
 * GET /api/v1/calendar/promotions/nomenclatures
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1CalendarPromotionsNomenclaturesInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID акции
     *
     * Пример: `1`.
     */
    readonly promotionID: number;

    /**
     * Участвует в акции:
     *  - `true` — да
     *  - `false` — нет
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly inAction: boolean;

    /**
     * Количество запрашиваемых товаров
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
 * Успешный ответ метода «Список товаров для участия в акции».
 *
 * 200: Успешно.
 */
export type GetV1CalendarPromotionsNomenclaturesResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Список товаров
     */
    readonly nomenclatures?: readonly {
      /**
       * Артикул WB
       *
       * Пример: `162579635`.
       */
      readonly id?: number;

      /**
       * Участвует в акции:
       *  - `true` — да
       *  - `false` — нет
       *
       * Пример: `true`.
       */
      readonly inAction?: boolean;

      /**
       * Текущая розничная цена
       *
       * Формат: `float`.
       *
       * Пример: `1500`.
       */
      readonly price?: number;

      /**
       * Валюта в формате ISO 4217
       *
       * Пример: `"RUB"`.
       */
      readonly currencyCode?: string;

      /**
       * Плановая цена (цена во время акции)
       *
       * Формат: `float`.
       *
       * Пример: `1000`.
       */
      readonly planPrice?: number;

      /**
       * Текущая скидка
       *
       * Пример: `15`.
       */
      readonly discount?: number;

      /**
       * Рекомендуемая скидка для участия в акции
       *
       * Пример: `34`.
       */
      readonly planDiscount?: number;
    }[];
  };
};
