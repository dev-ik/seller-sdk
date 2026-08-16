import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { CreateFbsPackageLabelBatchV1Response } from "./types.js";
export const createFbsPackageLabelBatchV1ResponseSchema: Schema<CreateFbsPackageLabelBatchV1Response> =
  object({ result: object({ task_id: integerSchema.optional() }).optional() });
