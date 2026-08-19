// Generated public types for this Yandex Market endpoint.
type GoodsQuestionsAnswerDTO = {
  readonly id: GoodsQuestionsAnswerId;
  readonly text: GoodsQuestionsQuestionsTextContent;
  readonly canModify: boolean;
  readonly author?: GoodsQuestionsQuestionsTextContentAuthorDTO;
  readonly status: GoodsQuestionsQuestionsTextContentModerationStatusType;
  readonly questionId: GoodsQuestionsQuestionId;
  readonly createdAt: string;
  readonly votes: GoodsQuestionsVotesDTO;
  readonly comments?: readonly GoodsQuestionsCommentDTO[] | null;
};
type GoodsQuestionsAnswerId = number;
type GoodsQuestionsAnswerListDTO = {
  readonly answers: readonly GoodsQuestionsAnswerDTO[];
  readonly paging?: GoodsQuestionsPackagingForwardScrollingPagerDTO;
};
type GoodsQuestionsApiResponseStatusType = "OK" | "ERROR";
type GoodsQuestionsCommentDTO = {
  readonly id: GoodsQuestionsCommentId;
  readonly text: GoodsQuestionsQuestionsTextContent;
  readonly canModify?: boolean;
  readonly parentId?: GoodsQuestionsCommentId;
  readonly author?: GoodsQuestionsQuestionsTextContentAuthorDTO;
  readonly status: GoodsQuestionsQuestionsTextContentModerationStatusType;
  readonly answerId: GoodsQuestionsAnswerId;
  readonly createdAt: string;
  readonly votes?: GoodsQuestionsVotesDTO;
};
type GoodsQuestionsCommentId = number;
type GoodsQuestionsGetAnswersRequest = {
  readonly questionId?: GoodsQuestionsQuestionId;
  readonly answerIds?: readonly GoodsQuestionsAnswerId[] | null;
};
type GoodsQuestionsGetAnswersResponse = {
  readonly status: GoodsQuestionsApiResponseStatusType;
  readonly result?: GoodsQuestionsAnswerListDTO;
};
type GoodsQuestionsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type GoodsQuestionsQuestionId = number;
type GoodsQuestionsQuestionsTextContent = string;
type GoodsQuestionsQuestionsTextContentAuthorDTO = {
  readonly type?: GoodsQuestionsQuestionsTextContentAuthorType;
  readonly name?: string;
};
type GoodsQuestionsQuestionsTextContentAuthorType =
  | "USER"
  | "BUSINESS"
  | "VENDOR"
  | "BRAND";
type GoodsQuestionsQuestionsTextContentModerationStatusType =
  | "PUBLISHED"
  | "UNMODERATED"
  | "BANNED"
  | "DELETED";
type GoodsQuestionsVotesDTO = {
  readonly likes: number;
  readonly dislikes: number;
};

/**
 * Параметры метода «Получение ответов на вопрос».
 *
 * Возвращает ответы на вопрос о товаре по указанным фильтрам.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый ответ или комментарий. А полную информацию о них можно получить с помощью этого метода.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Результаты возвращаются постранично, одна страница содержит не более 50 ответов.
 *
 * POST /v1/businesses/{businessId}/goods-questions/answers
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsQuestionAnswersInput = {
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
  readonly body: GoodsQuestionsGetAnswersRequest;
};
/**
 * Успешный ответ метода «Получение ответов на вопрос».
 *
 * 200: Список ответов на вопрос.
 */
export type GetGoodsQuestionAnswersResponse = GoodsQuestionsGetAnswersResponse;
