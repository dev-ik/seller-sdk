import type { OzonCargoOperationResponse } from "../../../shared/v1/types.js";
export interface ActivateTransportCargoesV1Request {
  /**
   * `true`, чтобы включить транспортные грузоместа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_transport: boolean;

  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;
}
export type ActivateTransportCargoesV1Response = OzonCargoOperationResponse;
