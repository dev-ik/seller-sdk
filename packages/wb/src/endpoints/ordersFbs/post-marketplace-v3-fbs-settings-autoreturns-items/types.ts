// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить настройки автовозврата товаров».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод возвращает настройки автовозврата товаров.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/fbs/settings/autoreturns/items
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostMarketplaceV3FbsSettingsAutoreturnsItemsInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID размеров товаров в системе WB
     *
     * Пример: `[111111,222222]`.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly chrtIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить настройки автовозврата товаров».
 *
 * 200: Успешно.
 */
export type PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly results: readonly {
    /**
     * - `true` — настройки автовозврата товара успешно получены
     */
    readonly success?: boolean;

    /**
     * ID размера товара в системе WB
     */
    readonly chrtId: number;

    /**
     * Куда будет возвращён товар:
     *  - `auto` — место возврата определяется автоматически
     *  - `byWarehouse` — на склад WB
     *  - `byPickupPoint` — на пункт выдачи заказов
     *  - `byCourier` — продавцу курьером. Всегда для товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
     */
    readonly type?: "auto" | "byWarehouse" | "byPickupPoint" | "byCourier";

    /**
     * - `true` — настройки автовозврата товара можно изменить
     */
    readonly changeable?: boolean;

    /**
     * Детали ошибки
     */
    readonly error?: readonly {
      /**
       * Код ошибки
       */
      readonly code: number;

      /**
       * Дополнительная информация об ошибке
       */
      readonly detail: string;
    }[];
  }[];
};
