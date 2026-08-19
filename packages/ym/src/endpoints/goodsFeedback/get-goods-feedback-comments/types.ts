// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
type GoodsFeedbackGetGoodsFeedbackCommentsRequest = {
  readonly feedbackId?: GoodsFeedbackGoodsFeedbackId;
  readonly commentIds?: readonly GoodsFeedbackGoodsFeedbackCommentId[] | null;
};
type GoodsFeedbackGetGoodsFeedbackCommentsResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
  readonly result?: GoodsFeedbackGoodsFeedbackCommentListDTO;
};
type GoodsFeedbackGoodsFeedbackCommentAuthorDTO = {
  readonly type?: GoodsFeedbackGoodsFeedbackCommentAuthorType;
  readonly name?: string;
};
type GoodsFeedbackGoodsFeedbackCommentAuthorType =
  | "USER"
  | "BUSINESS"
  | "BRAND";
type GoodsFeedbackGoodsFeedbackCommentDTO = {
  readonly id: GoodsFeedbackGoodsFeedbackCommentId;
  readonly text: GoodsFeedbackGoodsFeedbackCommentText;
  readonly canModify?: boolean;
  readonly parentId?: number;
  readonly author?: GoodsFeedbackGoodsFeedbackCommentAuthorDTO;
  readonly status: GoodsFeedbackGoodsFeedbackCommentStatusType;
  readonly feedbackId: GoodsFeedbackGoodsFeedbackId;
};
type GoodsFeedbackGoodsFeedbackCommentId = number;
type GoodsFeedbackGoodsFeedbackCommentListDTO = {
  readonly comments: readonly GoodsFeedbackGoodsFeedbackCommentDTO[];
  readonly paging?: GoodsFeedbackPackagingForwardScrollingPagerDTO;
};
type GoodsFeedbackGoodsFeedbackCommentStatusType =
  | "PUBLISHED"
  | "UNMODERATED"
  | "BANNED"
  | "DELETED";
type GoodsFeedbackGoodsFeedbackCommentText = string;
type GoodsFeedbackGoodsFeedbackId = number;
type GoodsFeedbackPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};

/**
 * Параметры метода «Получение комментариев к отзыву».
 *
 * Возвращает комментарии к отзыву, кроме:
 *
 * * тех, которые удалили пользователи или Маркет;
 * * комментариев к удаленным отзывам.
 *
 * Идентификатор родительского комментария `parentId` возвращается только для ответов на другие комментарии, но не для ответов на отзывы.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый комментарий. А полную информацию о нем можно получить с помощью этого метода.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Результаты возвращаются постранично.
 *
 * Комментарии расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
 *
 * POST /v2/businesses/{businessId}/goods-feedback/comments
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsFeedbackCommentsInput = {
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
  readonly body: GoodsFeedbackGetGoodsFeedbackCommentsRequest;
};
/**
 * Успешный ответ метода «Получение комментариев к отзыву».
 *
 * 200: Дерево комментариев к отзыву.
 */
export type GetGoodsFeedbackCommentsResponse =
  GoodsFeedbackGetGoodsFeedbackCommentsResponse;
