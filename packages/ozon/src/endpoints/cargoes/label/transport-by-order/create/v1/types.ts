import type { OzonTransportOrderLabelError } from "../../../transport/shared/v1/types.js";
export interface CreateTransportLabelsByOrderV1Request {
  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;
}
export interface CreateTransportLabelsByOrderV1Response {
  readonly error_reasons?: readonly OzonTransportOrderLabelError[];
  readonly operation_id?: string;
}
