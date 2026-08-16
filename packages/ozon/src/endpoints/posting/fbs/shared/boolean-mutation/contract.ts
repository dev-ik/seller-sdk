import { boolean, object, type Schema } from "@safe-shape/core";
import type { OzonFbsBooleanMutationResponse } from "./types.js";

export const fbsBooleanMutationResponseSchema: Schema<OzonFbsBooleanMutationResponse> =
  object({ result: boolean().optional() });
