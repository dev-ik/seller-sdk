import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../operation/shared/contract.js";
import type { UnpauseRfbsWarehouseV1Response } from "./types.js";

export const unpauseRfbsWarehouseV1ResponseSchema: Schema<UnpauseRfbsWarehouseV1Response> =
  warehouseOperationResponseSchema;
