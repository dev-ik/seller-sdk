export interface AcceptSupplyOrderActRequest {
  /**
   * Идентификатор акта из методов
   * [/v1/supply-order/act/summary/get](#operation/SupplyOrderActSummaryGet) или
   * [/v1/supply-order/act/product/get](#operation/SupplyOrderActProductGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly act_id: number;
}
export type OzonSupplyOrderActAcceptErrorReason =
  | "UNSPECIFIED"
  | "INVALID_STATE"
  | "SUPPLY_WITH_UTD";
export interface AcceptSupplyOrderActResponse {
  readonly error_reasons?: readonly OzonSupplyOrderActAcceptErrorReason[];
  readonly operation_id?: string;
}
