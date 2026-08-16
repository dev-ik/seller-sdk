export interface GetSupplyOrderActAcceptanceStatusRequest {
  /**
   * Идентификатор операции из метода [/v1/supply-order/act/accept](#operation/SupplyOrderActAccept).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export type OzonSupplyOrderActAcceptanceStatus =
  | "SUCCESS"
  | "IN_PROGRESS"
  | "FAILED";
export interface GetSupplyOrderActAcceptanceStatusResponse {
  readonly status?: OzonSupplyOrderActAcceptanceStatus;
  readonly error_message?: string;
}
