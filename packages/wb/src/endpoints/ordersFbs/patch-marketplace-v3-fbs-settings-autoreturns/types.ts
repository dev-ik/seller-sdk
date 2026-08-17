// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Обновить настройки автовозврата продавца».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод устанавливает настройки автовозврата продавца для малогабаритных товаров — `"cargoType":1`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PATCH /api/marketplace/v3/fbs/settings/autoreturns
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PatchMarketplaceV3FbsSettingsAutoreturnsInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Тип автовозврата малогабаритных товаров:
     *  - `allToWarehouse` — отправлять все товары на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
     *  - `allToPickupPoint` — отправлять все товары на пункт выдачи заказов
     *  - `manual` — использовать ручные настройки
     *
     * Пример: `"allToWarehouse"`.
     */
    readonly type: "allToWarehouse" | "allToPickupPoint" | "manual";
  };
};
/**
 * Успешный ответ метода «Обновить настройки автовозврата продавца».
 *
 * 204: Обновлено.
 */
export type PatchMarketplaceV3FbsSettingsAutoreturnsResponse = undefined;
