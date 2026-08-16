export interface OzonUtilizationMoneyV1 {
  readonly amount?: string;
  readonly currency?: string;
}
export interface GetUtilizationSettingsV1Response {
  readonly min_price?: OzonUtilizationMoneyV1;
  readonly utilization_settings?: {
    readonly utilization_price?: OzonUtilizationMoneyV1;
    readonly utilization_price_defects?: OzonUtilizationMoneyV1;
  };
}
