export interface VerifyFbsPickupCodeV1Request {
  /**
   * Код курьера.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly pickup_code: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface VerifyFbsPickupCodeV1Response {
  readonly valid?: boolean;
}
