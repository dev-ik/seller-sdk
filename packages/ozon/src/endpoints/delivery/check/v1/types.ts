export interface CheckDeliveryAvailabilityV1Request {
  /**
   * Номер телефона покупателя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly client_phone: string;
}

export interface CheckDeliveryAvailabilityV1Response {
  readonly is_possible?: boolean;
}
