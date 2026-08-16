import { object, string, type Schema } from "@safe-shape/core";
import type { UpdateFbsWarehouseFirstMileV1Response } from "./types.js";

export const updateFbsWarehouseFirstMileV1ResponseSchema: Schema<UpdateFbsWarehouseFirstMileV1Response> =
  object({ operation_id: string().optional() });
