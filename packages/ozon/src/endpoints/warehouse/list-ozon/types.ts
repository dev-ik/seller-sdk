/** Тип склада Ozon, используемый как фильтр запроса. */
export type OzonWarehouseTypeFilter =
  | "FULL_FILLMENT"
  | "FULL_FILLMENT_RETURNS"
  | "FULL_FILLMENT_DEFECT"
  | "EXPRESS_DARK_STORE"
  | "CROSS_DOCK"
  | "SORTING_CENTER"
  | "PHARMACY"
  | "DISTRIBUTION_CENTER"
  | "ORDERS_RECEIVING_POINT"
  | "OUTSOURCE_FF"
  | "B2B"
  | "EXTERNAL_FF";

/** Тип склада в ответе Ozon. */
export type OzonWarehouseType = "UNSPECIFIED" | OzonWarehouseTypeFilter;

/** Параметры получения списка складов Ozon. */
export interface ListOzonWarehousesRequest {
  /** Типы складов, которые нужно вернуть. */
  readonly warehouse_types?: readonly OzonWarehouseTypeFilter[];
}

/** Склад Ozon. */
export interface OzonWarehouse {
  /** Адрес склада. */
  readonly address?: string;
  /** Код страны в формате ISO 3166-1 numeric. */
  readonly country_iso_numeric?: number;
  /** `true`, если склад активен. */
  readonly is_active?: boolean;
  /** `true`, если склад является кросс-доком. */
  readonly is_cross_dock?: boolean;
  /** `true`, если склад является распределительным центром. */
  readonly is_distribution_center?: boolean;
  /** `true`, если склад работает с электронным документооборотом. */
  readonly is_edo?: boolean;
  /** `true`, если склад относится к типу Fresh. */
  readonly is_express?: boolean;
  /** `true`, если склад доступен для создания поставки. */
  readonly is_for_supply?: boolean;
  /** Название склада. */
  readonly name?: string;
  /** Короткое название склада. */
  readonly short_name?: string;
  /** Часовой пояс склада. */
  readonly timezone?: string;
  /** Идентификатор склада. */
  readonly warehouse_id?: number;
  /** Тип склада. */
  readonly warehouse_type?: OzonWarehouseType;
}

/** Ответ со списком складов Ozon. */
export interface ListOzonWarehousesResponse {
  /** Склады Ozon. */
  readonly warehouses?: readonly OzonWarehouse[];
}
