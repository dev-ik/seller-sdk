import { array, literal, object, union } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
const cargoReason = union([literal("UNSPECIFIED"), literal("CARGO_NOT_FOUND")]);
const supplyReason = union([
  literal("UNSPECIFIED"),
  literal("SUPPLY_NOT_FOUND"),
  literal("CANT_DELETE_ALL_CARGOES"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY"),
  literal("SUPPLY_CARGOES_IS_FINALIZED"),
  literal("SUPPLY_CARGOES_LOCKED"),
  literal("OPERATION_NOT_FOUND"),
  literal("ETTN_IS_UPLOADED"),
  literal("CANT_DELETE_ALL_TRANSPORT_CARGOES"),
  literal("UNDEFINED"),
]);
export const cargoDeleteErrorsSchema = object({
  cargo_error_reasons: array(
    object({
      cargo_id: integerSchema.optional(),
      error_reasons: array(cargoReason).optional(),
    }),
  ).optional(),
  supply_error_reasons: array(supplyReason).optional(),
  transport_cargo_error_reasons: array(
    object({
      error_reasons: array(cargoReason).optional(),
      transport_cargo_id: integerSchema.optional(),
    }),
  ).optional(),
});
export const cargoDeleteStatusSchema = union([
  literal("UNSPECIFIED"),
  literal("SUCCESS"),
  literal("IN_PROGRESS"),
  literal("FAILED"),
]);
