import { array, object, string, type Schema } from "@safe-shape/core";
import type { CreateCarriageContainersV1Response } from "./types.js";

export const createCarriageContainersV1ResponseSchema: Schema<CreateCarriageContainersV1Response> =
  object({ container_ids: array(string()).optional() });
