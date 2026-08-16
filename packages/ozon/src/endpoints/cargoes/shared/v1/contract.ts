import { array, literal, object, string, union } from "@safe-shape/core";
export const cargoTransportStatusSchema = union([
  literal("SUCCESS"),
  literal("IN_PROGRESS"),
  literal("FAILED"),
]);
export const cargoTransportActivateErrorSchema = union([
  literal("OPERATION_NOT_FOUND"),
  literal("SUPPLY_IS_FINALIZED"),
  literal("CAN_NOT_EDIT_TAG"),
  literal("UNDEFINED"),
]);
export const cargoTransportCreateErrorSchema = union([
  literal("SUPPLY_NOT_FOUND"),
  literal("WAREHOUSE_LIMITS_EXCEED"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY"),
  literal("PALLET_SUPPLY_CONTAINS_BOXES"),
  literal("SUPPLY_CARGOES_IS_FINALIZED"),
  literal("SUPPLY_CARGOES_LOCKED"),
  literal("OPERATION_NOT_FOUND"),
  literal("ETTN_IS_UPLOADED"),
  literal("BOX_SUPPLY_CONTAINS_PALLETS"),
  literal("UNDEFINED"),
]);
export const cargoTransportBindErrorSchema = union([
  literal("OPERATION_NOT_FOUND"),
  literal("OPERATION_FAILED"),
  literal("SUPPLY_NOT_FOUND"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_COMPANY"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR"),
  literal("TRANSPORT_CARGOES_NOT_ENABLED_FOR_SUPPLY"),
  literal("INVALID_SUPPLY_STATE"),
  literal("SUPPLY_IS_FINALIZED"),
  literal("CARGO_IDS_NOT_FOUND"),
  literal("TRANSPORT_CARGO_IDS_NOT_FOUND"),
  literal("ETTN_IS_UPLOADED"),
]);
export const cargoOperationResponseSchema = object({
  operation_id: string().optional(),
});
export const cargoActivateStatusResponseSchema = object({
  error_reasons: array(cargoTransportActivateErrorSchema).optional(),
  status: cargoTransportStatusSchema.optional(),
});
export const cargoBindStatusResponseSchema = object({
  error_reasons: array(cargoTransportBindErrorSchema).optional(),
  status: cargoTransportStatusSchema.optional(),
});
