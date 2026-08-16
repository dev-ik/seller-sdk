import { boolean, object, type Schema } from "@safe-shape/core";
import type { IsGiveoutEnabledV1Response } from "./types.js";
export const isGiveoutEnabledV1ResponseSchema: Schema<IsGiveoutEnabledV1Response> =
  object({ enabled: boolean().optional() });
