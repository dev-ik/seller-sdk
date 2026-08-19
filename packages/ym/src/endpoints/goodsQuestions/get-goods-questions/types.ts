// Generated public types for this Yandex Market endpoint.
type GoodsQuestionsApiResponseStatusType = "OK" | "ERROR";
type GoodsQuestionsBusinessId = number;
type GoodsQuestionsGetQuestionsRequest = {
  readonly categoryIds?: readonly number[] | null;
  readonly questionIds?: readonly GoodsQuestionsQuestionId[] | null;
  readonly dateFrom?: string;
  readonly dateTo?: string;
  readonly needAnswer?: boolean;
  readonly sort?: GoodsQuestionsQuestionSortOrderType;
};
type GoodsQuestionsGetQuestionsResponse = {
  readonly status: GoodsQuestionsApiResponseStatusType;
  readonly result?: GoodsQuestionsQuestionListDTO;
};
type GoodsQuestionsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type GoodsQuestionsQuestionDTO = {
  readonly questionIdentifiers: GoodsQuestionsQuestionIdentifiersDTO;
  readonly businessId: GoodsQuestionsBusinessId;
  readonly text: GoodsQuestionsQuestionsTextContent;
  readonly createdAt: string;
  readonly votes: GoodsQuestionsVotesDTO;
  readonly author: GoodsQuestionsQuestionsTextContentAuthorDTO;
};
type GoodsQuestionsQuestionId = number;
type GoodsQuestionsQuestionIdentifiersDTO = {
  readonly id: GoodsQuestionsQuestionId;
  readonly categoryId?: number;
  readonly offerId: GoodsQuestionsShopSku;
};
type GoodsQuestionsQuestionListDTO = {
  readonly questions: readonly GoodsQuestionsQuestionDTO[];
  readonly paging?: GoodsQuestionsPackagingForwardScrollingPagerDTO;
  readonly totalCount: number;
};
type GoodsQuestionsQuestionSortOrderType = "CREATED_AT_DESC" | "CREATED_AT_ASC";
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
type GoodsQuestionsShopSku = string;
type GoodsQuestionsVotesDTO = {
  readonly likes: number;
  readonly dislikes: number;
};

/**
 * Параметры метода «Получение вопросов о товарах продавца».
 *
 * Возвращает вопросы о товарах продавца по указанным фильтрам.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый вопрос. А полную информацию о нем можно получить с помощью этого метода.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Результаты возвращаются постранично, одна страница содержит не более 50 вопросов.
 *
 * POST /v1/businesses/{businessId}/goods-questions
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsQuestionsInput = {
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
  readonly body?: GoodsQuestionsGetQuestionsRequest;
};
/**
 * Успешный ответ метода «Получение вопросов о товарах продавца».
 *
 * 200: Список вопросов.
 */
export type GetGoodsQuestionsResponse = GoodsQuestionsGetQuestionsResponse;
