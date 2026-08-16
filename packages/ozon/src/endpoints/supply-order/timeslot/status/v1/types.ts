import type { OzonSupplyOrderTimeslotUpdateError } from "../../../shared/types.js";
export type OzonSupplyOrderTimeslotOperationStatus =
  | "STATUS_UNSPECIFIED"
  | "STATUS_ERROR"
  | "STATUS_IN_PROGRESS"
  | "STATUS_SUCCESS";
export interface GetSupplyOrderTimeslotStatusRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyOrderTimeslotStatusResponse {
  readonly errors?: readonly OzonSupplyOrderTimeslotUpdateError[];
  readonly status?: OzonSupplyOrderTimeslotOperationStatus;
}
