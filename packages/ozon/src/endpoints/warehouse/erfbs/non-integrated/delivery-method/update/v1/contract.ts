import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../../../operation/shared/contract.js";
import type { UpdateErfbsNonIntegratedDeliveryMethodV1Response } from "./types.js";

export const updateErfbsNonIntegratedDeliveryMethodV1ResponseSchema: Schema<UpdateErfbsNonIntegratedDeliveryMethodV1Response> =
  warehouseOperationResponseSchema;
