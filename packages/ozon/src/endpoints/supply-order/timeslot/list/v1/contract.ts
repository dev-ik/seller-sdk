import { array, object, type Schema } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { supplyOrderTimezoneSchema } from "../../../shared/contract.js";
import type { ListSupplyOrderTimeslotsV1Response } from "./types.js";

export const listSupplyOrderTimeslotsV1ResponseSchema: Schema<ListSupplyOrderTimeslotsV1Response> =
  object({
    timeslots: array(
      object({ from: rfc3339DateTimeSchema, to: rfc3339DateTimeSchema }),
    ).optional(),
    timezone: array(supplyOrderTimezoneSchema).optional(),
  });
