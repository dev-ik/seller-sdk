export type OzonFboCargoDeleteSupplyError =
  | "UNSPECIFIED"
  | "SUPPLY_NOT_FOUND"
  | "CANT_DELETE_ALL_CARGOES"
  | "SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR"
  | "SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY"
  | "SUPPLY_CARGOES_IS_FINALIZED"
  | "SUPPLY_CARGOES_LOCKED"
  | "OPERATION_NOT_FOUND"
  | "ETTN_IS_UPLOADED"
  | "CANT_DELETE_ALL_TRANSPORT_CARGOES"
  | "UNDEFINED";
export interface OzonCargoDeleteErrors {
  readonly cargo_error_reasons?: readonly {
    readonly cargo_id?: number;
    readonly error_reasons?: readonly ("UNSPECIFIED" | "CARGO_NOT_FOUND")[];
  }[];
  readonly supply_error_reasons?: readonly OzonFboCargoDeleteSupplyError[];
  readonly transport_cargo_error_reasons?: readonly {
    readonly error_reasons?: readonly ("UNSPECIFIED" | "CARGO_NOT_FOUND")[];
    readonly transport_cargo_id?: number;
  }[];
}
export type OzonFboCargoDeleteStatus =
  | "UNSPECIFIED"
  | "SUCCESS"
  | "IN_PROGRESS"
  | "FAILED";
