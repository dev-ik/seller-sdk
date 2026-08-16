import { object, type Schema } from "@safe-shape/core";
import { fboPostingV2Schema } from "../../shared/contract.js";
import type { GetFboPostingV2Response } from "./types.js";
export const getFboPostingV2ResponseSchema: Schema<GetFboPostingV2Response> =
  object({ result: fboPostingV2Schema.optional() });
