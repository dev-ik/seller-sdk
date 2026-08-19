// Generated public types for this Yandex Market endpoint.
type BusinessOfferMappingsApiResponseStatusType = "OK" | "ERROR";
type BusinessOfferMappingsDeleteOffersDTO = {
  readonly notDeletedOfferIds?: readonly BusinessOfferMappingsShopSku[] | null;
};
type BusinessOfferMappingsDeleteOffersRequest = {
  readonly offerIds: readonly BusinessOfferMappingsShopSku[];
};
type BusinessOfferMappingsDeleteOffersResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly result?: BusinessOfferMappingsDeleteOffersDTO;
};
type BusinessOfferMappingsShopSku = string;

/**
 * Параметры метода «Удаление товаров из каталога».
 *
 * Удаляет товары из каталога.
 *
 * POST /v2/businesses/{businessId}/offer-mappings/delete
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteOffersInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: BusinessOfferMappingsDeleteOffersRequest;
};
/**
 * Успешный ответ метода «Удаление товаров из каталога».
 *
 * 200: Если удалось удалить не все товары, с ответом 200 вернется список тех, что были в запросе, но остались в магазине.
 */
export type DeleteOffersResponse = BusinessOfferMappingsDeleteOffersResponse;
