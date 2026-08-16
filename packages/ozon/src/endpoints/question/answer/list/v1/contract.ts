import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type {
  ListQuestionAnswersV1Response,
  OzonQuestionAnswer,
  OzonQuestionAnswerPublicationStatus,
} from "./types.js";

const publicationStatusSchema: Schema<OzonQuestionAnswerPublicationStatus> =
  union([
    literal("PUBLISHED"),
    literal("AWAITING_MODERATION"),
    literal("MODERATION_FAILED"),
    literal("DUPLICATE"),
  ]);

const questionAnswerSchema: Schema<OzonQuestionAnswer> = object({
  author_name: string().optional(),
  id: string().optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  question_id: string().optional(),
  sku: integerSchema.optional(),
  status_publication: publicationStatusSchema.optional(),
  text: string().optional(),
});

export const listQuestionAnswersV1ResponseSchema: Schema<ListQuestionAnswersV1Response> =
  object({
    answers: array(questionAnswerSchema).optional(),
    last_id: string().optional(),
  });
