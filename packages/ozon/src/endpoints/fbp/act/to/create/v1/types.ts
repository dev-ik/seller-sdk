export interface CreateFbpConsignmentNoteV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export interface CreateFbpConsignmentNoteV1Response {
  readonly code?: string;
}
