import type {
  OzonCargoLabelErrors,
  OzonCargoLabelStatus,
} from "../../../shared/types.js";
export interface GetSupplyCargoLabelsRequest {
  /**
   * Идентификатор операции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetSupplyCargoLabelsResponse {
  readonly result?: { readonly file_guid?: string; readonly file_url?: string };
  readonly status?: OzonCargoLabelStatus;
  readonly errors?: OzonCargoLabelErrors;
}
