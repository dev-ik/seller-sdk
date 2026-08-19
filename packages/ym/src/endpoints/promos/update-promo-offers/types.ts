// Generated public types for this Yandex Market endpoint.
type PromosApiResponseStatusType = "OK" | "ERROR";
type PromosCampaignId = number;
type PromosPromoOfferUpdateWarningCodeType =
  | "DEEP_DISCOUNT_OFFER"
  | "CATALOG_PRICE_IS_LOWER_THAN_PROMO"
  | "SHOP_PRICES_ARE_LOWER_THAN_PROMO"
  | "SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO";
type PromosPromoOfferUpdateWarningDTO = {
  readonly code: PromosPromoOfferUpdateWarningCodeType;
  readonly campaignIds?: readonly PromosCampaignId[] | null;
};
type PromosRejectedPromoOfferUpdateDTO = {
  readonly offerId: PromosShopSku;
  readonly reason: PromosRejectedPromoOfferUpdateReasonType;
};
type PromosRejectedPromoOfferUpdateReasonType =
  | "OFFER_DOES_NOT_EXIST"
  | "OFFER_DUPLICATION"
  | "OFFER_NOT_ELIGIBLE_FOR_PROMO"
  | "OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED"
  | "DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED"
  | "EMPTY_OLD_PRICE"
  | "EMPTY_PROMO_PRICE"
  | "MAX_PROMO_PRICE_EXCEEDED"
  | "PROMO_PRICE_BIGGER_THAN_MAX"
  | "PROMO_PRICE_SMALLER_THAN_MIN"
  | "PRICE_TOO_BIG"
  | "OLD_PRICE_TOO_BIG";
type PromosShopSku = string;
type PromosUpdatePromoOfferDTO = {
  readonly offerId: PromosShopSku;
  readonly params?: PromosUpdatePromoOfferParamsDTO;
};
type PromosUpdatePromoOfferDiscountParamsDTO = {
  readonly price?: number;
  readonly promoPrice?: number;
};
type PromosUpdatePromoOfferParamsDTO = {
  readonly discountParams?: PromosUpdatePromoOfferDiscountParamsDTO;
};
type PromosUpdatePromoOffersRequest = {
  readonly promoId: string;
  readonly offers: readonly PromosUpdatePromoOfferDTO[];
};
type PromosUpdatePromoOffersResponse = {
  readonly status: PromosApiResponseStatusType;
  readonly result?: PromosUpdatePromoOffersResultDTO;
};
type PromosUpdatePromoOffersResultDTO = {
  readonly rejectedOffers?: readonly PromosRejectedPromoOfferUpdateDTO[] | null;
  readonly warningOffers?: readonly PromosWarningPromoOfferUpdateDTO[] | null;
};
type PromosWarningPromoOfferUpdateDTO = {
  readonly offerId: PromosShopSku;
  readonly warnings: readonly PromosPromoOfferUpdateWarningDTO[];
};

/**
 * Параметры метода «Добавление товаров в акцию или изменение их цен».
 *
 * Добавляет товары в акцию или изменяет цены на товары, которые участвуют в акции.
 *
 * Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).
 *
 * POST /v2/businesses/{businessId}/promos/offers/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdatePromoOffersInput = {
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
  readonly body: PromosUpdatePromoOffersRequest;
};
/**
 * Успешный ответ метода «Добавление товаров в акцию или изменение их цен».
 *
 * 200: Результат добавления товаров в акцию или обновления их цен.
 */
export type UpdatePromoOffersResponse = PromosUpdatePromoOffersResponse;
