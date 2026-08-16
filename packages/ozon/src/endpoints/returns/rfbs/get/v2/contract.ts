import { object, type Schema } from "@safe-shape/core";
import { rfbsReturnDetailsV2Schema } from "../../shared/contract.js";
import type { GetRfbsReturnV2Response } from "./types.js";
export const getRfbsReturnV2ResponseSchema: Schema<GetRfbsReturnV2Response> =
  object({ returns: rfbsReturnDetailsV2Schema.optional() });
