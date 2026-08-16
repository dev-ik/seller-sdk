/** Тег товара в фильтре аналитики остатков. */
export type OzonAnalyticsItemTagFilter =
  | "ITEM_ATTRIBUTE_NONE"
  | "ECONOM"
  | "NOVEL"
  | "DISCOUNT"
  | "FBS_RETURN"
  | "SUPER"
  | "MARKABLE";

/** Тег товара в ответе аналитики остатков. */
export type OzonAnalyticsItemTag = "UNSPECIFIED" | OzonAnalyticsItemTagFilter;

/** Зона размещения в фильтре аналитики остатков. */
export type OzonAnalyticsPlacementZoneFilter =
  | "PLACEMENT_ZONE_NONE"
  | "CLOSED_ZONE"
  | "DANGEROUS_GOOD"
  | "PRODUCTS_PLUS_17"
  | "SORT"
  | "NON_SORT_MEZ"
  | "OVERSIZE"
  | "JEWELRY"
  | "UNRESOLVED";

/** Зона размещения в ответе аналитики остатков. */
export type OzonAnalyticsPlacementZone =
  | "UNSPECIFIED"
  | "CLOSED_ZONE"
  | "DANGEROUS_GOOD"
  | "PRODUCTS"
  | "SORT"
  | "NON_SORT"
  | "OVERSIZE"
  | "JEWELRY"
  | "UNRESOLVED";

/** Статус ликвидности в фильтре аналитики. */
export type OzonAnalyticsTurnoverGradeFilter =
  | "TURNOVER_GRADE_NONE"
  | "DEFICIT"
  | "POPULAR"
  | "ACTUAL"
  | "SURPLUS"
  | "NO_SALES"
  | "WAS_NO_SALES"
  | "RESTRICTED_NO_SALES"
  | "COLLECTING_DATA"
  | "WAITING_FOR_SUPPLY"
  | "WAS_DEFICIT"
  | "WAS_POPULAR"
  | "WAS_ACTUAL"
  | "WAS_SURPLUS";

/** Статус ликвидности в ответе аналитики. */
export type OzonAnalyticsTurnoverGrade =
  | "UNSPECIFIED"
  | OzonAnalyticsTurnoverGradeFilter;

interface GetAnalyticsStocksRequestBase {
  /** Фильтр по тегам товара. */
  readonly item_tags?: readonly OzonAnalyticsItemTagFilter[];
  /** Фильтр по зонам размещения. */
  readonly placement_zone?: readonly OzonAnalyticsPlacementZoneFilter[];
  /** SKU товаров. Swagger требует поле и описывает максимум 100 значений. */
  readonly skus: readonly string[];
  /** Фильтр по статусам ликвидности. */
  readonly turnover_grades?: readonly OzonAnalyticsTurnoverGradeFilter[];
  /** Вернуть только товары, которые нужно промаркировать. */
  readonly unmarked_stocks_only?: boolean;
  /** Идентификаторы складов. */
  readonly warehouse_ids?: readonly string[];
}

/**
 * Параметры аналитики остатков.
 *
 * Ozon разрешает передать только один из фильтров `cluster_ids` и
 * `macrolocal_cluster_ids`.
 */
export type GetAnalyticsStocksRequest = GetAnalyticsStocksRequestBase &
  (
    | {
        /**
         * Фильтр по идентификаторам кластеров. Получить идентификаторы можно через метод
         * [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList).
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly cluster_ids?: readonly string[];
        readonly macrolocal_cluster_ids?: never;
      }
    | {
        readonly cluster_ids?: never;

        /**
         * Фильтр по идентификаторам макролокальных кластеров. Получить идентификаторы можно в параметре
         * `macrolocal_cluster_ids` метода [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList)
         * или через метод [/v2/cluster/list](#operation/DraftClusterList).
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly macrolocal_cluster_ids?: readonly string[];
      }
  );

/** Аналитика остатков одного товара на складе и в кластере. */
export interface OzonAnalyticsStocksItem {
  /** Среднесуточные продажи за 28 дней по всем кластерам. */
  readonly ads?: number;
  /** Среднесуточные продажи за 28 дней в кластере. */
  readonly ads_cluster?: number;
  /** Количество, доступное к продаже. */
  readonly available_stock_count?: number;
  /** Идентификатор кластера. */
  readonly cluster_id?: number;
  /** Название кластера. */
  readonly cluster_name?: string;
  /** Дни без продаж по всем кластерам. */
  readonly days_without_sales?: number;
  /** Дни без продаж в кластере. */
  readonly days_without_sales_cluster?: number;
  /** Излишки с поставки, доступные к вывозу. */
  readonly excess_stock_count?: number;
  /** Товары с истекающим сроком годности. */
  readonly expiring_stock_count?: number;
  /** На сколько дней хватит остатка по всем кластерам. */
  readonly idc?: number;
  /** На сколько дней хватит остатка в кластере. */
  readonly idc_cluster?: number;
  /** Теги товара. */
  readonly item_tags?: readonly OzonAnalyticsItemTag[];
  /** Идентификатор макролокального кластера. */
  readonly macrolocal_cluster_id?: number;
  /** Название товара. */
  readonly name?: string;
  /** Артикул продавца. */
  readonly offer_id?: string;
  /** Товары, проходящие проверку. */
  readonly other_stock_count?: number;
  /** Зоны размещения. */
  readonly placement_zone?: readonly OzonAnalyticsPlacementZone[];
  /** Товары в заявках на поставку. */
  readonly requested_stock_count?: number;
  /** Товары в процессе возврата от покупателей. */
  readonly return_from_customer_stock_count?: number;
  /** Товары, готовящиеся к вывозу продавцом. */
  readonly return_to_seller_stock_count?: number;
  /** SKU товара. */
  readonly sku?: number;
  /** Брак, доступный к вывозу со стока. */
  readonly stock_defect_stock_count?: number;
  /** Брак, доступный к вывозу с поставки. */
  readonly transit_defect_stock_count?: number;
  /** Товары в поставках в пути. */
  readonly transit_stock_count?: number;
  /** Статус ликвидности по всем кластерам. */
  readonly turnover_grade?: OzonAnalyticsTurnoverGrade;
  /** Статус ликвидности в кластере. */
  readonly turnover_grade_cluster?: OzonAnalyticsTurnoverGrade;
  /** Товары, которые готовятся к продаже. */
  readonly valid_stock_count?: number;
  /** Маркируемые товары, ожидающие действий продавца. */
  readonly waiting_docs_stock_count?: number;
  /** Маркируемые товары, ожидающие вывоза. */
  readonly waiting_docs_to_export_stock_count?: number;
  /** Идентификатор склада. */
  readonly warehouse_id?: number;
  /** Название склада. */
  readonly warehouse_name?: string;
}

/** Ответ с аналитикой остатков на складах. */
export interface GetAnalyticsStocksResponse {
  /** Информация о товарах. */
  readonly items?: readonly OzonAnalyticsStocksItem[];
}
