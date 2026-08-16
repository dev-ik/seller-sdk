import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { questionSchema } from "../../shared/contract.js";
import type { ListQuestionsV1Response } from "./types.js";

export const listQuestionsV1ResponseSchema: Schema<ListQuestionsV1Response> =
  object({
    has_next: boolean().optional(),
    last_id: string().optional(),
    questions: array(questionSchema).optional(),
  });
