export type AnalyticsProductQueriesSortBy =
  | "BY_SEARCHES"
  | "BY_VIEWS"
  | "BY_POSITION"
  | "BY_CONVERSION"
  | "BY_GMV";

export type AnalyticsProductQueriesSortDirection = "DESCENDING" | "ASCENDING";

export interface AnalyticsProductQueriesPeriod {
  readonly date_from?: string;
  readonly date_to?: string;
}
