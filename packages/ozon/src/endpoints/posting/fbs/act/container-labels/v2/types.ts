export interface GetFbsActContainerLabelsRequest {
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
export type GetFbsActContainerLabelsResponse = ArrayBuffer;
