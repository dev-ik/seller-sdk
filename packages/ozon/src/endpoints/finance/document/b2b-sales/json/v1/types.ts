export interface GetB2BSalesJsonReportV1Request {
  /**
   * Отчётный период в формате `YYYY-MM`. Отчёт доступен до января 2019 включительно.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;
}

export interface OzonB2BSalesBuyer {
  readonly address?: string;
  readonly inn?: string;
  readonly kpp?: string;
  readonly name?: string;
}

export interface OzonB2BSalesOperation {
  readonly amount?: number;
  readonly cost_without_vat?: number;
  readonly date?: string;
  readonly gtd_number?: string;
  readonly origin_country?: string;
  readonly posting_number?: string;
  readonly price?: number;
  readonly quantity?: number;
  readonly rnpt_number?: string;
  readonly type?: "DELIVERY" | "RETURN";
  readonly vat_amount?: number;
  readonly vat_rate?: number;
}

export interface OzonB2BSalesInvoice {
  readonly buyer_info?: OzonB2BSalesBuyer;
  readonly currency?: string;
  readonly currency_code?: number;
  readonly info?: {
    readonly date?: string;
    readonly number?: string;
    readonly status?: string;
    readonly type?: "UPD" | "UKD";
  };
  readonly offer_id?: string;
  readonly operations?: readonly OzonB2BSalesOperation[];
  readonly product_name?: string;
  readonly sku?: number;
  readonly unit_code?: number;
  readonly unit_name?: string;
}

export interface GetB2BSalesJsonReportV1Response {
  readonly date_from?: string;
  readonly date_to?: string;
  readonly invoices?: readonly OzonB2BSalesInvoice[];
  readonly seller_info?: {
    readonly company_name?: string;
    readonly inn?: string;
    readonly kpp?: string;
  };
}
