import type {
  OzonCargoDeleteErrors,
  OzonFboCargoDeleteStatus,
} from "../../shared/v2/types.js";
export interface GetCargoesDeleteStatusV2Request {
  /**
   * Идентификатор операции из метода [/v2/cargoes/delete](#operation/CargoesDeleteV2).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetCargoesDeleteStatusV2Response {
  readonly errors?: OzonCargoDeleteErrors;
  readonly status?: OzonFboCargoDeleteStatus;
}
