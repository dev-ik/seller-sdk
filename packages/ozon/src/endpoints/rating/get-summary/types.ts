/** Направление и смысл изменения рейтинга продавца. */
export interface OzonRatingChange {
  /** Направление изменения. Swagger не ограничивает поле формальным enum. */
  readonly direction?: string;
  /** Смысл изменения. Swagger не ограничивает поле формальным enum. */
  readonly meaning?: string;
}

/** Текущее состояние одного рейтинга продавца. */
export interface OzonRatingSummaryItem {
  /** Изменение относительно предыдущего значения. */
  readonly change?: OzonRatingChange;
  /** Текущее значение. */
  readonly current_value?: number;
  /** Отображаемое название рейтинга. */
  readonly name?: string;
  /** Предыдущее значение. */
  readonly past_value?: number;
  /** Системное название рейтинга. */
  readonly rating?: string;
  /** Каким должно быть хорошее значение рейтинга. */
  readonly rating_direction?: string;
  /** Статус рейтинга. */
  readonly status?: string;
  /** Тип значения рейтинга. */
  readonly value_type?: string;
}

/** Группа текущих рейтингов. */
export interface OzonRatingSummaryGroup {
  /** Название группы. */
  readonly group_name?: string;
  /** Рейтинги группы. */
  readonly items?: readonly OzonRatingSummaryItem[];
}

/** Индекс локализации за дату расчёта. */
export interface OzonRatingLocalizationIndex {
  /** Дата расчёта в RFC 3339. */
  readonly calculation_date?: string;
  /** Значение индекса локализации. */
  readonly localization_percentage?: number;
}

/** Текущие рейтинги продавца. */
export interface GetRatingSummaryResponse {
  /** Группы рейтингов. */
  readonly groups?: readonly OzonRatingSummaryGroup[];
  /** OpenAPI подразумевает массив, но живой API также возвращает один объект. */
  readonly localization_index?:
    | OzonRatingLocalizationIndex
    | readonly OzonRatingLocalizationIndex[];
  /** `true`, если баланс штрафных баллов превышен. */
  readonly penalty_score_exceeded?: boolean;
  /** Признак подписки Premium. */
  readonly premium?: boolean;
  /** Признак подписки Premium Plus. */
  readonly premium_plus?: boolean;
}
