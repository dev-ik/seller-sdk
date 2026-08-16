import type { OzonSupplyOrderPassError } from "../../../shared/types.js";
export interface OzonSupplyOrderPassVehicle {
  /**
   * Имя водителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly driver_name: string;

  /**
   * Телефон водителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly driver_phone: string;

  /**
   * Модель автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_model: string;

  /**
   * Номер автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_number: string;
}
export interface CreateSupplyOrderPassRequest {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_order_id: number;

  /**
   * Информация о водителе и автомобиле.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle: OzonSupplyOrderPassVehicle;
}
export interface CreateSupplyOrderPassResponse {
  readonly error_reasons?: readonly OzonSupplyOrderPassError[];
  readonly operation_id?: string;
}
