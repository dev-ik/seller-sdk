import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../../operation/shared/contract.js";
import type { CreateErfbsNonIntegratedWarehouseV1Response } from "./types.js";

export const createErfbsNonIntegratedWarehouseV1ResponseSchema: Schema<CreateErfbsNonIntegratedWarehouseV1Response> =
  warehouseOperationResponseSchema;
