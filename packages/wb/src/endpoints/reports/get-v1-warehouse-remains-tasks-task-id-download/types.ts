// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт об [остатках на складах WB](https://seller.wildberries.ru/analytics-reports/warehouse-remains) по ID [задания на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemains).
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
 * GET /api/v1/warehouse_remains/tasks/{task_id}/download
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1WarehouseRemainsTasksTaskIdDownloadInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID задания на генерацию
     *
     * Пример: `"06e06887-9d9f-491f-b16a-bb1766fcb8d2"`.
     */
    readonly task_id: string;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type GetV1WarehouseRemainsTasksTaskIdDownloadResponse =
  | readonly {
      /**
       * Бренд
       *
       * Пример: `"Wonderful"`.
       */
      readonly brand?: string;

      /**
       * Название предмета
       *
       * Пример: `"Фотоальбомы"`.
       */
      readonly subjectName?: string;

      /**
       * Артикул продавца
       *
       * Пример: `"41058/прозрачный"`.
       */
      readonly vendorCode?: string;

      /**
       * Артикул WB
       *
       * Пример: `183804172`.
       */
      readonly nmId?: number;

      /**
       * Баркод
       *
       * Пример: `"2037031652319"`.
       */
      readonly barcode?: string;

      /**
       * Размер
       *
       * Пример: `"0"`.
       */
      readonly techSize?: string;

      /**
       * Объём, л
       *
       * Пример: `1.33`.
       */
      readonly volume?: number;

      /**
       * Остатки на складах и товары в пути. Будут в ответе только при ненулевом `quantity`
       */
      readonly warehouses?: readonly {
        /**
         * Название склада
         *
         * Пример: `"Невинномысск"`.
         */
        readonly warehouseName?: string;

        /**
         * Количество, шт.
         *
         * Пример: `134`.
         */
        readonly quantity?: number;
      }[];
    }[]
  | undefined;
