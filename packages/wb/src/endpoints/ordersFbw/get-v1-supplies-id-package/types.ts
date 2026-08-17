// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Упаковка поставки».
 *
 * Метод возвращает информацию об упаковке поставки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/supplies/{ID}/package
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type GetV1SuppliesIdPackageInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки
     */
    readonly ID: number;
  };
};
/**
 * Успешный ответ метода «Упаковка поставки».
 *
 * 200: Успешно.
 */
export type GetV1SuppliesIdPackageResponse = readonly {
  /**
   * Штрих-код упаковки
   */
  readonly packageCode?: string;

  /**
   * Суммарное количество товара в упаковке, шт
   */
  readonly quantity?: number;

  /**
   * Список упакованных товаров
   */
  readonly barcodes?: readonly {
    /**
     * Баркод
     */
    readonly barcode?: string;

    /**
     * Количество, шт
     */
    readonly quantity?: number;
  }[];
}[];
