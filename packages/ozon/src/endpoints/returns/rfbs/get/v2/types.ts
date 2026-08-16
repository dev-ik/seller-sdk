import type { OzonRfbsReturnDetailsV2 } from "../../shared/types.js";
export interface GetRfbsReturnV2Request {
  /**
   * Идентификатор заявки на возврат. Получите методом
   * [/v2/returns/rfbs/list](#operation/RFBSReturnsAPI_ReturnsRfbsListV2).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_id: number;
}
export interface GetRfbsReturnV2Response {
  readonly returns?: OzonRfbsReturnDetailsV2;
}
