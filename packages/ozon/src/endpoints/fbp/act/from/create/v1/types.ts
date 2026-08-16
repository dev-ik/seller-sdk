export type OzonFbpCreateAcceptanceActError =
  | "CREATE_ACT_ERROR_REASON_UNSPECIFIED"
  | "INVALID_ORDER_TYPE";

export interface CreateFbpAcceptanceActV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export interface CreateFbpAcceptanceActV1Response {
  readonly errors?: readonly OzonFbpCreateAcceptanceActError[];
  readonly file_uuid?: string;
  readonly is_success?: boolean;
}
