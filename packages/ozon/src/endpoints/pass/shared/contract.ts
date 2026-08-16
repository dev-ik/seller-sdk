import { array, literal, object, string, type Schema } from "@safe-shape/core";
import type { OzonPassCreationResponse } from "./types.js";

export const passCreationResponseSchema: Schema<OzonPassCreationResponse> =
  object({
    arrival_pass_ids: array(string()).optional(),
  });

export const emptyPassResponseSchema: Schema<null> = literal(null);
