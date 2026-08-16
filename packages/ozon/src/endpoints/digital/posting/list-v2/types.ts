/** Направление сортировки цифровых отправлений v2. */
export type OzonDigitalPostingV2SortDirection = "ASC" | "DESC";

/** Фильтр цифровых отправлений v2. */
export interface ListDigitalPostingsV2Filter {
  /** Номера заказов. */
  readonly order_numbers?: readonly string[];
  /** Номера отправлений. */
  readonly posting_numbers?: readonly string[];
  /** Начало периода в формате RFC 3339. */
  readonly since?: string;
  /** Конец периода в формате RFC 3339. */
  readonly to?: string;
}

/** Дополнительные данные цифровых отправлений v2. */
export interface ListDigitalPostingsV2With {
  /**
   * `true`, чтобы добавить в ответ данные аналитики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly analytics_data?: boolean;

  /**
   * `true`, чтобы добавить в ответ финансовые данные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly financial_data?: boolean;

  /**
   * `true`, чтобы добавить в ответ юридическую информацию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly legal_info?: boolean;
}

/** Параметры получения цифровых отправлений v2. */
export interface ListDigitalPostingsV2Request {
  /** Курсор следующей страницы. */
  readonly cursor?: string;

  /**
   * Фильтр для поиска отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListDigitalPostingsV2Filter;
  /** Количество элементов: от 1 до 100. */
  readonly limit?: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonDigitalPostingV2SortDirection;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: ListDigitalPostingsV2With;
}

/** Дополнительный параметр цифрового отправления v2. */
export interface OzonDigitalPostingV2AdditionalData {
  readonly key?: string;
  readonly value?: string;
}

/** Аналитика цифрового отправления v2. */
export interface OzonDigitalPostingV2Analytics {
  readonly city?: string;
  readonly delivery_type?: string;
  readonly is_legal?: boolean;
  readonly is_premium?: boolean;
  readonly payment_type_group_name?: string;
  readonly region?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}

/** Информация об отмене цифрового отправления v2. */
export interface OzonDigitalPostingV2Cancellation {
  readonly cancellation_initiator?: string;
  readonly cancellation_type?: string;
}

/** Информация о внешнем заказе. */
export interface OzonDigitalPostingV2ExternalOrder {
  readonly is_external?: boolean;
  readonly platform_name?: string;
}

/** Комиссия за товар цифрового отправления v2. */
export interface OzonDigitalPostingV2Commission {
  readonly amount?: number;
  readonly currency?: string;
  readonly percent?: number;
}

/** Финансовые данные товара цифрового отправления v2. */
export interface OzonDigitalPostingV2FinancialProduct {
  readonly actions?: readonly string[];
  readonly commission?: OzonDigitalPostingV2Commission;
  readonly old_price?: number;
  readonly payout?: number;
  readonly price?: number;
  readonly product_id?: number;
  readonly total_discount_percent?: number;
  readonly total_discount_value?: number;
}

/** Финансовые данные цифрового отправления v2. */
export interface OzonDigitalPostingV2FinancialData {
  readonly cluster_from?: string;
  readonly cluster_to?: string;
  readonly products?: readonly OzonDigitalPostingV2FinancialProduct[];
}

/** Юридическая информация покупателя. */
export interface OzonDigitalPostingV2LegalInfo {
  readonly company_name?: string;
  readonly inn?: string;
  readonly kpp?: string;
}

/** Денежная сумма в цифровом отправлении v2. */
export interface OzonDigitalPostingV2Money {
  readonly amount?: string;
  readonly currency?: string;
}

/** Товар цифрового отправления v2. */
export interface OzonDigitalPostingV2Product {
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: OzonDigitalPostingV2Money;
  readonly quantity?: number;
  readonly required_qty_for_digital_code?: number;
  readonly sku?: number;
}

/** Цифровое отправление v2. */
export interface OzonDigitalPostingV2 {
  readonly additional_data?: readonly OzonDigitalPostingV2AdditionalData[];
  readonly analytics_data?: OzonDigitalPostingV2Analytics;
  readonly cancel_reason_id?: number;
  readonly cancellation?: OzonDigitalPostingV2Cancellation;
  readonly created_at?: string;
  readonly external_order?: OzonDigitalPostingV2ExternalOrder;
  readonly financial_data?: OzonDigitalPostingV2FinancialData;
  readonly in_process_at?: string;
  readonly legal_info?: OzonDigitalPostingV2LegalInfo;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonDigitalPostingV2Product[];
  readonly status?: string;
  readonly waiting_deadline_for_digital_code?: string;
}

/** Ответ со списком цифровых отправлений v2. */
export interface ListDigitalPostingsV2Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly postings?: readonly OzonDigitalPostingV2[];
}
