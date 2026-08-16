export type OzonSupplyDraftDeletionSkuMode = "FULL" | "PARTIAL";
export type OzonSupplyDraftDeliveryType = "DROPOFF" | "PICKUP";
export type OzonSupplyDraftDropOffWarehouseType =
  | "DELIVERY_POINT"
  | "SORTING_CENTER"
  | "CROSS_DOCK"
  | "ORDERS_RECEIVING_POINT"
  | "FULL_FILLMENT";
export interface OzonSupplyDraftItem {
  /**
   * Количество.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}
export interface OzonSupplyDraftClusterInfo {
  /**
   * Товарный состав заявки на поставку.
   *
   * Максимум элементов: `5000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items: readonly OzonSupplyDraftItem[];

  /**
   * Идентификатор кластера размещения. Получите значение параметра методом
   * [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly macrolocal_cluster_id: number;
}
export interface OzonSupplyDraftDropOffWarehouse {
  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;

  /**
   * Тип склада, пункта выдачи заказов или сортировочного центра: - `DELIVERY_POINT` — пункт выдачи
   * заказов; - `SORTING_CENTER` — сортировочный центр; - `CROSS_DOCK` — кросс-докинг; -
   * `ORDERS_RECEIVING_POINT` — специализированный пункт приёма заказов; - `FULL_FILLMENT` —
   * фулфилмент.
   *
   * Пример: `DELIVERY_POINT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_type: OzonSupplyDraftDropOffWarehouseType;
}
export interface OzonSupplyDraftDeliveryInfo {
  /**
   * Тип поставки: - `DROPOFF` — доставка до drop-off пункта; - `PICKUP` — доставка курьером от
   * склада продавца.
   *
   * Пример: `DROPOFF`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type: OzonSupplyDraftDeliveryType;

  /**
   * Информация о пункте отгрузки. Если `type = DROPOFF`, параметр обязательный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_warehouse?: OzonSupplyDraftDropOffWarehouse;

  /**
   * Идентификатор склада продавца. Если `type = PICKUP`, параметр обязательный. Получите значение
   * параметра методом [/v1/warehouse/fbo/seller/list](#operation/WarehouseFboSellerList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly seller_warehouse_id?: number;
}
export type OzonSupplyDraftErrorMessage =
  | "UNSPECIFIED"
  | "EMPTY_ITEMS_LIST"
  | "ITEMS_COUNT_MORE_THAN_MAX"
  | "UNKNOWN_CLUSTER_IDS"
  | "ITEMS_VALIDATION"
  | "DROP_OFF_POINT_DOES_NOT_EXIST"
  | "DROP_OFF_POINT_HAS_NO_TIMESLOTS"
  | "TOTAL_VOLUME_IN_LITRES_INVALID"
  | "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE"
  | "CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER"
  | "DUPLICATE_SKUS_IN_REQUEST"
  | "CAN_NOT_CREATE_DRAFT"
  | "DRAFT_TOTALS_INVALID_ERROR"
  | "CAN_NOT_START_CALCULATION"
  | "PICKUP_IS_NOT_AVAILABLE"
  | "DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP"
  | "UNDEFINED";
export type OzonSupplyDraftErrorReason =
  | "UNSPECIFIED"
  | "ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER"
  | "ALL_ITEMS_REJECTED"
  | "NOT_AVAILABLE_CLUSTERS"
  | "ALL_ITEMS_COUNT_INVALID"
  | "ALL_ITEMS_VOLUME_INVALID"
  | "ALL_BUNDLES_EMPTY"
  | "HAS_EMPTY_BUNDLE"
  | "DISABLED_FOR_SELLER"
  | "NO_ACTIVE_SELLER_WAREHOUSE"
  | "INVALID_SELLER_WAREHOUSE"
  | "UNDEFINED";
export type OzonSupplyDraftRejectedItemReason =
  | "UNSPECIFIED"
  | "OUT_OF_ASSORTMENT"
  | "INVALID"
  | "INCOMPATIBLE_WAREHOUSE"
  | "EMPTY_BARCODE"
  | "EMPTY_PS_ATTRIBUTE"
  | "MULTIPLICITY"
  | "NO_PRICE"
  | "INVALID_ITEM_COUNT_MAX"
  | "INVALID_ITEM_COUNT_ZERO"
  | "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS"
  | "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED"
  | "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED"
  | "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED"
  | "SKU_IS_RESTRICTED"
  | "EMPTY_CLUSTER"
  | "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED"
  | "CORRUPTED_ASSORTMENT"
  | "STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN"
  | "STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN"
  | "TRACEABLE_SKU_HAS_NO_GTIN_BARCODE"
  | "TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY"
  | "SKU_HAS_INVALID_HS_CODE"
  | "SKU_HAS_STORAGE_COUNTRY_RESTRICTIONS"
  | "UNDEFINED";
export interface OzonSupplyDraftRejectedItem {
  readonly reasons?: readonly OzonSupplyDraftRejectedItemReason[];
  readonly sku?: number;
}
export interface OzonSupplyDraftItemsValidation {
  readonly macrolocal_cluster_id?: number;
  readonly rejected_items?: readonly OzonSupplyDraftRejectedItem[];
}
export interface OzonSupplyDraftCreateError {
  readonly error_message?: OzonSupplyDraftErrorMessage;
  readonly error_reasons?: readonly OzonSupplyDraftErrorReason[];
  readonly items_validation?: readonly OzonSupplyDraftItemsValidation[];
  readonly macrolocal_cluster_ids?: readonly string[];
  readonly message?: string;
  readonly skus?: readonly string[];
}
export interface CreateSupplyDraftResponse {
  readonly draft_id?: number;
  readonly errors?: readonly OzonSupplyDraftCreateError[];
}
