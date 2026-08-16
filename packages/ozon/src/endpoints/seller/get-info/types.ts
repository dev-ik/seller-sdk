/** Система налогообложения компании. */
export type OzonTaxSystem =
  | "UNKNOWN"
  | "UNSPECIFIED"
  | "OSNO"
  | "USN"
  | "NPD"
  | "AUSN"
  | "PSN";

/** Тип подписки кабинета продавца. */
export type OzonSubscriptionType =
  | "UNKNOWN"
  | "UNSPECIFIED"
  | "PREMIUM"
  | "PREMIUM_LITE"
  | "PREMIUM_PLUS"
  | "PREMIUM_PRO";

/** Статус рейтинга продавца. */
export type OzonSellerRatingStatus = "UNKNOWN" | "OK" | "WARNING" | "CRITICAL";

/** Тип значения рейтинга продавца. */
export type OzonSellerRatingType =
  | "UNKNOWN"
  | "INDEX"
  | "PERCENT"
  | "TIME"
  | "RATIO"
  | "REVIEW_SCORE"
  | "COUNT";

/** Информация о компании продавца. */
export interface OzonSellerCompany {
  /** Страна. */
  readonly country?: string;

  /** Валюта расчётов. */
  readonly currency?: string;

  /** ИНН. */
  readonly inn?: string;

  /** Название юридического лица. */
  readonly legal_name?: string;

  /** Название компании на Ozon. */
  readonly name?: string;

  /** ОГРН. */
  readonly ogrn?: string;

  /** Форма собственности. */
  readonly ownership_form?: string;

  /** Система налогообложения. */
  readonly tax_system?: OzonTaxSystem;
}

/** Пороговые признаки значения рейтинга. */
export interface OzonSellerRatingThresholdStatus {
  /** Превышено ли пороговое значение для блокировки. */
  readonly danger?: boolean;

  /** Достигнут ли порог участия в Premium-программе. */
  readonly premium?: boolean;

  /** Есть ли предупреждение о возможной блокировке. */
  readonly warning?: boolean;
}

/** Текущее или предыдущее значение рейтинга. */
export interface OzonSellerRatingValue {
  /** Дата начала подсчёта рейтинга в формате RFC 3339. */
  readonly date_from?: string;

  /** Дата окончания подсчёта рейтинга в формате RFC 3339. */
  readonly date_to?: string;

  /** Отформатированное значение рейтинга. */
  readonly formatted?: string;

  /** Пороговые признаки значения рейтинга. */
  readonly status?: OzonSellerRatingThresholdStatus;

  /** Числовое значение рейтинга. */
  readonly value?: number;
}

/** Рейтинг кабинета продавца. */
export interface OzonSellerRating {
  /** Текущее значение. */
  readonly current_value?: OzonSellerRatingValue;

  /** Название рейтинга. */
  readonly name?: string;

  /** Предыдущее значение. */
  readonly past_value?: OzonSellerRatingValue;

  /** Название рейтинга в системе. */
  readonly rating?: string;

  /** Статус рейтинга. */
  readonly status?: OzonSellerRatingStatus;

  /** Тип значения рейтинга. */
  readonly value_type?: OzonSellerRatingType;
}

/** Информация о подписке кабинета продавца. */
export interface OzonSellerSubscription {
  /** `true`, если у кабинета есть подписка. */
  readonly is_premium?: boolean;

  /** Тип подписки. */
  readonly type?: OzonSubscriptionType;
}

/** Информация о кабинете продавца. */
export interface GetSellerInfoResponse {
  /** Компания продавца. */
  readonly company?: OzonSellerCompany;

  /** Список рейтингов. */
  readonly ratings?: readonly OzonSellerRating[];

  /** Подписка кабинета. */
  readonly subscription?: OzonSellerSubscription;
}
