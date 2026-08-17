// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Тарифы для коробов».
 *
 * Для остатков товаров, которые поставляются на склад в коробах, метод возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories) на:
 *  - доставку со склада или пункта приёма до покупателя
 *  - доставку от покупателя до пункта приёма
 *  - хранение на складе WB
 *
 *  Тарифы для коробов совпадают с тарифами для Суперсейфа
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
 * GET /api/v1/tariffs/box
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/rates
 */
export type GetV1TariffsBoxInput = {
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
 * Успешный ответ метода «Тарифы для коробов».
 *
 * 200: Успешно.
 */
export type GetV1TariffsBoxResponse = {
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
      readonly dtNextBox?: string;

      /**
       * Дата окончания последнего установленного тарифа
       *
       * Пример: `"2024-03-31"`.
       */
      readonly dtTillMax?: string;

      /**
       * Тарифы для коробов, сгруппированные по складам
       */
      readonly warehouseList?:
        | readonly {
            /**
             * Логистика, первый литр, ₽
             *
             * Пример: `"48"`.
             */
            readonly boxDeliveryBase?: string;

            /**
             * Коэффициент **Логистика**, %. На него умножается стоимость логистики. Уже учтён в тарифах
             *
             * Пример: `"160"`.
             */
            readonly boxDeliveryCoefExpr?: string;

            /**
             * Логистика, дополнительный литр, ₽
             *
             * Пример: `"11,2"`.
             */
            readonly boxDeliveryLiter?: string;

            /**
             * Логистика FBS, первый литр, ₽
             *
             * Пример: `"40"`.
             */
            readonly boxDeliveryMarketplaceBase?: string;

            /**
             * Коэффициент **FBS**, %. На него умножается стоимость логистики FBS. Уже учтён в тарифах
             *
             * Пример: `"125"`.
             */
            readonly boxDeliveryMarketplaceCoefExpr?: string;

            /**
             * Логистика FBS, дополнительный литр, ₽
             *
             * Пример: `"11"`.
             */
            readonly boxDeliveryMarketplaceLiter?: string;

            /**
             * Хранение в день, первый литр, ₽
             *
             * Пример: `"0,14"`.
             */
            readonly boxStorageBase?: string;

            /**
             * Коэффициент **Хранение**, %. На него умножается стоимость хранения в день. Уже учтён в тарифах
             *
             * Пример: `"115"`.
             */
            readonly boxStorageCoefExpr?: string;

            /**
             * Хранение в день, дополнительный литр, ₽
             *
             * Пример: `"0,07"`.
             */
            readonly boxStorageLiter?: string;

            /**
             * Страна, для РФ — округ
             *
             * Пример: `"Центральный федеральный округ"`.
             */
            readonly geoName?: string;

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
