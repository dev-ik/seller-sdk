import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { CreateFbsPackageLabelBatchV2Response } from "./types.js";
export const createFbsPackageLabelBatchV2ResponseSchema: Schema<CreateFbsPackageLabelBatchV2Response> =
  object({
    result: object({
      tasks: array(
        object({
          task_id: integerSchema.optional(),
          task_type: string().optional(),
        }),
      ).optional(),
    }).optional(),
  });
