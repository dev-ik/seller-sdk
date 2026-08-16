import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../operation/shared/contract.js";
import type { UpdateErfbsWarehouseV1Response } from "./types.js";

export const updateErfbsWarehouseV1ResponseSchema: Schema<UpdateErfbsWarehouseV1Response> =
  warehouseOperationResponseSchema;
