import { object, string, type Schema } from "@safe-shape/core";
import type { GetCarriageContainerTaskV1Response } from "./types.js";

export const getCarriageContainerTaskV1ResponseSchema: Schema<GetCarriageContainerTaskV1Response> =
  object({
    error_message: string().optional(),
    status: string().optional(),
  });
