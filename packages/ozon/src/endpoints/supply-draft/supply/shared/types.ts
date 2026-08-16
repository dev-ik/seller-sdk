export type OzonDraftSupplyType = "CROSSDOCK" | "DIRECT" | "MULTI_CLUSTER";
export type OzonDraftSupplyCreateError =
  | "UNSPECIFIED"
  | "SOME_SERVICE_ERROR"
  | "ORDER_SKU_LIMIT"
  | "INVALID_QUANTITY_OR_QUANT"
  | "ORDER_ALREADY_CREATED"
  | "ORDER_CREATION_IN_PROGRESS"
  | "DRAFT_DOES_NOT_EXIST"
  | "CONTRACTOR_CAN_NOT_CREATE_ORDER"
  | "INACTIVE_CONTRACT"
  | "DRAFT_INCORRECT_STATE"
  | "INVALID_VOLUME"
  | "INVALID_ROUTE"
  | "INVALID_STORAGE_WAREHOUSE"
  | "INVALID_STORAGE_REGION"
  | "INVALID_SPLITTING"
  | "INVALID_SUPPLY_CONTENT"
  | "TIMESLOT_NOT_AVAILABLE"
  | "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE"
  | "XDOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER"
  | "DRAFT_IS_LOCKED"
  | "INVALID_PACKAGE_UNITS_COUNTS"
  | "SELLER_CONVERSATION_DOES_NOT_EXIST"
  | "USER_CAN_NOT_CREATE_SELLER_CONVERSATION"
  | "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED_FOR_DROP_OFF_POINT"
  | "INVALID_SELLER_WAREHOUSE"
  | "PICKUP_ORDER_LIMIT_EXCEEDED"
  | "MINIMUM_VOLUME_IN_LITRES_INVALID"
  | "INVALID_CLUSTERS_COUNT"
  | "CAN_NOT_CREATE_ORDER"
  | "UNDEFINED";
export interface OzonDraftSupplySelectedWarehouse {
  /**
   * Идентификатор кластера размещения.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly macrolocal_cluster_id: number;

  /**
   * Идентификатор склада размещения. Получите значение параметра методом
   * [/v2/draft/create/info](#operation/DraftCreateInfo). Только для поставок с типом `DIRECT`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly storage_warehouse_id: number;
}
