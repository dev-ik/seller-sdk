import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../../operation/shared/contract.js";
import type { CreateErfbsAggregatorWarehouseV1Response } from "./types.js";

export const createErfbsAggregatorWarehouseV1ResponseSchema: Schema<CreateErfbsAggregatorWarehouseV1Response> =
  warehouseOperationResponseSchema;
