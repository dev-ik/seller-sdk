import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { CreateFbsPackageLabelBatchV3Response } from "./types.js";
export const createFbsPackageLabelBatchV3ResponseSchema: Schema<CreateFbsPackageLabelBatchV3Response> =
  object({
    tasks: array(
      object({
        task_id: integerSchema.optional(),
        task_type: string().optional(),
      }),
    ).optional(),
  });
