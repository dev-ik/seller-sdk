export interface OzonRealizationReportHeader {
  readonly contract_date?: string;
  readonly contract_number?: string;
  readonly currency_sys_name?: string;
  readonly doc_date?: string;
  readonly number?: string;
  readonly payer_inn?: string;
  readonly payer_kpp?: string;
  readonly payer_name?: string;
  readonly receiver_inn?: string;
  readonly receiver_kpp?: string;
  readonly receiver_name?: string;
  readonly start_date?: string;
  readonly stop_date?: string;
}

export interface OzonRealizationReportCommission {
  readonly amount?: number;
  readonly bank_coinvestment?: number;
  readonly bonus?: number;
  readonly commission?: number;
  readonly compensation?: number;
  readonly pick_up_point_coinvestment?: number;
  readonly price_per_instance?: number;
  readonly quantity?: number;
  readonly standard_fee?: number;
  readonly stars?: number;
  readonly total?: number;
}

export interface OzonRealizationReportItem {
  readonly barcode?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly sku?: number;
}

export interface GetRealizationReportRequest {
  /**
   * Месяц.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly month: number;

  /**
   * Год.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly year: number;
}

export interface OzonRealizationReportRow {
  readonly commission_ratio?: number;
  readonly delivery_commission?: OzonRealizationReportCommission;
  readonly item?: OzonRealizationReportItem;
  readonly return_commission?: OzonRealizationReportCommission;
  readonly seller_price_per_instance?: number;
}
