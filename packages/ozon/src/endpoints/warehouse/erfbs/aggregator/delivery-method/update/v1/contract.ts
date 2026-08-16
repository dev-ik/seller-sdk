import type { Schema } from "@safe-shape/core";
import { warehouseOperationResponseSchema } from "../../../../../operation/shared/contract.js";
import type { UpdateErfbsAggregatorDeliveryMethodV1Response } from "./types.js";

export const updateErfbsAggregatorDeliveryMethodV1ResponseSchema: Schema<UpdateErfbsAggregatorDeliveryMethodV1Response> =
  warehouseOperationResponseSchema;
