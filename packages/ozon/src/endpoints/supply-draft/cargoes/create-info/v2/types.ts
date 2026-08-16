import type {
  OzonCargoCreateErrors,
  OzonCargoCreated,
  OzonCargoOperationStatus,
} from "../../shared/types.js";
export interface GetSupplyCargoesCreateInfoRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyCargoesCreateInfoResponse {
  readonly errors?: OzonCargoCreateErrors;
  readonly result?: { readonly cargoes?: readonly OzonCargoCreated[] };
  readonly status?: OzonCargoOperationStatus;
}
