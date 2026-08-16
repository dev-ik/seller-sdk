import { object, type Schema } from "@safe-shape/core";
import { rfbsReturnListItemV2Schema } from "../../shared/contract.js";
import type { ListRfbsReturnsV2Response } from "./types.js";
export const listRfbsReturnsV2ResponseSchema: Schema<ListRfbsReturnsV2Response> =
  object({ returns: rfbsReturnListItemV2Schema.optional() });
