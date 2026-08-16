import { array, object, string, type Schema } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../../../../contracts/rfc3339-date-time.js";
import type { GetUtilizationHistoryV1Response } from "./types.js";
export const getUtilizationHistoryV1ResponseSchema: Schema<GetUtilizationHistoryV1Response> =
  object({
    history: array(
      object({
        descriptions: array(string()).optional(),
        updated_at: rfc3339DateTimeSchema.optional(),
        user_name: string().optional(),
      }),
    ).optional(),
  });
