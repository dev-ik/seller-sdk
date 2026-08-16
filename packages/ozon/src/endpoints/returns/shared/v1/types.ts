export interface OzonReturnMoneyV1 {
  readonly currency_code?: string;
  readonly price?: number;
}
export interface OzonReturnPlaceV1 {
  readonly address?: string;
  readonly id?: number;
  readonly name?: string;
}
export interface OzonReturnStorageV1 {
  readonly arrived_moment?: string;
  readonly days?: number;
  readonly sum?: OzonReturnMoneyV1;
  readonly tariffication_first_date?: string;
  readonly tariffication_start_date?: string;
  readonly utilization_forecast_date?: string;
  readonly utilization_sum?: OzonReturnMoneyV1;
}
export interface OzonReturnProductV1 {
  readonly commission?: OzonReturnMoneyV1;
  readonly commission_percent?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: OzonReturnMoneyV1;
  readonly price_without_commission?: OzonReturnMoneyV1;
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonReturnLogisticV1 {
  readonly barcode?: string;
  readonly cancelled_with_compensation_moment?: string;
  readonly final_moment?: string;
  readonly return_date?: string;
  readonly technical_return_moment?: string;
}
export interface OzonReturnStatusV1 {
  readonly display_name?: string;
  readonly id?: number;
  readonly sys_name?: string;
}
export interface OzonReturnVisualV1 {
  readonly change_moment?: string;
  readonly status?: OzonReturnStatusV1;
}
export interface OzonReturnAdditionalInfoV1 {
  readonly is_opened?: boolean;
  readonly is_super_econom?: boolean;
}
export interface OzonReturnCompensationV1 {
  readonly change_moment?: string;
  readonly status?: OzonReturnStatusV1;
}
export interface OzonReturnV1 {
  readonly additional_info?: OzonReturnAdditionalInfoV1;
  readonly clearing_id?: number;
  readonly company_id?: number;
  readonly compensation_status?: OzonReturnCompensationV1;
  readonly exemplars?: readonly { readonly id?: number }[];
  readonly id?: number;
  readonly logistic?: OzonReturnLogisticV1;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly place?: OzonReturnPlaceV1;
  readonly posting_number?: string;
  readonly product?: OzonReturnProductV1;
  readonly return_clearing_id?: number;
  readonly return_reason_name?: string;
  readonly schema?: string;
  readonly source_id?: number;
  readonly storage?: OzonReturnStorageV1;
  readonly target_place?: OzonReturnPlaceV1;
  readonly type?: string;
  readonly visual?: OzonReturnVisualV1;
}
