/** Дневное значение индекса ошибок FBS и rFBS. */
export interface OzonFbsRatingIndexDynamics {
  /** Дата в формате `YYYY-MM-DD`. */
  readonly date?: string;
  /** Значение индекса за дату. */
  readonly index_by_date?: number;
  /** Расходы на обработку ошибок за дату. */
  readonly processing_costs_sum_by_date?: number;
}

/** Индекс ошибок FBS и rFBS за расчётный период. */
export interface GetFbsRatingIndexInfoResponse {
  /** Код валюты стоимости обработки ошибок. */
  readonly currency_code?: string;
  /** Динамика индекса по дням. */
  readonly defects?: readonly OzonFbsRatingIndexDynamics[];
  /** Значение индекса за период. */
  readonly index?: number;
  /** Начало периода в формате `YYYY-MM-DD`. */
  readonly period_from?: string;
  /** Конец периода в формате `YYYY-MM-DD`. */
  readonly period_to?: string;
  /** Расходы на обработку ошибок за период. */
  readonly processing_costs_sum?: number;
}
