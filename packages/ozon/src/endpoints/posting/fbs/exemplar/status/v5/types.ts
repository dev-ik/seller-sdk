export interface GetFbsPostingProductExemplarStatusV5Request {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface OzonFbsExemplarStatusMarkV5 {
  readonly check_status?: string;
  readonly error_codes?: readonly string[];
  readonly mark?: string;
  readonly mark_type?: string;
}

export interface OzonFbsExemplarStatusItemV5 {
  readonly exemplar_id?: number;
  readonly gtd?: string;
  readonly gtd_check_status?: string;
  readonly gtd_error_codes?: readonly string[];
  readonly is_gtd_absent?: boolean;
  readonly is_rnpt_absent?: boolean;
  readonly marks?: readonly OzonFbsExemplarStatusMarkV5[];
  readonly rnpt?: string;
  readonly rnpt_check_status?: string;
  readonly rnpt_error_codes?: readonly string[];
  readonly weight?: number;
  readonly weight_check_status?: string;
  readonly weight_error_codes?: readonly string[];
}

export interface OzonFbsExemplarStatusProductV5 {
  readonly exemplars?: readonly OzonFbsExemplarStatusItemV5[];
  readonly product_id?: number;
}

export interface GetFbsPostingProductExemplarStatusV5Response {
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsExemplarStatusProductV5[];
  readonly status?: string;
}
