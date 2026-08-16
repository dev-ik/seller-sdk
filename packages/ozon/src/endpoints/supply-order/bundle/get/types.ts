export type OzonSupplyOrderBundleSortField =
  | "SKU"
  | "NAME"
  | "QUANTITY"
  | "TOTAL_VOLUME_IN_LITRES";
export type OzonSupplyOrderBundleSfboAttribute =
  | "ITEM_SFBO_ATTRIBUTE_NONE"
  | "ITEM_SFBO_ATTRIBUTE_SUPER_FBO"
  | "ITEM_SFBO_ATTRIBUTE_ANTI_FBO";
export type OzonSupplyOrderBundleShipmentType =
  | "BUNDLE_ITEM_SHIPMENT_TYPE_GENERAL"
  | "BUNDLE_ITEM_SHIPMENT_TYPE_BOX"
  | "BUNDLE_ITEM_SHIPMENT_TYPE_PALLET";
export type OzonSupplyOrderBundleTag =
  | "EVSD_REQUIRED"
  | "MARKING_REQUIRED"
  | "MARKING_POSSIBLE"
  | "JEWELRY"
  | "TRACEABLE"
  | "ETTN_REQUIRED"
  | "UNDEFINED";
export type OzonSupplyOrderPlacementZone =
  | "UNSPECIFIED"
  | "CLOSED_ZONE"
  | "DANGEROUS_GOODS"
  | "PRODUCTS"
  | "SORT"
  | "NON_SORT"
  | "OVERSIZE"
  | "JEWELRY"
  | "UNRESOLVED";

export interface OzonSupplyOrderItemTagsCalculation {
  /**
   * Идентификатор склада отгрузки поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dropoff_warehouse_id: string;

  /**
   * Список идентификаторов складов поставки, не больше 25 значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly storage_warehouse_ids: readonly string[];
}
export interface GetSupplyOrderBundleRequest {
  /**
   * Идентификаторы товарного состава поставки. Можно получить в методе
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Минимум элементов: `1`. Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly bundle_ids: readonly string[];

  /**
   * Количество товаров на странице.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * `true`, чтобы сортировать по возрастанию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_asc?: boolean;

  /**
   * Список складов для расчёта товарных тегов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly item_tags_calculation?: OzonSupplyOrderItemTagsCalculation;

  /**
   * Идентификатор последнего значения SKU на странице.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Поисковый запрос, например: по названию, артикулу или SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly query?: string;

  /**
   * Сортировка по параметрам: - `SKU` — SKU; - `NAME` — названию товара; - `QUANTITY` — количеству;
   * - `TOTAL_VOLUME_IN_LITRES` — объёму в литрах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_field?: OzonSupplyOrderBundleSortField;
}
export interface OzonSupplyOrderBundleItem {
  readonly icon_path?: string;
  readonly sku?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly quantity?: number;
  readonly barcode?: string;
  readonly product_id?: number;
  readonly quant?: number;
  readonly is_quant_editable?: boolean;
  readonly volume_in_litres?: number;
  readonly total_volume_in_litres?: number;
  readonly contractor_item_code?: string;
  readonly sfbo_attribute?: OzonSupplyOrderBundleSfboAttribute;
  readonly shipment_type?: OzonSupplyOrderBundleShipmentType;
  readonly tags?: readonly OzonSupplyOrderBundleTag[];
  readonly placement_zone?: OzonSupplyOrderPlacementZone;
}
export interface GetSupplyOrderBundleResponse {
  readonly items?: readonly OzonSupplyOrderBundleItem[];
  readonly total_count?: number;
  readonly has_next?: boolean;
  readonly last_id?: string;
}
