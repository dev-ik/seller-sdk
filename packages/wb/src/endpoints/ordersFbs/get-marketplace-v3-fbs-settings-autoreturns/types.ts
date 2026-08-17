// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить настройки автовозврата продавца».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод возвращает информацию о настройках автовозврата, установленных продавцом.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/marketplace/v3/fbs/settings/autoreturns
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetMarketplaceV3FbsSettingsAutoreturnsInput = undefined;
/**
 * Успешный ответ метода «Получить настройки автовозврата продавца».
 *
 * 200: Успешно.
 */
export type GetMarketplaceV3FbsSettingsAutoreturnsResponse = {
  /**
   * Тип автовозврата:
   *  - `allToWarehouse` — все товары отправляются на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
   *  - `allToPickupPoint` — все товары отправляются на пункт выдачи заказов
   *  - `manual` — используются ручные настройки
   *
   * Пример: `"allToWarehouse"`.
   */
  readonly type: "allToWarehouse" | "allToPickupPoint" | "manual";
};
