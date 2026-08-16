import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import type { GetFbsCarriageEttnStatusResponse } from "./types.js";
export const getFbsCarriageEttnStatusResponseSchema: Schema<GetFbsCarriageEttnStatusResponse> =
  object({
    errors: array(string()).optional(),
    status: union([
      literal("NOT_UPLOADED"),
      literal("PROCESSING"),
      literal("SUCCESS"),
      literal("FAILED"),
    ]).optional(),
  });
