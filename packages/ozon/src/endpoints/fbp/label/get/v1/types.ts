export type OzonFbpLabelGenerationState =
  | "UNSPECIFIED"
  | "IN_PROGRESS"
  | "FINISHED"
  | "FAILED";

export interface GetFbpLabelsV1Request {
  /**
   * Идентификатор задания на генерацию этикеток.
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

export interface GetFbpLabelsV1Response {
  readonly label_url?: string;
  readonly state?: OzonFbpLabelGenerationState;
}
