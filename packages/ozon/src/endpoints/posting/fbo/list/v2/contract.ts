import { array, object, type Schema } from "@safe-shape/core";
import { fboPostingV2Schema } from "../../shared/contract.js";
import type { ListFboPostingsV2Response } from "./types.js";
export const listFboPostingsV2ResponseSchema: Schema<ListFboPostingsV2Response> =
  object({ result: array(fboPostingV2Schema).optional() });
