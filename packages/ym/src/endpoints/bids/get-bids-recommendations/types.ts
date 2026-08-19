// Generated public types for this Yandex Market endpoint.
type BidsApiResponseStatusType = "OK" | "ERROR";
type BidsBenefitType =
  | "BESTS"
  | "SPLIT_0_0_4"
  | "SPLIT_0_0_6"
  | "SPLIT_0_0_12"
  | "MARKET_SUBSIDY_1_4"
  | "MARKET_SUBSIDY_5_9"
  | "MARKET_SUBSIDY_10";
type BidsBid = number;
type BidsBidRecommendationItemDTO = {
  readonly bid: BidsBid;
  readonly showPercent: number;
  readonly benefits?: readonly BidsBenefitType[] | null;
};
type BidsCampaignId = number;
type BidsGetBidsRecommendationsRequest = {
  readonly skus: readonly BidsShopSku[];
};
type BidsGetBidsRecommendationsResponse = {
  readonly status: BidsApiResponseStatusType;
  readonly result?: BidsGetBidsRecommendationsResponseDTO;
};
type BidsGetBidsRecommendationsResponseDTO = {
  readonly recommendations: readonly BidsSkuBidRecommendationItemDTO[];
};
type BidsPriceRecommendationItemDTO = {
  readonly campaignId: BidsCampaignId;
  readonly price: number;
};
type BidsShopSku = string;
type BidsSkuBidRecommendationItemDTO = {
  readonly sku: BidsShopSku;
  readonly bid: BidsBid;
  readonly bidRecommendations?: readonly BidsBidRecommendationItemDTO[] | null;
  readonly priceRecommendations?:
    | readonly BidsPriceRecommendationItemDTO[]
    | null;
};

/**
 * Параметры метода «Рекомендованные ставки для заданных товаров».
 *
 * Возвращает рекомендованные ставки для заданных товаров, что обеспечивает вашим предложениям определенную долю показов, и дополнительные инструменты продвижения.
 *
 * Для одного товара может возвращаться одна рекомендованная ставка или несколько. Во втором случае разные ставки предназначены для достижения разной доли показов и получения дополнительных инструментов продвижения.
 *
 * Если товар только добавлен в каталог, но пока не продается, рекомендованной ставки для него не будет.
 *
 * В одном запросе может быть максимум 1500 товаров.
 *
 * POST /v2/businesses/{businessId}/bids/recommendations
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetBidsRecommendationsInput = {
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
   * description.
   */;
  readonly body: BidsGetBidsRecommendationsRequest;
};
/**
 * Успешный ответ метода «Рекомендованные ставки для заданных товаров».
 *
 * 200: Рекомендованные ставки для заданных товаров.
 */
export type GetBidsRecommendationsResponse = BidsGetBidsRecommendationsResponse;
