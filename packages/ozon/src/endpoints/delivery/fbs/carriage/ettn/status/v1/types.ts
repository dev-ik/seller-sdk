export interface GetFbsCarriageEttnStatusRequest {
  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}
export type OzonFbsCarriageEttnStatus =
  | "NOT_UPLOADED"
  | "PROCESSING"
  | "SUCCESS"
  | "FAILED";
export interface GetFbsCarriageEttnStatusResponse {
  readonly errors?: readonly string[];
  readonly status?: OzonFbsCarriageEttnStatus;
}
