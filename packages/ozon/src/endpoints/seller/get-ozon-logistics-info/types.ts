/** Доступная схема работы с Ozon Доставкой. */
export type OzonLogisticsSchema = "UNKNOWN" | "FBO" | "FBS";

/** Информация о подключении кабинета продавца к Ozon Доставке. */
export interface GetOzonLogisticsInfoResponse {
  /** Доступные схемы работы. */
  readonly available_schemas?: readonly OzonLogisticsSchema[];

  /** `true`, если Ozon Доставка подключена. */
  readonly ozon_logistics_enabled?: boolean;
}
