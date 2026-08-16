import { object, string, type Schema } from "@safe-shape/core";
import type { CreateQuestionAnswerV1Response } from "./types.js";

export const createQuestionAnswerV1ResponseSchema: Schema<CreateQuestionAnswerV1Response> =
  object({ answer_id: string().optional() });
