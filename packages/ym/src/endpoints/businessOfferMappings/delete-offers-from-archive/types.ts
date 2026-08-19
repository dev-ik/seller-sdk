// Generated public types for this Yandex Market endpoint.
type BusinessOfferMappingsApiResponseStatusType = "OK" | "ERROR";
type BusinessOfferMappingsDeleteOffersFromArchiveDTO = {
  readonly notUnarchivedOfferIds?:
    | readonly BusinessOfferMappingsShopSku[]
    | null;
};
type BusinessOfferMappingsDeleteOffersFromArchiveRequest = {
  readonly offerIds: readonly BusinessOfferMappingsShopSku[];
};
type BusinessOfferMappingsDeleteOffersFromArchiveResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly result?: BusinessOfferMappingsDeleteOffersFromArchiveDTO;
};
type BusinessOfferMappingsShopSku = string;

/**
 * Параметры метода «Удаление товаров из архива».
 *
 * Восстанавливает товары из архива.
 *
 * POST /v2/businesses/{businessId}/offer-mappings/unarchive
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteOffersFromArchiveInput = {
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
  readonly body: BusinessOfferMappingsDeleteOffersFromArchiveRequest;
};
/**
 * Успешный ответ метода «Удаление товаров из архива».
 *
 * 200: Если некоторые товары восстановить из архива не удалось, в ответе 200 будет их список.
 *
 * Список успешно восстановленных товаров не возвращается.
 */
export type DeleteOffersFromArchiveResponse =
  BusinessOfferMappingsDeleteOffersFromArchiveResponse;
