export interface GetFbsActPdfRequest {
  /**
   * Номер задания на формирование документов (также идентификатор перевозки) из методов
   * [/v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate) или
   * [/v1/carriage/create](#operation/CarriageAPI_CarriageCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;
}
export type GetFbsActPdfResponse = ArrayBuffer;
