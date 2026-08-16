import type {
  OzonCargoTransportCreateError,
  OzonCargoTransportOperationStatus,
} from "../../../../shared/v1/types.js";
export interface GetTransportCargoesCreateStatusV1Request {
  /**
   * Идентификатор операции из метода
   * [/v1/cargoes/transport/create](#operation/CargoesTransportCreate).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id?: string;
}
export interface GetTransportCargoesCreateStatusV1Response {
  readonly error_reasons?: readonly OzonCargoTransportCreateError[];
  readonly result?: {
    readonly transport_cargoes?: readonly {
      readonly id?: number;
      readonly type?: "PALLET";
    }[];
  };
  readonly status?: OzonCargoTransportOperationStatus;
}
