export interface OzonUtilizationPriceSettingV1 {
  /**
   * `true`, если автоутилизация для товаров без дефектов включена.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly enabled: boolean;

  /**
   * Значение цены. Параметр обязательный, если `enabled = true`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly value?: number;
}
export interface UpdateUtilizationSettingsV1Request {
  /**
   * Максимальная цена автоутилизации для товаров без дефектов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly utilization_price: OzonUtilizationPriceSettingV1;

  /**
   * Максимальная цена автоутилизации для товаров с дефектами.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly utilization_price_defects: OzonUtilizationPriceSettingV1;
}
export type UpdateUtilizationSettingsV1Response = void;
