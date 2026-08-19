// Generated public types for this Yandex Market endpoint.
type BusinessOfferMappingsAddOffersToArchiveDTO = {
  readonly notArchivedOffers?:
    | readonly BusinessOfferMappingsAddOffersToArchiveErrorDTO[]
    | null;
};
type BusinessOfferMappingsAddOffersToArchiveErrorDTO = {
  readonly offerId: BusinessOfferMappingsShopSku;
  readonly error: BusinessOfferMappingsAddOffersToArchiveErrorType;
};
type BusinessOfferMappingsAddOffersToArchiveErrorType =
  | "OFFER_HAS_STOCKS"
  | "UNKNOWN";
type BusinessOfferMappingsAddOffersToArchiveRequest = {
  readonly offerIds: readonly BusinessOfferMappingsShopSku[];
};
type BusinessOfferMappingsAddOffersToArchiveResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly result?: BusinessOfferMappingsAddOffersToArchiveDTO;
};
type BusinessOfferMappingsApiResponseStatusType = "OK" | "ERROR";
type BusinessOfferMappingsShopSku = string;

/**
 * Параметры метода «Добавление товаров в архив».
 *
 * Помещает товары в архив. Товары, помещенные в архив, скрыты с витрины во всех магазинах кабинета.
 *
 * В архив нельзя отправить товар, который хранится на складе Маркета
 *
 * Вначале такой товар нужно распродать или вывезти.
 *
 * POST /v2/businesses/{businessId}/offer-mappings/archive
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type AddOffersToArchiveInput = {
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
  readonly body: BusinessOfferMappingsAddOffersToArchiveRequest;
};
/**
 * Успешный ответ метода «Добавление товаров в архив».
 *
 * 200: Если некоторые товары добавить в архив не удалось, в ответе 200 будет их список.
 *
 * Список успешно добавленных товаров не возвращается.
 */
export type AddOffersToArchiveResponse =
  BusinessOfferMappingsAddOffersToArchiveResponse;
