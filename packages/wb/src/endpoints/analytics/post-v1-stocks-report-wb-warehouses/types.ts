// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Остатки на складах WB».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену,
 *  Базовому токену с секретом
 *
 * Метод возвращает текущие остатки товаров на складах WB.
 *
 * Данные обновляются 1 раз в 30 минут.
 *
 * 1 строка ответа — данные об 1 размере товара на 1 складе WB.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 3 запроса | 20 сек | 1 запрос |
 *
 * POST /api/analytics/v1/stocks-report/wb-warehouses
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV1StocksReportWbWarehousesInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Артикулы WB
     *
     * Пример: `[111222333,47254354]`.
     *
     * Минимальное количество элементов: 0.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly nmIds?: readonly number[];

    /**
     * ID размеров. Используется только для указанных в массиве `nmIds` артикулов
     *
     * Пример: `[111222333,91663228]`.
     */
    readonly chrtIds?: readonly number[];

    /**
     * Количество строк в ответе
     *
     * Формат: `uint32`.
     *
     * Пример: `250000`.
     *
     * Значение по умолчанию: `250000`.
     *
     * Максимальное значение: 250000.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Формат: `uint32`.
     *
     * Пример: `500000`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Остатки на складах WB».
 *
 * 200: Успешно.
 */
export type PostV1StocksReportWbWarehousesResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /**
     * Остатки товаров на складах WB по размерам
     */
    readonly items: readonly {
      /**
       * Артикул WB
       *
       * Формат: `int64`.
       *
       * Пример: `47254354`.
       */
      readonly nmId: number;

      /**
       * ID размера
       *
       * Формат: `int64`.
       *
       * Пример: `91663228`.
       */
      readonly chrtId: number;

      /**
       * ID склада
       *
       * Формат: `int64`.
       *
       * Пример: `507`.
       */
      readonly warehouseId: number;

      /**
       * Название склада
       *
       * Пример: `"Коледино"`.
       */
      readonly warehouseName: string;

      /**
       * Регион отгрузки
       *
       * Пример: `"Центральный"`.
       */
      readonly regionName: string;

      /**
       * Количество товара на складе, доступное клиентам для добавления в корзину
       *
       * Формат: `uint64`.
       *
       * Пример: `43`.
       */
      readonly quantity: number;

      /**
       * В пути к клиенту
       *
       * Формат: `uint64`.
       *
       * Пример: `14`.
       */
      readonly inWayToClient: number;

      /**
       * В пути от клиента
       *
       * Формат: `uint64`.
       *
       * Пример: `11`.
       */
      readonly inWayFromClient: number;
    }[];
  };
};
