import { array, object, string, type Schema } from "@safe-shape/core";
import type { GetQuestionTopSkusV1Response } from "./types.js";

export const getQuestionTopSkusV1ResponseSchema: Schema<GetQuestionTopSkusV1Response> =
  object({ sku: array(string()).optional() });
