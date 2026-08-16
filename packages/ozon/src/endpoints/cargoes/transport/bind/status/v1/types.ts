import type {
  OzonCargoTransportBindError,
  OzonCargoTransportOperationStatus,
} from "../../../../shared/v1/types.js";
export interface GetTransportCargoesBindStatusV1Request {
  /**
   * Идентификатор операции из метода [/v1/cargoes/transport/bind](#operation/CargoesTransportBind).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetTransportCargoesBindStatusV1Response {
  readonly error_reasons?: readonly OzonCargoTransportBindError[];
  readonly status?: OzonCargoTransportOperationStatus;
}
