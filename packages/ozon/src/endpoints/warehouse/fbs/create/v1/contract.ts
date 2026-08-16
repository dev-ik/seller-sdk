import { object, string, type Schema } from "@safe-shape/core";
import type { CreateFbsWarehouseV1Response } from "./types.js";

export const createFbsWarehouseV1ResponseSchema: Schema<CreateFbsWarehouseV1Response> =
  object({ operation_id: string().optional() });
