import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../../../contracts/rfc3339-date-time.js";
import type {
  ListFbsPickupHistoryV1Response,
  OzonFbsPickupHistoryEntry,
} from "./types.js";

const historyEntrySchema: Schema<OzonFbsPickupHistoryEntry> = object({
  planned_date: string().optional(),
  status: string().optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
  was_planned: boolean().optional(),
});

export const listFbsPickupHistoryV1ResponseSchema: Schema<ListFbsPickupHistoryV1Response> =
  object({
    result: object({
      cursor: string().optional(),
      history: array(historyEntrySchema).optional(),
    }).optional(),
  });
