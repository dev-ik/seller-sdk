// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Обновить настройки автовозврата товаров».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод устанавливает настройки автовозврата малогабаритных товаров — `"cargoType":1`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PATCH /api/marketplace/v3/fbs/settings/autoreturns/items
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID размеров товаров в системе WB
     *
     * Пример: `[111111,222222]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly chrtIds: readonly number[];

    /**
     * Тип автовозврата малогабаритных товаров:
     *  - `allToWarehouse` — все товары отправляются на склад WB
     *  - `allToPickupPoint` — все товары отправляются на пункт выдачи заказов
     *  - `byCourier` — возврат продавцу курьером
     *
     * Пример: `"allToWarehouse"`.
     */
    readonly type: "allToWarehouse" | "allToPickupPoint" | "byCourier";
  };
};
/**
 * Успешный ответ метода «Обновить настройки автовозврата товаров».
 *
 * 200: Успешно.
 */
export type PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly results: readonly {
    /**
     * ID размера товара в системе WB
     */
    readonly chrtId: number;

    /**
     * Детали ошибки
     */
    readonly error?: readonly {
      /**
       * Код ошибки
       */
      readonly code: number;

      /**
       * Дополнительная информация об ошибке:
       *  - `Not Found` — ID размера товара не найден или указан ID размера немалогабаритного товара
       */
      readonly detail: string;
    }[];

    /**
     * - `true` — настройки автовозврата товара обновлены
     */
    readonly success?: boolean;
  }[];
};
