import type { OzonDeliveryDateRange } from "../../shared/v1/types.js";

export type OzonDeliveryCheckoutRequestSchema = "MIX" | "FBO" | "FBS";

export interface CheckoutDeliveryV2RequestItem {
  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Количество товара.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity?: number;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku?: number;
}

export interface CheckoutDeliveryV2Request {
  /**
   * Номер телефона покупателя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly buyer_phone?: string;

  /**
   * Схема доставки: - `MIX` — на выбор Ozon; - `FBO` — FBO; - `FBS` — FBS.
   *
   * Пример: `MIX`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_schema?: OzonDeliveryCheckoutRequestSchema;

  /**
   * Способ доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_type?: {
    /**
     * Доставка курьером.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly courier?: {
      /**
       * Координаты точки доставки.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly coordinates?: {
        /**
         * Широта.
         *
         * Формат: `double`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly latitude?: number;

        /**
         * Долгота.
         *
         * Формат: `double`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly longitude?: number;
      };
    };

    /**
     * Самовывоз.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly pick_up?: {
      /**
       * Идентификатор пункта самовывоза.
       *
       * Формат: `int64`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly map_point_id?: number;
    };
  };

  /**
   * Информация о товарах.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items?: readonly CheckoutDeliveryV2RequestItem[];
}

export type OzonDeliveryMethodType =
  | "UNSPECIFIED"
  | "POSTAMAT"
  | "COURIER"
  | "PVZ";

export type OzonDeliveryCheckoutSchema = "UNSPECIFIED" | "FBO" | "FBS";

export type OzonDeliveryUnavailableReason =
  | "UNSPECIFIED"
  | "UNKNOWN"
  | "OUT_OF_STOCK"
  | "BANNED_FOR_AREA"
  | "BANNED_FOR_LEGAL"
  | "BANNED"
  | "BANNED_FOR_NOT_PREMIUM"
  | "DELIVERY_UNAVAILABLE"
  | "BANNED_FOR_INDIVIDUAL"
  | "INVALID_WEIGHT"
  | "INVALID_MULTIPLICITY"
  | "NOT_FOUND_POINTS_DARK_STORES"
  | "INVALID_MULTI_WAREHOUSES"
  | "MIN_PRICE"
  | "OZONE_DELIVERY_UNAVAILABLE"
  | "RFBS_DELIVERY_UNAVAILABLE"
  | "HACK_COURIER_TAGS"
  | "NO_SLA"
  | "DELIVERY_VARIANT_IS_CLOSING"
  | "TPL_NOT_INTEGRATED"
  | "NOT_ALL_WAREHOUSES_ARE_SERVED"
  | "DELIVERY_SLOTS_NOT_FOUND"
  | "NO_ROUTE"
  | "CAPACITY_LIMIT"
  | "PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION"
  | "PACKAGE_MAX_WEIGHT_RESTRICTION"
  | "MAX_COST_RESTRICTION"
  | "MIN_PACKAGE_WEIGHT_RESTRICTION"
  | "MIN_COST_RESTRICTION"
  | "MAX_DIMENSIONS_RESTRICTION"
  | "PRODUCT_TYPES_RESTRICTION"
  | "PRODUCT_TAGS_RESTRICTION"
  | "SELECTED_DELIVERY_METHOD_UNAVAILABLE"
  | "SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE"
  | "MARKETPLACE_UNAVAILABLE"
  | "INVALID_PVZ_FOR_KGT"
  | "LEGAL_USER_PREMIUM_SPLIT"
  | "USER_ALREADY_HAS_PREMIUM"
  | "WAIT_FOR_PAY_SUBSCRIPTION"
  | "ADDRESS_NOT_SET"
  | "PICKUP_POINT_DISABLED"
  | "LEGAL_PREORDER"
  | "DELIVERY_TYPE_FOR_PREORDER"
  | "CROSS_BORDER_PICKUP"
  | "ORDER_CUSTOMS_TYPES"
  | "PACKAGE_MAX_COST"
  | "SUPER_ECONOM"
  | "ECONOM_NOT_FULL_QUANT"
  | "EMPTY_DELIVERY_METHODS";

export interface OzonDeliveryCheckoutMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonDeliveryCheckoutTimeslot {
  readonly client_date_range?: OzonDeliveryDateRange;
  readonly logistic_date_range?: OzonDeliveryDateRange;
  readonly timeslot_id?: number;
}

export interface OzonDeliveryCheckoutMethod {
  readonly delivery_time_zone_offset?: number;
  readonly delivery_type?: OzonDeliveryMethodType;
  readonly id?: number;
  readonly name?: string;
  readonly timeslots?: readonly OzonDeliveryCheckoutTimeslot[];
  readonly unavailable_reason?: OzonDeliveryUnavailableReason;
  readonly warehouse_time_zone_offset?: number;
}

export interface OzonDeliveryCheckoutSplit {
  readonly commissions?: { readonly total?: OzonDeliveryCheckoutMoney } | null;
  readonly delivery_method?: OzonDeliveryCheckoutMethod;
  readonly delivery_schema?: OzonDeliveryCheckoutSchema;
  readonly items?: readonly CheckoutDeliveryV2RequestItem[];
  readonly unavailable_reason?: OzonDeliveryUnavailableReason;
  readonly warehouse_id?: number;
}

export interface CheckoutDeliveryV2Response {
  readonly splits?: readonly OzonDeliveryCheckoutSplit[];
}
