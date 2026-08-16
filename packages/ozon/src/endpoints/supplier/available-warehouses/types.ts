export interface OzonSupplierWarehouseCapacity {
  readonly start?: string;
  readonly end?: string;
  readonly value?: number;
}

export interface OzonSupplierAvailableWarehouse {
  readonly schedule?: {
    readonly capacity?: readonly OzonSupplierWarehouseCapacity[];
    readonly date?: string;
  };
  readonly warehouse?: {
    readonly id?: string;
    readonly name?: string;
  };
}

export interface ListSupplierAvailableWarehousesResponse {
  readonly result?: readonly OzonSupplierAvailableWarehouse[];
}
