export interface ListFbpWarehousesV1Response {
  readonly warehouses?: readonly {
    readonly address_detailing?: {
      readonly city?: string;
      readonly country?: string;
      readonly house?: string;
      readonly region?: string;
      readonly street?: string;
      readonly zipcode?: string;
    };
    readonly id?: number;
    readonly is_bonded?: boolean;
    readonly name?: string;
    readonly partner_name?: string;
    readonly supply_types?: readonly number[];
    readonly timezone_name?: string;
  }[];
}
