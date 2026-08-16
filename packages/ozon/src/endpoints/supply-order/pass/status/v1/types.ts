import type { OzonSupplyOrderPassError } from "../../../shared/types.js";
export type OzonSupplyOrderPassOperationResult =
  | "Unknown"
  | "Success"
  | "InProgress"
  | "Failed";
export interface GetSupplyOrderPassStatusRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyOrderPassStatusResponse {
  readonly errors?: readonly OzonSupplyOrderPassError[];
  readonly result?: OzonSupplyOrderPassOperationResult;
}
