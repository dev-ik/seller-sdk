import type {
  OzonTransportLabelError,
  OzonTransportLabelStatus,
} from "../../shared/v1/types.js";
export interface GetTransportLabelsStatusV1Request {
  /**
   * Идентификатор операции из метода
   * [/v1/cargoes/label/transport/create](#operation/CargoesLabelTransportCreate).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_id: string;
}
export interface GetTransportLabelsStatusV1Response {
  readonly error_reasons?: readonly OzonTransportLabelError[];
  readonly result?: { readonly file_url?: string };
  readonly status?: OzonTransportLabelStatus;
}
