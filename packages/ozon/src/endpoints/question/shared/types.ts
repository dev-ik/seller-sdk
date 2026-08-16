export type OzonQuestionStatus =
  | "NEW"
  | "ALL"
  | "VIEWED"
  | "PROCESSED"
  | "UNPROCESSED";

export interface OzonQuestion {
  readonly answers_count?: number;
  readonly author_name?: string;
  readonly id?: string;
  readonly product_url?: string;
  readonly published_at?: string;
  readonly question_link?: string;
  readonly sku?: number;
  readonly status?: OzonQuestionStatus;
  readonly text?: string;
}
