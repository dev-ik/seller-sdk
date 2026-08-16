export type UpdateQuestionStatusV1Status = "NEW" | "VIEWED" | "PROCESSED";

export interface UpdateQuestionStatusV1Request {
  /**
   * Идентификаторы вопросов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly question_ids: readonly string[];

  /**
   * Статусы вопросов: - `NEW` — новые, - `VIEWED` — просмотренные, - `PROCESSED` — обработанные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status: UpdateQuestionStatusV1Status;
}

export type UpdateQuestionStatusV1Response = void;
