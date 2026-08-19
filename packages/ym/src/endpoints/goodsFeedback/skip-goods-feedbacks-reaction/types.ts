// Generated public types for this Yandex Market endpoint.
type GoodsFeedbackApiResponseStatusType = "OK" | "ERROR";
type GoodsFeedbackEmptyApiResponse = {
  readonly status: GoodsFeedbackApiResponseStatusType;
};
type GoodsFeedbackGoodsFeedbackId = number;
type GoodsFeedbackSkipGoodsFeedbackReactionRequest = {
  readonly feedbackIds: readonly GoodsFeedbackGoodsFeedbackId[];
};

/**
 * Параметры метода «Пропуск реакции на отзывы».
 *
 * Пропускает реакцию на отзыв — параметр `needReaction` принимает значение `false` в методе получения всех отзывов [POST v2/businesses/{businessId}/goods-feedback](../../reference/goods-feedback/getGoodsFeedbacks.md).
 *
 * POST /v2/businesses/{businessId}/goods-feedback/skip-reaction
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SkipGoodsFeedbacksReactionInput = {
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
  readonly body: GoodsFeedbackSkipGoodsFeedbackReactionRequest;
};
/**
 * Успешный ответ метода «Пропуск реакции на отзывы».
 *
 * 200: Пустой ответ.
 */
export type SkipGoodsFeedbacksReactionResponse = GoodsFeedbackEmptyApiResponse;
