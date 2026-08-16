export interface CreateFbsCarriageRequest {
  /**
   * `true`, если нужно создать отгрузку с прослеживаемыми товарами.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly all_blr_traceable?: boolean;

  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id?: number;

  /**
   * Дата отгрузки. По умолчанию — текущая дата.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly departure_date?: string;
}

export interface CreateFbsCarriageResponse {
  readonly carriage_id?: number;
}
