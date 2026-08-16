import { object, string, union, literal, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { OzonQuestion, OzonQuestionStatus } from "./types.js";

export const questionStatusSchema: Schema<OzonQuestionStatus> = union([
  literal("NEW"),
  literal("ALL"),
  literal("VIEWED"),
  literal("PROCESSED"),
  literal("UNPROCESSED"),
]);

export const questionSchema: Schema<OzonQuestion> = object({
  answers_count: integerSchema.optional(),
  author_name: string().optional(),
  id: string().optional(),
  product_url: string().optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  question_link: string().optional(),
  sku: integerSchema.optional(),
  status: questionStatusSchema.optional(),
  text: string().optional(),
});
