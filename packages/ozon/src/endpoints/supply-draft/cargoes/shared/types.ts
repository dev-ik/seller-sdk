export type OzonCargoType = "BOX" | "PALLET";
export interface OzonCargoItem {
  /**
   * Штрихкод товара. Получите методом
   * [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcode?: string;

  /**
   * Годен до.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly expires_at?: string;

  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Размер кванта.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quant?: number;

  /**
   * Количество товара.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity?: number;
}
export interface OzonCargoInputValue {
  /**
   * Тип грузоместа: - `BOX` — коробка. - `PALLET` — палета.
   *
   * Пример: `BOX`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type: OzonCargoType;

  /**
   * Информация о товарах в грузоместе.
   *
   * Максимум элементов: `5000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items?: readonly OzonCargoItem[];
}
export interface OzonCargoInput {
  /**
   * Уникальный ключ для идентификации грузоместа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly key: string;

  /**
   * Информация о грузоместе.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly value: OzonCargoInputValue;
}
export type OzonCargoCreateErrorReason =
  | "INVALID_STATE"
  | "VALIDATION_FAILED"
  | "WAREHOUSE_LIMITS_EXCEED"
  | "SUPPLY_NOT_BELONG_CONTRACTOR"
  | "SUPPLY_NOT_BELONG_COMPANY"
  | "IS_FINALIZED"
  | "SKU_DISTRIBUTION_DISABLED"
  | "SUPPLY_IS_NOT_EMPTY"
  | "OPERATION_NOT_FOUND"
  | "OPERATION_FAILED";
export type OzonCargoItemValidationError =
  | "SUPPLY_ITEM_NOT_FOUND"
  | "DUPLICATED_SUPPLY_ITEM"
  | "BEFORE_DEADLINE"
  | "SAME_BARCODES"
  | "SAME_ARTICLES"
  | "NOT_UNIQUE_SKU_BY_PRODUCT"
  | "QUANTITY_NOT_DIVISIBLE_BY_QUANT"
  | "NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO"
  | "NOT_ONE_QUANT_PALLET_SKU"
  | "NOT_ECONOM_SKU"
  | "QUANTITY_LESS_ONE"
  | "SUPPLY_ITEM_WITH_QUANT_NOT_FOUND";
export interface OzonCargoCreateItemValidation {
  readonly barcode?: string;
  readonly cargo_key?: string;
  readonly item?: string;
  readonly quant?: number;
  readonly type?: OzonCargoItemValidationError;
}
export interface OzonCargoCreateErrors {
  readonly error_reasons?: readonly (
    | OzonCargoCreateErrorReason
    | "ERROR_REASON_UNSPECIFIED"
  )[];
  readonly items_validation?: readonly OzonCargoCreateItemValidation[];
}
export type OzonCargoOperationStatus =
  | "STATUS_UNSPECIFIED"
  | "SUCCESS"
  | "IN_PROGRESS"
  | "FAILED";
export interface OzonCargoCreated {
  readonly key?: string;
  readonly value?: { readonly cargo_id?: number };
}
export type OzonCargoContentType = "UNSPECIFIED" | "MONO" | "MIX" | "NONE";
export type OzonCargoPlacementZoneType =
  | "UNSPECIFIED"
  | "UNDEFINED"
  | "SINGLE"
  | "MULTI";
export type OzonCargoTrackingStatus =
  | "UNSPECIFIED"
  | "READY_TO_SUPPLY"
  | "REFUSED"
  | "ON_WAREHOUSE"
  | "NOT_DELIVERED"
  | "ACCEPTING"
  | "PROCESSED"
  | "ON_POINT_SHIPMENT"
  | "ON_TRANSIT_WAREHOUSE"
  | "LOST"
  | "CREATED"
  | "DELETED";
export type OzonCargoTrackingType =
  | "UNSPECIFIED"
  | "EXPECTED_ARRIVAL"
  | "ACTUAL_ARRIVAL";
export interface OzonCargoTrackingInfo {
  readonly date?: string;
  readonly status?: OzonCargoTrackingStatus;
  readonly type?: OzonCargoTrackingType;
}
export interface OzonSupplyCargo {
  readonly bundle_id?: string;
  readonly cargo_id?: number;
  readonly content_type?: OzonCargoContentType;
  readonly placement_zone_type?: OzonCargoPlacementZoneType;
  readonly tracking_info?: OzonCargoTrackingInfo;
  readonly type?: "UNSPECIFIED" | OzonCargoType;
}
export interface OzonSupplyCargoes {
  readonly bundle_id?: string;
  readonly cargoes?: readonly OzonSupplyCargo[];
  readonly supply_id?: number;
}
export type OzonCargoDeleteSupplyError =
  | "SUPPLY_NOT_FOUND"
  | "CANT_DELETE_ALL_CARGOES"
  | "SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR"
  | "SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY"
  | "SUPPLY_CARGOES_IS_FINALIZED"
  | "SUPPLY_CARGOES_LOCKED"
  | "OPERATION_NOT_FOUND";
export interface OzonCargoDeleteError {
  readonly cargo_error_reasons?: readonly {
    readonly cargo_id?: number;
    readonly error_reasons?: readonly "CARGO_NOT_FOUND"[];
  }[];
  readonly supply_error_reasons?: readonly OzonCargoDeleteSupplyError[];
}
export type OzonCargoDeleteStatus = "SUCCESS" | "IN_PROGRESS" | "ERROR";
export interface OzonCargoRuleState {
  readonly is_applicable?: boolean;
  readonly is_required?: boolean;
  readonly satisfied?: boolean;
}
export interface OzonCargoRulesCheck {
  readonly supply_id?: number;
  readonly cargoes_presents_rule?: {
    readonly cargo_count_per_type?: readonly {
      readonly count?: number;
      readonly type?: OzonCargoType;
    }[];
    readonly count?: number;
    readonly satisfied?: boolean;
  };
  readonly edit_deadline_expire_rule?: OzonCargoRuleState;
  readonly expire_dates_presented_rule?: OzonCargoRuleState & {
    readonly count_sku_with_expiration?: number;
    readonly count_sku_with_expiration_filled?: number;
  };
  readonly is_valid_distribution_rule?: OzonCargoRuleState & {
    readonly count_distributed_sku?: number;
    readonly count_sku_total?: number;
    readonly percents_int?: number;
  };
  readonly package_units_with_distribution_rule?: OzonCargoRuleState & {
    readonly count_all?: number;
    readonly count_with_distribution?: number;
  };
  readonly placement_zones_rule?: OzonCargoRuleState & {
    readonly count_cargoes_all?: number;
    readonly count_cargoes_with_mono_placement_zone?: number;
  };
}
export type OzonCargoLabelError =
  | "INVALID_STATE"
  | "OPERATION_NOT_FOUND"
  | "OPERATION_FAILED"
  | "SUPPLY_NOT_BELONG_CONTRACTOR"
  | "SUPPLY_NOT_BELONG_COMPANY"
  | "SUPPLY_IS_EMPTY"
  | "CARGOES_NOT_FOUND";
export interface OzonCargoLabelErrors {
  readonly error_reasons?: readonly OzonCargoLabelError[];
}
export type OzonCargoLabelStatus = "SUCCESS" | "IN_PROGRESS" | "FAILED";
