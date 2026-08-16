export interface GetCarriageContainerTaskV1Request {
  /**
   * Идентификатор задачи. Получите его в ответе метода /v1/carriage/container/fill или
   * /v1/carriage/container/approve .
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly task_id?: number;
}

export interface GetCarriageContainerTaskV1Response {
  readonly error_message?: string;
  readonly status?: string;
}
