import type { OzonFbsBooleanMutationResponse } from "../../shared/boolean-mutation/types.js";
export interface CancelFbsPostingV2Request {
  /**
   * Идентификатор причины отмены отправления.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cancel_reason_id: number;

  /**
   * Дополнительная информация по отмене. Если `cancel_reason_id = 402`, параметр обязательный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cancel_reason_message?: string;

  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export type CancelFbsPostingV2Response = OzonFbsBooleanMutationResponse;
