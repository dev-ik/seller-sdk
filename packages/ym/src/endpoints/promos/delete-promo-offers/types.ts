// Generated public types for this Yandex Market endpoint.
type PromosApiResponseStatusType = "OK" | "ERROR";
type PromosDeletePromoOffersRequest = {
  readonly promoId: string;
  readonly deleteAllOffers?: boolean;
  readonly offerIds?: readonly PromosShopSku[] | null;
};
type PromosDeletePromoOffersResponse = {
  readonly status: PromosApiResponseStatusType;
  readonly result?: PromosDeletePromoOffersResultDTO;
};
type PromosDeletePromoOffersResultDTO = {
  readonly rejectedOffers?: readonly PromosRejectedPromoOfferDeleteDTO[] | null;
};
type PromosRejectedPromoOfferDeleteDTO = {
  readonly offerId: PromosShopSku;
  readonly reason: PromosRejectedPromoOfferDeleteReasonType;
};
type PromosRejectedPromoOfferDeleteReasonType = "OFFER_DOES_NOT_EXIST";
type PromosShopSku = string;

/**
 * Параметры метода «Удаление товаров из акции».
 *
 * Убирает товары из акции.
 *
 * Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).
 *
 * POST /v2/businesses/{businessId}/promos/offers/delete
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeletePromoOffersInput = {
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
  readonly body: PromosDeletePromoOffersRequest;
};
/**
 * Успешный ответ метода «Удаление товаров из акции».
 *
 * 200: Результат удаления товаров из акции.
 */
export type DeletePromoOffersResponse = PromosDeletePromoOffersResponse;
