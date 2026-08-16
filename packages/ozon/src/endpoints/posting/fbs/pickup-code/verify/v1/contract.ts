import { boolean, object, type Schema } from "@safe-shape/core";
import type { VerifyFbsPickupCodeV1Response } from "./types.js";
export const verifyFbsPickupCodeV1ResponseSchema: Schema<VerifyFbsPickupCodeV1Response> =
  object({ valid: boolean().optional() });
