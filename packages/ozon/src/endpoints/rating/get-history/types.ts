/** Параметры получения истории рейтингов. */
export interface GetRatingHistoryRequest {
  /** Начало периода в RFC 3339. */
  readonly date_from: string;
  /** Конец периода в RFC 3339. */
  readonly date_to: string;
  /** Системные названия рейтингов. */
  readonly ratings: readonly string[];
  /** Включить штрафные баллы Premium-программы. */
  readonly with_premium_scores?: boolean;
}

/** Начисленные за дату штрафные баллы Premium-программы. */
export interface OzonRatingPremiumScoreValue {
  /** Дата начисления в RFC 3339. */
  readonly date?: string;
  /** Значение рейтинга, за которое начислены баллы. */
  readonly rating_value?: number;
  /** Количество штрафных баллов. */
  readonly value?: number;
}

/** Штрафные баллы по рейтингу. */
export interface OzonRatingPremiumScores {
  /** Системное название рейтинга. */
  readonly rating?: string;
  /** Начисления штрафных баллов. */
  readonly scores?: readonly OzonRatingPremiumScoreValue[];
}

/** Пороговые статусы значения рейтинга. */
export interface OzonRatingHistoryStatus {
  /** Достигнут порог блокировки. */
  readonly danger?: boolean;
  /** Достигнут порог Premium. */
  readonly premium?: boolean;
  /** Есть предупреждение о возможной блокировке. */
  readonly warning?: boolean;
}

/** Значение рейтинга за период. */
export interface OzonRatingHistoryValue {
  /** Начало периода подсчёта в RFC 3339. */
  readonly date_from?: string;
  /** Конец периода подсчёта в RFC 3339. */
  readonly date_to?: string;
  /** Пороговые статусы. */
  readonly status?: OzonRatingHistoryStatus;
  /** Значение рейтинга. */
  readonly value?: number;
}

/** История одного рейтинга. */
export interface OzonRatingHistory {
  /** Порог блокировки продаж. */
  readonly danger_threshold?: number;
  /** Порог участия в Premium-программе. */
  readonly premium_threshold?: number;
  /** Системное название рейтинга. */
  readonly rating?: string;
  /** Значения рейтинга за период. */
  readonly values?: readonly OzonRatingHistoryValue[];
  /** Порог предупреждения. */
  readonly warning_threshold?: number;
}

/** История рейтингов продавца. */
export interface GetRatingHistoryResponse {
  /** Штрафные баллы Premium-программы. */
  readonly premium_scores?: readonly OzonRatingPremiumScores[];
  /** Рейтинги продавца за период. */
  readonly ratings?: readonly OzonRatingHistory[];
}
