import type {
  OzonSupplyContentUpdateError,
  OzonSupplyContentUpdateStatus,
} from "../../shared/types.js";
export interface GetSupplyOrderContentUpdateStatusRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyOrderContentUpdateStatusResponse {
  readonly errors?: readonly Exclude<
    OzonSupplyContentUpdateError,
    | "CONTRACT_IS_NOT_FOUND"
    | "COMPANY_DOES_NOT_BELONGS_TO_CONTRACTOR"
    | "ORDER_IS_NOT_FOUND"
    | "ORDER_DOES_NOT_BELONGS_TO_COMPANY"
    | "SUPPLY_IS_NOT_FOUND"
    | "SUPPLY_DOES_NOT_BELONGS_TO_ORDER"
    | "UTD_IS_UPLOADED"
    | "STORAGE_WAREHOUSE_IS_NOT_WMS"
    | "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS"
    | "ORDER_DOES_NOT_BELONG_TO_CONTRACTOR"
  >[];
  readonly new_bundle_id?: string;
  readonly status?: OzonSupplyContentUpdateStatus;
}
