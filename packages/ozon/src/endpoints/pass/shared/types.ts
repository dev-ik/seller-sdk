export interface OzonPassVehicleInput {
  /**
   * ФИО водителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly driver_name: string;

  /**
   * Номер телефона водителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly driver_phone: string;

  /**
   * Номер автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_license_plate: string;

  /**
   * Модель автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_model: string;
}

export interface OzonPassCreationResponse {
  readonly arrival_pass_ids?: readonly string[];
}
