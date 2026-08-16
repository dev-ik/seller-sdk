import { object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { GetFbsDigitalActStatusResponse } from "./types.js";
export const getFbsDigitalActStatusResponseSchema: Schema<GetFbsDigitalActStatusResponse> =
  object({ id: integerSchema.optional(), status: string().optional() });
