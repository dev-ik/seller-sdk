export interface OzonRfbsReturnProductV2 {
  readonly currency_code?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: number;
  readonly sku?: number;
}
export interface OzonRfbsReturnListStateV2 {
  readonly group_state?: string;
  readonly money_return_state_name?: string;
  readonly state?: string;
  readonly state_name?: string;
}
export interface OzonRfbsReturnListItemV2 {
  readonly client_name?: string;
  readonly created_at?: string;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly product?: OzonRfbsReturnProductV2;
  readonly return_id?: number;
  readonly return_number?: string;
  readonly state?: OzonRfbsReturnListStateV2;
}
export interface OzonRfbsReturnNamedIdV2 {
  readonly id?: number;
  readonly name?: string;
}
export interface OzonRfbsReturnRejectionReasonV2
  extends OzonRfbsReturnNamedIdV2 {
  readonly hint?: string;
  readonly is_comment_required?: boolean;
}
export interface OzonRfbsReturnReasonV2 extends OzonRfbsReturnNamedIdV2 {
  readonly is_defect?: boolean;
}
export interface OzonRfbsReturnStateV2 {
  readonly state?: string;
  readonly state_name?: string;
}
export interface OzonRfbsReturnDetailsV2 {
  readonly available_actions?: readonly OzonRfbsReturnNamedIdV2[];
  readonly client_name?: string;
  readonly client_photo?: readonly string[];
  readonly client_return_method_type?: OzonRfbsReturnNamedIdV2;
  readonly comment?: string;
  readonly created_at?: string;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly product?: OzonRfbsReturnProductV2;
  readonly rejection_comment?: string;
  readonly rejection_reason?: readonly OzonRfbsReturnRejectionReasonV2[];
  readonly return_method_description?: string;
  readonly return_number?: string;
  readonly return_reason?: OzonRfbsReturnReasonV2;
  readonly ru_post_tracking_number?: string;
  readonly state?: OzonRfbsReturnStateV2;
  readonly warehouse_id?: number;
}
