/** Направление сортировки цифровых отправлений. */
export type OzonDigitalPostingSortDirection = "ASC" | "DESC";

/** Фильтр списка цифровых отправлений. */
export interface ListDigitalPostingsFilter {
  /** Номера отправлений. */
  readonly posting_number?: readonly string[];
  /** Начало периода в формате RFC 3339. */
  readonly since?: string;
  /** Конец периода в формате RFC 3339. */
  readonly to?: string;
}

/** Дополнительные поля списка цифровых отправлений. */
export interface ListDigitalPostingsWith {
  /**
   * Передайте `true`, чтобы добавить в ответ данные аналитики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly analytics_data?: boolean;

  /**
   * Передайте `true`, чтобы добавить в ответ финансовые данные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly financial_data?: boolean;

  /**
   * Передайте `true`, чтобы добавить в ответ юридическую информацию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly legal_info?: boolean;
}

/** Параметры получения цифровых отправлений. */
export interface ListDigitalPostingsRequest {
  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dir?: OzonDigitalPostingSortDirection;

  /**
   * Фильтр для поиска отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListDigitalPostingsFilter;
  /** Количество элементов: от 1 до 1000. */
  readonly limit?: number;
  /** Смещение, не более 20 000. */
  readonly offset?: number;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: ListDigitalPostingsWith;
}

/** Дополнительный параметр отправления. */
export interface OzonDigitalPostingAdditionalData {
  readonly key?: string;
  readonly value?: string;
}

/** Аналитика цифрового отправления. */
export interface OzonDigitalPostingAnalytics {
  readonly city?: string;
  readonly delivery_type?: string;
  readonly is_legal?: boolean;
  readonly is_premium?: boolean;
  readonly payment_type_group_name?: string;
  readonly region?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}

/** Финансовые данные товара цифрового отправления. */
export interface OzonDigitalPostingFinancialProduct {
  readonly actions?: readonly string[];
  readonly commission_amount?: number;
  readonly commission_percent?: number;
  readonly commissions_currency_code?: string;
  readonly currency_code?: string;
  readonly customer_currency_code?: string;
  readonly customer_price?: number;
  readonly old_price?: number;
  readonly payout?: number;
  readonly price?: number;
  readonly product_id?: number;
  readonly quantity?: number;
  readonly total_discount_percent?: number;
  readonly total_discount_value?: number;
}

/** Финансовые данные цифрового отправления. */
export interface OzonDigitalPostingFinancialData {
  readonly cluster_from?: string;
  readonly cluster_to?: string;
  readonly products?: readonly OzonDigitalPostingFinancialProduct[];
}

/** Юридическая информация покупателя. */
export interface OzonDigitalPostingLegalInfo {
  readonly company_name?: string;
  readonly inn?: string;
  readonly kpp?: string;
}

/** Товар цифрового отправления. */
export interface OzonDigitalPostingProduct {
  readonly currency_code?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly required_qty_for_digital_code?: number;
  readonly sku?: number;
}

/** Отправление, для которого требуются цифровые коды. */
export interface OzonDigitalPosting {
  readonly additional_data?: readonly OzonDigitalPostingAdditionalData[];
  readonly analytics_data?: OzonDigitalPostingAnalytics;
  readonly cancel_reason_id?: number;
  readonly created_at?: string;
  readonly financial_data?: OzonDigitalPostingFinancialData;
  readonly in_process_at?: string;
  readonly legal_info?: OzonDigitalPostingLegalInfo;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonDigitalPostingProduct[];
  readonly status?: string;
  readonly waiting_deadline_for_digital_code?: string;
}

/** Ответ со списком цифровых отправлений. */
export interface ListDigitalPostingsResponse {
  readonly result?: readonly OzonDigitalPosting[];
}
