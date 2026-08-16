import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import type { CheckFbsWarehouseReturnMileV1Response } from "./types.js";

export const checkFbsWarehouseReturnMileV1ResponseSchema: Schema<CheckFbsWarehouseReturnMileV1Response> =
  object({
    should_set_return_mile: boolean().optional(),
    unavailability_reasons: array(string()).optional(),
  });
