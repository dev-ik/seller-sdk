import type {
  OzonFbsPostingDetailV3,
  OzonFbsPostingGetWithParamsV3,
} from "../../shared/v3/types.js";

export interface GetFbsPostingV3Request {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: OzonFbsPostingGetWithParamsV3;
}
export interface GetFbsPostingV3Response {
  readonly result?: OzonFbsPostingDetailV3;
}
