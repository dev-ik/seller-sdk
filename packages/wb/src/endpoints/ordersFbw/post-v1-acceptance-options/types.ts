// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Опции приёмки».
 *
 * Метод возвращает информацию о том, какие склады и типы упаковки доступны для поставки. Список складов определяется по баркоду и количеству товара.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /api/v1/acceptance/options
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type PostV1AcceptanceOptionsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * ID склада.
     *  Если параметр не указан, возвращаются данные по всем складам.
     *  **Максимум одно значение**
     *
     * Пример: `507`.
     */
    readonly warehouseID?: number;
  } /**
   * Тело запроса.
   *
   * Максимальное количество элементов: 5000.
   */;
  readonly body: readonly {
    /**
     * Суммарное количество товаров, планируемых для поставки.
     *  **Максимум 999999**
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 999999.
     */
    readonly quantity?: number;

    /**
     * Баркод из карточки товара
     */
    readonly barcode?: string;
  }[];
};
/**
 * Успешный ответ метода «Опции приёмки».
 *
 * 200: Успешно.
 */
export type PostV1AcceptanceOptionsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly result?: readonly {
    /**
     * Баркод из карточки товара
     */
    readonly barcode?: string;

    /**
     * Данные ошибки. При наличии
     */
    readonly error?: {
      /**
       * ID ошибки
       */
      readonly title?: string;

      /**
       * Описание ошибки
       */
      readonly detail?: string;
    };

    /**
     * Наличие ошибки:
     *  - `true` — ошибка есть
     *  - Поля нет — ошибка отсутствует
     */
    readonly isError?: boolean;

    /**
     * Список складов. При наличии ошибки будет `null`
     */
    readonly warehouses?:
      | readonly {
          /**
           * ID склада. По нему можно получить [информацию о складе](./orders-fbw#tag/informationForFormingSupplies/operation/getV1Warehouses)
           */
          readonly warehouseID?: number;

          /**
           * Тип упаковки **Короб**:
           *  - `true` — доступен
           *  - `false` — недоступен
           */
          readonly canBox?: boolean;

          /**
           * Тип упаковки **Монопаллета**:
           *  - `true` — доступен
           *  - `false` — недоступен
           */
          readonly canMonopallet?: boolean;

          /**
           * Тип упаковки **Суперсейф**:
           *  - `true` — доступен
           *  - `false` — недоступен
           */
          readonly canSupersafe?: boolean;

          /**
           * Тип поставки **Поштучная палета**:
           *  - `true` — доступен
           *  - `false` — недоступен
           */
          readonly isBoxOnPallet?: boolean;
        }[]
      | null;
  }[];

  /**
   * ID запроса при наличии ошибок
   */
  readonly requestId?: string;
};
