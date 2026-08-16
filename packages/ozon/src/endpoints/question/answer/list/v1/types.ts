export type OzonQuestionAnswerPublicationStatus =
  | "PUBLISHED"
  | "AWAITING_MODERATION"
  | "MODERATION_FAILED"
  | "DUPLICATE";

export interface OzonQuestionAnswer {
  readonly author_name?: string;
  readonly id?: string;
  readonly published_at?: string;
  readonly question_id?: string;
  readonly sku?: number;
  readonly status_publication?: OzonQuestionAnswerPublicationStatus;
  readonly text?: string;
}

export interface ListQuestionAnswersV1Request {
  /**
   * Идентификатор последнего значения на странице. Если запрос первый, оставьте поле пустым. Для
   * следующих значений указывайте `last_id` из ответа предыдущего запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Идентификатор вопроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly question_id: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}

export interface ListQuestionAnswersV1Response {
  readonly answers?: readonly OzonQuestionAnswer[];
  readonly last_id?: string;
}
