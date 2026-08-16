import { boolean, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";

export const reviewCommentV1Schema = object({
  deviation_reason: string().optional(),
  dislikes_amount: integerSchema.optional(),
  id: string().optional(),
  is_official: boolean().optional(),
  is_owner: boolean().optional(),
  is_published: boolean().optional(),
  is_rejected: boolean().optional(),
  likes_amount: integerSchema.optional(),
  parent_comment_id: string().optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  text: string().optional(),
});
