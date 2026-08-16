import type {
  OzonCargoDeleteError,
  OzonCargoDeleteStatus,
} from "../../shared/types.js";
export interface GetSupplyCargoesDeleteStatusRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyCargoesDeleteStatusResponse {
  readonly errors?: OzonCargoDeleteError;
  readonly status?: OzonCargoDeleteStatus;
}
