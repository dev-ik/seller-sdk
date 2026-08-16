export interface OzonFbsExemplarMark {
  readonly mark?: string;
  readonly mark_type?: string;
}

export interface OzonFbsProductExemplar {
  readonly exemplar_id?: number;
  readonly gtd?: string;
  readonly is_gtd_absent?: boolean;
  readonly is_rnpt_absent?: boolean;
  readonly marks?: readonly OzonFbsExemplarMark[];
  readonly rnpt?: string;
  readonly weight?: number;
}
