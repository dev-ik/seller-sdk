export interface GetFbsActStatusRequest {
  /**
   * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST
   * /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;
}
export interface OzonFbsActStatus {
  readonly act_type?: string;
  readonly added_to_act?: readonly string[];
  readonly removed_from_act?: readonly string[];
  readonly status?: string;
  readonly is_partial?: boolean;
  readonly has_postings_for_next_carriage?: boolean;
  readonly partial_num?: number;
}
export interface GetFbsActStatusResponse {
  readonly result?: OzonFbsActStatus;
}
