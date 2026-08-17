// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт о [платном хранении](https://seller.wildberries.ru/analytics-reports/paid-storage/storage) по ID [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/paid_storage/tasks/{task_id}/download
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1PaidStorageTasksTaskIdDownloadInput = {
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
export type GetV1PaidStorageTasksTaskIdDownloadResponse =
  | readonly {
      /**
       * Дата, за которую был расчёт или перерасчёт
       */
      readonly date?: string;

      /**
       * Коэффициент логистики и хранения
       */
      readonly logWarehouseCoef?: number;

      /**
       * ID склада
       */
      readonly officeId?: number;

      /**
       * Название склада
       */
      readonly warehouse?: string;

      /**
       * Коэффициент склада
       */
      readonly warehouseCoef?: number;

      /**
       * ID поставки
       */
      readonly giId?: number;

      /**
       * ID размера для этого артикула WB
       */
      readonly chrtId?: number;

      /**
       * Размер (`techSize` в карточке товара)
       */
      readonly size?: string;

      /**
       * Баркод
       */
      readonly barcode?: string;

      /**
       * Предмет
       */
      readonly subject?: string;

      /**
       * Бренд
       */
      readonly brand?: string;

      /**
       * Артикул продавца
       */
      readonly vendorCode?: string;

      /**
       * Артикул WB
       */
      readonly nmId?: number;

      /**
       * Объём товара
       */
      readonly volume?: number;

      /**
       * Способ расчёта
       */
      readonly calcType?: string;

      /**
       * Сумма хранения
       */
      readonly warehousePrice?: number;

      /**
       * Количество единиц товара (штук), подлежащих тарифицированию за расчётные сутки
       */
      readonly barcodesCount?: number;

      /**
       * Код паллетоместа
       */
      readonly palletPlaceCode?: number;

      /**
       * Количество паллет
       */
      readonly palletCount?: number;

      /**
       * Если был перерасчёт, это дата первоначального расчёта. Если перерасчёта не было, совпадает с `date`
       */
      readonly originalDate?: string;

      /**
       * Скидка программы лояльности, ₽
       */
      readonly loyaltyDiscount?: number;

      /**
       * Дата фиксации тарифа
       */
      readonly tariffFixDate?: string;

      /**
       * Дата понижения тарифа
       */
      readonly tariffLowerDate?: string;
    }[]
  | undefined;
