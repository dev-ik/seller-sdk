export type OzonWarehouseProductValidationState = "UNSPECIFIED" | "NOT_VALID";
export type OzonWarehouseProductRestrictionCharacteristic =
  | "UNSPECIFIED"
  | "LENGTH"
  | "WIDTH"
  | "HEIGHT"
  | "WEIGHT"
  | "SUM_OF_DIMENSIONS"
  | "VOLUME_WEIGHT"
  | "VOLUME"
  | "PRICE"
  | "LONGEST_SIDE";
export type OzonWarehouseProductValidationErrorType =
  | "UNSPECIFIED"
  | "LESS_THAN_MIN"
  | "GREATER_THAN_MAX";

export interface GetWarehouseInvalidProductsRequest {
  /**
   * Идентификатор склада. Получите значение параметра методом
   * [/v1/warehouse/warehouses-with-invalid-products](#operation/WarehouseWithInvalidProducts).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;

  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
   * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;
}

export interface OzonWarehouseInvalidProductSize {
  readonly height_mm?: number;
  readonly length_mm?: number;
  readonly width_mm?: number;
}

export interface OzonWarehouseInvalidProductError {
  readonly characteristic?: OzonWarehouseProductRestrictionCharacteristic;
  readonly restriction_price?: {
    readonly currency?: string;
    readonly value?: number;
  };
  readonly restriction_vwc?: number;
  readonly template_id?: number;
  readonly type?: OzonWarehouseProductValidationErrorType;
}

export interface OzonWarehouseInvalidProductValidationResult {
  readonly item?: {
    readonly size?: OzonWarehouseInvalidProductSize;
    readonly sku?: number;
    readonly weight_g?: number;
  };
  readonly state?: OzonWarehouseProductValidationState;
  readonly validation_errors?: readonly OzonWarehouseInvalidProductError[];
}

export interface GetWarehouseInvalidProductsResponse {
  readonly has_next?: boolean;
  readonly last_id?: number;
  readonly validation_results?: readonly OzonWarehouseInvalidProductValidationResult[];
  readonly warehouse_id?: number;
}
