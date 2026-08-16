import { object, string, type Schema } from "@safe-shape/core";
import type { ShipFbsPostingPackageV4Response } from "./types.js";

export const shipFbsPostingPackageV4ResponseSchema: Schema<ShipFbsPostingPackageV4Response> =
  object({ result: string().optional() });
