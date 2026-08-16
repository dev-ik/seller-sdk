export type OzonWarehouseOperationStatus =
  | "UNSPECIFIED"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "ERROR";

export type OzonWarehouseOperationType =
  | "UNSPECIFIED"
  | "CREATE_FBS_WAREHOUSE"
  | "UPDATE_FBS_WAREHOUSE"
  | "SET_FIRST_MILE"
  | "WAREHOUSE_ENABLE_DISABLE"
  | "WAREHOUSE_PAUSE_UNPAUSE";

export interface GetFbsWarehouseOperationStatusRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}

export interface GetFbsWarehouseOperationStatusResponse {
  readonly error?: {
    readonly code?: string;
    readonly message?: string;
  };
  readonly result?: { readonly entity_id?: number };
  readonly status?: OzonWarehouseOperationStatus;
  readonly type?: OzonWarehouseOperationType;
}
