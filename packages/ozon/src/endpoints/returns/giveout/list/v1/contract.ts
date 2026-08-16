import { array, object, type Schema } from "@safe-shape/core";
import { giveoutSchema } from "../../shared/contract.js";
import type { ListGiveoutsV1Response } from "./types.js";
export const listGiveoutsV1ResponseSchema: Schema<ListGiveoutsV1Response> =
  object({ giveouts: array(giveoutSchema).optional() });
