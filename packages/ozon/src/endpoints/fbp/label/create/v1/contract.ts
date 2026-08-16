import { object, string, type Schema } from "@safe-shape/core";
import type { CreateFbpLabelsV1Response } from "./types.js";

export const createFbpLabelsV1ResponseSchema: Schema<CreateFbpLabelsV1Response> =
  object({ code: string().optional() });
