import type {
  OzonTransportLabelStatus,
  OzonTransportOrderLabelError,
} from "../../../transport/shared/v1/types.js";
export interface GetTransportLabelsByOrderStatusV1Request {
  /**
   * Идентификатор операции из метода
   * [/v1/cargoes/label/transport-by-order/create](#operation/CargoesLabelTransportByOrderCreate).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetTransportLabelsByOrderStatusV1Response {
  readonly error_reasons?: readonly OzonTransportOrderLabelError[];
  readonly result?: {
    readonly file_url?: string;
    readonly skipped_supplies_ids?: readonly string[];
  };
  readonly status?: OzonTransportLabelStatus;
}
