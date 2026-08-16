export type OzonSupplyOrderStatusCounterState =
  | "ORDER_STATE_UNSPECIFIED"
  | "ORDER_STATE_DATA_FILLING"
  | "ORDER_STATE_READY_TO_SUPPLY"
  | "ORDER_STATE_ACCEPTED_AT_SUPPLY_WAREHOUSE"
  | "ORDER_STATE_IN_TRANSIT"
  | "ORDER_STATE_ACCEPTANCE_AT_STORAGE_WAREHOUSE"
  | "ORDER_STATE_REPORTS_CONFIRMATION_AWAITING"
  | "ORDER_STATE_REPORT_REJECTED"
  | "ORDER_STATE_COMPLETED"
  | "ORDER_STATE_REJECTED_AT_SUPPLY_WAREHOUSE"
  | "ORDER_STATE_CANCELLED";

export interface OzonSupplyOrderStatusCounterItem {
  readonly count?: number;
  readonly order_state?: OzonSupplyOrderStatusCounterState;
}

export interface CountSupplyOrdersByStatusResponse {
  readonly items?: readonly OzonSupplyOrderStatusCounterItem[];
}
