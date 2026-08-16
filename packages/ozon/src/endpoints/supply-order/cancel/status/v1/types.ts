export type OzonSupplyOrderCancelError =
  | "INVALID_ORDER_STATE"
  | "ORDER_IS_VIRTUAL"
  | "ORDER_DOES_NOT_BELONG_TO_CONTRACTOR"
  | "ORDER_DOES_NOT_BELONG_TO_COMPANY"
  | "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS";
export type OzonSupplyCancelError =
  | "INVALID_SUPPLY_STATE"
  | "SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR"
  | "SUPPLY_DOES_NOT_BELONG_TO_COMPANY"
  | "SUPPLY_DOES_NOT_BELONG_TO_ORDER"
  | "SUPPLY_BELONGS_TO_VIRTUAL_ORDER"
  | "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS";
export type OzonSupplyOrderCancelStatus = "SUCCESS" | "IN_PROGRESS" | "ERROR";
export interface GetSupplyOrderCancelStatusRequest {
  /**
   * Идентификатор операции на отмену заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface OzonSupplyCancelResult {
  readonly error_reasons?: readonly OzonSupplyCancelError[];
  readonly is_supply_cancelled?: boolean;
  readonly supply_id?: number;
}
export interface OzonSupplyOrderCancelResult {
  readonly is_order_cancelled?: boolean;
  readonly supplies?: readonly OzonSupplyCancelResult[];
}
export interface GetSupplyOrderCancelStatusResponse {
  readonly error_reasons?: readonly OzonSupplyOrderCancelError[];
  readonly result?: OzonSupplyOrderCancelResult;
  readonly status?: OzonSupplyOrderCancelStatus;
}
