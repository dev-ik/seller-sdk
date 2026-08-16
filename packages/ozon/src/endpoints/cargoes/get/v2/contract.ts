import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetCargoesV2Response } from "./types.js";
const trackingType = union([
  literal("UNSPECIFIED"),
  literal("EXPECTED_ARRIVAL"),
  literal("ACTUAL_ARRIVAL"),
]);
const timezone = object({
  iana_name: string().optional(),
  offset: integerSchema.optional(),
});
const cargoArrival = object({
  date: rfc3339DateTimeSchema.optional(),
  timezone_info: timezone.optional(),
});
const transportArrival = object({
  date: rfc3339DateTimeSchema.optional(),
  timezone: timezone.optional(),
});
const cargo = object({
  bundle_id: string().optional(),
  cargo_id: integerSchema.optional(),
  content_type: union([
    literal("UNSPECIFIED"),
    literal("MONO"),
    literal("MIX"),
    literal("NONE"),
  ]).optional(),
  placement_zone_type: union([
    literal("UNSPECIFIED"),
    literal("UNDEFINED"),
    literal("TYPE_SINGLE"),
    literal("MULTI"),
  ]).optional(),
  tracking_info: object({
    arrival_at: cargoArrival.optional(),
    status: union([
      literal("UNSPECIFIED"),
      literal("READY_TO_SUPPLY"),
      literal("REFUSED"),
      literal("ON_WAREHOUSE"),
      literal("NOT_DELIVERED"),
      literal("ACCEPTING"),
      literal("PROCESSED"),
      literal("ON_POINT_SHIPMENT"),
      literal("ON_TRANSIT_WAREHOUSE"),
      literal("LOST"),
      literal("CREATED"),
      literal("DELETED"),
      literal("DECLARED_IN_TRANSPORT_CARGO"),
    ]).optional(),
    type: trackingType.optional(),
  }).optional(),
  transport_cargo_id: integerSchema.optional(),
  type: union([
    literal("UNSPECIFIED"),
    literal("BOX"),
    literal("PALLET"),
  ]).optional(),
});
const transportCargo = object({
  box_count: integerSchema.optional(),
  summary_bundle_id: string().optional(),
  tracking_info: object({
    arrival_at: transportArrival.optional(),
    status: union([
      literal("UNSPECIFIED"),
      literal("READY_TO_SUPPLY"),
      literal("REFUSED"),
      literal("ON_WAREHOUSE"),
      literal("NOT_DELIVERED"),
      literal("ON_POINT_SHIPMENT"),
      literal("ON_TRANSIT_WAREHOUSE"),
      literal("LOST"),
      literal("CREATED"),
      literal("CARGO_DISASSEMBLED"),
    ]).optional(),
    type: trackingType.optional(),
  }).optional(),
  transport_cargo_id: integerSchema.optional(),
  type: union([literal("UNSPECIFIED"), literal("PALLET")]).optional(),
});
export const getCargoesV2ResponseSchema: Schema<GetCargoesV2Response> = object({
  supplies: array(
    object({
      bundle_id: string().optional(),
      cargoes: array(cargo).optional(),
      cargoes_bundle_id: string().optional(),
      limits: object({
        max_box_count: integerSchema.optional(),
        max_box_sku_count: integerSchema.optional(),
        max_pallet_count: integerSchema.optional(),
        max_transport_pallet_count: integerSchema.optional(),
      }).optional(),
      supply_id: integerSchema.optional(),
      transport_cargoes: array(transportCargo).optional(),
    }),
  ).optional(),
});
