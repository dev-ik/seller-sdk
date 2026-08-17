// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Тарифы для монопаллет».
 *
 * Для товаров, которые поставляются на склад WB на монопаллетах, метод возвращает [стоимость](https://seller.wildberries.ru/dynamic-product-categories):
 *  - доставки со склада до покупателя
 *  - доставки от покупателя до склада
 *  - хранения на складе WB
 *
 *  Тарифы для монопаллет совпадают с тарифами для Поштучных паллет
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
 * | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/tariffs/pallet
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/rates
 */
export type GetV1TariffsPalletInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Дата в формате ГГГГ-ММ-ДД
     */
    readonly date: string;
  };
};
/**
 * Успешный ответ метода «Тарифы для монопаллет».
 *
 * 200: Успешно.
 */
export type GetV1TariffsPalletResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly response?: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data?: {
      /**
       * Валюта тарифов
       *
       * Пример: `"RUB"`.
       */
      readonly currency?: string;

      /**
       * Дата начала следующего тарифа
       *
       * Пример: `"2024-02-01"`.
       */
      readonly dtNextPallet?: string;

      /**
       * Дата окончания последнего установленного тарифа
       *
       * Пример: `"2024-03-31"`.
       */
      readonly dtTillMax?: string;

      /**
       * Тарифы для монопаллет, сгруппированные по складам
       */
      readonly warehouseList?:
        | readonly {
            /**
             * Коэффициент доставки, %. На него умножается стоимость доставки. Во всех тарифах этот коэффициент уже учтён
             *
             * Пример: `"170"`.
             */
            readonly palletDeliveryExpr?: string;

            /**
             * Доставка 1 литра, ₽
             *
             * Пример: `"51"`.
             */
            readonly palletDeliveryValueBase?: string;

            /**
             * Доставка каждого дополнительного литра, ₽
             *
             * Пример: `"11,9"`.
             */
            readonly palletDeliveryValueLiter?: string;

            /**
             * Коэффициент хранения, %. На него умножается стоимость хранения. Во всех тарифах этот коэффициент уже учтён
             *
             * Пример: `"155"`.
             */
            readonly palletStorageExpr?: string;

            /**
             * Хранение 1 монопаллеты, ₽
             *
             * Пример: `"35.65"`.
             */
            readonly palletStorageValueExpr?: string;

            /**
             * Название склада
             *
             * Пример: `"Коледино"`.
             */
            readonly warehouseName?: string;
          }[]
        | null;
    };
  };
};
