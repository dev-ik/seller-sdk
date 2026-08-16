import type { OzonDraftSupplyCreateError } from "../../shared/types.js";
export type OzonDraftSupplyCreateStatus =
  | "UNSPECIFIED"
  | "SUCCESS"
  | "IN_PROGRESS"
  | "FAILED";
export interface GetSupplyOrderFromDraftStatusRequest {
  /**
   * Идентификатор черновика. Получите значение параметра методом
   * [/v2/draft/supply/create](#operation/DraftSupplyCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly draft_id: number;
}
export interface GetSupplyOrderFromDraftStatusResponse {
  readonly error_reasons?: readonly Exclude<
    OzonDraftSupplyCreateError,
    "MINIMUM_VOLUME_IN_LITRES_INVALID" | "CAN_NOT_CREATE_ORDER"
  >[];
  readonly order_id?: number;
  readonly status?: OzonDraftSupplyCreateStatus;
}
