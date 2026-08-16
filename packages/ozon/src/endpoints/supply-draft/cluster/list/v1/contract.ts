import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ListSupplyClustersV1Response } from "./types.js";
const clusterType = union([
  literal("CLUSTER_TYPE_OZON"),
  literal("CLUSTER_TYPE_CIS"),
]);
const warehouseType = union([
  literal("FULL_FILLMENT"),
  literal("EXPRESS_DARK_STORE"),
  literal("SORTING_CENTER"),
  literal("ORDERS_RECEIVING_POINT"),
  literal("CROSS_DOCK"),
  literal("DISTRIBUTION_CENTER"),
]);
const warehouse = object({
  name: string().optional(),
  type: warehouseType.optional(),
  warehouse_id: integerSchema.optional(),
});
const logisticCluster = object({ warehouses: array(warehouse).optional() });
const cluster = object({
  id: integerSchema.optional(),
  logistic_clusters: array(logisticCluster).optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  name: string().optional(),
  type: clusterType.optional(),
});
export const listSupplyClustersV1ResponseSchema: Schema<ListSupplyClustersV1Response> =
  object({ clusters: array(cluster).optional() });
