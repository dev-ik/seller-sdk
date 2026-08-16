export interface OzonFbsCancelReason {
  readonly id?: number;
  readonly title?: string;
  readonly type_id?: string;
}

export interface OzonFbsCancelReasonAvailability extends OzonFbsCancelReason {
  readonly is_available_for_cancellation?: boolean;
}
