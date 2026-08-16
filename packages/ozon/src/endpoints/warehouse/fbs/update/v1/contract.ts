import { object, string, type Schema } from "@safe-shape/core";
import type { UpdateFbsWarehouseV1Response } from "./types.js";

export const updateFbsWarehouseV1ResponseSchema: Schema<UpdateFbsWarehouseV1Response> =
  object({ operation_id: string().optional() });
