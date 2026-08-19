// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
type GoodsFeedbackDeleteGoodsFeedbackCommentRequest = {
  readonly id: GoodsFeedbackGoodsFeedbackCommentId;
};
type GoodsFeedbackEmptyApiResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
};
type GoodsFeedbackGoodsFeedbackCommentId = number;

/**
 * Параметры метода «Удаление комментария к отзыву».
 *
 * Удаляет комментарий магазина.
 *
 * POST /v2/businesses/{businessId}/goods-feedback/comments/delete
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteGoodsFeedbackCommentInput = {
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
  readonly body: GoodsFeedbackDeleteGoodsFeedbackCommentRequest;
};
/**
 * Успешный ответ метода «Удаление комментария к отзыву».
 *
 * 200: Пустой ответ.
 */
export type DeleteGoodsFeedbackCommentResponse = GoodsFeedbackEmptyApiResponse;
