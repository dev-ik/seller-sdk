export interface CreateQuestionAnswerV1Request {
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

  /**
   * Текст ответа объёмом от 2 до 3000 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly text: string;
}

export interface CreateQuestionAnswerV1Response {
  readonly answer_id?: string;
}
