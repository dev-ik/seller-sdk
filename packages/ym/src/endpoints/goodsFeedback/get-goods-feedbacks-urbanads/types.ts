// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
type GoodsFeedbackBusinessId = number;
type GoodsFeedbackFeedbackReactionStatusType = "ALL" | "NEED_REACTION";
type GoodsFeedbackGetGoodsFeedbackUrbanadsRequest = {
  readonly feedbackIds?: readonly GoodsFeedbackGoodsFeedbackId[] | null;
  readonly dateTimeFrom?: string;
  readonly dateTimeTo?: string;
  readonly reactionStatus?: GoodsFeedbackFeedbackReactionStatusType;
  readonly ratingValues?: readonly number[] | null;
  readonly paid?: boolean;
};
type GoodsFeedbackGetGoodsFeedbackUrbanadsResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
  readonly result?: GoodsFeedbackGoodsFeedbackUrbanadsListDTO;
};
type GoodsFeedbackGoodsFeedbackContextUrbanadsDTO = {
  readonly offerName?: string;
  readonly pictureUrl?: GoodsFeedbackUrl;
  readonly businessId?: GoodsFeedbackBusinessId;
  readonly businessName?: string;
  readonly brandId?: string;
  readonly brandName?: string;
};
type GoodsFeedbackGoodsFeedbackDescriptionDTO = {
  readonly advantages?: string;
  readonly disadvantages?: string;
  readonly comment?: string;
};
type GoodsFeedbackGoodsFeedbackId = number;
type GoodsFeedbackGoodsFeedbackMediaDTO = {
  readonly photos?: readonly string[] | null;
  readonly videos?: readonly string[] | null;
};
type GoodsFeedbackGoodsFeedbackStatisticsDTO = {
  readonly rating: number;
  readonly commentsCount: number;
  readonly recommended?: boolean;
  readonly paidAmount?: number;
};
type GoodsFeedbackGoodsFeedbackUrbanadsDTO = {
  readonly feedbackId: GoodsFeedbackGoodsFeedbackId;
  readonly createdAt: string;
  readonly needReaction: boolean;
  readonly context: GoodsFeedbackGoodsFeedbackContextUrbanadsDTO;
  readonly author?: string;
  readonly description?: GoodsFeedbackGoodsFeedbackDescriptionDTO;
  readonly media?: GoodsFeedbackGoodsFeedbackMediaDTO;
  readonly statistics: GoodsFeedbackGoodsFeedbackStatisticsDTO;
};
type GoodsFeedbackGoodsFeedbackUrbanadsListDTO = {
  readonly feedbacks: readonly GoodsFeedbackGoodsFeedbackUrbanadsDTO[];
  readonly paging?: GoodsFeedbackPackagingForwardScrollingPagerDTO;
};
type GoodsFeedbackPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type GoodsFeedbackUrl = string;

/**
 * Параметры метода «Получение отзывов о товарах для рекламодателей».
 *
 * Возвращает отзывы о товарах бренда по указанным фильтрам. **Исключение:** отзывы, которые удалили покупатели или Маркет.
 *
 * Результаты возвращаются постранично.
 *
 * Отзывы расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
 *
 * POST /v1/businesses/{businessId}/goods-feedback-advertiser
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsFeedbacksUrbanadsInput = {
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
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `25`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 50.
     */
    readonly limit?: number;

    /**
     * Признак типа кабинета, от имени которого вызывается метод:
     *
     * - `SELLER` — продавец.
     *
     * - `ADVERTISER` — рекламодатель.
     *
     * Обязательно указывайте sourceType=ADVERTISER в каждом запросе.
     *
     * Тип кабинета:
     *
     * * `SELLER` — продавец.
     * * `ADVERTISER` — рекламодатель.
     */
    readonly sourceType?: "SELLER" | "ADVERTISER";
  } /**
   * Тело запроса.
   */;
  readonly body?: GoodsFeedbackGetGoodsFeedbackUrbanadsRequest;
};
/**
 * Успешный ответ метода «Получение отзывов о товарах для рекламодателей».
 *
 * 200: Список отзывов.
 */
export type GetGoodsFeedbacksUrbanadsResponse =
  GoodsFeedbackGetGoodsFeedbackUrbanadsResponse;
