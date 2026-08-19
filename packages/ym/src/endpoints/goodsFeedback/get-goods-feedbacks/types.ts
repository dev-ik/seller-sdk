// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
type GoodsFeedbackFeedbackReactionStatusType = "ALL" | "NEED_REACTION";
type GoodsFeedbackGetGoodsFeedbackRequest = {
  readonly feedbackIds?: readonly GoodsFeedbackGoodsFeedbackId[] | null;
  readonly dateTimeFrom?: string;
  readonly dateTimeTo?: string;
  readonly reactionStatus?: GoodsFeedbackFeedbackReactionStatusType;
  readonly ratingValues?: readonly number[] | null;
  readonly offerIds?: readonly GoodsFeedbackShopSku[] | null;
  readonly paid?: boolean;
};
type GoodsFeedbackGetGoodsFeedbackResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
  readonly result?: GoodsFeedbackGoodsFeedbackListDTO;
};
type GoodsFeedbackGoodsFeedbackDTO = {
  readonly feedbackId: GoodsFeedbackGoodsFeedbackId;
  readonly createdAt: string;
  readonly needReaction: boolean;
  readonly identifiers: GoodsFeedbackGoodsFeedbackIdentifiersDTO;
  readonly author?: string;
  readonly description?: GoodsFeedbackGoodsFeedbackDescriptionDTO;
  readonly media?: GoodsFeedbackGoodsFeedbackMediaDTO;
  readonly statistics: GoodsFeedbackGoodsFeedbackStatisticsDTO;
};
type GoodsFeedbackGoodsFeedbackDescriptionDTO = {
  readonly advantages?: string;
  readonly disadvantages?: string;
  readonly comment?: string;
};
type GoodsFeedbackGoodsFeedbackId = number;
type GoodsFeedbackGoodsFeedbackIdentifiersDTO = {
  readonly orderId?: number;
  readonly offerId?: GoodsFeedbackShopSku;
};
type GoodsFeedbackGoodsFeedbackListDTO = {
  readonly feedbacks: readonly GoodsFeedbackGoodsFeedbackDTO[];
  readonly paging?: GoodsFeedbackPackagingForwardScrollingPagerDTO;
};
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
type GoodsFeedbackPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type GoodsFeedbackShopSku = string;

/**
 * Параметры метода «Получение отзывов о товарах продавца».
 *
 * Возвращает отзывы о товарах продавца по указанным фильтрам. **Исключение:** отзывы, которые удалили покупатели или Маркет.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый отзыв. А полную информацию о нем можно получить с помощью этого метода.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Результаты возвращаются постранично.
 *
 * Отзывы расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
 *
 * POST /v2/businesses/{businessId}/goods-feedback
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsFeedbacksInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body?: GoodsFeedbackGetGoodsFeedbackRequest;
};
/**
 * Успешный ответ метода «Получение отзывов о товарах продавца».
 *
 * 200: Список отзывов.
 */
export type GetGoodsFeedbacksResponse = GoodsFeedbackGetGoodsFeedbackResponse;
