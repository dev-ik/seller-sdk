export interface GetSupplyOrderActSummaryRequest {
  /**
   * Идентификатор заявки на поставку из метода [/v3/supply-order/list](#operation/SupplyOrderList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;
}
export type OzonSupplyOrderActState =
  | "UNSPECIFIED"
  | "AWAITING_APPROVAL_BY_SELLER"
  | "REJECT_BY_SELLER"
  | "AGREEMENT_WITH_SELLER"
  | "ACCEPTED";
export type OzonSupplyOrderActType =
  | "UNSPECIFIED"
  | "ACCEPTANCE"
  | "DEFECT"
  | "SURPLUS"
  | "SHORTCOMING";
export interface OzonSupplyOrderActMoney {
  readonly amount?: string;
  readonly currency?: string;
}
export interface OzonSupplyOrderActAmount {
  readonly amount?: OzonSupplyOrderActMoney;
  readonly amount_vat?: OzonSupplyOrderActMoney;
  readonly amount_without_vat?: OzonSupplyOrderActMoney;
}
export interface OzonSupplyOrderActSummary {
  readonly approved_amount?: OzonSupplyOrderActAmount;
  readonly approved_quantity?: number;
  readonly declared_quantity?: number;
  readonly fact_amount?: OzonSupplyOrderActAmount;
  readonly fact_quantity?: number;
  readonly sku_quantity?: number;
  readonly unidentified_quantity?: number;
}
export interface OzonSupplyOrderAct {
  readonly act_id?: number;
  readonly act_number?: string;
  readonly act_state?: OzonSupplyOrderActState;
  readonly created_date?: string;
  readonly deadline_utc?: string;
  readonly summary?: OzonSupplyOrderActSummary;
  readonly type?: OzonSupplyOrderActType;
}
export interface OzonSupplyOrderActs {
  readonly is_agreement_completed?: boolean;
  readonly supply_acts?: readonly OzonSupplyOrderAct[];
  readonly supply_id?: number;
}
export interface GetSupplyOrderActSummaryResponse {
  readonly supplies_acts?: readonly OzonSupplyOrderActs[];
}
