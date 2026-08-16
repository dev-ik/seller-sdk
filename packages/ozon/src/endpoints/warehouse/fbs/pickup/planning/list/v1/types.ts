export interface OzonFbsPickupPlanningWarehouse {
  readonly can_modify_pickup_plan?: boolean;
  readonly has_postings_to_be_planned?: boolean;
  readonly is_pickup_planned?: boolean;
  readonly last_pickup_plan_date_at?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}

export interface ListFbsPickupPlanningV1Response {
  readonly result?: {
    readonly warehouses?: readonly OzonFbsPickupPlanningWarehouse[];
  };
}
