import type { OzonInvoiceHsCode } from "../shared/types.js";
export interface GetInvoiceRequest {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface OzonInvoice {
  readonly date?: string;
  readonly file_url?: string;
  readonly hs_codes?: readonly OzonInvoiceHsCode[];
  readonly number?: string;
  readonly price?: number;
  readonly price_currency?: string;
}
export interface GetInvoiceResponse {
  readonly result?: OzonInvoice;
}
