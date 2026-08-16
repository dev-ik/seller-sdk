import type { OzonFbsProductExemplar } from "../../shared/types.js";

export interface CreateOrGetFbsPostingProductExemplarsV6Request {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface OzonFbsExemplarProductV6 {
  readonly exemplars?: readonly OzonFbsProductExemplar[];
  readonly has_imei?: boolean;
  readonly is_gtd_needed?: boolean;
  readonly is_jw_uin_needed?: boolean;
  readonly is_mandatory_mark_needed?: boolean;
  readonly is_mandatory_mark_possible?: boolean;
  readonly is_rnpt_needed?: boolean;
  readonly is_weight_needed?: boolean;
  readonly product_id?: number;
  readonly quantity?: number;
  readonly weight_max?: number;
  readonly weight_min?: number;
}

export interface CreateOrGetFbsPostingProductExemplarsV6Response {
  readonly multi_box_qty?: number;
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsExemplarProductV6[];
}
