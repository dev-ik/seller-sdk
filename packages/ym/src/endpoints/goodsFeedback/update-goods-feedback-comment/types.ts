// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
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
type GoodsFeedbackGoodsFeedbackCommentStatusType =
  | "PUBLISHED"
  | "UNMODERATED"
  | "BANNED"
  | "DELETED";
type GoodsFeedbackGoodsFeedbackCommentText = string;
type GoodsFeedbackGoodsFeedbackId = number;
type GoodsFeedbackUpdateGoodsFeedbackCommentDTO = {
  readonly id?: GoodsFeedbackGoodsFeedbackCommentId;
  readonly parentId?: number;
  readonly text: GoodsFeedbackGoodsFeedbackCommentText;
};
type GoodsFeedbackUpdateGoodsFeedbackCommentRequest = {
  readonly feedbackId: GoodsFeedbackGoodsFeedbackId;
  readonly comment: GoodsFeedbackUpdateGoodsFeedbackCommentDTO;
};
type GoodsFeedbackUpdateGoodsFeedbackCommentResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
  readonly result?: GoodsFeedbackGoodsFeedbackCommentDTO;
};

/**
 * Параметры метода «Добавление нового или изменение созданного комментария».
 *
 * Добавляет новый комментарий магазина или изменяет комментарий, который магазин оставлял ранее.
 *
 * Для создания комментария к отзыву передайте только идентификатор отзыва `feedbackId`.
 *
 * Чтобы добавить комментарий к другому комментарию, передайте:
 *
 * * `feedbackId` — идентификатор отзыва;
 * * `comment.parentId` — идентификатор родительского комментария.
 *
 * Чтобы изменить комментарий, передайте:
 *
 * * `feedbackId`— идентификатор отзыва;
 * * `comment.id` — идентификатор комментария, который нужно изменить.
 *
 * Если передать одновременно `comment.parentId` и `comment.id`, будет изменен существующий комментарий.
 *
 * POST /v2/businesses/{businessId}/goods-feedback/comments/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateGoodsFeedbackCommentInput = {
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
  readonly body: GoodsFeedbackUpdateGoodsFeedbackCommentRequest;
};
/**
 * Успешный ответ метода «Добавление нового или изменение созданного комментария».
 *
 * 200: Информация о добавленном или измененном комментарии.
 */
export type UpdateGoodsFeedbackCommentResponse =
  GoodsFeedbackUpdateGoodsFeedbackCommentResponse;
