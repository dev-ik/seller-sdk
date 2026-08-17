// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать склад продавца».
 *
 * Метод создаёт склад продавца для работы с [остатками товаров](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca), кроме сверхгабаритных (СГТ), по модели [FBS](/openapi/orders-fbs) (Fulfillment by Seller).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/warehouses
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostApiV3WarehousesInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Имя склада продавца
     *
     * Пример: `"Склад Коледино"`.
     *
     * Минимальная длина: 1.
     *
     * Максимальная длина: 200.
     */
    readonly name: string;

    /**
     * ID [склада WB](./work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1offices/get).
     * Нельзя привязывать склад WB, который уже используется
     *
     * Пример: `15`.
     *
     * Минимальное значение: 1.
     */
    readonly officeId: number;
  };
};
/**
 * Успешный ответ метода «Создать склад продавца».
 *
 * 201: Создано.
 */
export type PostApiV3WarehousesResponse = {
  /**
   * ID склада продавца
   *
   * Пример: `2`.
   */
  readonly id?: number;
};
