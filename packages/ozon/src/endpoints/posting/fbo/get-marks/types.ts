/** Параметры получения маркировок FBO-отправлений. */
export interface GetFboPostingMarksRequest {
  /** Номера отправлений. */
  readonly posting_numbers?: readonly string[];
}

/** Выданный покупателю экземпляр товара. */
export interface OzonFboPostingIssuedExemplar {
  /** Идентификатор экземпляра. */
  readonly exemplar_id?: number;
  /** Коды маркировки «Честный ЗНАК». */
  readonly mandatory_marks?: readonly string[];
  /** Номер отправления. */
  readonly posting_number?: string;
  /** Идентификатор товара Ozon. */
  readonly sku?: number;
}

/** Не выданный покупателю экземпляр товара. */
export interface OzonFboPostingNonIssuedExemplar {
  /** Идентификатор экземпляра. */
  readonly exemplar_id?: number;
  /** Номер отправления. */
  readonly posting_number?: string;
  /** Идентификатор товара Ozon. */
  readonly sku?: number;
}

/** Ответ с маркировками экземпляров FBO-отправлений. */
export interface GetFboPostingMarksResponse {
  /** Неверные номера отправлений. */
  readonly invalid_postings?: readonly string[];
  /** Выданные покупателям экземпляры. */
  readonly issued_exemplars?: readonly OzonFboPostingIssuedExemplar[];
  /** Не выданные покупателям экземпляры. */
  readonly non_issued_exemplars?: readonly OzonFboPostingNonIssuedExemplar[];
}
