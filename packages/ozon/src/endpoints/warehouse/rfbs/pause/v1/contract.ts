import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../operation/shared/contract.js";
import type { PauseRfbsWarehouseV1Response } from "./types.js";

export const pauseRfbsWarehouseV1ResponseSchema: Schema<PauseRfbsWarehouseV1Response> =
  warehouseOperationResponseSchema;
