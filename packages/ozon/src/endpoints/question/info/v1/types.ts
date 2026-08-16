import type { OzonQuestion } from "../../shared/types.js";

export interface GetQuestionInfoV1Request {
  /**
   * Идентификатор вопроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly question_id: string;
}

export type GetQuestionInfoV1Response = OzonQuestion;
