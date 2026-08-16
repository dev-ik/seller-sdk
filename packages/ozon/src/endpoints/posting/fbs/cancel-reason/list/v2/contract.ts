import { array, object, type Schema } from "@safe-shape/core";
import { fbsCancelReasonAvailabilitySchema } from "../../shared/contract.js";
import type { ListFbsPostingCancelReasonsV2Response } from "./types.js";
export const listFbsPostingCancelReasonsV2ResponseSchema: Schema<ListFbsPostingCancelReasonsV2Response> =
  object({ result: array(fbsCancelReasonAvailabilitySchema).optional() });
