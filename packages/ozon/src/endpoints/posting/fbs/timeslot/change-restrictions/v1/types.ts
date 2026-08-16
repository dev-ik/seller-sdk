export interface GetFbsPostingTimeslotChangeRestrictionsRequest {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface OzonFbsPostingDeliveryInterval {
  readonly begin?: string;
  readonly end?: string;
}

export interface GetFbsPostingTimeslotChangeRestrictionsResponse {
  readonly delivery_interval?: OzonFbsPostingDeliveryInterval;
  readonly remaining_changes_count?: number;
}
