import type { OzonTransportLabelError } from "../../shared/v1/types.js";
export interface CreateTransportLabelsV1Request {
  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * Идентификаторы транспортных грузомест. Если ничего не передать, в ответе вернутся этикетки для
   * всех транспортных грузомест в поставке.
   *
   * Максимум элементов: `40`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly transport_cargo_ids?: readonly string[];
}
export interface CreateTransportLabelsV1Response {
  readonly error_reasons?: readonly OzonTransportLabelError[];
  readonly operation_id?: string;
}
