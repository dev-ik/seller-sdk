export type GetProductInfoListRequest =
  | {
      /**
       * Идентификатор товара в системе продавца — артикул.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly offer_id: readonly string[];
      readonly product_id?: never;
      readonly sku?: never;
    }
  | {
      readonly offer_id?: never;

      /**
       * Идентификатор товара в системе Ozon — `product_id`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly product_id: readonly string[];
      readonly sku?: never;
    }
  | {
      readonly offer_id?: never;
      readonly product_id?: never;

      /**
       * Идентификатор товара в системе Ozon — SKU.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly sku: readonly string[];
    };

export interface OzonProductInfoAvailabilityReasonHumanText {
  readonly text?: string;
}

export interface OzonProductInfoAvailabilityReason {
  readonly human_text?: OzonProductInfoAvailabilityReasonHumanText;
  readonly id?: number;
}

export interface OzonProductInfoAvailability {
  readonly availability?: string;
  readonly reasons?: readonly OzonProductInfoAvailabilityReason[];
  readonly sku?: number;
  readonly source?: string;
}

export interface OzonProductInfoCommission {
  readonly delivery_amount?: number;
  readonly percent?: number;
  readonly return_amount?: number;
  readonly sale_schema?: string;
  readonly value?: number;
}

export type OzonProductInfoErrorLevel =
  | "ERROR_LEVEL_UNSPECIFIED"
  | "ERROR_LEVEL_ERROR"
  | "ERROR_LEVEL_WARNING"
  | "ERROR_LEVEL_INTERNAL";

export interface OzonProductInfoErrorTextParam {
  readonly name?: string;
  readonly value?: string;
}

export interface OzonProductInfoErrorTexts {
  readonly attribute_name?: string;
  readonly description?: string;
  readonly hint_code?: string;
  readonly message?: string;
  readonly params?: readonly OzonProductInfoErrorTextParam[];
  readonly short_description?: string;
}

export interface OzonProductInfoError {
  readonly attribute_id?: number;
  readonly code?: string;
  readonly field?: string;
  readonly level?: OzonProductInfoErrorLevel;
  readonly state?: string;
  readonly texts?: OzonProductInfoErrorTexts;
}

export interface OzonProductInfoModel {
  readonly count?: number;
  readonly model_id?: number;
}

export type OzonProductInfoPriceIndexColor =
  | "COLOR_INDEX_UNSPECIFIED"
  | "COLOR_INDEX_WITHOUT_INDEX"
  | "COLOR_INDEX_SUPER"
  | "COLOR_INDEX_GREEN"
  | "COLOR_INDEX_YELLOW"
  | "COLOR_INDEX_RED";

export interface OzonProductInfoPriceIndexData {
  readonly minimal_price?: string;
  readonly minimal_price_currency?: string;
  readonly price_index_value?: number;
}

export interface OzonProductInfoPriceIndexes {
  readonly color_index?: OzonProductInfoPriceIndexColor;
  readonly external_index_data?: OzonProductInfoPriceIndexData;
  readonly ozon_index_data?: OzonProductInfoPriceIndexData;
  readonly self_marketplaces_index_data?: OzonProductInfoPriceIndexData;
}

export type OzonProductInfoPromotionType = "UNSPECIFIED" | "REVIEWS_PROMO";

export interface OzonProductInfoPromotion {
  readonly is_enabled?: boolean;
  readonly type?: OzonProductInfoPromotionType;
}

export type OzonProductInfoShipmentType =
  | "SHIPMENT_TYPE_UNSPECIFIED"
  | "SHIPMENT_TYPE_GENERAL"
  | "SHIPMENT_TYPE_BOX"
  | "SHIPMENT_TYPE_PALLET";

export interface OzonProductInfoSource {
  readonly created_at?: string;
  readonly quant_code?: string;
  readonly shipment_type?: OzonProductInfoShipmentType;
  readonly sku?: number;
  readonly source?: string;
}

export interface OzonProductInfoStatuses {
  readonly is_created?: boolean;
  readonly moderate_status?: string;
  readonly status?: string;
  readonly status_description?: string;
  readonly status_failed?: string;
  readonly status_name?: string;
  readonly status_tooltip?: string;
  readonly status_updated_at?: string;
  readonly validation_status?: string;
}

export interface OzonProductInfoStock {
  readonly present?: number;
  readonly reserved?: number;
  readonly sku?: number;
  readonly source?: string;
}

export interface OzonProductInfoStocks {
  readonly has_stock?: boolean;
  readonly stocks?: readonly OzonProductInfoStock[];
}

export interface OzonProductInfoVisibilityDetails {
  readonly has_price?: boolean;
  readonly has_stock?: boolean;
}

export interface OzonProductInfoItem {
  readonly availabilities?: readonly OzonProductInfoAvailability[];
  readonly barcodes?: readonly string[];
  readonly color_image?: readonly string[];
  readonly commissions?: readonly OzonProductInfoCommission[];
  readonly created_at?: string;
  readonly currency_code?: string;
  readonly description_category_id?: number;
  readonly discounted_fbo_stocks?: number;
  readonly errors?: readonly OzonProductInfoError[];
  readonly has_discounted_fbo_item?: boolean;
  readonly id?: number;
  readonly images?: readonly string[];
  /** Изображения товара с обзором 360°, присутствуют в фактическом ответе Ozon. */
  readonly images360?: readonly string[];
  readonly is_archived?: boolean;
  readonly is_autoarchived?: boolean;
  readonly is_discounted?: boolean;
  readonly is_kgt?: boolean;
  /** @deprecated Поле помечено устаревшим в OpenAPI Ozon. */
  readonly is_prepayment_allowed?: boolean;
  /** Признак сезонного товара, присутствует в фактическом ответе Ozon. */
  readonly is_seasonal?: boolean;
  readonly is_super?: boolean;
  readonly min_price?: string;
  readonly model_info?: OzonProductInfoModel;
  readonly name?: string;
  readonly offer_id?: string;
  readonly old_price?: string;
  readonly price?: string;
  readonly price_indexes?: OzonProductInfoPriceIndexes;
  readonly primary_image?: readonly string[];
  readonly promotions?: readonly OzonProductInfoPromotion[];
  readonly sku?: number;
  readonly sources?: readonly OzonProductInfoSource[];
  readonly statuses?: OzonProductInfoStatuses;
  readonly stocks?: OzonProductInfoStocks;
  readonly type_id?: number;
  readonly updated_at?: string;
  readonly vat?: string;
  readonly visibility_details?: OzonProductInfoVisibilityDetails;
  readonly volume_weight?: number;
}

export interface GetProductInfoListResponse {
  readonly items?: readonly OzonProductInfoItem[];
}
