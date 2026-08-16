export interface GetFbsDigitalActPdfRequest {
  /**
   * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST
   * /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * Тип электронного документа: - `act_of_acceptance` — лист отгрузки, - `act_of_mismatch` — акт о
   * расхождениях, - `act_of_excess` — акт об излишках, - `waybill` — транспортная накладная.
   *
   * Формат: `string`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly doc_type?: string;
}
export type GetFbsDigitalActPdfResponse = ArrayBuffer;
