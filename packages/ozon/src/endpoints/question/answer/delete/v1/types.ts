export interface DeleteQuestionAnswerV1Request {
  /**
   * Идентификатор ответа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly answer_id: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}

export type DeleteQuestionAnswerV1Response = void;
