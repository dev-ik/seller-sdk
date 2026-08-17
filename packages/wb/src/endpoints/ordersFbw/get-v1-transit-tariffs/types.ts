// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Транзитные направления».
 *
 * Метод возвращает информацию о доступных транзитных направлениях.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 6 запросов | 10 сек | 10 запросов |
 * | Сервисный | 1 мин | 6 запросов | 10 сек | 10 запросов |
 * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 10 запросов |
 * | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
 *
 * GET /api/v1/transit-tariffs
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type GetV1TransitTariffsInput = undefined;
/**
 * Успешный ответ метода «Транзитные направления».
 *
 * 200: Успешно.
 */
export type GetV1TransitTariffsResponse = readonly {
  /**
   * Транзитный склад
   */
  readonly transitWarehouseName?: string;

  /**
   * Склад назначения
   */
  readonly destinationWarehouseName?: string;

  /**
   * С какого числа доступно транзитное направление
   *
   * Формат: `date-time`.
   */
  readonly activeFrom?: string;

  /**
   * Тариф за транзит коробов. Если `null`, транзит для коробов недоступен
   */
  readonly boxTariff?:
    | readonly {
        /**
         * Объём поставки от, литры
         */
        readonly from?: number;

        /**
         * Объём поставки до, литры
         */
        readonly to?: number;

        /**
         * Тариф, ₽ за литр
         */
        readonly value?: number;
      }[]
    | null;

  /**
   * Тариф за паллету, ₽
   */
  readonly palletTariff?: number;
}[];
