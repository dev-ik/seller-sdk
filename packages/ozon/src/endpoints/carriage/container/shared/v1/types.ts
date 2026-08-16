export interface OzonCarriageContainerError {
  readonly container_id?: number;
  readonly error_message?: string;
}

export interface OzonCarriagePostingError {
  readonly error_message?: string;
  readonly posting_number?: string;
}

export interface OzonCarriageContainerTaskResponse {
  readonly error_containers?: readonly OzonCarriageContainerError[];
  readonly task_id?: number;
}

export interface OzonCarriagePostingTaskResponse {
  readonly error_postings?: readonly OzonCarriagePostingError[];
  readonly task_id?: number;
}

export interface OzonCarriageContainerSummary {
  readonly available_actions?: readonly string[];
  readonly cargo_type?: string;
  readonly container_id?: number;
  readonly container_number?: number;
  readonly count_of_postings?: number;
  readonly created_at?: string;
  readonly sort_type?: string;
  readonly status?: string;
  readonly warehouse_date?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
  readonly weight?: number;
}

export interface OzonCarriageContainerDetails
  extends OzonCarriageContainerSummary {
  readonly parent_container_id?: number;
  readonly postings?: readonly {
    readonly available_actions?: readonly string[];
    readonly in_process_at?: string;
    readonly posting_number?: string;
    readonly products?: readonly {
      readonly sku?: number;
      readonly name?: string;
      readonly offer_id?: string;
      readonly quantity?: number;
      readonly picture_url?: string;
      readonly product_color?: string;
      readonly product_size_manufacturer?: string;
      readonly product_size_russian?: string;
    }[];
    readonly sort_type?: string;
    readonly weight?: number;
  }[];
  readonly related_container_ids?: readonly string[];
}
