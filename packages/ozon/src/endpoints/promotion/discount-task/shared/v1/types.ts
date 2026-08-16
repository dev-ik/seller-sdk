export interface OzonDiscountTaskFailure {
  readonly task_id?: number;
  readonly error_for_user?: string;
}

export interface OzonDiscountTasksChangeResult {
  readonly fail_details?: readonly OzonDiscountTaskFailure[];
  readonly success_count?: number;
  readonly fail_count?: number;
}

export interface OzonDiscountTasksChangeResponse {
  readonly result?: OzonDiscountTasksChangeResult;
}
