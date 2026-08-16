export type OzonFbpConsignmentNoteState =
  | "STATE_TYPE_UNSPECIFIED"
  | "IN_PROGRESS"
  | "FINISHED"
  | "FAILED";

export interface GetFbpConsignmentNoteV1Request {
  /**
   * Идентификатор транспортной накладной.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly code: string;

  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export interface GetFbpConsignmentNoteV1Response {
  readonly error_message?: string;
  readonly label_url?: string;
  readonly state?: OzonFbpConsignmentNoteState;
}
