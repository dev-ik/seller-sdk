export interface GetQuestionTopSkusV1Request {
  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface GetQuestionTopSkusV1Response {
  readonly sku?: readonly string[];
}
