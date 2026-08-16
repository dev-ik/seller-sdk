import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import {
  supplyOrderStateSchema,
  supplyOrderTimeslotSchema,
} from "../../shared/contract.js";
import type { GetSupplyOrdersV3Response } from "./types.js";

const warehouseSchema = object({
  address: string().optional(),
  name: string().optional(),
  warehouse_id: integerSchema.optional(),
});
const orderTagsSchema = object({
  is_econom: boolean().optional(),
  is_pickup: boolean().optional(),
  is_quant: boolean().optional(),
  is_super_fbo: boolean().optional(),
  is_virtual: boolean().optional(),
  product_super_fbo: boolean().optional(),
  original_supply_id: integerSchema.optional(),
  seller_warehouse_id: integerSchema.optional(),
});
const supplyTagsSchema = object({
  freeze_stock_for_marking: boolean().optional(),
  is_ettn_required: boolean().optional(),
  is_evsd_required: boolean().optional(),
  is_jewelry: boolean().optional(),
  is_marking_possible: boolean().optional(),
  is_marking_required: boolean().optional(),
  is_utd: boolean().optional(),
});
const storageWarehouseSchema = object({
  address: string().optional(),
  arrival_date: rfc3339DateTimeSchema.optional(),
  name: string().optional(),
  warehouse_id: integerSchema.optional(),
});
const supplySchema = object({
  is_crossdock: boolean().optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  bundle_id: string().optional(),
  state: supplyOrderStateSchema.optional(),
  storage_warehouse: storageWarehouseSchema.optional(),
  supply_id: integerSchema.optional(),
  supply_tags: supplyTagsSchema.optional(),
});
const timeslotInfoSchema = object({
  timeslot: supplyOrderTimeslotSchema.optional(),
  timezone_info: object({
    iana_name: string().optional(),
    offset: string().optional(),
  }).optional(),
});

export const getSupplyOrdersV3ResponseSchema: Schema<GetSupplyOrdersV3Response> =
  object({
    orders: array(
      object({
        created_date: rfc3339DateTimeSchema.optional(),
        data_filling_deadline_utc: rfc3339DateTimeSchema.optional(),
        dropoff_warehouse: warehouseSchema.optional(),
        order_id: integerSchema.optional(),
        order_number: string().optional(),
        order_tags: orderTagsSchema.optional(),
        state: supplyOrderStateSchema.optional(),
        state_updated_date: rfc3339DateTimeSchema.optional(),
        supplies: array(supplySchema).optional(),
        timeslot: timeslotInfoSchema.optional(),
      }),
    ).optional(),
  });
