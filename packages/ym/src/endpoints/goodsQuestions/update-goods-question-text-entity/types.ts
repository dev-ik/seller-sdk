// Generated public types for this Yandex Market endpoint.
type GoodsQuestionsApiResponseStatusType = "OK" | "ERROR";
type GoodsQuestionsQuestionsTextContent = string;
type GoodsQuestionsQuestionsTextEntityOperationType =
  | "UPDATE"
  | "CREATE"
  | "DELETE";
type GoodsQuestionsQuestionsTextEntityType = "QUESTION" | "ANSWER" | "COMMENT";
type GoodsQuestionsTypedQuestionsTextEntityIdDTO = {
  readonly id: number;
  readonly type: GoodsQuestionsQuestionsTextEntityType;
};
type GoodsQuestionsUpdateGoodsQuestionTextEntityDTO = {
  readonly entity: GoodsQuestionsTypedQuestionsTextEntityIdDTO;
};
type GoodsQuestionsUpdateGoodsQuestionTextEntityRequest = {
  readonly entityId?: GoodsQuestionsTypedQuestionsTextEntityIdDTO;
  readonly parentEntityId?: GoodsQuestionsTypedQuestionsTextEntityIdDTO;
  readonly text?: GoodsQuestionsQuestionsTextContent;
  readonly operationType: GoodsQuestionsQuestionsTextEntityOperationType;
};
type GoodsQuestionsUpdateGoodsQuestionTextEntityResponse = {
  readonly status: GoodsQuestionsApiResponseStatusType;
  readonly result?: GoodsQuestionsUpdateGoodsQuestionTextEntityDTO;
};

/**
 * Параметры метода «Создание, изменение и удаление ответа или комментария».
 *
 * Создание, изменение и удаление ответа или комментария.
 *
 * POST /v1/businesses/{businessId}/goods-questions/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateGoodsQuestionTextEntityInput = {
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
  readonly body: GoodsQuestionsUpdateGoodsQuestionTextEntityRequest;
};
/**
 * Успешный ответ метода «Создание, изменение и удаление ответа или комментария».
 *
 * 200: Информация о созданном ответе или комментарии.
 *
 * Возвращается только при операции создания (`operationType` = `CREATE`). При обновлении и удалении возвращается пустой ответ.
 */
export type UpdateGoodsQuestionTextEntityResponse =
  GoodsQuestionsUpdateGoodsQuestionTextEntityResponse;
