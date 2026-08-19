// Generated public types for this Yandex Market endpoint.
type RatingsApiResponseStatusType = "OK" | "ERROR";
type RatingsCampaignId = number;
type RatingsCampaignQualityRatingDTO = {
  readonly campaignId: RatingsCampaignId;
  readonly ratings: readonly RatingsQualityRatingDTO[];
};
type RatingsCampaignsQualityRatingDTO = {
  readonly campaignRatings: readonly RatingsCampaignQualityRatingDTO[];
};
type RatingsGetQualityRatingRequest = {
  readonly dateFrom?: string;
  readonly dateTo?: string;
  readonly campaignIds: readonly RatingsCampaignId[];
};
type RatingsGetQualityRatingResponse = {
  readonly status: RatingsApiResponseStatusType;
  readonly result?: RatingsCampaignsQualityRatingDTO;
};
type RatingsQualityRatingComponentDTO = {
  readonly value: number;
  readonly componentType: RatingsQualityRatingComponentType;
};
type RatingsQualityRatingComponentType =
  | "DBS_CANCELLATION_RATE"
  | "DBS_LATE_DELIVERY_RATE"
  | "FBS_CANCELLATION_RATE"
  | "FBS_LATE_SHIP_RATE"
  | "FBY_LATE_DELIVERY_RATE"
  | "FBY_CANCELLATION_RATE"
  | "FBY_DELIVERY_DIFF_RATE"
  | "FBY_LATE_EDITING_RATE";
type RatingsQualityRatingDTO = {
  readonly rating: number;
  readonly calculationDate: string;
  readonly components: readonly RatingsQualityRatingComponentDTO[];
};

/**
 * Параметры метода «Индекс качества магазинов».
 *
 * Возвращает значение индекса качества магазинов и его составляющие.
 *
 * Подробнее об индексе качества читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/quality/score/).
 *
 * POST /v2/businesses/{businessId}/ratings/quality
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetQualityRatingsInput = {
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
  readonly body: RatingsGetQualityRatingRequest;
};
/**
 * Успешный ответ метода «Индекс качества магазинов».
 *
 * 200: Значение индекса качества магазинов и его составляющие.
 */
export type GetQualityRatingsResponse = RatingsGetQualityRatingResponse;
