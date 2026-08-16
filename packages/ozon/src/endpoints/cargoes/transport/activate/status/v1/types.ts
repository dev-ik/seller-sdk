import type {
  OzonCargoTransportActivateError,
  OzonCargoTransportOperationStatus,
} from "../../../../shared/v1/types.js";
export interface GetTransportCargoesActivationStatusV1Request {
  /**
   * Идентификатор операции из метода
   * [/v1/cargoes/transport/activate](#operation/CargoesTransportActivate).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetTransportCargoesActivationStatusV1Response {
  readonly error_reasons?: readonly OzonCargoTransportActivateError[];
  readonly status?: OzonCargoTransportOperationStatus;
}
