export type OzonReceiptOperationTypeV1 = "UNSPECIFIED" | "COMMODITY";
export type OzonReceiptTypeV1 = "UNSPECIFIED" | "INCOMING" | "REFUND";

export interface OzonSellerReceiptV1 {
  readonly created_at?: string;
  readonly operation_type?: OzonReceiptOperationTypeV1;
  readonly order_id?: number;
  readonly parent_receipt_id?: string;
  readonly posting_numbers?: readonly string[];
  readonly receipt_id?: string;
  readonly receipt_number?: string;
  readonly type?: OzonReceiptTypeV1;
  readonly updated_at?: string;
}
